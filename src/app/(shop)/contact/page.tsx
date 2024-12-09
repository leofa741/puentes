"use client"
import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'

import { useState } from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import Swal from 'sweetalert2';




export default function Contact() {

 const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target;
    setFormData({ ...formData, [id]: value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (response.ok) {
        Swal.fire({
          icon: "success",
          title: "Mensaje enviado",
          text: "Tu mensaje ha sido enviado correctamente. Te responderemos pronto.",
        });
        setFormData({ name: "", email: "", message: "" });
      } else {
        Swal.fire({
          icon: "error",
          title: "Error",
          text: data.message || "Hubo un problema al enviar tu mensaje. Intenta de nuevo.",
        });
      }
    } catch (error) {
      Swal.fire({
        icon: "error",
        title: "Error del servidor",
        text: "No se pudo enviar tu mensaje. Intenta más tarde.",
      });
      console.error("Error al enviar el mensaje:", error);
    } finally {
      setLoading(false);
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
              <p className="text-lg">Monte Grande, Buenos Aires, Argentina</p>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="mt-8 w-full max-w-lg mx-auto bg-white p-8 shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-6 text-center">Formulario de Contacto</h2>
      <div className="mb-4">
        <label htmlFor="name" className="block text-gray-700 text-sm font-bold mb-2">
          Nombre
        </label>
        <input
          id="name"
          type="text"
          value={formData.name}
          onChange={handleChange}
          placeholder="Tu nombre"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="email" className="block text-gray-700 text-sm font-bold mb-2">
          Correo Electrónico
        </label>
        <input
          id="email"
          type="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="Tu correo electrónico"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <div className="mb-4">
        <label htmlFor="message" className="block text-gray-700 text-sm font-bold mb-2">
          Mensaje
        </label>
        <textarea
          id="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="Escribe tu mensaje aquí"
          required
          className="w-full p-2 border rounded"
        />
      </div>
      <button
        type="submit"
        className={`w-full p-2 text-white bg-blue-500 rounded ${
          loading ? "opacity-50 cursor-not-allowed" : "hover:bg-blue-600"
        }`}
        disabled={loading}
      >
        {loading ? "Enviando..." : "Enviar"}
      </button>
    </form>
         
        </div>


      </div>
      <BanerServicesContact />
    </>
  )
}


