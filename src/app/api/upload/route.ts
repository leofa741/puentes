import { NextResponse } from 'next/server';
import fs from 'fs-extra';
import path from 'path';

// Ruta de destino para guardar imágenes
const uploadDir = path.join(process.cwd(), 'public/assets/img');
fs.ensureDirSync(uploadDir); // Crea la carpeta si no existe

export const runtime = 'nodejs';

export async function POST(req: Request) {
  try {
    console.log('Procesando archivo...');

    const contentType = req.headers.get('content-type') || '';
    if (!contentType.includes('multipart/form-data')) {
      return NextResponse.json({ message: 'Tipo de contenido no soportado' }, { status: 400 });
    }

    const boundary = contentType.split('boundary=')[1];
    if (!boundary) {
      return NextResponse.json({ message: 'Boundary no encontrado en la solicitud' }, { status: 400 });
    }

    const body = await req.arrayBuffer();
    const bodyString = Buffer.from(body).toString('binary');
    const parts = bodyString.split(`--${boundary}`);

    for (const part of parts) {
      if (part.includes('Content-Disposition: form-data;') && part.includes('filename=')) {
        // Extraer el nombre del archivo
        const fileNameMatch = part.match(/filename="(.+?)"/);
        const fileName = fileNameMatch ? fileNameMatch[1] : `uploaded-file-${Date.now()}`;

        // Extraer el contenido del archivo
        const fileContentStart = part.indexOf('\r\n\r\n') + 4;
        const fileContentEnd = part.lastIndexOf('\r\n');
        const fileContent = part.slice(fileContentStart, fileContentEnd);

        // Guardar el archivo como binario
        const filePath = path.join(uploadDir, fileName);
        fs.writeFileSync(filePath, new Uint8Array(Buffer.from(fileContent, 'binary')));

        console.log('Archivo procesado exitosamente:', fileName);
        return NextResponse.json({
          message: 'Imagen subida exitosamente',
          filePath: `/assets/img/${fileName}`,
        });
      }
    }

    return NextResponse.json({ message: 'No se encontró ningún archivo en la solicitud' }, { status: 400 });
  } catch (error) {
    console.error('Error al subir el archivo:', error);
    return NextResponse.json({ message: 'Error al subir el archivo' }, { status: 500 });
  }
}
