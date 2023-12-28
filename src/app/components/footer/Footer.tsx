import React from 'react'

import { IoLogoFacebook, IoLogoGoogle, IoLogoInstagram, IoLogoLinkedin, IoLogoTwitter, IoLogoXing } from 'react-icons/io5'
import './footer.css'

export const Footer = () => {

  const year = new Date().getFullYear()
  return (
  <>
  <footer className="footer-1 bg-gray-100 py-8 sm:py-12">
  <div className="container mx-auto px-4">
    <div className="sm:flex sm:flex-wrap sm:-mx-4 md:py-4">
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6">
        <h5 className="text-xl font-bold mb-6">Features</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Cool stuff</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Random feature</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Team feature</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Stuff for developers</a>
          </li>
       
        </ul>
      </div>
      <div className="px-4 sm:w-1/2 md:w-1/4 xl:w-1/6 mt-8 sm:mt-0">
        <h5 className="text-xl font-bold mb-6">Resources</h5>
        <ul className="list-none footer-links">
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Resource name</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Another resource</a>
          </li>
          <li className="mb-2">
            <a href="#" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Final resource</a>
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
            <a href="/practicas" className="border-b border-solid border-transparent hover:border-purple-800 hover:text-purple-800">Practicas</a>
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
      <div className="px-4 mt-4 sm:w-1/3 xl:w-1/6 sm:mx-auto xl:mt-0 xl:ml-auto">
        <h5 className="text-m font-bold mb-6 sm:text-center xl:text-left">Estamos en las redes</h5>
        <div className="flex sm:justify-center xl:justify-start">
          <a href="">
            <IoLogoFacebook 
            className='w-9 h-9 rounded-full text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600'  />
          </a>
          <a href="" >
            <IoLogoInstagram 
            className='w-9 h-9 rounded-lg text-gray-600 hover:text-white hover:bg-red-600 hover:border-red-600' />
          </a>
          <a href="" >
            <IoLogoLinkedin
            className='w-9 h-9 rounded-lg text-gray-600 hover:text-white hover:bg-green-600 hover:border-green-600' />
          </a>
          <a href="" >
            <IoLogoGoogle
            className='w-9 h-9 rounded-lg text-gray-600 hover:text-white hover:bg-yellow-600 hover:border-yellow-600' />
          </a>
          <a href="" >
            <IoLogoTwitter
            className='w-9 h-9 rounded-lg text-gray-600 hover:text-white hover:bg-blue-600 hover:border-blue-600' />
          </a>
        </div>
      </div>
    </div>

    <div className="sm:flex sm:flex-wrap sm:-mx-4 mt-6 pt-3 sm:mt-12 sm:pt-12 border-t">
      
     
      <div className="copyright ">
            <a className="mb-0"> ©  2009 - {year} Puentes.Digitales. All rights reserved.    </a>            
        </div>
      
    
     
    </div>
  </div>
</footer>
  </>
  )
}
