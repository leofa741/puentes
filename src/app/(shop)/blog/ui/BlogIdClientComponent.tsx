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
    <div className="container mx-auto py-10 px-4">
      <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
      <p className="text-lg text-gray-600">{post.subtitle}</p>
      <Image
        src={post.imageUrl}
        alt={post.title}
        width={800}
        height={400}
        className="my-6 rounded-lg"
      />
      <p className="text-gray-800 leading-relaxed">{post.description}</p>
      <a
        href="/blog"
        className="inline-block mt-6 bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 transition"
      >
        Volver al blog
      </a>
    </div>
  );
}
