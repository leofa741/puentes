import { NextResponse } from 'next/server';
import clientPromise from '@/lib/mongodb';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log('Datos recibidos en el backend:', body);

    const client = await clientPromise;
    const db = client.db();

    const result = await db.collection('blogs').insertOne({
      title: body.title,
      subtitle: body.subtitle,
      description: body.description,
      imageUrl: body.imageUrl,
      link: body.link,
      date: body.date,
      contenido: body.contenido, // Se guarda como array
      likes: 0, // Inicializamos likes en 0
      dislikes: 0, // Inicializamos dislikes en 0

    });

    return NextResponse.json({ message: 'Blog creado exitosamente', id: result.insertedId });
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


  