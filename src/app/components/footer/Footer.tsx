import React from 'react'
import { BsTwitterX } from "react-icons/bs";
import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin,  } from 'react-icons/io5'
import './footer.css'

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
  <>
  <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
  <div className="container  sm:mx-auto px-4">
    {/* <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4 justify-between items-center">
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 className="text-xl font-bold mb-6">Nosotros</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Misión & Visión</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Fundadores</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Equipo</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Politicas</a>
          </li>
       
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Servicios</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">E-commerce</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Bases de datos</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">DevOps</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Consultoria</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Links</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="/" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Home</a>
          </li>
          <li className="mb-2">
            <a href="/practicas/innovacion" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Practicas</a>
          </li>
          <li className="mb-2">
            <a href="/services" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">servicios</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contacto</a>
          </li>
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 md:mt-0">
        <h5 className="text-xl font-bold mb-6">Help</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Support</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Help Center</a>
          </li>
          <li className="mb-2">
            <a href="/contact" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Contactos</a>
          </li>
        </ul>
      </div>


   

    </div> */}

    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-3 sm:mt-12 sm:pt-12 border-t">
      
     
      <div className="copyright ">
            <a className="mb-0"> ©  2009 - {year} Puentes.Digitales. All rights reserved.    </a>            
        </div>
      
        <div className="pl-6  sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
      
        <div className="flex sm:justify-center xl:justify-items-end">
          <a href="">
            <IoLogoFacebook 
            className='w-7 h-7  rounded-full text-gray-600 hover:text-white  hover:bg-black hover:border-black'  />
          </a>
          <a href="" >
            <IoLogoInstagram 
            className='w-7 h-7  rounded-lg text-gray-600 hover:text-white  hover:bg-black hover:border-black'/>
          </a>
          <a href="" >
            <IoLogoLinkedin
            className='w-7 h-7 rounded-lg text-gray-600 hover:text-white hover:bg-black hover:border-black'/>
          </a>
          <a href="" >
            <IoLogoGoogle
            className='w-7 h-7  rounded-lg text-gray-600 hover:text-white hover:bg-black hover:border-black' />
          </a>
          <a href="" >
            <BsTwitterX  
            className='w-7 h-7 rounded-lg text-gray-600 hover:text-white hover:bg-black hover:border-black' />
          </a>
        </div>
      </div>

     
    </div>
  </div>
</footer>
  </>
  )
}
