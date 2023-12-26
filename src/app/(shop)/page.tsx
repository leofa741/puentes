import Image from 'next/image'
import { Metadata } from 'next';
import { Title } from '../components';


export const metadata: Metadata = {
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
