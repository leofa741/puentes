import type { Metadata } from 'next'
import { Analytics } from '@vercel/analytics/react';
import './globals.css'
import { inter, montserrat } from './config/fonts'



export const metadata: Metadata = {
  title: 'Puentech - Puentes Digitales',
  description: 'Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',
}

export default function RootLayout({children,}: {  children: React.ReactNode}) {

  
  return (
    <html lang="es">
      <body className={montserrat.className}>
       
        {children}
        <Analytics />
        </body>
    </html>
  )
}
