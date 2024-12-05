'use client';
// ruta app/(shop)/blog/create-blog/page.tsx

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageFile: null as File | null, // Campo para la imagen
    date: '',
    contenido: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files?.[0]) {
      setFormData({ ...formData, imageFile: e.target.files[0] });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      // Subir la imagen
      let imageUrl = '';
      if (formData.imageFile) {
        const uploadData = new FormData();
        uploadData.append('file', formData.imageFile);

        const uploadResponse = await fetch('/api/upload', {
          method: 'POST',
          body: uploadData,
        });

        if (uploadResponse.ok) {
          const uploadResult = await uploadResponse.json();
          imageUrl = uploadResult.url;
        } else {
          throw new Error('Error al subir la imagen');
        }
      }

      // Enviar datos del blog
      const blogResponse = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          imageUrl,
          contenido: formData.contenido.split(',').map(tag => tag.trim()), // Convierte el string de contenido en un array
        }),
      });

      if (blogResponse.ok) {
        alert('Blog creado exitosamente');
        router.push('/blog'); // Redirigir a la página de blogs
      } else {
        alert('Error al crear el blog');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
    }
  };

  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-2xl font-bold mb-5">Crear Nuevo Blog</h1>
      <form onSubmit={handleSubmit} className="space-y-5">
        <div>
          <label className="block text-gray-700">Título</label>
          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Subtítulo</label>
          <input
            type="text"
            name="subtitle"
            value={formData.subtitle}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Descripción</label>
          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            rows={5}
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Imagen</label>
          <input
            type="file"
            name="imageFile"
            onChange={handleFileChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Fecha</label>
          <input
            type="date"
            name="date"
            value={formData.date}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Contenido (separado por comas)</label>
          <input
            type="text"
            name="contenido"
            value={formData.contenido}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <button
          type="submit"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Crear Blog
        </button>
      </form>
    </div>
  );
};

export default CreateBlog;
