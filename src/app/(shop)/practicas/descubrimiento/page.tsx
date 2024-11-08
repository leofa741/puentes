import { TimelineProject_1, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import { IoIosCheckmarkCircleOutline, IoIosMenu } from 'react-icons/io'
import { CgMenuGridO } from "react-icons/cg";



export const metadata: Metadata = {
  keywords: 'Innovacion,proyecto, desarrollo evolutivo,web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  title: "Desarrollo web | Puentech",
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
        <div className="flex justify-between  mx-auto  sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-[1500px]">

            <section >
              <div className="">
                <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                  DESCUBRIMIENTO
                </h1>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">

                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Desarrollo de soluciones tecnológicas y transformación digital.
                    </h3>
                    <p className="text-gray-600 mb-8">
                      El proceso de desarrollo de software es un camino complejo que requiere planificación, colaboración y ejecución eficiente. Una etapa crucial en este proceso es la fase de descubrimiento, donde se sientan las bases para el proyecto completo. Desde P.D, como especialistas en desarrollo de software y programación a medida, te vamos a explicar cómo la fase de descubrimiento puede ahorrar tiempo y dinero, así como su impacto en el éxito general del desarrollo de software.  <br />
                      Un descubrimiento, permite reducir las incertidumbres que se presentan al dar inicio a un proyecto y contar con una hoja de ruta clara.
                      que involucran la ejecución de un proyecto de desarrollo de software o transformación digital.
                      Profundiza en las necesidades del negocio, los requerimientos funcionales, procesos, sistemas informáticos y la plataforma tecnológica, con el fin de definir un diagnóstico que describa “el hoy”, “hacia dónde ir” y “los pasos necesarios”
                    </p>
                  </div>

                  <div className="w-full sm:w-1/2 p-6">
                    <img className="w-full sm:h-80 mx-auto" src="/assets/img/services_consultory.png.webp" />
                  </div>
                </div>

                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 p-6 mt-6">

                    <TimelineProject_1
                      next4='REQUERIMIENTOS GENERALES'
                      next5='PLATAFORMA TECNOLÓGICA'
                      next6='ETAPAS DE PROYECTO'
                    />
                  </div>

                  <div className="w-full sm:w-1/2 p-6 mt-6">


                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        REQUERIMIENTOS GENERALES
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Los fundamentos de la fase de descubrimiento

                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Roles/Actores del sistema
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Módulos y/o funcionalidades principales
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Prototipos de pantalla
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Principales diagramas de actividad
                      </p>
                    </div>


                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        PLATAFORMA TECNOLÓGICA
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Obtenga los lineamientos tecnológicos en términos de hardware, software y comunicaciones

                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Arquitectura general
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Tecnologías, frameworks y herramientas
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Seguridad
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Persistencia
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Integraciones
                      </p>
                    </div>

                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        ETAPAS DE PROYECTO
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Conozca las etapas de un proyecto de desarrollo de software

                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Primer entregable funcional
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Evolución continua del producto
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Mantenimiento y soporte
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Entregables finales
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </article>
        </div>
      </div>
    </>
  )
}
