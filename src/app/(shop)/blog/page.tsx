'use client';

import React, { useEffect, useState } from 'react';
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface Post {
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
            <label className="block text-gray-700 font-bold mb-2">Buscar por nombre</label>
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
              className="w-full border border-gray-300 rounded px-4 py-2 text-left"
              onClick={() => setShowTagDropdown((prev) => !prev)}
            >
              {selectedTag || 'Seleccionar etiqueta'}
            </button>
            {showTagDropdown && (
              <div className="absolute z-10 w-full bg-white border border-gray-300 rounded shadow-md max-h-48 overflow-y-auto">
                {Array.from(new Set(posts.flatMap((post) => post.contenido))).map((tag) => (
                  <div
                    key={tag}
                    className="px-4 py-2 cursor-pointer hover:bg-gray-200"
                    onClick={() => handleTagSelection(tag)}
                  >
                    {tag}
                  </div>
                ))}
              </div>
            )}
          </div>
        </aside>

        {/* Posts filtrados */}
        <div className="lg:col-span-2">
          {filteredPosts.length > 0 ? (
            <>
              <BlogGrid posts={currentPosts} />
              <div className="flex justify-center mt-8 space-x-2">
                {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
                  <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 rounded ${
                      currentPage === page ? 'bg-blue-600 text-white' : 'bg-gray-300 text-gray-800'
                    }`}
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
      </main>
    </div>
  );
};

export default BlogPage;
