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
        return data.url; // URL de la imagen en Cloudinary
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

    if (formData.password !== formData.confirmPassword) {
      setError('Las contraseñas no coinciden');
      return;
    }

    // Subir imagen si se seleccionó una
    const avatarUrl = await uploadImage();
    if (avatarUrl) {
      formData.profile.avatar = avatarUrl; // Asignar URL al avatar
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
        router.push('/auth/login'); // Redirigir al login o a otra página
      } else {
        const data = await response.json();
        setError(data.message || 'Error al registrar el usuario');
      }
    } catch (error) {
      console.error('Error al enviar el formulario:', error);
      setError('Error al registrar el usuario');
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
  <div className="relative">
    <input
      type="file"
      accept="image/*"
      onChange={(event) => {
        const fileLabel = document.getElementById("fileLabelText");
        const file = event.target.files ? event.target.files[0] : null;
        if (file) {
          if (fileLabel) {
            fileLabel.textContent = `Archivo seleccionado: ${file.name}`;
          }
        } else {
          if (fileLabel) {
            fileLabel.textContent = "Seleccionar archivo";
          }
        }
      }}
      className="hidden"
      id="fileInput"
    />
    <label
      htmlFor="fileInput"
      className="flex items-center justify-center gap-2 w-full px-4 py-2 text-white bg-blue-500 rounded cursor-pointer hover:bg-blue-600 focus:ring-2 focus:ring-blue-400 text-xs"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={2}
        stroke="currentColor"
        className="w-5 h-5"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M12 16v-4m0 0V8m0 4h4m-4 0H8m12-3a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
      <span id="fileLabelText">Seleccionar archivo</span>
    </label>
  </div>
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
      </div>
    </div>
  );
};

export default RegisterForm;