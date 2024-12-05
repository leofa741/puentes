import { NextResponse } from 'next/server';
import { v2 as cloudinary } from 'cloudinary';

// Configuración automática desde `CLOUDINARY_URL`
cloudinary.config({
  cloud_name: 'dnv2e0j4l', 
  api_key: '994123746111941', 
  api_secret: 'abb_rT2N9F_vlKW69ytjxDs8taE',
});

export async function POST(req: Request) {
  try {
    const formData = await req.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ message: 'No se envió ningún archivo' }, { status: 400 });
    }

    // Subir imagen a Cloudinary
    const arrayBuffer = await file.arrayBuffer();
    const buffer = Buffer.from(arrayBuffer);
    const result = await cloudinary.uploader.upload(`data:${file.type};base64,${buffer.toString('base64')}`, {
      folder: 'uploads', // Carpeta opcional en Cloudinary
    });

    return NextResponse.json({
      message: 'Imagen subida exitosamente',
      url: result.secure_url,
    });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    return NextResponse.json({ message: 'Error al subir la imagen' }, { status: 500 });
  }
}
