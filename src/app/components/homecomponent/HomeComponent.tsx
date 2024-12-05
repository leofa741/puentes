'use client';
import React, { useEffect, useState } from 'react';
import './home.css';

interface Post {
    id: number;
    title: string;
    imageUrl: string;
    link: string;
    likes: number;
}

export const HomeComponent = () => {
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
                    data.sort((a, b) => b.likes - a.likes).slice(0, 3)
                );
                
            } catch (error) {
                console.error('Error fetching posts:', error);
            }
        };

        fetchPosts();
    }, []);


    return (
        <div className="section bg-primary pt-0 pb-0">
            <div className="container">
                <div className="row">
                    {/* Columna principal */}
                    <div className="col-lg-8">
                        <div className="row align-items-center">
                            <div className="col-lg-6">
                                <div className="img-border">
                                    <img
                                        className="img-fluid"
                                        src="/assets/img/sitio-web.webp"
                                        alt=""
                                    />
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <div className="h-100">
                                    <h6 className="section-title text-start font-bold text-3xl">
                                        Puentes Digitales
                                    </h6>
                                    <h1 className="mb-4 font-bold text-5xl">
                                        Conectando el futuro
                                        <span className="text-4xl"> soluciones digitales </span>
                                        <span className="text-4xl"> que </span>
                                        <span className="text-4xl"> superan expectativas</span>
                                    </h1>
                                    <p className="mb-4">
                                        Talento profesional, procesos y tecnologías asociadas,
                                        determinan nuestras áreas de conocimiento en Outsourcing de
                                        Innovación.
                                    </p>
                                    <p className="mb-4">
                                        Transformamos ideas en productos digitales, a través de un
                                        proceso de innovación que integra diseño, tecnología y
                                        estrategia.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Columna lateral */}
                    <div className="col-lg-4">
                        <aside className="bg-white shadow-lg rounded-lg p-4">
                            <h5 className="text-lg font-bold mb-4">Artículos más leídos</h5>
                            <ul className="space-y-4">
                                {mostReadPosts.length > 0 ? (
                                    mostReadPosts.map((post) => (
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
                                    ))
                                ) : (
                                    <p className="text-gray-500">Cargando artículos...</p>
                                )}
                            </ul>

                        </aside>
                    </div>
                </div>
            </div>
        </div>
    );
};
