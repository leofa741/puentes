// app/blog/[id]/page.tsx
import { Metadata } from 'next';
import ClientComponent from '../../ui/BlogIdClientComponent';

interface Post  {
  id: number;
  contenido: string | string[]; // Permitir tanto string como array de strings
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
};

// Función para obtener el artículo por ID
async function fetchPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch('https://www.puentesdigitales.com.ar/data/posts.json', {
    
      cache: 'no-store', // Evita el uso de caché para obtener datos actualizados
    });
    if (!response.ok) {
      throw new Error('Error al obtener los datos');
    }
    const posts: Post[] = await response.json();
    console.log('Posts pageid:', posts);
    return posts.find((post) => post.id === parseInt(id)) || null;
  } catch (error) {
    console.error('Error en fetchPost:', error);
    return null;
  }
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id);

  if (post) {
    return {
      title: post.title,      
      description: post.subtitle,
      keywords: post.title.split(' ').join(', '), // Convertir el contenido en una lista de palabras clave
      robots: 'index, follow',
      openGraph: {
        title: post.title,
        description: post.subtitle,
        images: [{ url: post.imageUrl }],
        type: 'article',
      },
     
    };
  }

  return {
    title: 'Artículo no encontrado',
    description: 'El artículo que buscas no existe o ha sido eliminado.',
    robots: 'noindex, nofollow',
  };
}

// Renderizar la página del artículo
export default async function ArticuloPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  console.log('Post:', post);

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
        <p>El artículo que buscas no existe o ha sido eliminado.</p>
      </div>
    );
  }

  return <ClientComponent post={post} />;
}
