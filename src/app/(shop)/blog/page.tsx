'use client';

import React, { useEffect, useState } from 'react';
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';

interface Post {
    id: string; // Cambiado a string
    contenido: string | string[];
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
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6; // Cantidad de posts por página

  // Cambiar la función para obtener datos desde el backend
  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch('/api/blog'); // Asegúrate de que esta ruta es correcta
        if (!response.ok) {
          throw new Error('Failed to fetch posts');
        }
        const data = await response.json();
  
        // Transforma _id a id
        const formattedPosts = data.map((post: any) => ({
          ...post,
          id: post._id, // Copia _id en id
        }));
  
        setPosts(formattedPosts);
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };
  
    fetchPosts();
  }, []);
  

  // Cálculo de índices para la paginación
  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  // Total de páginas
  const totalPages = Math.ceil(posts.length / postsPerPage);

  // Lógica de paginación dinámica
  const getPaginationButtons = () => {
    const delta = 2; // Cantidad de páginas a mostrar alrededor de la actual
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    // Agregar el primer número y puntos suspensivos
    if (left > 2) range.push(1, '...');
    else range.push(1);

    // Agregar rango intermedio
    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    // Agregar el último número y puntos suspensivos
    if (right < totalPages - 1) range.push('...', totalPages);
    else if (totalPages > 1) range.push(totalPages);

    return range;
  };

  // Cambiar página
  const handlePageChange = (page: number | string) => {
    if (page === '...') return; // Ignorar puntos suspensivos
    setCurrentPage(Number(page));
  };

  return (
    <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
      {/* Encabezado */}
      <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-lg">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-extrabold tracking-tight">Novedades</h1>
          <div className="mt-4 border-t-4 border-white w-16 mx-auto"></div>
          <p className="text-base mt-4 opacity-90">
            Mantente al día con las últimas noticias y actualizaciones.
          </p>
        </div>
      </header>

      {/* Contenido principal con barra lateral */}
      <main className="container mx-auto px-4 py-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Columna principal */}
        <div className="lg:col-span-2">
          {posts.length > 0 ? (
            <>
              <BlogGrid posts={currentPosts} />
              {/* Controles de paginación */}
              <div className="flex justify-center mt-8 space-x-2">
                {getPaginationButtons().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page as number)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page
                        ? 'bg-blue-600 text-white'
                        : page === '...'
                        ? 'text-gray-400 cursor-default'
                        : 'bg-gray-300 text-gray-800'
                    }`}
                    disabled={page === '...'}
                  >
                    {page}
                  </button>
                ))}
              </div>
            </>
          ) : (
            <Loading />
          )}
        </div>

        {/* Barra lateral */}
        <aside className="bg-white shadow-lg rounded-lg p-6">
          <h5 className="text-lg font-bold mb-4">Artículos más leídos</h5>
          <ul className="space-y-4">
            {posts.slice(0, 13).map((post) => (
              <li key={post.id} className="flex items-center space-x-4">
                <img
                  src={post.imageUrl}
                  alt={post.title}
                  className="w-16 h-16 object-cover rounded-md"
                />
                <div>
                  <a
                     href={`/blog/${post.id}/${post.title // Cambiado a title
                      .toLowerCase()
                      .replace(/ /g, '-')
                      .replace(/[^\w-]+/g, '')}`}
                    className="text-blue-600 font-medium hover:underline"
                  >
                    {post.title}
                  </a>
                </div>
              </li>
            ))}
          </ul>
        </aside>
      </main>
    </div>
  );
};

export default BlogPage;
