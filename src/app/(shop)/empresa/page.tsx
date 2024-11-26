import { HomeComponent, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import { FaLaptopCode, FaMobileAlt, FaGlobe } from 'react-icons/fa';
import { BiTime } from 'react-icons/bi';
export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',

  title: "Nosotros | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Empresa() {
  return (
    <>
      <div >
      <div className="titleheader">
        <Title title="Nosotros" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Nosotros"
        descripcion="Puentech"
        video="/assets/videos/historia.mp4"
      />

      <div className="flex flex-col items-center justify-center mt-8 w-full max-w-[1500px] px-4 mx-auto sm:px-6 lg:px-8">
        <h1 className="text-center font-bold text-4xl sm:text-5xl text-[#009FFF] mb-8">
          Puentech
        </h1>
        <div className="flex flex-col items-center justify-center space-y-6 text-center">
          <p className="text-lg lg:text-xl xl:text-2xl">
            Somos una <span className="font-bold">Software Factory</span> dedicada al desarrollo de tecnologías de la información. Nuestro equipo está integrado por profesionales con una amplia trayectoria en la industria.
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Nuestro objetivo es brindar soluciones tecnológicas que permitan a nuestros clientes mejorar sus procesos y aumentar su productividad.
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Nos especializamos en el desarrollo de aplicaciones web y móviles, sitios web, ecommerce, sistemas de gestión y software a medida.
          </p>
          <p className="text-lg lg:text-xl xl:text-2xl">
            Nuestro compromiso es brindar soluciones de calidad, en tiempo y forma, adaptadas a las necesidades de nuestros clientes.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mt-12">
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaLaptopCode className="text-5xl text-[#009FFF]" />
            <h2 className="text-lg font-semibold">Desarrollo Web</h2>
            <p className="text-base">Desarrollamos aplicaciones web modernas y funcionales adaptadas a tus necesidades.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaMobileAlt className="text-5xl text-[#009FFF]" />
            <h2 className="text-lg font-semibold">Desarrollo Móvil</h2>
            <p className="text-base">Creamos aplicaciones móviles para iOS y Android con un diseño atractivo y funcionalidad óptima.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <FaGlobe className="text-5xl text-[#009FFF]" />
            <h2 className="text-lg font-semibold">Diseño Web</h2>
            <p className="text-base">Diseñamos sitios web modernos y atractivos que representen la identidad de tu marca.</p>
          </div>
          <div className="flex flex-col items-center justify-center space-y-2">
            <BiTime className="text-5xl text-[#009FFF]" />
            <h2 className="text-lg font-semibold">Entrega Rápida</h2>
            <p className="text-base">Nos comprometemos a entregar tus proyectos en tiempo récord sin comprometer la calidad.</p>
          </div>
        </div>
      </div>
    </div>
    </>
  )
}
