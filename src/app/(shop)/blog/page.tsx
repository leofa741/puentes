'use client';

import React, { useEffect, useState } from 'react';
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';

interface Post {
    id: number;
    contenido: string | string[]; // Permitir tanto string como array de strings
    title: string;
    subtitle: string;
    description: string;
    imageUrl: string;
    link: string;
    date: string;
}

const BlogPage: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch('/data/posts.json');
                if (!response.ok) {
                    throw new Error('Failed to fetch posts');
                }
                const data: Post[] = await response.json();
                setPosts(data);
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);

    // Seleccionar los artículos más leídos (simulación: tomar los primeros 3)
    const mostReadPosts = posts.slice(0, 3);

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
                        <BlogGrid posts={posts} />
                    ) : (
                        <Loading />
                    )}
                </div>

                {/* Barra lateral */}
                <aside className="bg-white shadow-lg rounded-lg p-6">
                    <h5 className="text-lg font-bold mb-4">Artículos más leídos</h5>
                    <ul className="space-y-4">
                        {mostReadPosts.map((post) => (
                            <li key={post.id} className="flex items-center space-x-4">
                                <img
                                    src={post.imageUrl}
                                    alt={post.title}
                                    className="w-16 h-16 object-cover rounded-md"
                                />
                                <div>
                                    <a
                                        href={post.link}
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
