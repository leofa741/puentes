'use client';

import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import Loading from '@/app/components/loading/LoadingEfect';
import React, { useEffect, useState } from 'react';

type Post = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

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

    return (
        <div className="min-h-screen flex flex-col bg-gray-100 text-gray-800">
            {/* Encabezado */}
            <header className="bg-gradient-to-r from-blue-600 to-indigo-700 text-white py-8 shadow-lg">
                <div className="container mx-auto px-4 text-center">
                    <h1 className="text-5xl font-extrabold tracking-tight">
                        Novedades
                    </h1>
                    <div className="mt-4 border-t-4 border-white w-16 mx-auto"></div>
                    <p className="text-base mt-4 opacity-90">
                        Mantente al día con las últimas noticias y actualizaciones.
                    </p>
                </div>
            </header>

            {/* Contenido Principal */}
            <main className="container mx-auto px-4 py-10">
                {posts.length > 0 ? (
                    <BlogGrid posts={posts} />
                ) : (
                   
                    <Loading />
                )}
            </main>
        </div>
    );
};

export default BlogPage;
