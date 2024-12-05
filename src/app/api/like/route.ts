import { NextResponse } from 'next/server';
import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

// Obtener los likes y dislikes
export async function GET(req: Request) {
  try {
    const url = new URL(req.url);
    const postId = url.searchParams.get('postId');

    if (!postId) {
      console.error('Error: postId no proporcionado');
      return NextResponse.json({ message: 'postId es necesario' }, { status: 400 });
    }

    let objectId;
    try {
      objectId = ObjectId.createFromHexString(postId);
      // console.log('ObjectId convertido correctamente:', objectId);
    } catch (error) {
      console.error('Error al convertir postId a ObjectId:', postId, error);
      return NextResponse.json({ message: 'postId inválido' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    // console.log('Buscando en la base de datos con _id:', objectId);
    const post = await db.collection('blogs').findOne({ _id: objectId });

    if (!post) {
      console.error('Post no encontrado con _id:', objectId);
      return NextResponse.json({ message: 'Post no encontrado' }, { status: 404 });
    }

    // console.log('Post encontrado:', post);
    return NextResponse.json({ likes: post.likes, dislikes: post.dislikes || 0 });
  } catch (error) {
    console.error('Error al obtener los datos:', error);
    return NextResponse.json({ message: 'Hubo un error al obtener los datos' }, { status: 500 });
  }
}



// Actualizar los likes y dislikes
export async function PUT(req: Request) {
  try {
    const data = await req.json();
    // console.log('Datos recibidos:', data);

    const { postId, likes, dislikes } = data;

    if (!postId || likes === undefined || dislikes === undefined) {
      console.error('Error: Datos inválidos:', { postId, likes, dislikes });
      return NextResponse.json({ message: 'postId, likes y dislikes son necesarios' }, { status: 400 });
    }

    let objectId;
    try {
      objectId = ObjectId.createFromHexString(postId);
      // console.log('ObjectId convertido correctamente:', objectId);
    } catch (error) {
      console.error('Error al convertir postId a ObjectId:', postId, error);
      return NextResponse.json({ message: 'postId inválido' }, { status: 400 });
    }

    const client = await clientPromise;
    const db = client.db();

    const post = await db.collection('blogs').findOne({ _id: objectId });
    if (!post) {
      console.error('Post no encontrado para actualizar:', objectId);
      return NextResponse.json({ message: 'Post no encontrado' }, { status: 404 });
    }

    const result = await db.collection('blogs').updateOne(
      { _id: objectId },
      { $set: { likes, dislikes } }
    );

    // console.log('Resultado de la actualización:', result);

    if (result.matchedCount === 0) {
      console.error('No se encontró un documento que coincida con el _id:', objectId);
      return NextResponse.json({ message: 'No se pudo encontrar el post para actualizar' }, { status: 404 });
    }

    if (result.modifiedCount === 0) {
      console.error('El documento no fue modificado. Valores duplicados:', { likes, dislikes });
      return NextResponse.json({ message: 'No se realizaron cambios' }, { status: 400 });
    }

    // console.log('Actualización exitosa:', { likes, dislikes });
    return NextResponse.json({ likes, dislikes });
  } catch (error) {
    console.error('Error al actualizar los datos:', error);
    return NextResponse.json({ message: 'Hubo un error al actualizar los datos' }, { status: 500 });
  }
}
