import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Crear un comentario
export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { postId, comment } = body;

    // Validar los datos recibidos
    if (!postId || !comment) {
      return NextResponse.json({ message: 'El postId y el comentario son obligatorios.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Insertar el comentario en la colección de comentarios
    const result = await db.collection('comments').insertOne({
      postId: new ObjectId(postId),
      comment,
      createdAt: new Date(),
    });

    return NextResponse.json({ 
      message: 'Comentario creado exitosamente', 
      id: result.insertedId 
    }, { status: 201 });
  } catch (error) {
    console.error('Error al crear el comentario:', error);
    return NextResponse.json({ message: 'Error al crear el comentario' }, { status: 500 });
  }
}

// Obtener comentarios de un post específico
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    // Validar el parámetro postId
    if (!postId) {
      return NextResponse.json({ message: 'El parámetro postId es obligatorio.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // Buscar comentarios relacionados con el postId
    const comments = await db.collection('comments')
      .find({ postId: new ObjectId(postId) })
      .sort({ createdAt: -1 }) // Ordenar por fecha de creación descendente
      .toArray();

    return NextResponse.json(comments, { status: 200 });
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    return NextResponse.json({ message: 'Error al obtener los comentarios' }, { status: 500 });
  }
}
