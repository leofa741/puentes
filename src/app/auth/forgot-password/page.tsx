'use client';

import { useState } from 'react';
import Swal from 'sweetalert2';

export default function ForgotPassword() {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch('/api/auth/forgot-password', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();
      if (response.ok) {
        Swal.fire({
          icon: 'success',
          title: 'Correo enviado',
          text: 'Revisa tu correo para continuar.',
        });
        setEmail('');
      } else {
        Swal.fire({
          icon: 'error',
          title: 'Error',
          text: data.message,
        });
      }
    } catch (error) {
      Swal.fire({
        icon: 'error',
        title: 'Error en el servidor',
        text: 'No se pudo procesar la solicitud.',
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen">
      <form onSubmit={handleSubmit} className="w-96 bg-white p-6 shadow-md rounded-lg">
        <h1 className="text-2xl font-bold mb-4">Recuperar Contraseña</h1>
        <p className="text-gray-600 mb-4">
          Ingresa tu correo y te enviaremos un enlace para restablecer tu contraseña.
        </p>
        <input
          type="email"
          className="w-full p-2 border rounded mb-4"
          placeholder="Correo electrónico"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className={`w-full p-2 rounded bg-blue-500 text-white ${
            loading ? 'opacity-50 cursor-not-allowed' : 'hover:bg-blue-600'
          }`}
          disabled={loading}
        >
          {loading ? 'Enviando...' : 'Enviar Enlace'}
        </button>
      </form>
    </div>
  );
}
