// app/blog/[id]/page.tsx (archivo principal de la página)
import ClientComponent from '@/app/components/blogComponent/BlogIdClientComponent';
import { Metadata } from 'next';
// Componente cliente separado

type Post = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
};

async function fetchPost(id: string): Promise<Post | null> {
  const response = await fetch('http://localhost:3000/data/posts.json'); // Cambia esta URL si es necesario
  const posts: Post[] = await response.json();
  return posts.find((post) => post.id === parseInt(id)) || null;
}

export async function generateMetadata({ params }: { params: { id: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id);

  if (post) {
    return {
      title: post.title,
      description: post.subtitle,
      keywords: post.title.split(/(?=[A-Z])/).join(','),
      robots: 'index, follow', // Permite indexar y seguir enlaces
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
  };
}

export default async function ArticuloPage({ params }: { params: { id: string } }) {
  const post = await fetchPost(params.id);

  if (!post) {
    return <p>Artículo no encontrado</p>;
  }

  return <ClientComponent post={post} />;
}
