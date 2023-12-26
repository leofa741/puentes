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
      <div className="flex flex-col items-center justify-center min-h-screen py-2">          
   
        <h1 className="text-9xl font-extrabold text-white tracking-widest">HOME PAGE</h1>
    
      </div>
    </>
  )
}
