import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { inter, montserrat } from './config/fonts'



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
        <link rel="icon" href="/assets/img/logo.png" />      
   
        </head>
      <body className={montserrat.className}>
       
        {children}
        <Analytics />



        </body>
    </html>
  )
}
