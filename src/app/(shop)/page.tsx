import Image from 'next/image'
import { Metadata } from 'next';
import { Title } from '../components';


export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',
  themeColor: '#000000',
    title: "Home Page | Puentech",
    description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",
     
}



export default function Home() {
  return (
    <>
    <Title title="Home Page" subtitle="Puentech" />
    <div className="flex min-h-screen flex-col items-center justify-between p-24">        
   
        <h1 className="text-6xl font-bold text-center">     HOME PAGE</h1>
    
      </div>
    </>
  )
}
