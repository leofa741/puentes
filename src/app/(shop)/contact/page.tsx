import { Title } from '@/app/components'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  themeColor: '#212529',
  title: "Contacto | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Contact() {
  return (
    <>
     <Title title="Contacto" subtitle="Puentech" />
    <div className="flex min-h-screen flex-col items-center justify-between p-24">

      <h1 className="text-6xl font-bold text-center">
        Puentech - Contact
      </h1>
     
    </div>
    </>
  )
}
