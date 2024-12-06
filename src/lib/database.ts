import { ObjectId } from 'mongodb';
import clientPromise from '@/lib/mongodb';

export async function findUserById(id: string) {
  try {
    const client = await clientPromise; // Obtiene la conexión al cliente MongoDB
    const db = client.db('puentes'); // Reemplaza con el nombre de tu base de datos

    // Convierte el ID a ObjectId de MongoDB
    const objectId = new ObjectId(id);

    // Busca el usuario por su ID
    const user = await db.collection('users').findOne({ _id: objectId });

    console.log('Buscando usuario con ID:', id);
    console.log('Usuario encontrado:', user);

    return user; // Devuelve el usuario encontrado o null si no existe
  } catch (error) {
    console.error('Error al buscar usuario por ID:', error);
    throw new Error('Error al buscar usuario por ID');
  }
}
