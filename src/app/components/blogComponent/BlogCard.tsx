'use client';

import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

interface Post {
  id: string;
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
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<{ _id: string; comment: string; user: { name: string }; createdAt: string }[]>([]);
  const [user, setUser] = useState<{ id: string; name: string; email: string } | null>(null);
  const router = useRouter();

  // Obtener usuario autenticado
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'include' });
      if (response.ok) {
        const userData = await response.json();
        setUser(userData);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  // Manejar likes
  const handleLike = async () => {
    const newLikes = likes + 1;
    try {
      const response = await fetch('/api/like', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post.id, likes: newLikes, dislikes }),
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

  // Manejar dislikes
  const handleDislike = async () => {
    const newDislikes = dislikes + 1;
    try {
      const response = await fetch('/api/like', {
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post.id, likes, dislikes: newDislikes }),
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

  // Manejar comentarios
  const handleComment = async () => {
    if (!user) {
      Swal.fire({
        icon: 'error',
        title: 'No estás autenticado',
        text: 'Por favor, inicia sesión para comentar.',
        confirmButtonText: 'Iniciar sesión',
        showCancelButton: true,     
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        cancelButtonText: 'Cancelar',
       
       
      }).then((result) => {
        if (result.isConfirmed) {
          // El usuario hizo clic en "Iniciar sesión"
          router.push(`/auth/login?returnUrl=/blog`);
        } else if (result.dismiss === Swal.DismissReason.cancel) {
          // El usuario hizo clic en "Cancelar"
          console.log('Acción cancelada, no se redirige.');
        }
       
      }) ;
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ postId: post.id, comment, user }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Comentario enviado',
          text: 'Tu comentario se ha enviado exitosamente.',
          timer: 1500,
          showConfirmButton: false,
        });
        setComment('');
        fetchComments();
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar comentario',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  // Obtener comentarios
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${post.id}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Error al obtener los comentarios.');
      }
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  };

  useEffect(() => {
    fetchUser();
    fetchComments();
  }, [post.id]);

  return (
    <div>
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <article className="bg-white rounded-lg shadow-md overflow-hidden">
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

            <div className="flex items-center space-x-4">
              <button onClick={handleLike} className="text-green-500">
                👍 {likes}
              </button>
              <button onClick={handleDislike} className="text-red-500">
                👎 {dislikes}
              </button>
              <small className="text-gray-500">
                {formatDistanceToNow(new Date(post.date), { addSuffix: true, locale: es })}
              </small>

             
            </div>

            <p className="mt-4 text-gray-700">{post.description.substring(0, 300)}...  <a
                href={post.link}              
                rel="noopener noreferrer"
                className="text-blue-500 hover:underline"
              >
                Leer más &rarr;
              </a></p>

            {/* Formulario para comentarios */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mt-4"
              placeholder="Escribe tu comentario aquí..."
              disabled={!user}
            />
            <button
              onClick={handleComment}
              className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
            >
              Enviar comentario
            </button>

            {/* Mostrar comentarios */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Comentarios</h2>
              {comments.map((comment) => (
                <div key={comment._id} className="border-b py-2">
                  <p>{comment.comment}</p>
                  <p className="text-sm text-gray-500">Por: {comment.user.name}</p>
                  <small className="text-gray-500">
                    {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: es })}
                  </small>
                </div>
              ))}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
