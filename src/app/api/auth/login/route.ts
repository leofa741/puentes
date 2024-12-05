import { NextResponse } from 'next/server';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import clientPromise from '@/lib/mongodb';

const JWT_SECRET = process.env.JWT_SECRET || 'your_jwt_secret';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password } = body;

    const client = await clientPromise;
    const db = client.db();

    const user = await db.collection('users').findOne({ email });
    if (!user) {
      return NextResponse.json({ message: 'Correo o contraseña incorrectos' }, { status: 400 });
    }

    const isPasswordCorrect = await bcrypt.compare(password, user.password);
    if (!isPasswordCorrect) {
      return NextResponse.json({ message: 'Correo o contraseña incorrectos' }, { status: 400 });
    }

    const token = jwt.sign({ userId: user._id, email: user.email }, JWT_SECRET, { expiresIn: '1d' });

    return NextResponse.json({ message: 'Login exitoso', token });
  } catch (error) {
    console.error('Error en el login:', error);
    return NextResponse.json({ message: 'Error en el login' }, { status: 500 });
  }
}
