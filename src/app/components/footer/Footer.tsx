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
