import { TimelineProject_2, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { Metadata } from 'next'
import { IoIosCheckmarkCircleOutline, IoIosMenu } from 'react-icons/io'
import { CgMenuGridO } from "react-icons/cg";



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
        <div className="flex justify-between  mx-auto  sm:px-6 lg:px-8">
          <article className="mx-auto w-full max-w-[1500px]">

            <section >
              <div className="">
                <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
                  INTEGRACIÓN
                </h1>
                <div className="w-full mb-4">
                  <div className="h-1 mx-auto gradient w-64 opacity-25 my-0 py-0 rounded-t"></div>
                </div>
                <div className="flex flex-wrap">

                  <div className="w-5/6 sm:w-1/2 p-6">
                    <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                      Conexión de sistemas de información, aislados entre ellos y con diferentes responsabilidades, permitiendo que trabajen juntos de manera funcional.
                    </h3>
                    <p className="text-gray-600 mb-8">
                      La integración de aplicaciones logra abstraer los procesos de los componentes de software y/o hardware que posea la organización, viendo a los sistemas como un todo.

                      Al mismo tiempo, las diferentes tecnologías de los sistemas son transparentes, ya que se trabaja en conectar las interfaces y no en modificar las mismas.
                    </p>
                  </div>


                  <div className="w-full sm:w-1/2 p-6">
                    <img className="w-full sm:h-90 mx-auto" src="/assets/img/2060-Pruebas-AB.jpg" />
                  </div>
                </div>

                <div className="flex flex-wrap flex-col-reverse sm:flex-row">
                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <TimelineProject_2
                      next7='ESTRATEGIA DE INTEGRACIÓN'
                      next8='CONSTRUCCIÓN DE ARQUITECTURA'
                      next9='INTEGRACIÓN DE SISTEMAS'
                      next10='TRANSFERENCIA DE CONOCIMIENTOS'


                    />
                  </div>

                  <div className="w-full sm:w-1/2 p-6 mt-6">
                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        ESTRATEGIA DE INTEGRACIÓN
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Evaluación y planificación de una estrategia para detectar y guiar la integración de los sistemas de información.
                        <br />
                        <br />

                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Sistemas de información involucrados
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Protocolos de comunicación de cada sistema
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Plataformas tecnológicas actuales
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Tipos de integración necesarias
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Cronograma de implementación
                      </p>
                    </div>


                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        CONSTRUCCIÓN DE ARQUITECTURA
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Instalación y configuración de los servicios base, tanto software y hardware, necesarios para dar soporte a todos los procesos de integración de aplicaciones

                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Dimensión de servidores de integración
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Detección de herramientas y tecnologías
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Instalación y configuración de servicios


                      </p>
                    </div>

                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        INTEGRACIÓN DE SISTEMAS
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Desarrollo y configuración de interfaces de sistemas informáticos bajo diferentes tecnologías y estándares.
                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Desarrollo de conectores de extracción de información
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Proceso de información y ejecución de reglas de negocio
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Desarrollo de conectores de envío de información
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Manejo de errores y logueo de datos
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Trazabilidad de datos recibidos y enviados
                      </p>
                    </div>

                    <div className="align-middle">
                      <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
                        <CgMenuGridO className="inline-block w-8 h-8 -mt-2 mr-1 text-black" />
                        TRANSFERENCIA DE CONOCIMIENTOS
                      </h3>
                      <p className="text-gray-600 mb-8">
                        Generación de programas de capacitación teóricos y prácticos para el traspaso de conocimiento a equipos internos de las organizaciones.
                        <br />
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Creación de programas de capacitación
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Generación de ejercicios teóricos y prácticos
                        <br />
                        <IoIosCheckmarkCircleOutline className="inline-block w-8 h-8 text-green-500" />
                        Dictado de cursos y capacitaciones
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
