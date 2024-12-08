import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';
import { jwtVerify, createRemoteJWKSet } from 'jose';
import jwt from 'jsonwebtoken';

const GOOGLE_PUBLIC_KEYS_URL = 'https://www.googleapis.com/oauth2/v3/certs';
const JWKS = createRemoteJWKSet(new URL(GOOGLE_PUBLIC_KEYS_URL));
const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt'; // Clave secreta para HS256

function isValidObjectId(id: string): boolean {
  return /^[a-fA-F0-9]{24}$/.test(id);
}

export async function GET(req: Request) {
  try {
    const cookies = req.headers.get('cookie');
    if (!cookies) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      );
    }

    // Extrae el token de las cookies
    const token = cookies
      .split(';')
      .find((c) => c.trim().startsWith('token='))
      ?.split('=')[1];

    if (!token) {
      return NextResponse.json(
        { message: 'No autenticado' },
        { status: 401 }
      );
    }

    // Decodifica el token para determinar el algoritmo utilizado
    const decodedHeader = jwt.decode(token, { complete: true })?.header;
    if (!decodedHeader || !decodedHeader.alg) {
      return NextResponse.json(
        { message: 'Token inválido' },
        { status: 400 }
      );
    }

    let payload: any;

    if (decodedHeader.alg === 'RS256') {
      // Verifica el token usando las claves públicas de Google
      const result = await jwtVerify(token, JWKS, { algorithms: ['RS256'] });
      payload = result.payload;
    } else if (decodedHeader.alg === 'HS256') {
      // Verifica el token usando la clave secreta
      payload = jwt.verify(token, JWT_SECRET, { algorithms: ['HS256'] });
    } else {
      return NextResponse.json(
        { message: 'Algoritmo no soportado' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    // Construye la consulta condicionalmente
    const query: any = {};
    if (payload.sub && isValidObjectId(payload.sub)) {
      query._id = new ObjectId(payload.sub); // Si el ID es válido, agrégalo a la consulta
    }
    if (payload.email) {
      query.email = payload.email; // También busca por correo si está disponible
    }

    if (Object.keys(query).length === 0) {
      return NextResponse.json(
        { message: 'Datos insuficientes para identificar al usuario' },
        { status: 400 }
      );
    }

    // Busca el usuario en la base de datos
    const user = await db.collection('users').findOne(query);

    if (!user) {
      return NextResponse.json(
        { message: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // console.log('Usuario autenticado:', user.email);
    // console.log('Roles:', user.roles);

    // Devuelve los datos del usuario
    return NextResponse.json({
      name: user.name || payload.name || '',
      avatar: user.avatar || payload.picture || '',
      email: user.email || payload.email || '',
      roles: user.roles || [],
    });
  } catch (error) {
    console.error('Error en /api/auth/me:', error);
    return NextResponse.json(
      { message: 'No autenticado' },
      { status: 401 }
    );
  }
}
