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
    <div className="container mx-auto py-12 px-6 max-w-4xl">
      <h1 className="text-5xl  font-extrabold text-gray-900 mb-6">{post.title}</h1>
      <p className="text-xl text-gray-700 italic mb-4">{post.subtitle}</p>
      
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={500} // Ajusta el tamaño de la imagen para mayor impacto visual
        height={300}
        className="rounded-lg mb-6" 
      />
      
      <p className="text-gray-800 leading-relaxed text-lg mb-6">
        {paragraphs.map((paragraph, index) => (
          <span key={index}>
            {paragraph}
            <br />
          </span>
        ))}

      </p>
      
      <a
        href="/blog"
        className="inline-block mt-8 bg-blue-600 text-white px-6 py-3 rounded-lg text-lg font-semibold hover:bg-blue-700 transition-all ease-in-out"
      >
        Volver al blog
      </a>
    </div>
  );
}
