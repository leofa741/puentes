import { Metadata } from 'next';
import { redirect } from 'next/navigation';
import BlogIdClientComponent from '../../ui/BlogIdClientComponent'; // Ajusta la ruta según tu estructura

interface Post {
  id: string; // _id será convertido a string
  contenido: string | string[];
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
  likes: number;
  dislikes?: number;
}

// Función para obtener el artículo por ID desde el backend
async function fetchPost(id: string): Promise<Post | null> {
  try {
   
    const response = await fetch(`https://www.puentesdigitales.com.ar/api/blogs?id=${id}`, {
      cache: 'no-store', // Evita el almacenamiento en caché
    });

    if (!response.ok) {
      console.error('Error al obtener el post:', await response.text());
      return null;
    }

    const post: Post = await response.json();
    return post || null;
  } catch (error) {
    console.error('Error en fetchPost:', error);
    return null;
  }
}


// Generar el slug desde el título
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '') // Elimina los acentos
    .replace(/[^a-z0-9 ]/g, '') // Elimina caracteres especiales
    .replace(/\s+/g, '-'); // Reemplaza los espacios por guiones
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { id: string; slug: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id);

  if (post) {
    return {
      title: post.title,
      description: post.subtitle,
      keywords: Array.isArray(post.contenido)
        ? post.contenido.join(', ')
        : post.contenido.split(' ').join(', '),
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

// Renderizar el artículo
export default async function ArticuloPage({ params }: { params: { id: string; slug: string } }) {
  const post = await fetchPost(params.id);

  if (!post) {
    return (
      <div className="text-center py-10">
        <h1 className="text-2xl font-bold">Artículo no encontrado</h1>
        <p>El artículo que buscas no existe o ha sido eliminado.</p>
      </div>
    );
  }

  const expectedSlug = generateSlug(post.title);

  // Si el slug no coincide con el esperado, redirigir
  if (params.slug !== expectedSlug) {
    redirect(`/blog/${post.id}/${expectedSlug}`);
  }

  return <BlogIdClientComponent post={post} />;
}
