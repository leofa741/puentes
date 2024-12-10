import React, { useState } from 'react';

interface Post {
  id: string;
  title: string;
  contenido: string[];
    link: string;
}

interface TagTreeProps {
  posts: Post[];
}

export const TagTree: React.FC<TagTreeProps> = ({ posts }) => {
  const [expandedTags, setExpandedTags] = useState<Record<string, boolean>>({});

  // Obtener los tags únicos
  const tags = Array.from(new Set(posts.flatMap(post => post.contenido)));

  // Inicializar los tags como colapsados
  const toggleTag = (tag: string) => {
    setExpandedTags(prev => ({
      ...prev,
      [tag]: !prev[tag],
    }));
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-6">Explorar por Tags</h2>
      {tags.map(tag => (
        <div key={tag} className="mb-4">
          <button
            onClick={() => toggleTag(tag)}
            className="flex justify-between w-full bg-blue-100 px-4 py-2 rounded-lg text-left text-lg font-semibold text-blue-600 hover:bg-blue-200"
          >
            {tag}
            <span>{expandedTags[tag] ? '−' : '+'}</span>
          </button>
          {expandedTags[tag] && (
            <div className="mt-2 pl-4 border-l-2 border-blue-300">
              {posts
                .filter(post => post.contenido.includes(tag))
                .map(post => (
                  <div key={post.id} className="mb-2">
                    <a
                      href={`${post.link}`}
                      className="text-blue-500 hover:underline"
                    >
                      {post.title}
                    </a>
                  </div>
                ))}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};
