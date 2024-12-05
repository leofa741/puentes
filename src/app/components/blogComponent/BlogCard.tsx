import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaLinkedin, FaHeart } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';

interface Post {
  id: string; // Cambiado a string
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

export const BlogCard = ({ post }: { post: Post }) => {

  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes || 0);

  const handleLike = async () => {
    const newLikes = likes + 1;
    console.log('Enviando datos para like:', {
      postId: post.id, // Aquí usamos `id`
      likes: newLikes,
      dislikes,
    });
    console.log('Enviando postId al backend:', post.id);
  
    try {
      const response = await fetch('/api/like', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post.id, likes: newLikes, dislikes }), // Usa `id` aquí
      });
      if (response.ok) {
        const data = await response.json();
        setLikes(data.likes);
      } else {
        console.error('Error al actualizar los likes');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };
  
  const handleDislike = async () => {
    const newDislikes = dislikes + 1;
    console.log('Enviando datos para dislike:', {
      postId: post.id,
      likes,
      dislikes: newDislikes,
    });
  
    try {
      const response = await fetch('/api/like', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post.id, likes, dislikes: newDislikes }), // Usa `id` aquí
      });
      if (response.ok) {
        const data = await response.json();
        setDislikes(data.dislikes);
      } else {
        console.error('Error al actualizar los dislikes');
      }
    } catch (error) {
      console.error('Error al hacer la solicitud:', error);
    }
  };
  

 
  

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
            <span className="text-sm text-gray-600">
              {formatDistanceToNow(new Date(post.date), { addSuffix: true, locale: es })}
            </span>
            <a
              href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=puentesdigitales"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center text-blue-600 hover:underline mt-2"
            >
              <FaLinkedin className="w-5 h-5 mr-2" />
              Sígueme
            </a>
          </div>

          <div className="p-6">
            <h1 className="text-xl font-semibold text-gray-800">{post.title}</h1>
            <h3 className="text-gray-600 mt-2 font-semibold">{post.subtitle}</h3>

            <div className="flex items-center space-x-4">
        <button onClick={handleLike} className="text-green-500">
          👍 {likes} Likes
        </button>
        <button onClick={handleDislike} className="text-red-500">
          👎 {dislikes} Dislikes
        </button>
      </div>

            <a
              href={`/blog/${post.id}/${post.title // Cambiado a title
                .toLowerCase()
                .replace(/ /g, '-')
                .replace(/[^\w-]+/g, '')}`}
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
