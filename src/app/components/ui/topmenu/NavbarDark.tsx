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
import { DropDownList } from './DropDownList';

import './dropdown.css'
import { IoIosArrowDown } from 'react-icons/io';


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
              <span className={`${montserrat.className} text-white  font-bold`} style={{ letterSpacing: '0.1rem', }}> PUENTES <span className='text-white font-bold' style={{ letterSpacing: '0.1rem' }}>  DIGITALES</span>  </span>
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


          {/* DropdownList */}
          <div className="  dropdown hover:bg-gray-900 hover:text-white">

            {/* 
          <span className="rounded-md shadow-sm">
        
        <button className="inline-flex justify-center w-full px-4 py-2 text-sm font-medium leading-5 text-gray-700 transition duration-150 ease-in-out border border-gray-300 rounded-md hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800" 
       type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
        <span>Prácticas</span>
        <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
       
        </button>
        
        </span> */}


            <Link href="/practicas" tabIndex={0} className={`  py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >

              <span className="">
                <button className={`${montserrat.className}m-2 pl-3 pr-4 inline-flex justify-center rounded-md transition duration-500     ${pathname == '/practicas' ? 'bg-gray-900' : ''}`}
                  style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <span>Prácticas  </span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </span>
            </Link>


            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

                <div className="py-1">
                  <Link href="/practicas/innovacion" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/innovacion' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Innovación</Link>
                  <Link href="/practicas/descubrimiento" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/descubrimiento' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Descubrimiento</Link>
                  <Link href="/practicas/integracion" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/integracion' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Integración</Link>
                  <Link href="/practicas/equipo" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/equipo' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Equipo</Link>
                  <Link href="/practicas/devops" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/devops' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >DevOps</Link>
                  <Link href="/practicas/calidad" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/practicas/calidad' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Calidad</Link>
                </div>

                {/* <div className="py-1">
                  <a href="javascript:void(0)" tabIndex={3} className="text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left" role="menuitem" >Sign out</a>
                  </div> */}
              </div>
            </div>
          </div>

          <Link href='/soluciones'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
           ${pathname == '/soluciones' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Soluciones</span>
          </Link>

          <Link href='/services'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
           ${pathname == '/services' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}> Servicios</span>
          </Link>

          <Link href='/empresa'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/empresa' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Nosotros</span>
          </Link>
          <Link href='/contact'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/contact' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Contacto</span>  </Link>
        </div>

        <div className='flex items-center px-4 cursor-pointer  space-x-4 '>
          <Link href='/search'>
            <IoSearchSharp className='w-6 h-6' />
          </Link>

          <button className=' text-white font-bold py-2 px-4 rounded   visible xl:invisible lg:invisible md:invisible sm:block ' onClick={() => openMenu()}  >
            <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
              <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16M4 18h16' />
            </svg>

          </button>

        </div>
      </nav>
    </>
  );
}
