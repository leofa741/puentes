import { NextResponse } from 'next/server';
import { google } from 'googleapis';
import clientPromise from '@/lib/mongodb';

const CLIENT_ID = process.env.GOOGLE_CLIENT_ID!;
const CLIENT_SECRET = process.env.GOOGLE_CLIENT_SECRET!;
const REDIRECT_URI = process.env.GOOGLE_REDIRECT_URI!;

export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const code = url.searchParams.get('code'); // Extrae el parámetro `code`

    if (!code) {
      return NextResponse.json(
        { message: 'Código de autorización no encontrado' },
        { status: 400 }
      );
    }

    // Configura el cliente OAuth2 de Google
    const auth = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);

    // Intercambia el código por tokens
    const { tokens } = await auth.getToken(code);

    auth.setCredentials(tokens);

    // Obtén información del usuario
    const oauth2 = google.oauth2({ auth, version: 'v2' });
    const userInfo = await oauth2.userinfo.get();

    // Guarda o actualiza el usuario en tu base de datos
    const client = await clientPromise;
    const db = client.db();
    await db.collection('users').updateOne(
      { email: userInfo.data.email },
      { $set: { profile: userInfo.data, updatedAt: new Date() } },
      { upsert: true }
    );

    // Configura el token JWT como cookie
    const response = NextResponse.redirect('/'); // Redirige al home
    response.headers.set(
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
