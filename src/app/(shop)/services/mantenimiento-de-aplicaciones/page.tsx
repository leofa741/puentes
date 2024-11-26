import { BanerServicesContact, ServicesComp, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { ImagenCard } from '@/app/components/services/ImagenCard'

import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'E-commerce, diseño web, apis, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web ',
  title: "Mantenimiento de App´s| Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function MantenimientoDeAplicaciones() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Mantenimiento de APlicaciones" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Mantenimiento de App´s"
        descripcion="Puentech"
        video='/assets/videos/web.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          Mantenimiento De Aplicaciones
        </h1>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-12">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              CONSULTORIA TECNOLOGICA – SOLUCIONES DIGITALES – DESARROLLO DE SOFTWARE
            </h3>
            <p className="text-gray-600 mb-8">
              El mantenimiento de aplicaciones es un proceso que tiene como objetivo actualizar y modificar una aplicación después de su entrega para corregir fallos,
              mejorar el rendimiento, mejorar el diseño, crear interfaz con otros sistemas, implementar mejoras o desarrollar nuevas funcionalidades.
              Este proceso es importante para garantizar la eficiencia de la aplicación y mejorar la experiencia del usuario.
            </p>
          </div>

          <div className="w-full sm:w-1/2 p-6">
            <ImagenCard 
              url={"https://raw.githubusercontent.com/leofa741/prixma/master/src/assets/img/services/producto3.webp"}
            />
          </div>
        </div>

        <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
        Servicio de mantenimiento de aplicaciones
        </h2>

        <p className="text-gray-600 mb-8">
        ofrecemos a las empresas un plan de mantenimiento de software que garantice que las aplicaciones ofrezcan una experiencia plenamente funcional, rápida, eficaz y sin fisuras,
        que se adapte a las necesidades de los usuarios y que esté alineada con los objetivos de la empresa. 
        </p>
        <BanerServicesContact />

        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          ¿Qué tipo de desarrollos realizamos?
        </h3>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Aplicaciones web
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Desarrollamos aplicaciones web a medida para que puedas acceder a ellas desde cualquier dispositivo con conexión a internet.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Apliaciones de escritorio
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Desarrollamos aplicaciones de escritorio a medida para satisfacer tus necesidades.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Bases de datos
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Desarrollamos bases de datos a medida para que puedas acceder a ellas desde cualquier dispositivo con conexión a internet.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Desarrollo de API
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Desarrollamos API a medida para que puedas acceder a ellas desde cualquier dispositivo con conexión a internet.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Desarrollo de software
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Desarrollamos software a medida para que puedas acceder a ellas desde cualquier dispositivo con conexión a internet.
        </p>

      </div>

    </>
  )
}
