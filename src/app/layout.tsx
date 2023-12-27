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
      
        <link rel="icon" href="/favicon.ico" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="apple-touch-icon" href="/icon.png" />
       
   
        </head>
      <body className={montserrat.className}>
       
        {children}
        <Analytics />
        </body>
    </html>
  )
}
