'use client';

import React, { useEffect, useState } from 'react';
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';
import { useAuth } from '@/context/AuthContext';
import { useRouter } from 'next/navigation';

interface Post {
  id: string;
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
      } catch (error) {
        console.error('Error fetching posts:', error);
      }
    };

    fetchPosts();
  }, []);

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);
  const totalPages = Math.ceil(posts.length / postsPerPage);

  const getPaginationButtons = () => {
    const delta = 2;
    const range = [];
    const left = Math.max(2, currentPage - delta);
    const right = Math.min(totalPages - 1, currentPage + delta);

    if (left > 2) range.push(1, '...');
    else range.push(1);

    for (let i = left; i <= right; i++) {
      range.push(i);
    }

    if (right < totalPages - 1) range.push('...', totalPages);
    else if (totalPages > 1) range.push(totalPages);

    return range;
  };

  const handlePageChange = (page: number | string) => {
    if (page === '...') return;
    setCurrentPage(Number(page));
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
          {/* Botón Create Blog si el usuario es admin */}
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

        <div className="lg:col-span-2">
          {posts.length > 0 ? (
            <>
              <BlogGrid posts={currentPosts} />
              <div className="flex justify-center mt-8 space-x-2">
                {getPaginationButtons().map((page, index) => (
                  <button
                    key={index}
                    onClick={() => handlePageChange(page as number)}
                    className={`px-4 py-2 rounded ${currentPage === page
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
                    href={`/blog/${post.id}/${post.title
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
