import { BanerServicesContact, ServicesComp, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { ImagenCard } from '@/app/components/services/ImagenCard'

import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'E-commerce, diseño web, apis, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web ',
  title: "E-commerce| Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Ecommerce() {
  return (
    <>
      <div className='titleheader'>
        <Title title="E-commerce" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="E-commerce"
        descripcion="Puentech"
        video='/assets/videos/web.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          E-commerce
        </h1>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Desarrollamos tu E-commerce
            </h3>
            <p className="text-gray-600 mb-8">
              Creamos sistemas web a medida para que puedas acceder a ellos desde cualquier dispositivo con conexión a internet.
              Mantenemos una comunicación constante con nuestros clientes para que puedan ver el avance del proyecto y realizar modificaciones en el mismo.
              Nuestros desarrollos son escalables, lo que significa que pueden crecer junto a tu negocio.

            </p>
          </div>


          <div className="w-full sm:w-1/2 p-6">
            <ImagenCard
              url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/E-Commerce.png?raw=true"}
            />
          </div>
        </div>

        <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          Implentación de E-commerce
        </h2>

        <p className="text-gray-600 mb-8">
          La implementación de “Puented Digitales” consta de un Portal Web de eCommerce
          que permite a los comercios y emprendedores vender sus productos y/o servicios
          a través de internet. El portal web de eCommerce se encuentra integrado con un
          sistema de gestión de ventas y stock que permite a los comercios y emprendedores
          administrar sus ventas y productos de manera eficiente.

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
