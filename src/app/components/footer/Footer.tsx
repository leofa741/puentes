import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin,  } from 'react-icons/io5'
import './footer.css'

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
  <>
<footer className="bg-gray-900 text-gray-300 py-12">
  <div className="container mx-auto px-4 sm:px-8">
    <div className="flex flex-wrap justify-between items-start mb-8">
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
        <h5 className="text-lg font-semibold text-white mb-4">Nosotros</h5>
        <ul className="space-y-2">       
          <li><a href="/empresa" className="hover:text-purple-400">Fundadores</a></li>
          <li><a href="/empresa" className="hover:text-purple-400">Equipo</a></li>
          
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
        <h5 className="text-lg font-semibold text-white mb-4">Servicios</h5>
        <ul className="space-y-2">
          <li><a href="/services/e-commerce" className="hover:text-purple-400">E-commerce</a></li>
          <li><a href="#" className="hover:text-purple-400">Bases de Datos</a></li>
          <li><a href="/services/mantenimiento-de-aplicaciones" className="hover:text-purple-400">Refactorización</a></li>
          <li><a href="/services/desarrolloweb" className="hover:text-purple-400">Consultoría</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
        <h5 className="text-lg font-semibold text-white mb-4">Enlaces</h5>
        <ul className="space-y-2">
          <li><a href="/" className="hover:text-purple-400">Home</a></li>
          <li><a href="/practicas/innovacion" className="hover:text-purple-400">Prácticas</a></li>
          <li><a href="/services" className="hover:text-purple-400">Servicios</a></li>
          <li><a href="/contact" className="hover:text-purple-400">Contacto</a></li>
        </ul>
      </div>
      <div className="w-full sm:w-1/2 md:w-1/4 mb-6">
        <h5 className="text-lg font-semibold text-white mb-4">Ayuda</h5>
        <ul className="space-y-2">
          <li><a href="/soporte" className="hover:text-purple-400">Soporte</a></li>
          <li><a href="/ayuda" className="hover:text-purple-400">Centro de Ayuda</a></li>
          <li><a href="/contact" className="hover:text-purple-400">Contactos</a></li>
        </ul>
      </div>
    </div>

    <div className="border-t border-gray-700 pt-8 flex flex-col sm:flex-row items-center justify-between">
      <p className="text-sm">&copy; 2009 - {new Date().getFullYear()} Puentes.Digitales. Todos los derechos reservados.</p>
      <div className="flex space-x-4 mt-4 sm:mt-0">
        <a href="#" className="text-gray-400 hover:text-white">
          <IoLogoFacebook className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <IoLogoInstagram className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <IoLogoLinkedin className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <IoLogoGoogle className="w-6 h-6" />
        </a>
        <a href="#" className="text-gray-400 hover:text-white">
          <BsTwitterX className="w-6 h-6" />
        </a>
      </div>
    </div>
  </div>
</footer>

  </>
  )
}
