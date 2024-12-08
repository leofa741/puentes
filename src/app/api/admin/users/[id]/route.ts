// ruta para eliminar un usuario de la base de datos de MongoDB a través de la API de Next.js
// Path: src/app/api/admin/users/[id]/route.ts

import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

export async function DELETE(req: Request, { params }: { params: { id: string } }) {
  try {
    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('users').deleteOne({ _id: new ObjectId(params.id) });

    if (result.deletedCount === 1) {
      return NextResponse.json({ message: 'Usuario eliminado exitosamente' });
    } else {
      return NextResponse.json({ message: 'Usuario no encontrado' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error al eliminar el usuario:', error);
    return NextResponse.json({ message: 'Error al eliminar el usuario' }, { status: 500 });
  }
}

// Manejo de PATCH: Actualizar roles de un usuario
export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { roles } = await req.json();
    const client = await clientPromise;
    const db = client.db();

    const result = await db
      .collection('users')
      .updateOne({ _id: new ObjectId(params.id) }, { $set: { roles } });

    if (result.modifiedCount === 1) {
      return NextResponse.json({ message: 'Rol actualizado exitosamente', roles });
    } else {
      return NextResponse.json({ message: 'Usuario no encontrado o rol no cambiado' }, { status: 404 });
    }
  } catch (error) {
    console.error('Error al actualizar el rol:', error);
    return NextResponse.json({ message: 'Error al actualizar el rol' }, { status: 500 });
  }
}
