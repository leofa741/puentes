'use client';

import Link from 'next/link';
import { notFound } from 'next/navigation';
import Image from 'next/image';



const posts = [
    {
        id: 1,
        title: 'numero1 Puentes Digitales adquiere Gestión IT y planifica inversiones para el desarrollo de la firma en Latam',
        description: 'Descubre cómo la colaboración entre Puentes Digitales y GitLab está transformando la industria del desarrollo de software mediante la inteligencia artificial.',
        imageUrl: '/assets/img/angular.png',
        link: '/blog/articulo/1',
    },
    {
        id: 2,
        title: ' numero2 Puentes Digitales adquiere Gestión IT y planifica inversiones para el desarrollo de la firma en Latam',
        description: 'Con esta adquisición, Puentes Digitales suma una nueva área de conocimiento en Testing y Calidad en software con certificación internacional.',
        imageUrl: '/assets/img/angular.png',
        link: '/blog/articulo/2',
    },
    {
        id: 3,
        title: 'numero3 Puentes Digitales adquiere Gestión IT y planifica inversiones para el desarrollo de la firma en Latam',
        description: 'Con esta adquisición, Puentes Digitales suma una nueva área de conocimiento en Testing y Calidad en software con certificación internacional.',
        imageUrl: '/assets/img/angular.png',
        link: '/blog/articulo/3',
    },
];



export default function ArticuloPage({ params }: { params: { id: string } }) { 


    
    const articulo = posts.find((post) => post.id === parseInt(params.id));

    if (!articulo) {
        notFound(); // Muestra la página 404 si no se encuentra el artículo
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
                                <Link className="bg-blue-500 text-white px-6 py-3 rounded-lg shadow-lg text-lg font-semibold hover:bg-blue-600 transition duration-300"
                                    href='/blog/articulos'>
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
