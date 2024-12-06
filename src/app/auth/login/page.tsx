'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function AuthLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Generar captcha dinámico
  const router = useRouter();

  // Generar preguntas de captcha dinámicas
  function generateCaptcha() {
    const num1 = Math.floor(Math.random() * 10) + 1; // Números del 1 al 10
    const num2 = Math.floor(Math.random() * 10) + 1;
    return {
      question: `¿Cuánto es ${num1} + ${num2}?`,
      answer: (num1 + num2).toString(),
    };
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (captchaAnswer !== captcha.answer) {
      Swal.fire({
        icon: 'error',
        title: 'Captcha incorrecto',
        text: 'Respuesta incorrecta al captcha, intenta de nuevo.',
      });
      setCaptcha(generateCaptcha()); // Regenera el captcha si falla
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

        // Obtener returnUrl de la URL o redirigir al dashboard por defecto
        const searchParams = new URLSearchParams(window.location.search);
        const returnUrl = searchParams.get('returnUrl') || '/';
        router.push(returnUrl);
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
          <label className="block text-gray-700">{captcha.question}</label>
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
