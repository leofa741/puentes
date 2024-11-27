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
  return (
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <h1 className="text-5xl font-serif font-extrabold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-xl text-gray-700 italic mb-4">{post.subtitle}</p>
      
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800} // Ajusta el tamaño de la imagen para mayor impacto visual
        height={450}
        className="my-8 rounded-lg shadow-lg transform transition-all hover:scale-105"
      />
      
      <p className="text-gray-800 leading-relaxed text-lg mb-6">{post.description}</p>
      
      <a
        href="/blog"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all ease-in-out"
      >
        Volver al blog
      </a>
    </div>
  );
}
