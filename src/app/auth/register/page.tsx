'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
    profile: {
      name: '',
      avatar: '', // URL de la imagen subida
    },
  });
  const [selectedFile, setSelectedFile] = useState<File | null>(null); // Archivo seleccionado
  const [error, setError] = useState<string | null>(null);
  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    if (name === 'name') {
      setFormData((prev) => ({
        ...prev,
        profile: { ...prev.profile, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setSelectedFile(file); // Guardar el archivo seleccionado
    }
  };

  const uploadImage = async (): Promise<string | null> => {
    if (!selectedFile) return null;

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await fetch('/api/upload', {
        method: 'POST',
        body: formData,
      });

      const data = await response.json();
      if (response.ok) {
        return data.url; // URL de la imagen en Cloudinary o almacenamiento elegido
      } else {
        setError(data.message || 'Error al subir la imagen');
        return null;
      }
    } catch (error) {
      console.error('Error al subir la imagen:', error);
      setError('Error al subir la imagen');
      return null;
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);
  
    // Deshabilitar el botón mientras se procesa
    const submitButton = document.querySelector('button[type="submit"]') as HTMLButtonElement;
    if (submitButton) submitButton.disabled = true;
  
    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      if (submitButton) submitButton.disabled = false;
      return;
    }
  
    // Subir imagen si se seleccionó una
    if (selectedFile) {
      const avatarUrl = await uploadImage();
      if (avatarUrl) {
        formData.profile.avatar = avatarUrl; // Asignar URL al avatar
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: 'No se pudo subir el avatar.',
        });
        if (submitButton) submitButton.disabled = false;
        return;
      }
    }
  
    try {
      const response = await fetch('/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
          profile: formData.profile,
        }),
      });
  
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Usuario registrado',
          showConfirmButton: false,
          timer: 1500,
        });
        router.push('/auth/login'); // Redirigir al login
      } else {
        const data = await response.json();
        setError(data.message || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Error al registrar el usuario');
    } finally {
      if (submitButton) submitButton.disabled = false;
    }
  };
  

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-6">
      <div className="bg-white shadow-lg rounded-lg p-8 max-w-lg w-full">
        <h1 className="text-2xl font-bold mb-5">Registrar Nuevo Usuario</h1>
        <form onSubmit={handleSubmit} className="space-y-6">
          {error && <div className="text-red-500">{error}</div>}
          <div>
            <label className="block text-gray-700">Email</label>
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Nombre</label>
            <input
              type="text"
              name="name"
              value={formData.profile.name}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700 mb-2">Avatar</label>
            <input
              type="file"
              accept="image/*"
              onChange={handleFileChange}
              className="w-full border border-gray-300 rounded p-2"
            />
          </div>
          <div>
            <label className="block text-gray-700">Contraseña</label>
            <input
              type="password"
              name="password"
              value={formData.password}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <div>
            <label className="block text-gray-700">Confirmar Contraseña</label>
            <input
              type="password"
              name="confirmPassword"
              value={formData.confirmPassword}
              onChange={handleChange}
              className="w-full border border-gray-300 rounded p-2"
              required
            />
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
          >
            Registrar
          </button>
        </form>

        <p className="mt-4 text-center">
          ¿Ya tienes una cuenta?{' '}
          <a href="/auth/login" className="text-blue-500 hover:underline">
            Inicia sesión
          </a>
        </p>
      </div>
    </div>
  );
};

export default RegisterForm;
