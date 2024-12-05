import nextConnect from 'next-connect';
import { NextApiRequest, NextApiResponse } from 'next';
import path from 'path';
import formidable from 'formidable';
import fs from 'fs-extra';
import { IncomingMessage } from 'http';

// Ruta de destino para guardar imágenes
const uploadDir = path.join(process.cwd(), 'public/assets/img');

// Configurar formidable
const form = formidable({
  uploadDir, // Carpeta donde guardar las imágenes
  keepExtensions: true, // Mantener la extensión original
});

// Asegúrate de que el directorio de destino existe
fs.ensureDirSync(uploadDir);

export const config = {
  api: {
    bodyParser: false, // Deshabilitamos el body parser para manejar archivos
  },
};

const handler = nextConnect<NextApiRequest, NextApiResponse>();

handler.post(async (req: IncomingMessage, res: { status: (arg0: number) => { (): any; new(): any; json: { (arg0: { message: string; filePath?: string; }): any; new(): any; }; }; }) => {
  try {
    // Parsear la solicitud con formidable
    const data: any = await new Promise((resolve, reject) => {
      form.parse(req, (err, fields, files) => {
        if (err) return reject(err);
        resolve({ fields, files });
      });
    });

    console.log('Datos recibidos:', data);

    // Obtener el archivo cargado
    const file = data.files.file;

    if (!file) {
      return res.status(400).json({ message: 'No se envió un archivo' });
    }

    // Generar el nombre del archivo y moverlo
    const fileName = `${Date.now()}-${file.originalFilename}`;
    const filePath = path.join(uploadDir, fileName);

    console.log('Moviendo archivo a:', filePath);
    await fs.move(file.filepath, filePath);

    return res.status(200).json({
      message: 'Imagen subida exitosamente',
      filePath: `/assets/img/${fileName}`,
    });
  } catch (error) {
    console.error('Error al subir la imagen:', error);
    return res.status(500).json({ message: 'Error al subir la imagen' });
  }
});

export default handler;
