import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('Por favor, agrega tu MONGODB_URI al archivo .env');
}

const uri = process.env.MONGODB_URI;
const options = {};

let client;
let clientPromise: Promise<MongoClient>;

if (process.env.NODE_ENV === 'development') {
  // Usar un cliente global para evitar conexiones múltiples en desarrollo
  if (!(global as any)._mongoClientPromise) {
    client = new MongoClient(uri, options);
    (global as any)._mongoClientPromise = client.connect();
  }
  clientPromise = (global as any)._mongoClientPromise;
} else {
  // En producción, usar un cliente nuevo
  client = new MongoClient(uri, options);
  clientPromise = client.connect();
}

export default clientPromise;
