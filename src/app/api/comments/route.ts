import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Crear comentario
export async function POST(req: Request) {
  try {
    const { postId, comment, user } = await req.json();

    if (!postId || !comment || !user) {
      return NextResponse.json({ message: 'Faltan datos obligatorios.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('comments').insertOne({
      postId: new ObjectId(postId),
      comment,
      user, // Guardar el usuario enviado desde el frontend
      createdAt: new Date(),
    });

    return NextResponse.json({ message: 'Comentario creado exitosamente.', id: result.insertedId });
  } catch (error) {
    console.error('Error al crear el comentario:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}

// Obtener comentarios
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    if (!postId) {
      return NextResponse.json({ message: 'El parámetro postId es obligatorio.' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const comments = await db.collection('comments')
      .find({ postId: new ObjectId(postId) })
      .sort({ createdAt: -1 })
      .toArray();

    return NextResponse.json(comments);
  } catch (error) {
    console.error('Error al obtener los comentarios:', error);
    return NextResponse.json({ message: 'Error interno del servidor.' }, { status: 500 });
  }
}
