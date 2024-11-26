
import { BlogGrid } from '@/app/components/blogComponent/BlogGrid';
import React from 'react';

import { Metadata } from 'next'



type Post = {
    id: number;
    title: string;
    description: string;
    imageUrl: string;
    link: string;
};

const posts: Post[] = [
    {
        id: 1,
        title: ' numero1 Puentes Digitales adquiere Gestión IT y planifica inversiones para el desarrollo de la firma en Latam',
        description: 'Descubre cómo la colaboración entre Puentes Digitales y GitLab está transformando la industria del desarrollo de software mediante la inteligencia artificial.',
        imageUrl: '/assets/img/angular.png',
        link: '/blog/articulo/1',
    },
    {
        id: 2,
        title: 'numero2 Puentes Digitales adquiere Gestión IT y planifica inversiones para el desarrollo de la firma en Latam',
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


export const metadata: Metadata = {
  keywords: 'E-commerce, diseño web, apis, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web ',
  title: "E-commerce| Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}

const BlogPage: React.FC =  () => {


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

                <BlogGrid posts={posts} />
             
            </main>
        </div>
    );
};

export default BlogPage;
