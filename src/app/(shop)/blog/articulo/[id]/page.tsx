'use client';

import Link from 'next/link';
import { useEffect, useState } from 'react';

import Image from 'next/image';
import { useRouter } from 'next/navigation';

type Post = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

export default function ArticuloPage({ params }: { params: { id: string } }) {
    const [articulo, setArticulo] = useState<Post | null>(null);
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter(); // Manejar navegación

    useEffect(() => {
        const fetchPost = async () => {
            try {
                const response = await fetch('/data/posts.json');
                if (!response.ok) {
                    throw new Error('Error al cargar los datos');
                }
                const posts: Post[] = await response.json();
                const foundPost = posts.find((post) => post.id === parseInt(params.id));
                if (!foundPost) {
                    router.push('/404'); // Redirigir a la página 404 si no se encuentra el artículo
                    return;
                }
                setArticulo(foundPost);
            } catch (error) {
                console.error('Error fetching article:', error);
                router.push('/404');
            } finally {
                setIsLoading(false);
            }
        };

        fetchPost();
    }, [params.id, router]);

    if (isLoading) {
        return <p className="text-center py-10">Cargando artículo...</p>;
    }

    if (!articulo) {
        return null; // Esto no debería ocurrir debido al manejo anterior
    }

    return (
        <div className="bg-gradient-to-b from-gray-100 to-gray-200 py-10">
            <div className="container mx-auto px-4">
                {/* Encabezado */}
                <header className="text-center mb-10">
                    <h1 className="text-4xl font-extrabold text-gray-900 leading-tight">
                        {articulo.title}
                    </h1>
                    <div className="mt-4 border-t-4 border-blue-500 w-16 mx-auto"></div>
                </header>

                {/* Contenido principal */}
                <div className="bg-white p-8 rounded-lg shadow-lg">
                    <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-8">
                        {/* Imagen */}
                        <div className="flex-shrink-0 mb-6 lg:mb-0 lg:w-1/3">
                            <Image
                                src={articulo.imageUrl}
                                alt={articulo.title}
                                width={640}
                                height={360}
                                className="rounded-lg"
                            />
                        </div>

                        {/* Texto */}
                        <div className="lg:w-2/3">
                            <p className="text-lg text-gray-700 leading-relaxed mb-6">
                                {articulo.description}
                            </p>
                            <div className="text-center lg:text-left">
                                <Link
                                    className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                                    href="/blog/articulos"
                                >
                                    Leer más artículos
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
