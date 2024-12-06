'use client';

import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import React, { useState, useEffect } from 'react';
import Image from 'next/image';
import Swal from 'sweetalert2';
import { useRouter } from 'next/navigation';

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

  // Obtener el usuario autenticado
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'include' });
      if (response.ok) {
        const userData = await response.json();
        console.log('Usuario autenticado:', userData);
        setUser(userData);
      } else {
        console.log('No se encontró un usuario autenticado.');
        setUser(null);
      }
    } catch (error) {
      console.error('Error al obtener el usuario:', error);
    }
  };

  // Manejar el envío de comentarios
  const handleComment = async () => {
    if (!user) {
      // Mostrar alerta y redirigir al login
      Swal.fire({
        icon: 'error',
        title: 'No estás autenticado',
        text: 'Por favor, inicia sesión para comentar.',
        confirmButtonText: 'Iniciar sesión',
        timer: 5000,
      }).then((result) => {
        if (result.isConfirmed || result.dismiss) {
          // Redirigir al login con returnUrl
          router.push(`/auth/login?returnUrl=/blog`);
        }
      });
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
      console.log('Respuesta del servidor al enviar comentario:', data);
  
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
        console.error('Error del servidor al enviar comentario:', data);
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error interno',
        text: 'Hubo un problema al enviar tu comentario. Inténtalo de nuevo.',
      });
      console.error('Error al enviar el comentario:', error);
    }
  };
  
  // Obtener comentarios
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${post.id}`);
      if (response.ok) {
        const data = await response.json();
        console.log('Comentarios obtenidos:', data);
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

            {/* Formulario para comentarios */}
            <textarea
              value={comment}
              onChange={(e) => setComment(e.target.value)}
              className="w-full border border-gray-300 rounded p-2 mt-4"
              placeholder="Escribe tu comentario aquí..."
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
