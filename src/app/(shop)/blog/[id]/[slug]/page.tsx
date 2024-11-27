import { Metadata } from "next";
import { redirect } from "next/navigation"; // Redirección dinámica
import BlogIdClientComponent from "../../ui/BlogIdClientComponent";



interface Post {
  id: number;
  contenido: string | string[];
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

// Función para obtener los datos del post desde el JSON
async function fetchPost(id: string): Promise<Post | null> {
  try {
    const response = await fetch(
      "https://www.puentesdigitales.com.ar/data/posts.json",
      { cache: "no-store" }
    );

    if (!response.ok) {
      throw new Error("Error al obtener los datos");
    }

    const posts: Post[] = await response.json();
    return posts.find((post) => post.id === parseInt(id)) || null;
  } catch (error) {
    console.error("Error en fetchPost:", error);
    return null;
  }
}

// Generar el slug dinámico desde el título
function generateSlug(title: string): string {
  return title
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9 ]/g, "")
    .replace(/\s+/g, "-");
}

// Generar metadatos dinámicos
export async function generateMetadata({ params }: { params: { id: string; slug: string } }): Promise<Metadata> {
  const post = await fetchPost(params.id);

  if (post) {
    return {
      title: post.title,
      description: post.subtitle,
      keywords: typeof post.contenido === "string" ? post.contenido.split(" ").join(", ") : post.contenido.join(", "),
      robots: "index, follow",
      openGraph: {
        title: post.title,
        description: post.subtitle,
        images: [{ url: post.imageUrl }],
        type: "article",
      },
    };
  }

  return {
    title: "Artículo no encontrado",
    description: "El artículo que buscas no existe o ha sido eliminado.",
    robots: "noindex, nofollow",
  };
}

// Renderizar la página del artículo
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

  // Redirige si el slug es incorrecto
  if (params.slug !== expectedSlug) {
    redirect(`/blog/${post.id}/${expectedSlug}`);
  }

  return <BlogIdClientComponent post={post} />;
}
