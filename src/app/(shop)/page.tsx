import Image from 'next/image'
import { Metadata } from 'next';
import { Title } from '../components';
import { BannerHeader } from '../components/bannerheader/BannerHeader';
import { Carrousel } from '../components/carrousel/Carrousel';






export const metadata: Metadata = {
  keywords: ' Puentes Digitales, Outsourcing de Innovación, Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación. ',
  title: "Home Page | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}



export default function Home() {
  return (
    <>
    <div className='titleheader'>
      <Title title="Home Page" subtitle="Puentech" />
      </div>
      <Carrousel />


<div className="flex min-h-screen flex-col items-center justify-between p-24">
  <div className="flex justify-between px-4 mx-auto  sm:px-6 lg:px-8">
      <article className="mx-auto w-full max-w-5xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert">
        
          <header className="sm:mb-8 lg:mb-12  ">

     
              
              <h1 className="">
                Best practices for successful prototypes</h1>
          </header>


        
      </article>
  </div>
</div>


    </>
  )
}
