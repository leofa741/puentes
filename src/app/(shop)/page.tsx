import Image from 'next/image'
import { Metadata } from 'next';
import { Title } from '../components';


 


export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',

  title: "Home Page | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}



export default function Home() {
  return (
    <>
      <Title title="Home Page" subtitle="Puentech" />
      <div className="flex min-h-screen flex-col items-center justify-between p-24 xs:p-12 md:p-24 lg:p-24 xl:p-24 2xl:p-24">

<h1 className=" text-center  sm:text-5xl md:text-6xl lg:text-6xl xl:text-6xl 2xl:text-6xl font-bold">
  Puentech - Home Page
</h1>

</div>
    </>
  )
}
