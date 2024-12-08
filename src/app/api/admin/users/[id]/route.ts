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

export async function PATCH(req: Request, { params }: { params: { id: string } }) {
  try {
    const { roles } = await req.json();
    const client = await clientPromise;
    const db = client.db();

    // Verifica si el documento tiene el formato esperado
    const result = await db.collection('users').updateOne(
      { _id: new ObjectId(params.id) }, // Busca por ID del usuario
      {
        $set: {
          roles: roles, // Actualiza roles
          updatedAt: new Date(), // Actualiza la marca de tiempo
        },
      }
    );

    if (result.matchedCount === 0) {
      // Si no coincide, verifica si es un usuario de Google
      const googleResult = await db.collection('users').updateOne(
        { 'profile.id': params.id }, // Busca por ID de Google en el campo anidado
        {
          $set: {
            roles: roles, // Actualiza roles
            updatedAt: new Date(), // Actualiza la marca de tiempo
          },
        }
      );

      if (googleResult.matchedCount === 0) {
        return NextResponse.json(
          { message: 'Usuario no encontrado' },
          { status: 404 }
        );
      }

      return NextResponse.json({
        message: 'Rol actualizado exitosamente',
        roles,
      });
    }

    return NextResponse.json({
      message: 'Rol actualizado exitosamente',
      roles,
    });
  } catch (error) {
    console.error('Error al actualizar el rol:', error);
    return NextResponse.json({ message: 'Error al actualizar el rol' }, { status: 500 });
  }
}
