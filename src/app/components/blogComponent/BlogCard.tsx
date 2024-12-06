import { formatDistanceToNow } from 'date-fns';
import { es } from 'date-fns/locale';
import { FaLinkedin, FaHeart } from 'react-icons/fa';
import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
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

interface Comment {
  _id: string;
  postId: string;
  comment: string;
  createdAt: string;
}

export const BlogCard = ({ post }: { post: Post }) => {
  const [likes, setLikes] = useState(post.likes);
  const [dislikes, setDislikes] = useState(post.dislikes || 0);
  const [comment, setComment] = useState('');
  const [comments, setComments] = useState<Comment[]>([]);
  const [user, setUser] = useState(null); // Estado del usuario autenticado
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  // Función para verificar si el usuario está autenticado
  const fetchUser = async () => {
    try {
      const response = await fetch('/api/auth/me', { credentials: 'include' });
      if (response.ok) {
        const data = await response.json();
        setUser(data);
      } else {
        setUser(null);
      }
    } catch (error) {
      console.error('Error al verificar el usuario:', error);
      setUser(null);
    } finally {
      setLoading(false);
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

  // Manejar envío de comentario
  const handleComment = async () => {
    if (!user) {
      router.push(`/auth/login?returnUrl=/blog`);
      return;
    }

    try {
      const response = await fetch('/api/comments', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ postId: post.id, comment }),
      });

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Comentario enviado',
          showConfirmButton: false,
          timer: 1500,
        });
        setComment(''); // Limpia el comentario
        fetchComments(); // Recarga los comentarios
      } else {
        const data = await response.json();
        Swal.fire({
          icon: 'error',
          title: 'Error al enviar el comentario',
          text: data.message,
        });
      }
    } catch (error) {
      console.error('Error al enviar el comentario:', error);
    }
  };

  // Obtener comentarios del post
  const fetchComments = async () => {
    try {
      const response = await fetch(`/api/comments?postId=${post.id}`);
      if (response.ok) {
        const data = await response.json();
        setComments(data);
      } else {
        console.error('Error al obtener los comentarios');
      }
    } catch (error) {
      console.error('Error al obtener los comentarios:', error);
    }
  };

  // Cargar usuario y comentarios al montar el componente
  useEffect(() => {
    fetchUser();
    fetchComments();
  }, [post.id]);

  return (
    <div>
      <div className="bg-white rounded overflow-hidden shadow-lg">
        <article className="bg-white rounded-lg shadow-md overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-lg">
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
              href="https://www.linkedin.com"
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
                👍 {likes}
              </button>
              <button onClick={handleDislike} className="text-red-500">
                👎 {dislikes}
              </button>
            </div>

            {/* Formulario para enviar comentarios */}
            <div className="mt-6">
              <textarea
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                className="w-full border border-gray-300 rounded p-2"
                placeholder="Escribe tu comentario aquí..."
                disabled={!user && !loading}
              />
              <button
                onClick={handleComment}
                className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 mt-2"
                
              >
                {  user ? 'Enviar comentario' : 'Inicia sesión para comentar'}
              </button>
            </div>

            {/* Mostrar comentarios */}
            <div className="mt-6">
              <h2 className="text-lg font-semibold text-gray-800">Comentarios</h2>
              {comments.length > 0 ? (
                comments.map((comment) => (
                  <div key={comment._id} className="border-b py-2">
                    <p>{comment.comment}</p>
                    <small className="text-gray-500">
                      {formatDistanceToNow(new Date(comment.createdAt), { addSuffix: true, locale: es })}
                    </small>
                  </div>
                ))
              ) : (
                <p className="text-gray-600 mt-4">No hay comentarios aún. Sé el primero en comentar.</p>
              )}
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};
