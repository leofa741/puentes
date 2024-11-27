'use client';

import React from 'react';
import Image from 'next/image';

type Post = {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  imageUrl: string;
  link: string;
};

export default function BlogIdClientComponent({ post }: { post: Post }) {
  const paragraphs = post.description.split('\n');
  return (
    <div className="container mx-auto py-12 px-6 max-w-6xl bg-white  border border-gray-200 rounded-lg">
      {/* Título del post */}
      <h1 className="text-4xl font-bold text-gray-800 mb-4 text-center">
        {post.title}
      </h1>

      {/* Subtítulo del post */}
      <p className="text-lg text-gray-600 mb-8 text-center">
        {post.subtitle}
      </p>

      {/* Imagen del post CENTRAR */}
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
  );
}