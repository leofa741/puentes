import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { inter, montserrat } from './config/fonts'

import head from 'next/head';

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',
  title: 'Puentech - Puentes Digitales',
  description: 'Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',
}

export default function RootLayout({children,}: {  children: React.ReactNode}) {

  
  return (
    <html lang="es">
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#000000" /> 
        <meta name="description" content=" Desarrollo web,diseño web.Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. " />
        <meta name="keywords" content=" Desarrollo web, diseño web, ecommerce, sistemas a medida, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web " />
        <meta name="author" content="Puentech" />
        <meta name="robots" content="index, follow" />   
        <meta property="og:title" content="Puentech - Puentes Digitales" />
        <meta property="og:description" content="Desarrollo web > Diseño web > Ecommerce > Sistemas a medida > Aplicaciones web > Aplicaciones móviles > Desarrollo de software > Desarrollo de aplicaciones > Desarrollo de aplicaciones móviles > Desarrollo de aplicaciones web " />
        {/* <meta property="og:image" content="/ruta/a/imagen.jpg" /> */}
        <meta property="og:url" content="https://www.puentesdigitales.com.ar/" />
        <meta property="og:type" content="website" />  
              {/* Incluir AR.js */}
        <script src="https://cdn.jsdelivr.net/gh/jeromeetienne/ar.js@3.3.2/aframe/build/aframe-ar.min.js"></script>
     
   
        </head>
      <body className={montserrat.className}>
       
        {children}
        <Analytics />



        </body>
    </html>
  )
}
