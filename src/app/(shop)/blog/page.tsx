'use client';

import React, { useEffect, useState } from 'react';
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';
import BannerBlog from '@/app/components/bannerblog/BanerBlog';

interface Post {
  _id: number;
  id: string;
  contenido: string[];
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
  likes: number;
}

const BlogPage: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [filteredPosts, setFilteredPosts] = useState<Post[]>([]);
  const [searchQuery, setSearchQuery] = useState<string>(''); // Búsqueda por nombre
  const [selectedTag, setSelectedTag] = useState<string>(''); // Filtro por etiqueta
  const [showTagDropdown, setShowTagDropdown] = useState<boolean>(false); // Mostrar opciones de etiquetas
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;

  const { user, loading } = useAuth();
  const router = useRouter();



  const [mostReadPosts, setMostReadPosts] = useState<Post[]>([]);
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog'); // Cambia a la ruta de tu API
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data: Post[] = await response.json();

        // Selecciona los 3 primeros artículos (puedes ordenar por likes u otra lógica)
        setMostReadPosts(
          data.sort((a, b) => b.likes - a.likes).slice(0, 5)
        );

      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog');
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();

        const formattedPosts = data.map((post: any) => ({
          ...post,
          id: post._id,
        }));

        setPosts(formattedPosts);
        setFilteredPosts(formattedPosts); // Inicializa con todos los posts
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  // Maneja la búsqueda y el filtro
  useEffect(() => {
    let filtered = posts;

    if (searchQuery) {
      filtered = filtered.filter((post) =>
        post.title.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }

    if (selectedTag) {
      filtered = filtered.filter((post) =>
        post.contenido.includes(selectedTag)
      );
    }

    setFilteredPosts(filtered);
    setCurrentPage(1); // Reinicia la paginación cuando se aplican filtros
  }, [searchQuery, selectedTag, posts]);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = filteredPosts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(filteredPosts.length / postsPerPage);

  const handleTagSelection = (tag: string) => {
    setSelectedTag(tag);
    setShowTagDropdown(false); // Oculta el menú después de seleccionar
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">Novedades</h1>
          <div className="mt-4 border-t-4 border-white w-16 mx-auto"></div>
          <p className="text-base mt-4 opacity-90">
            Mantente al día con las últimas noticias y actualizaciones.
          </p>
          {user && user.roles?.includes('admin') && (
            <button
              onClick={() => router.push('/blog/create-blog')}
              className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            >
              Crear Blog
            </button>
          )}
        </div>
      </header>

      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Panel de búsqueda y filtros */}
        <aside className="bg-white shadow-lg rounded-lg p-6 mb-4 lg:mb-0">
          <h5 className="text-lg font-bold mb-4">Filtros</h5>
          {/* Búsqueda por nombre */}
          <div className="mb-4">
            <label className="block text-gray-700 font-bold mb-2">Buscar por titulo</label>
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
          </div>
          {/* Filtro por etiquetas */}
          <div className="relative">
            <label className="block text-gray-700 font-bold mb-2">Filtrar por etiqueta</label>
            <button
              className="w-full border border-gray-300 rounded px-4 py-2 text-left flex justify-between items-center"
              onClick={() => setShowTagDropdown((prev) => !prev)}
            >
              {selectedTag || 'Seleccionar etiqueta'}
              {selectedTag && (
                <button
                  className="text-gray-500 hover:text-red-500 ml-2"
                  onClick={(e) => {
                    e.stopPropagation(); // Evita que el clic cierre el menú
                    setSelectedTag(''); // Limpia la etiqueta seleccionada
                  }}
                >
                  ✕
                </button>
              )}
            </button>
            {showTagDropdown && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto">
                {Array.from(new Set(posts.flatMap((post) => post.contenido))).map((tag) => (
                  <div
                    key={tag}
                    className={`px-4 py-2 cursor-pointer hover:bg-gray-200 ${selectedTag === tag ? 'bg-blue-100' : ''
                      }`}
                    onClick={() => {
                      setSelectedTag(tag);
                      setShowTagDropdown(false); // Cierra el menú después de seleccionar
                    }}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>

          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mb-8"></div>

          <h5 className="text-lg font-bold mb-4">Artículos más leídos</h5>
          <ul className="space-y-4">
            {mostReadPosts.length > 0 ? (
              mostReadPosts.map((post) => (

                <li key={post._id} className="flex items-center space-x-4">
                  <img
                    src={post.imageUrl}
                    alt={post.title}
                    className="w-16 h-16 object-cover rounded-md"
                  />
                  <div>
                    <a
                      href={`/blog/${post._id}/${post.title // Cambiado a title
                        .toLowerCase()
                        .replace(/ /g, '-')
                        .replace(/[^\w-]+/g, '')}`}
                      className="text-blue-600 font-medium hover:underline"
                    >
                      {post.title}
                    </a>
                  </div>
                </li>
              ))
            ) : (
              <p className="text-gray-500">Cargando artículos...</p>
            )}
          </ul>
          <hr className="my-4 border-t-2 border-gray-300" />
          <div className="mb-8"></div>
          <BannerBlog />

        </aside>

        {/* Posts filtrados */}
        <div className="lg:col-span-2">
          {filteredPosts.length > 0 ? (
            <>
              <BlogGrid posts={currentPosts} />

            </>
          ) : (
            <Loading />
          )}
        </div>
    
      </main>
      <div className="flex  justify-center items-center   space-x-2   ">
          {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
            <button
              key={page}
              onClick={() => setCurrentPage(page)}
              className={`px-4 py-2 rounded ${currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
                }`}
            >
              {page}
            </button>
          ))}
        </div>
        <footer className="bg-white text-black py-10 mt-10">
  <div className="container mx-auto px-4 text-center">
    <h2 className="text-xl font-bold mb-4">¿Listo para llevar tu proyecto al siguiente nivel?</h2>
    <p className="text-sm mb-6">
      Contáctanos y descubre cómo podemos ayudarte a lograr tus objetivos.
    </p>
    <a
      href="/contact"
      className="inline-block bg-blue-600 text-white font-semibold py-2 px-6 rounded-md shadow-md hover:bg-blue-700 transition duration-300"
    >
      ¡Hablemos!
    </a>
   
  </div>
</footer>


    </div>
  );
};

export default BlogPage;
