'use client';
import Link from 'next/link';
import React, { useState } from 'react';
import Image from 'next/image';

interface Post {
  id: number;
  contenido: string | string[];
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
}

export const BlogCard = ({ post }: { post: Post }) => {
  const [isExpanded, setIsExpanded] = useState(false);

  // Dividir la descripción en párrafos
  const paragraphs = post.description.split('\n');

  // Mostrar solo los primeros dos párrafos si no está expandido
  const visibleParagraphs = isExpanded ? paragraphs : paragraphs.slice(0, 2);

  return (
    <div>
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <article
          key={post.id}
          className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg"
        >
          <Image
            className="w-full h-48 object-cover"
            src={post.imageUrl}
            alt={post.title}
            width={640}
            height={360}
          />
          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-800">{post.title}</h1>
            <h3 className="text-gray-600 mt-2 font-semibold">{post.subtitle}</h3>
            <p className="text-gray-600 mt-2">{post.contenido}</p>
            
            {/* Renderizar los primeros párrafos y el botón de "Leer más" */}
            {visibleParagraphs.map((paragraph, index) => (
              <p key={index} className="text-gray-600 mt-2">{paragraph}</p>
            ))}
            
            {/* Botón de "Leer más" si no está expandido */}
         

            {/* Enlace para ir al artículo completo */}
            <a
              href={post.link}
              className="text-blue-600 font-medium hover:underline mt-4 inline-block"
            >
              Leer más → 
            </a>
          </div>
        </article>
      </div>
    </div>
  );
};
