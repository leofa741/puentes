'use client';

import Link from 'next/link';
import clsx from 'clsx';
import { IoCloseOutline, IoConstructOutline, IoLogInOutline, IoLogOutOutline, IoPeopleOutline, IoPersonOutline, IoSearchOutline, IoShirtOutline, IoTicketOutline } from 'react-icons/io5';
import { useUIStore } from '@/app/store';
import { IoIosArrowBack ,IoIosArrowDown} from "react-icons/io";


export const Sidebar = () => {

  const isSideMenuOpen = useUIStore( state => state.isSideMenuOpen );
  const closeMenu = useUIStore( state => state.closeSideMenu );


  return (
    <div
   
    >
      {/* Button */ }

      {/* Background black */ }
      {
        isSideMenuOpen && (
          <div
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-black opacity-30"
          />

        )
      }


      {/* Blur */ }
      {
        isSideMenuOpen && (
          <div
            onClick={ closeMenu }
            className="fixed top-0 left-0 w-screen h-screen z-10 bg-transparent backdrop-filter backdrop-blur-sm" 
          />

        )
      }

      {/* Sidemenu */ }
      <nav   style={{zIndex: '10010'}}
        className={
          clsx(
            "fixed p-5 right-0 top-0 w-[200px] h-screen bg-white z-20 transition-all duration-500 ease-in-out overflow-y-auto ",
            {
              "translate-x-full": !isSideMenuOpen
            }
          )
        }>


        <IoCloseOutline
          size={ 28 }
          className="absolute top-5 right-5 cursor-pointer"
          onClick={ () => closeMenu() }
        />


        {/* Input */ }
        <div className="relative mt-14">
          <IoSearchOutline size={ 20 } className="absolute top-2 left-2" />
          <input
            type="text"
            placeholder="Buscar"
            className="w-full bg-gray-50 rounded pl-10 py-1 pr-10 border-b-2 text-xl border-gray-200 focus:outline-none focus:border-black transition-all"
          />
        </div>

      {/* Line Separator */ }
      <div className="w-full h-px bg-gray-200 my-10" />


       

        <Link href="/practicas"  className="flex items-center mt-10 p-2 hover:bg-gray-100 rounded transition-all"  > 
        <IoIosArrowDown size={ 18} />         
          <span className="ml-3 text-l"  onClick={ () => closeMenu() }>Practicas</span>
        </Link>
        <Link href="/soluciones"  className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >    
        <IoIosArrowDown size={ 18} />       
          <span className="ml-3 text-l" onClick={ () => closeMenu() }>Soluciones</span>
        </Link>
        <Link href="/empresa"  className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >  
        <IoIosArrowDown size={ 18} />         
          <span className="ml-3 text-l" onClick={ () => closeMenu() }>Nosotros</span>
        </Link>        
        <Link href="/services"  className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >    
        <IoIosArrowDown size={ 18} />       
          <span className="ml-3 text-l" onClick={ () => closeMenu() }>Servicios</span>
        </Link>
        <Link href="/contact"  className="flex items-center -mt-1 p-2 hover:bg-gray-100 rounded transition-all"  >   
        <IoIosArrowDown size={ 18} />        
          <span className="ml-3 text-l" onClick={ () => closeMenu() }>Contacto</span>
        </Link>

        
           {/* Line Separator */ }
        <div className="w-full h-px bg-gray-200 my-10" />


       

        <Link
          href="/"
          className="flex items-center mt-1 p-2 hover:bg-gray-100 rounded transition-all"
        >
          <IoLogInOutline size={ 18} />
          <span className="ml-3 text-xl">Ingresar</span>
        </Link>

     
        {/* Line Separator */ }
        <div className="w-full h-px bg-gray-200 my-10" />


       



      </nav>





    </div>
  );
}