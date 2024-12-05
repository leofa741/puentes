import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// Manejo de la solicitud GET para obtener un blog específico
export async function GET(req: Request) {
  try {
    // Extraer el ID de la query string
    const url = new URL(req.url);
    const id = url.searchParams.get('id');

    if (!id) {
      return NextResponse.json({ message: 'El parámetro id es necesario' }, { status: 400 });
    }

    // Convertir el ID a ObjectId
    let objectId;
    try {
      objectId = new ObjectId(id);
    } catch (error) {
      return NextResponse.json({ message: 'ID inválido' }, { status: 400 });
    }

    // Conexión a la base de datos
    const client = await clientPromise;
    const db = client.db();

    // Buscar el blog por _id
    const blog = await db.collection('blogs').findOne({ _id: objectId });

    if (!blog) {
      return NextResponse.json({ message: 'Blog no encontrado' }, { status: 404 });
    }

    // Devolver el blog encontrado, asegurando que _id sea un string
    return NextResponse.json({
      ...blog,
      id: blog._id.toString(),
    });
  } catch (error) {
    console.error('Error al obtener el blog:', error);
    return NextResponse.json({ message: 'Error interno del servidor' }, { status: 500 });
  }
}
