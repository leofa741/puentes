'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function AuthLogin() {
  
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captchaQuestion] = useState('¿Cuánto es 2 + 3?'); // Pregunta fija
  const correctAnswer = '5'; // Respuesta correcta
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaAnswer !== correctAnswer) {
      Swal.fire({
        icon: 'error',
        title: 'Captcha incorrecto',
        text: 'Respuesta incorrecta al captcha, intenta de nuevo.',
      });
      return;
    }

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Login exitoso',
          showConfirmButton: false,
          timer: 1500,
        });
        document.cookie = `token=${data.token}; path=/`;
        router.push('/'); // Redirige al dashboard o página principal
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error en el login',
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el servidor',
        text: 'Por favor, intenta nuevamente.',
      });
      console.error('Error en el login:', error);
    }
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-center p-6">
      <h1 className="text-4xl font-bold mb-6">Puentech - Login</h1>
      <form onSubmit={handleSubmit} className="w-full max-w-sm space-y-4">
        <div>
          <label className="block text-gray-700">Correo electrónico</label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">Contraseña</label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <div>
          <label className="block text-gray-700">{captchaQuestion}</label>
          <input
            type="text"
            value={captchaAnswer}
            onChange={(e) => setCaptchaAnswer(e.target.value)}
            className="w-full border border-gray-300 rounded p-2"
            required
          />
        </div>
        <button
          type="submit"
          className="w-full bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
        >
          Iniciar sesión
        </button>
      </form>
    </div>
  );
}
