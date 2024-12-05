'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation'; // Asegúrate de usar `next/navigation`

const CreateBlog = () => {
  const [formData, setFormData] = useState({
    title: '',
    subtitle: '',
    description: '',
    imageUrl: '',
    link: '',
    date: '',
    contenido: '',
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    console.log('Datos enviados al backend:', formData);
  
    try {
      const response = await fetch('/api/blog', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          ...formData,
          contenido: formData.contenido.split(',').map(tag => tag.trim()), // Convierte el string de contenido en un array
        }),
      });
  
      if (response.ok) {
        alert('Blog creado exitosamente');
        router.push('/blog'); // Redirigir a la página de blogs o donde desees
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
          <label className="block text-gray-700">URL de la Imagen</label>
          <input
            type="text"
            name="imageUrl"
            value={formData.imageUrl}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded p-2"
          />
        </div>
        <div>
          <label className="block text-gray-700">Enlace</label>
          <input
            type="text"
            name="link"
            value={formData.link}
            onChange={handleChange}
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
