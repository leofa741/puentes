'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { IoCloseOutline, IoConstructOutline, IoHomeOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import { useUIStore } from '@/app/store';
import { IoIosArrowBack, IoIosArrowDown } from "react-icons/io";
import { montserrat } from '@/app/config/fonts';
import './dropdownsider.css';
import { Button } from '@material-tailwind/react';


export const Sidebar = () => {

  const isSideMenuOpen = useUIStore(state => state.isSideMenuOpen);
  const closeMenu = useUIStore(state => state.closeSideMenu);


  return (
    <div

    >
      {/* Button */}

      {/* Background black */}
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />

        )
      }


      {/* Blur */}
      {
        isSideMenuOpen && (
          <div
            onClick={closeMenu}
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-transparent backdrop-filter backdrop-blur-sm"
          />

        )
      }

      {/* Sidemenu */}
      <nav style={{ zIndex: '10010' }}
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[200px] h-screen bg-white z-20 transition-all duration-500 ease-in-out overflow-y-auto ",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }>


        <IoCloseOutline
          size={28}
          className="absolute top-5 right-5 cursor-pointer"
          onClick={() => closeMenu()}
        />




        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-10" />
        <Link href="/" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
          <IoHomeOutline size={18} />&nbsp;&nbsp;
          <span className={`${montserrat.className}ml-3 text-l`} onClick={() => closeMenu()}>Home</span>
        </Link>

        {/* DropdownList practicas */}
        <div className=" dropdown">
          <span className="">
            <button className="flex justify-center p-2 transition duration-150 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117  ">
              <IoIosArrowDown size={18} />
              <span className={`${montserrat.className}ml-3 text-l`}>&nbsp;&nbsp;Prácticas</span>
            </button>
          </span>


          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right translate-y-2 scale-95">
            <div className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

              <div className="py-1">
                <Link href="/practicas" className="flex items-center mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Practicas</span>
                </Link>
                <Link href="/practicas/innovacion" className="flex items-center-mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Innovación</span>
                </Link>
                <Link href="/practicas/descubrimiento" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Descubrimiento</span>
                </Link>
                <Link href="/practicas/integracion" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Integración</span>
                </Link>
                <Link href="/practicas/equipo" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Equipo</span>
                </Link>
                <Link href="/practicas/devops" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>DevOps</span>
                </Link>
                <Link href="/practicas/calidad" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Calidad</span>
                </Link>

              </div>

            </div>
          </div>
        </div>



        {/* DropdownList soluciones */}
        <div className=" dropdown">
          <span className="">
            <button className="flex justify-center p-2 transition duration-150 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117  ">
              <IoIosArrowDown size={18} />
              <span className={`${montserrat.className}ml-3 text-l`}>&nbsp;&nbsp;#MachineLearning</span>
            </button>
          </span>

          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right translate-y-2 scale-95">
            <div className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

              <div className="py-1">
                <Link href="/soluciones/convertirse-en-comercio-minorista-basado-en-datos" className="flex items-center mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Comercio minorista basado en datos</span>
                </Link>
                <Link href="/soluciones/datos" className="flex items-center-mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>La importancia de los datos</span>
                </Link>

              </div>
            </div>
          </div>
        </div>


        <Link href="/empresa" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
          <IoIosArrowDown size={18} />&nbsp;&nbsp;
          <span className={`${montserrat.className}ml-3 text-l`} onClick={() => closeMenu()}>Nosotros</span>
        </Link>


        {/* DropdownList */}
        <div className=" dropdown">
          <span className="">
            <button className="flex justify-center p-2 transition duration-150 ease-in-out   hover:text-gray-500 focus:outline-none focus:border-blue-300 focus:shadow-outline-blue active:bg-gray-50 active:text-gray-800"
              type="button" aria-haspopup="true" aria-expanded="true" aria-controls="headlessui-menu-items-117  ">
              <IoIosArrowDown size={18} />
              <span className={`${montserrat.className}ml-3 text-l`}>&nbsp;&nbsp;Servicios</span>
            </button>
          </span>


          <div className="opacity-0 invisible dropdown-menu transition-all duration-300 transform origin-top-right translate-y-2 scale-95">
            <div className="absolute right-0 w-36 mt-2 origin-top-right bg-white border border-gray-200 divide-y divide-gray-100 rounded-md shadow-lg outline-none" aria-labelledby="headlessui-menu-button-1" id="headlessui-menu-items-117" role="menu">

              <div className="py-1">
                <Link href="/services" className="flex items-center mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Servicios</span>
                </Link>
                <Link href="/services/desarrolloweb" className="flex items-center-mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Sistemas a Medida</span>
                </Link>
                <Link href="/services/e-commerce" className="flex items-center-mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>E-commerce</span>
                </Link>
                <Link href="/services/mantenimiento-de-aplicaciones" className="flex items-center-mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
                  <span className="ml-3 text-l" onClick={() => closeMenu()}>Mantenimiento de Aplicaciones</span>
                </Link>

              </div>

            </div>
          </div>
        </div>
        <Link href="/blog" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
          <IoIosArrowDown size={18} />&nbsp;&nbsp;
          <span className={`${montserrat.className}ml-3 text-l`} onClick={() => closeMenu()}>Blog</span>
        </Link>



        <Link href="/contact" className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >
          <IoIosArrowDown size={18} />&nbsp;&nbsp;
          <span className={`${montserrat.className}ml-3 text-l`} onClick={() => closeMenu()}>Contacto</span>
        </Link>


        {/* Line Separator */}
        <div className="w-full h-px bg-gray-200 my-5" />




      </nav>
    </div>
  );
}