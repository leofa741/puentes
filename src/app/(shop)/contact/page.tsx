"use client"
import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';




export default function Contact() {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const res = await fetch('/send-email.ts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(formData),
      
       
      });

      if (res.ok) {
        setSubmitted(true);
        setFormData({
          name: '',
          email: '',
          message: ''
        });
      } else {
        const errorData = await res.json();
        throw new Error(errorData.error || 'Error al enviar el correo');
      }
    } catch (error: any) {
      console.log(error);
      setError(error.message);
    }
  };



  return (
    <>
  <div >
      <div className="titleheader w-full">
        <Title title="Contactos" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Contactos"
        descripcion="Puentech"
        video='/assets/videos/siguenos.mp4'
      />
      <div className="flex px-4 mx-auto sm:px-6 lg:px-8 w-full max-w-[1500px]">
        <article className="mx-auto w-full text-center">
          <h1 className="font-bold text-4xl sm:text-5xl">Puentech</h1>
          <div className="mt-8">
            <span className="font-extrabold text-[#009FFF] text-xl sm:text-5xl">Contactos</span>
            <p className="mt-2 text-xl sm:text-2xl">Conáctanos para más información</p>
          </div>
        </article>
      </div>
      <div className="flex flex-col items-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          <div className="flex flex-col items-center">
            <FaPhone className="text-[#009FFF] text-4xl mb-2" />
            <h2 className="text-xl font-bold">Teléfono</h2>
            <p className="text-lg">+54 (911) 4146-1312</p>
          </div>
          <div className="flex flex-col items-center">
            <FaEnvelope className="text-[#009FFF] text-4xl mb-2" />
            <h2 className="text-xl font-bold">Correo Electrónico</h2>
            <p className="text-lg">infoplataformaweb@gmail.com</p>
          </div>
          <div className="flex flex-col items-center">
            <FaMapMarkerAlt className="text-[#009FFF] text-4xl mb-2" />
            <h2 className="text-xl font-bold">Dirección</h2>
            <p className="text-lg">Buenos Aires, Argentina</p>
          </div>
        </div>
        <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
          <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h2>
          {submitted && <p className="text-green-500 text-center">Mensaje enviado con éxito!</p>}
          {error && <p className="text-red-500 text-center">Error: {error}</p>}
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
              Nombre
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="name"
              type="text"
              value={formData.name}
              onChange={handleChange}
              placeholder="Tu nombre"
              required
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
              Correo Electrónico
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Tu correo electrónico"
              required
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
              Mensaje
            </label>
            <textarea
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              id="message"
              rows={4}
              value={formData.message}
              onChange={handleChange}
              placeholder="Escribe tu mensaje aquí"
              required
            ></textarea>
          </div>
          <div className="flex items-center justify-center">
            <button
              className="bg-[#009FFF] hover:bg-[#007ACC] text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
              type="submit"
            >
              Enviar
            </button>
          </div>
        </form>
      </div>
      <BanerServicesContact />
  
    </div>
    </>
  )
}


