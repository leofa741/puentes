'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import Swal from 'sweetalert2';

export default function AuthLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [captchaAnswer, setCaptchaAnswer] = useState('');
  const [captcha, setCaptcha] = useState(generateCaptcha()); // Generar captcha dinámico
  const [loginAttempts, setLoginAttempts] = useState(0); // Rastrea los intentos de login
  const [isLocked, setIsLocked] = useState(false); // Controla si el botón está bloqueado
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

    if (isLocked) {
      return; // Si está bloqueado, no se permite continuar
    }

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

        const searchParams = new URLSearchParams(window.location.search);
        const returnUrl = searchParams.get('returnUrl') || '/';
        router.push(returnUrl);
      } else {
        setLoginAttempts((prev) => {
          const attempts = prev + 1;
          if (attempts >= 3) {
            setIsLocked(true); // Bloquea el botón después de 3 intentos fallidos
            Swal.fire({
              icon: 'warning',
              title: 'Demasiados intentos fallidos',
              text: 'Has alcanzado el límite de intentos. Por favor, contacta al soporte.',
              confirmButtonText: ' Recuperar contraseña',
              confirmButtonColor: '#3085d6',
            }).then((result) => {
              if (result.isConfirmed) {
                router.push('/auth/forgot-password'); // Redirige a la página de recuperación
              }
            });
          }
          return attempts;
        });
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
            disabled={isLocked} // Deshabilita el campo si está bloqueado
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
            disabled={isLocked} // Deshabilita el campo si está bloqueado
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
            disabled={isLocked} // Deshabilita el campo si está bloqueado
          />
        </div>
        <button
          type="submit"
          className={`w-full px-4 py-2 rounded text-white ${
            isLocked ? 'bg-gray-500 cursor-not-allowed' : 'bg-blue-500 hover:bg-blue-600'
          }`}
          disabled={isLocked} // Deshabilita el botón si está bloqueado
        >
          {isLocked ? 'Bloqueado' : 'Iniciar sesión'}
        </button>
      </form>

      <p className="mt-4">
        ¿Olvidaste tu contraseña?{' '}
        <a href="/auth/forgot-password" className="text-blue-500 hover:underline">
          Recupérala aquí
        </a>
      </p>

      <p className="mt-4">
        ¿No tienes una cuenta?{' '}
        <a href="/auth/register" className="text-blue-500 hover:underline">
          Regístrate
        </a>
      </p>
    </div>
  );
}
