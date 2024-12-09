'use client';

import { montserrat } from "@/app/config/fonts";
import Link from "next/link";
import { usePathname, useRouter } from 'next/navigation';
import './navbar.css';
import { useUIStore } from '@/app/store';
import Image from 'next/image';
import './dropdown.css'
import { IoSearchSharp } from 'react-icons/io5';
import { useEffect, useState } from 'react';
import { FiLogOut } from 'react-icons/fi';
import { FiLogIn } from 'react-icons/fi';
import { FiUserPlus } from 'react-icons/fi';
import { FiMail } from 'react-icons/fi';


export const NavbarDark = () => {

  const pathname = usePathname();
  const openMenu = useUIStore(state => state.openSideMenu);
  const router = useRouter();

  const [user, setUser] = useState<{ name: string; email: string; avatar: string; roles: string } | null>(null);
  const [loading, setLoading] = useState<boolean>(true); 

  // Consulta al backend para obtener el estado del usuario
  useEffect(() => {
    const fetchUser = async () => {
      try {
        const response = await fetch('/api/auth/me', { credentials: 'include' });

        if (response.ok) {
          const data = await response.json();
          setUser(data);

        } else {
          setUser(null);
        }
      } catch (error) {
        console.error('Error fetching user:', error);
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    fetchUser();
  }, []);

  const handleLogout = async () => {
    try {
      const response = await fetch('/api/auth/logout', { method: 'POST', credentials: 'include' });
      if (response.ok) {
        router.push('/auth/login');

      } else {
        console.error('Error logging out');
      }
    } catch (error) {
      console.error('Error logging out:', error);
    }
  };

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


          {/* DropdownList practicas */}
          <div className="  dropdown hover:bg-gray-900 hover:text-white">

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
              </div>
            </div>
          </div>


          {/* DropdownList soluciones */}
          <div className="  dropdown hover:bg-gray-900 hover:text-white">

            <Link href="" tabIndex={0} className={`  py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/soluciones' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >

              <span className="">
                <button className={`${montserrat.className}m-2 pl-3 pr-4 inline-flex justify-center rounded-md transition duration-500     ${pathname == '/soluciones' ? 'bg-gray-900' : ''}`}
                  style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <span>#MachineLearning</span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </span>
            </Link>

            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

                <div className="py-1">
                  <Link href="/soluciones/convertirse-en-comercio-minorista-basado-en-datos" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/soluciones/convertirse-en-comercio-minorista-basado-en-datos' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >La importancia de los datos</Link>

                  <Link href="/soluciones/datos" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/soluciones/datos' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >La importancia de los datos</Link>
                </div>
              </div>
            </div>
          </div>


          {/* DropdownList services */}
          <div className="  dropdown hover:bg-gray-900 hover:text-white">

            <Link href="/services" tabIndex={0} className={`  py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/services' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >

              <span className="">
                <button className={`${montserrat.className}m-2 pl-3 pr-4 inline-flex justify-center rounded-md transition duration-500     ${pathname == '/services' ? 'bg-gray-900' : ''}`}
                  style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}
                  type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117">
                  <span>Servicios  </span>
                  <svg className="w-5 h-5 ml-2 -mr-1" viewBox="0 0 20 20" fill="currentColor"><path fillRule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                </button>
              </span>
            </Link>

            <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right -translate-y-2 scale-95">
              <div className="absolute right-0 w-56 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

                <div className="py-1">
                  <Link href="/services/desarrolloweb" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/services/desarrolloweb' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Sistemas a Medida</Link>
                  <Link href="/services/e-commerce" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/services/e-commerce' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >E-commerce</Link>
                  <Link href="/services/mantenimiento-de-aplicaciones" tabIndex={0} className={`text-gray-700 flex justify-between w-full px-4 py-2 text-sm leading-5 text-left hover:bg-gray-600  hover:bg-[length:10px_10px] hover:text-white rounded transition-all ${pathname == '/services/mantenimiento-de-aplicaciones' ? 'bg-gray-900 text-white' : ''}`} role="menuitem" >Mantenimiento de Aplicaciones</Link>

                </div>
              </div>
            </div>
          </div>


          <Link href='/empresa'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/empresa' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Nosotros</span>
          </Link>


          <Link href='/blog'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/blog' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              Blog</span>  </Link>
          <Link href='/contact'>
            <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
           `} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
              <FiMail className="w-5 h-5" /></span>  </Link>
          {
            user ? (
              user.roles.includes('admin') ? (
                <Link href='/admin'>
                  <span className={`${montserrat.className}m-2 p-2 rounded-md transition duration-500   border-b border-solid border-transparent hover:border-gray-600 hover:text-text-white
            ${pathname == '/admin' ? 'bg-gray-900' : ''}`} style={{ letterSpacing: '0.1rem', fontSize: '0.9rem' }}>
                    admin</span>
                </Link>
              ) : null
            ) : null
          }

        </div>

        {
          user ? (
            loading ? (
              <span className='text-white'>Cargando...</span>
            ) : (
              <div className='flex items-center space-x-4'>
                <div className='flex items-center space-x-4'>
                  <button className='text-white font-bold py-2  rounded hover:bg-gray-900 hover:text-white' onClick={() => handleLogout()}>
                    <FiLogOut className="w-5 h-5" />
                  </button>
                </div>
                <Image
                  src={user.avatar || '/assets/img/noimage.png'}
                  alt={user.email}
                  width={30}
                  height={30}
                  className="rounded-full"
                />

                <span className='text-xs text-white font-bold'>{user.email.substring(0, 3)}...</span>

              </div>
            )
          ) : (
            <div className='flex items-center space-x-4 '>
              <Link href='/auth/login'>
                <button className='text-white font-bold py-2 rounded hover:bg-gray-900 hover:text-white'>
                  <FiLogIn className="w-5 h-5" />
                </button>
              </Link>
              <Link href='/auth/register'>
                <button className='text-white font-bold py-2 rounded hover:bg-gray-900 hover:text-white'>
                  <FiUserPlus className="w-5 h-5" />
                </button>
              </Link>
            </div>
          )
        }


        <div className='flex items-center px-4 cursor-pointer  space-x-4 '>
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
