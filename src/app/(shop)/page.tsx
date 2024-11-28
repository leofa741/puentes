import Image from 'next/image'
import { Metadata } from 'next';
import { CardPracticas, HomeComponent, ServicesComp, Title } from '../components';
import { Carrousel } from '../components/carrousel/Carrousel';




export const metadata: Metadata = {
  keywords: 'Diseño web, ecommerce, app, software, desarrollo, devops, base de datos, sql, mysql, postgresql, sqlserver, react, angular,flutter,android,ios,java,nodejs,express,typescript,javascript,html,css,bootstrap,tailwind,materialize,materialdesign,git,github,gitlab,bitbucket,azure,aws,googlecloud,firebase,heroku,netlify,vercel,linux,windows,ubuntu',
  title: "Home Page | Puentech",
  description: "Puentech es una empresa de desarrollo de software, aplicaciones móviles, aplicaciones web, ecommerce, devops, base de datos, diseño web, diseño de tiendas online, con la mejor tecnología y experiencia de usuario.",

}



export default function Home() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Home Page" subtitle="Puentech" />
      </div>
      <Carrousel />


      <div className="flex min-h-screen flex-col items-center justify-items-center  p-2 ">
      
        <div className="flex px-4 mx-auto  sm:px-6 lg:px-8">
        
          <article className="mx-auto w-full max-w-[1500px]">

            <h1 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Puentech

            </h1>
            <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
              <span className="text-center  font-extrabold text-[#009FFF]  xs:text-xl sm:text-xl md:text-xl lg:text-5xl xl:text-5xl 2xl:text-[29px]"
              >Software Factory </span>dedicada al desarrollo de tecnologías de la información. Somos un equipos integrado por profesionales con una amplia trayectoria en la industria.
              </p> 
            </div>
           
           
            <HomeComponent />


            <CardPracticas />


            <ServicesComp />

          
          </article>
         
        </div>
      </div>


    </>
  )
}
