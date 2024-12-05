import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';
import { ObjectId } from 'mongodb';

// Función para generar el slug basado en el título
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
    .replace(/[^a-z0-9 ]/g, '') // Elimina caracteres especiales
    .replace(/\s+/g, '-'); // Reemplaza los espacios por guiones
}

export async function POST(req: Request) {
  try {
    const body = await req.json();

    const client = await clientPromise;
    const db = client.db();

    // Generar un nuevo ObjectId para el blog
    const newId = new ObjectId();

    // Generar el slug basado en el título
    const slug = generateSlug(body.title);

    const result = await db.collection('blogs').insertOne({
      _id: newId,
      title: body.title,
      subtitle: body.subtitle,
      description: body.description,
      imageUrl: body.imageUrl,
      link: `blog/${newId}/${slug}`, // Generar automáticamente el enlace
      date: body.date,
      contenido: body.contenido, // Se guarda como array
      likes: 0, // Inicializamos likes en 0
      dislikes: 0, // Inicializamos dislikes en 0
    });

    return NextResponse.json({ 
      message: 'Blog creado exitosamente', 
      id: result.insertedId, 
      link: `blog/${newId}/${slug}` // Devolver el enlace generado 
    });
  } catch (error) {
    console.error('Error al crear el blog:', error);
    return NextResponse.json({ message: 'Error al crear el blog' }, { status: 500 });
  }
}

export async function GET() {
  try {
    const client = await clientPromise;
    const db = client.db();

    const blogs = await db.collection('blogs').find().toArray();

    return NextResponse.json(blogs);
  } catch (error) {
    console.error('Error al obtener los blogs:', error);
    return NextResponse.json({ message: 'Error al obtener los blogs' }, { status: 500 });
  }
}


  