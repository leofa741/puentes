import { Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'


export const metadata: Metadata = {
  keywords: 'Innovacion,proyecto, desarrollo evolutivo,web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  title: "Prácticas | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",
}


export default function NuestrasPracticas() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Prácticas" subtitle="Puentech" />
      </div>
      <BannerHeader
        title="Prácticas"
        descripcion="Puentech"
        video='/assets/videos/equipo.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-2 ">
        <div className="flex justify-between px-4 mx-auto  sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-[1500px]">

            <h1 className="text-center  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl">
              INNOVACIÓN

            </h1>

          </article>
        </div>

      </div>
    </>
  )
}
