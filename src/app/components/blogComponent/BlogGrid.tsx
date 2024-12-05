import React from 'react'
import { BlogCard } from './BlogCard';

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
}

export const BlogGrid = ({ posts }: { posts: Post[] }) => {
    return (
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {posts.map((post) => (
            <div key={post.id}>
              {/* Asegúrate de que el `key` esté en el nivel más alto */}
              <BlogCard post={post} />
            </div>
          ))}
        </div>
      );
    };