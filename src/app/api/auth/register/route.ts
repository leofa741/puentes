import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { hash } from 'bcrypt';

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { email, password, profile } = body;

    if (!email || !password) {
      return NextResponse.json({ message: 'Email y contraseña son requeridos' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Verificar si el correo ya existe
    const existingUser = await db.collection('users').findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { message: 'El correo electrónico ya está registrado' },
        { status: 400 }
      );
    }

    // Hashear la contraseña
    const hashedPassword = await hash(password, 10);

    // Crear el nuevo usuario
    const newUser = {
      email,
      password: hashedPassword,
      profile: {
        name: profile?.name || '',
        avatar: profile?.avatar || '',
      },
      roles: ['user'],
      createdAt: new Date(),
      updatedAt: new Date(),
    };

    const result = await db.collection('users').insertOne(newUser);

    return NextResponse.json({
      message: 'Usuario registrado exitosamente',
      userId: result.insertedId,
    });
  } catch (error) {
    console.error('Error en el registro:', error);
    return NextResponse.json({ message: 'Error en el registro' }, { status: 500 });
  }
}
