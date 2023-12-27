'use client';
import { IoCartSharp, IoSearchSharp } from 'react-icons/io5'
import { montserrat } from "@/app/config/fonts";
import Link from "next/link";
import { Button } from '@material-tailwind/react';
import { useRouter } from 'next/router';
import { usePathname } from 'next/navigation';
import './navbar.css';
import { useUIStore } from '@/app/store';
import Image from 'next/image';



export const NavbarDark = () => {

  const pathname = usePathname();
  const openMenu = useUIStore(state => state.openSideMenu);

  return (
    <>
      <nav className=' flex justify-between items-center h-16 bg-black text-white relative shadow-sm hover:shadow-2xl  hover:bg-blue-gray-900 -500 fast-out-slow-in z-100 transition duration-500 ease-in-out' role='navigation'
        style={{
          position: 'sticky',
          top: '0',
          zIndex: '1000',
        }}
      >

        <div className='px-3 cursor-pointer '>
          <Link href='/' passHref>
            <div className='tittle'>
              <span className={`${montserrat.className}text-black  font-bold`} style={{ letterSpacing: '0.1rem', }}> PUENTES <span className='text-white font-bold' style={{ letterSpacing: '0.1rem' }}>  DIGITALES</span>  </span>
            </div>
            <div className='subtittle' >
              <span >Deploying ideeas</span>
            </div>
            <div className='image' >
              <Image src='/assets/img/logo.png'
               width={30} height={30} alt='logo' className='rounded-full hover:shadow-2xl' />
            </div>


          </Link>
        </div>

        <div className=' hidden sm:flex md:flex lg:flex xl:flex 2xl:flex items-center space-x-4 '>


          <Link href='/practicas' passHref >
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/practicas' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>Nuestras Prácticas</span>
          </Link>
          <Link href='/soluciones'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
           ${pathname == '/soluciones' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Soluciones</span>
          </Link>
          <Link href='/empresa'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/empresa' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Nosotros</span>
          </Link>
          <Link href='/services'>
            <span className={`${montserrat.className}m-2 p-2rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/services' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Servicios</span>  </Link>
          <Link href='/contact'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/contact' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Contacto</span>  </Link>
        </div>

        <div className='flex items-center px-4 cursor-pointer  space-x-4 '>


          <Link href='/search'>
            <IoSearchSharp className='w-6 h-6' />
          </Link>


          <button className=' text-white font-bold py-2 px-4 rounded  '  onClick={() => openMenu()}  >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>

          </button>




        </div>
      </nav>
    </>
  );
}
