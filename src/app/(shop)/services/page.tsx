import { ServicesComp, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import Image from 'next/image'
import { BannerFooter } from '../../components/bannerfooter/BannerFooter';

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web ',
  title: "Servicios | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Services() {
  return (
    <>
    <div className='titleheader'>
        <Title title="Servicios" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Servicios"
        descripcion="Puentech"
        video='/assets/videos/web.mp4' />
        
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

    <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
    Puentech - Services
                </h1>

     
      <ServicesComp />

      

    </div>

    <BannerFooter />
    </>
  )
}
