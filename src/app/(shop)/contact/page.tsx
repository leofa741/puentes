import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',

  title: "Contacto | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Contact() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Contactos" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Contactos"
        descripcion="Puentech"
        video='/assets/videos/contact-us.mp4' />
      <div className="flex min-h-screen flex-col items-center justify-items-center  p-2 ">
        <div className="flex px-4 mx-auto  sm:px-6 lg:px-8">

          <article className="mx-auto w-full max-w-[1500px]">

            <h1 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
              Puentech

            </h1>
            <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">

              <span className="text-center  font-extrabold text-[#009FFF]  xs:text-xl sm:text-xl md:text-xl lg:text-5xl xl:text-5xl 2xl:text-[29px]">
                Contactos
              </span><br />
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-l lg:text-xl xl:text-2xl 2xl:text-2xl">
                Conáctanos para más información
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
                <span className="text-center  font-extrabold text-[#009FFF]  xs:text-xl sm:text-xl md:text-xl lg:text-5xl xl:text-5xl 2xl:text-[29px]">
                  Dirección:
                </span>
                <br />
                Monte Grande, Buenos Aires, Argentina
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
                <span className="text-center  font-extrabold text-[#009FFF]  xs:text-xl sm:text-xl md:text-xl lg:text-5xl xl:text-5xl 2xl:text-[29px]">
                  Teléfono:
                </span>
                <br />
                +54 9 11 4146-1312
              </p>
            </div>

            <div className="flex flex-col items-center justify-center mt-8 w-full px-4 mx-auto sm:px-6 lg:px-8">
              <p className="mt-2 text-center xs:text-xl sm:text-xl md:text-xl lg:text-xl xl:text-2xl 2xl:text-2xl">
                <span className="text-center  font-extrabold text-[#009FFF]  xs:text-xl sm:text-xl md:text-xl lg:text-5xl xl:text-5xl 2xl:text-[29px]">
                  Email:
                </span>
                <br />          

              </p>
              <a href="mailto:infoplataformaweb@gmail.com" >infoplataformaweb@gmail.com</a>
            </div>
           
          </article>
        </div>
        <BanerServicesContact />
      </div>
    </>
  )
}
