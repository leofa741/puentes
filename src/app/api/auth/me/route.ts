import { NextResponse } from 'next/server';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt';

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

    // Verifica el token
    const decoded = jwt.verify(token, JWT_SECRET) as {
      id: string;
      email: string;
      roles: string[];
    };

    const client = await clientPromise;
    const db = client.db();

    // Busca el usuario en la base de datos
    const user = await db.collection('users').findOne({ email: decoded.email });

    if (!user) {
      return NextResponse.json(
        { message: 'Usuario no encontrado' },
        { status: 404 }
      );
    }

    // Devuelve los datos del usuario
    return NextResponse.json({
      name: user.profile?.name || '',
      avatar: user.profile?.picture || '',
      roles: user.roles || [],
      email: user.email || '',
    });
  } catch (error) {
    console.error('Error en /api/auth/me:', error);
    return NextResponse.json(
      { message: 'No autenticado' },
      { status: 401 }
    );
  }
}
