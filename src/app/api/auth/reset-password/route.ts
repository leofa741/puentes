import clientPromise from '@/lib/mongodb';
import bcrypt from 'bcrypt';
import { NextResponse } from 'next/server';

export async function POST(req: Request): Promise<NextResponse> {
  try {
    const { token, newPassword } = await req.json();

    if (!token || !newPassword) {
      return NextResponse.json({ message: 'Token y nueva contraseña son obligatorios.' }, { status: 400 });
    }

    // Conectar a la base de datos
    const client = await clientPromise;
    const db = client.db();

    // Buscar el token directamente en la base de datos (sin hashear)
    const passwordReset = await db.collection('passwordResets').findOne({ resetToken: token });

    if (!passwordReset) {
      return NextResponse.json({ message: 'Token inválido o expirado.' }, { status: 400 });
    }

    // Verificar si el token ha expirado
    if (new Date(passwordReset.expiresAt) < new Date()) {
      return NextResponse.json({ message: 'El token ha expirado.' }, { status: 400 });
    }

    // Hashear la nueva contraseña
    const hashedPassword = await bcrypt.hash(newPassword, 10);

    // Actualizar la contraseña del usuario
    await db.collection('users').updateOne(
      { _id: passwordReset.userId },
      { $set: { password: hashedPassword } }
    );

    // Eliminar el token de la base de datos
    await db.collection('passwordResets').deleteOne({ resetToken: token });

    return NextResponse.json({ message: 'Contraseña actualizada exitosamente.' });
  } catch (error) {
    console.error('Error al restablecer la contraseña:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}
