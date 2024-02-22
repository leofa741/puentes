import { HomeComponent, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',

  title: "Nosotros | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Empresa() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Nosotros" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Nosotros"
        descripcion="Puentech"
        video='/assets/videos/historia.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-24">

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

          <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
            <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
              Nuestro objetivo es brindar soluciones tecnológicas que permitan a nuestros clientes mejorar sus procesos y aumentar su productividad.
            </p>

          </div>

          <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
            <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
              Nos especializamos en el desarrollo de aplicaciones web y móviles, sitios web, ecommerce, sistemas de gestión y software a medida.
            </p>

          </div>

          <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
            <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
              Nuestro compromiso es brindar soluciones de calidad, en tiempo y forma, adaptadas a las necesidades de nuestros clientes.
            </p>

          </div>


          <HomeComponent />




        </article>


      </div>
    </>
  )
}
