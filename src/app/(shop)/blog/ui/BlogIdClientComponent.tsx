'use client';

import React from 'react';
import Image from 'next/image';
import { TagTree } from '@/app/components/taggtree/TagTree';

interface Post {
  id: string; // _id será convertido a string
  contenido: string | string[];
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
  date: string;
  likes: number;
  dislikes?: number;
}

export default function BlogIdClientComponent({ post }: { post: Post }) {

  console.log(post.imageUrl);
  const paragraphs = post.description
  .replace(/\\n/g, '\n') // Convierte "\n" en saltos de línea reales
  .split('\n');


  // Verifica si 'contenido' es un string, si es así, lo convertimos a un array
  const tags = Array.isArray(post.contenido)
    ? post.contenido
    : post.contenido?.split(',').map((tag) => tag.trim()) || [];

  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl bg-white border border-gray-200 rounded-lg flex">
      {/* Columna de contenido principal */}
      <div className="flex-1 pr-8">
        {/* Título del post */}
        <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
          {post.title}
        </h1>

        {/* Subtítulo del post */}
        <p className="text-lg text-gray-600 mb-8 text-center">
          {post.subtitle}
        </p>

        {/* Imagen del post */}
        <div className="flex justify-center mb-8">
          <Image
            src={post.imageUrl}
            alt={post.title}
            width={720}
            height={400}
            className="rounded-lg hover:shadow-lg transition-shadow duration-300" // Efecto de sombra al pasar el mouse
          />
        </div>

        {/* Descripción del post */}
        <div className="text-gray-700 leading-relaxed text-base mb-8">
          {paragraphs.map((paragraph, index) => (
            <p key={index} className="mb-4">
              {paragraph}
            </p>
          ))}
        </div>

        {/* Botón para volver al blog */}
        <a
          href="/blog"
          className="block text-center border border-blue-600 text-blue-600 px-6 py-3 rounded-md text-lg font-medium hover:bg-blue-600 hover:text-white transition-colors duration-300"
        >
          Volver al blog
        </a>
      </div>

      {/* Columna de tags, visible solo en pantallas grandes */}
      <div className="w-1/4 bg-gray-100 p-4 rounded-lg shadow-lg hidden md:block">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Tags</h3>
        <div className="flex flex-wrap gap-2">
          {tags.length > 0 ? (
            tags.map((tag, index) => (
              <span key={index} className="bg-blue-600 text-white px-4 py-2 rounded-full text-sm hover:bg-blue-700 transition-colors duration-300 cursor-pointer">
                {tag}
              </span>
            ))
          ) : (
            <span className="text-gray-500">No tags disponibles</span>
          )}
        </div>

       

      </div>
    </div>
  );
}
