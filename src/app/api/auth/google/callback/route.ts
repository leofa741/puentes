import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import clientPromise from '@/lib/mongodb';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI!;
const FRONTEND_URL = process.env.URL_FRONTEND || 'http://localhost:3000';

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code');

    if (!code) {
      return NextResponse.json(
        { message: 'Código de autorización no encontrado' },
        { status: 400 }
      );
    }

    const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);


    const { tokens } = await auth.getToken(code);
    auth.setCredentials(tokens);

    const oauth2 = google.oauth2({ auth, version: 'v2' });
    const userInfo = await oauth2.userinfo.get();



    const client = await clientPromise;
    const db = client.db();

    // Busca al usuario existente en la base de datos
    const existingUser = await db.collection('users').findOne({ email: userInfo.data.email });
    
    // Construye los cambios
    const updates: { profile: any; updatedAt: Date; roles?: string[] } = {
      profile: userInfo.data, // Actualiza el perfil
      updatedAt: new Date(), // Marca la última actualización
    };
    
    // Solo asigna el rol 'user' si el usuario no tiene roles asignados
    if (!existingUser?.roles || existingUser.roles.length === 0) {
      updates.roles = ['user']; // Si no hay roles, asigna el rol predeterminado
    }
    
    // Actualiza o inserta el usuario
    await db.collection('users').updateOne(
      { email: userInfo.data.email },
      { $set: updates },
      { upsert: true }
    );
    
    const absoluteRedirectURL = new URL('/', FRONTEND_URL);
    const response = NextResponse.redirect(absoluteRedirectURL);

    response.headers.append(
      'Set-Cookie',
      `token=${tokens.id_token}; Path=/; HttpOnly; Secure; SameSite=Strict`
    );

    return response;
  } catch (error) {
    console.error('Error en el callback de Google:', error);
    return NextResponse.json(
      { message: 'Error en el callback de Google' },
      { status: 500 }
    );
  }
}
