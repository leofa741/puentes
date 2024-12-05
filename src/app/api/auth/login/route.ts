import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import { SignJWT } from 'jose';
import clientPromise from '@/lib/mongodb';
import { serialize } from 'cookie';

const JWT_SECRET = process.env.JWT_SECRET || 'tu_secreto_jwt';

async function generateToken(user: { id: string; email: string; roles: string[] }) {
  const secret = new TextEncoder().encode(JWT_SECRET);
  return await new SignJWT({ id: user.id, email: user.email, roles: user.roles })
    .setProtectedHeader({ alg: 'HS256' })
    .setIssuedAt()
    .setExpirationTime('1d') // Expira en 1 día
    .sign(secret);
}

export async function POST(req: Request) {
  try {
    const { email, password } = await req.json();

    if (!email || !password) {
      return NextResponse.json(
        { message: 'Correo y contraseña son requeridos' },
        { status: 400 }
      );
    }

    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json(
        { message: 'Correo o contraseña incorrectos' },
        { status: 401 }
      );
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json(
        { message: 'Correo o contraseña incorrectos' },
        { status: 401 }
      );
    }

    // Genera un token JWT usando `jose`
    const token = await generateToken({
      id: user._id.toString(),
      email: user.email,
      roles: user.roles || ['user'],
    });

    // Serializa el token en una cookie
    const cookie = serialize('token', token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === 'production',
      sameSite: 'strict',
      path: '/',
      maxAge: 60 * 60 * 24, // 1 día en segundos
    });

    const response = NextResponse.json({
      message: 'Login exitoso',
      user: {
        name: user.profile?.name || '',
        avatar: user.profile?.avatar || '',
      },
    });

    // Agrega la cookie a la respuesta
    response.headers.set('Set-Cookie', cookie);

    return response;
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json(
      { message: 'Error en el login' },
      { status: 500 }
    );
  }
}
