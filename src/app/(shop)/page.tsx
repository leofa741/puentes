import Image from 'next/image'
import { Metadata } from 'next';
import { CardPracticas, HomeComponent, PartNer, ServicesComp, Title } from '../components';
import { Carrousel } from '../components/carrousel/Carrousel';




export const metadata: Metadata = {
  keywords: ' diseño, web,ecommerce,app,software,desarrollo,devops,base de datos,sql,mysql,postgresql,oracle,sqlserver,react,angular,flutter,android,ios,java,nodejs,express,typescript,javascript,html,css,bootstrap,tailwind,materialize,materialdesign,git,github,gitlab,bitbucket,azure,aws,googlecloud,firebase,heroku,netlify,vercel,linux,windows,ubuntu',
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


      <div className="flex min-h-screen flex-col items-center justify-between p-6 ">
        <div className="flex justify-between px-4 mx-auto  sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-[1500px]">

            <h1 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Puentech

            </h1>
            <div className="flex flex-col items-center justify-center mt-8 w-full">
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
                Ofrecemos soluciones innovadoras para la transformación digital de las empresas.
              </p>
            </div>
            <div className="flex flex-col  div-home" >
              <Image
                src="/assets/img/logo.png"
                alt="Puentech"
                width={200}
                height={200}
              />
            </div>
            <HomeComponent />


            <CardPracticas />


            <ServicesComp />
            <h3 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Nuestas tecnologías

            </h3>
            <PartNer />


          </article>

        </div>
      </div>


    </>
  )
}
