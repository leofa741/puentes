import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { ImagenCard } from '@/app/components/services/ImagenCard'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  title: "Datos | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Datos() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Datos" subtitle="Puentech" />

      </div>
      <BannerHeader
        title="La importancia de los Datos"
        descripcion="Puentech"
        video='/assets/videos/videoblocks3.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          La importancia de los datos
        </h1>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              El desafío de los datos
            </h3>
            <p className="text-gray-600 mb-8">
              Muchos comercios minoristas no se dan cuenta de que tienen una gran cantidad de datos significativos dentro de su organización a los que no pueden acceder
              ni combinar fácilmente.<br />
              Esto se debe a que la mayoría de las fuentes de datos residen en sistemas aislados que no están integrados, como un sitio web de comercio
              electrónico, los sistemas de punto de venta (POS) de una tienda física o una aplicación de CRM, y no existe una forma sistemática
              de compartir los datos dentro o fuera de la empresa, por ejemplo, en las redes sociales o en los informes de análisis de
              tendencias. <br />
              Sí, los datos suelen resumirse en un almacenamiento de datos central.
              Sin embargo, los datos no se asimilan de manera que los usuarios empresariales puedan encontrar con facilidad respuestas a
              preguntas que puedan impulsar el negocio,como “¿Qué colores de blusas buscan los compradores en Internet, pero no compran
              en las tiendas?” Muy a menudo, si las preguntas no se previeron al organizar los datos, puede resultar muy difícil extraer
              los datos para responder a preguntas más complejas y poco claras.

            </p>
          </div>


          <div className="w-full sm:w-1/2 p-6">
            <ImagenCard
              url={"../assets/img/deep-learning.png"}
            />
          </div>
        </div>

        <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          ¿Necesito realmente un desarrollo a medida?
        </h2>

        <p className="text-gray-600 mb-8">
          Seguramente muchas veces sentiste que la tecnología, en lugar de otorgarnos una ventana de oportunidades, nos limita y nos impide crecer.
          Un desarrollo a medida te permite automatizar procesos,facilitar el trabajo de tus empleados y hacer específicamente aquello que necesites, reduciendo gastos y tiempo.
          Si tu negocio tiene una necesidad específica que no puede ser resuelta con un software estándar, un desarrollo a medida es la solución.

        </p>
        <BanerServicesContact />

        <h3 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
          El minorista moderno basado en datos
        </h3>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Comercios minoristas
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Los comercios minoristas expertos en datos buscan la verdad sobre su negocio y sus clientes. Tratan los datos como un activo
          organizacional de toda la empresa y hacen de la estrategia de datos una prioridad absoluta.
          La información ya no se guarda aislada en archivadores, hojas de cálculo y bases datos de los departamentos individuales.
          Los comercios minoristas basados en datos implementan estrategias y sistemas holísticos para recopilar, almacenar y extraer datos
          valiosos para democratizarlos. En otras palabras, garantizan que los datos estén disponibles para las personas adecuadas, en los
          sistemas que utilizan, cuando los necesitan. Sin embargo, convertirse en un minorista orientado a los datos es más que integrar
          aplicaciones. Se trata de diseñar e implementar una estrategia unificada de gestión y recopilación de datos que abarque
          los siguientes componentes clave:
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Todos los sistemas internos,
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          como ERP, CRM, POS, comercio electrónico, sistemas de fidelización y cámaras de Internet de las cosas (IoT) en las tiendas.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Orígenes de datos externos relevantes,
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          como las predicciones meteorológicas, las fechas clave (Navidad, viernes de descuentos, fechas de alto tráfico), las tendencias del
          mercado, la confianza en las redes sociales y los eventos regionales y localizados.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Un sistema de almacenamiento de datos centralizado
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          un lago de datos en el que fluyen todos los flujos de datos internos y externos.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Procesos sistemáticos
        </h4>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          para garantizar que los datos se sincronicen con frecuencia en el lago de datos centralizado.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Una cultura centrada en los datos es clave
        </h4>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Para centrarse en los datos, es probable que muchos comercios minoristas necesiten realizar
          un cambio cultural profundo. Por ejemplo, si su organización toma decisiones mediante la
          creación de planes detallados, el análisis de las opciones en función de datos básicos y fácilmente
          disponibles y la elección de la mejor opción basándose únicamente en esos datos de fácil acceso,
          es posible que su empresa necesite centrarse más en los datos.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Los minoristas basados en datos quieren más datos de los que están disponibles cuando se crea
          un plan. Estos minoristas expertos y basados en datos resuelven la incertidumbre al descubrir
          nuevos datos mediante la experimentación. Diseñan pruebas para obtener datos adicionales y
          utilizan la nueva información para tomar mejores decisiones. De hecho, la experimentación es el
          motor de la innovación y la estrategia clave para poner a prueba ideas, obtener información e
          impulsar decisiones.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Dicho esto, la toma de decisiones basadas en la información no es algo nuevo. Durante décadas,
          los comercios minoristas han utilizado la información de transacciones de los sistemas POS para
          comprender las ventas de productos. Los comercios minoristas han utilizado estos mismos datos
          de punto de venta para tomar decisiones de comercialización e impulsar las ventas cruzadas. A
          medida que las tiendas han implementado programas de fidelización, los comercios minoristas
          han adquirido conocimientos adicionales para correlacionar las compras de productos con los
          clientes individuales, de modo que puedan segmentar a los compradores y dirigir las promociones.
          Estos son ejemplos simplistas de cómo los comercios minoristas combinan conjuntos de datos
          relacionados fácilmente disponibles para tomar decisiones. Sin embargo, las organizaciones basadas
          en datos llevan este concepto un paso más allá para combinar todos los datos, incluso los datos
          aparentemente no relacionados, en un lago de datos centralizado para descubrir información más
          granular, posiblemente inesperada, que no era evidente sin un mayor grado de análisis.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-blue-800">
          Si sus datos están incompletos, son de mala calidad, de difícil acceso y
          están distribuidos en sistemas aislados, su empresa nunca podrá crear
          una ventaja competitiva, ya que nunca podrá descubrir información
          que impulse su negocio.
        </h4>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          Dos enfoques generales para convertirse en uncomercio minorista basado en los datos
        </h4>
        <p>
          Puede crear proyectos descendentes que adquieran datos y hagan un uso específico de los datos para impulsar su negocio.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          O
        </h4>
        <p>
          Puede crear una solución de autoservicio que permita a los departamentos acceder a los datos y analizarlos en función de sus tareas,
          necesidades y objetivos específicos.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          Tres estrategias generales para convertirse en una organización basada en datos
        </h4>
        <p>
          Con una arquitectura holística centrada en los datos, los comercios minoristas pueden alentar a
          los departamentos empresariales a introducir y extraer datos del lago centralizado. El enfoque ágil
          descrito aquí no presupone ningún caso de uso específico. Sin embargo, proporciona una base para
          colaborar con los datos de toda la organización.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          1. Mueva los datos y las aplicaciones a la nube
        </h4>
        <p>
          En la nube, se accede a los recursos de TI a través de Internet en lugar de comprar y
          mantener servidores físicos en centros de datos en las instalaciones. Los comercios
          minoristas pueden aumentar o reducir la capacidad de los servidores con solo hacer
          clic en un botón para mantenerse al día con las necesidades de procesamiento y datos.
          Solo paga por la capacidad del servidor que utiliza y, por lo general, el precio es más bajo
          que el mantenimiento de un centro de datos local. Además de eso, los comercios minoristas
          tienen acceso a más herramientas de datos en la nube que en los centros de datos locales.
          Mover los datos a la nube no significa que las organizaciones tengan que migrar toda la
          infraestructura de TI a la nube. Las empresas pueden crear un lago de datos que copie con
          frecuencia los datos de los repositorios locales a un lake house centralizado en la nube. Con
          este enfoque, no necesita cambiar los sistemas existentes, ya que crea la arquitectura del lago
          de datos en paralelo, de modo que puede obtener valor de sus datos muy rápidamente.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          2. Elimine los silos de datos y democratice el acceso.
        </h4>
        <p>
          Al crear un lago de datos en la nube con información de muchas fuentes internas y
          externas diferentes, se eliminan los silos de datos. Luego, puede brindar a los usuarios de
          toda la organización acceso a los datos para que puedan descubrir, acceder y analizar los
          datos sin problemas, independientemente de dónde se encuentren los datos, de una
          manera segura y gobernada para optimizar las iniciativas de cadena de suministro, inventario,
          comercialización y marketing. Puede mover los datos a almacenes de datos especializados
          diseñados específicamente para ofrecer los mejores costos y rendimiento, utilizar
          herramientas y algoritmos de aprendizaje automático para analizar la información y
          aprender de ella para segmentar a los clientes, predecir la demanda futura o planificar la
          comercialización de manera más eficiente.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-center text-gray-800">
          3. Innove con los datos.
        </h4>
        <p>
          Las nuevas capacidades de datos, como la analítica avanzada, la inteligencia artificial (IA)
          y el ML, proporcionan información única para crear nuevas experiencias para los clientes
          y aumentar la eficiencia operativa. El ML es una de las tecnologías más revolucionarias
          de nuestra generación. Desde predecir los problemas de la cadena de suministro
          hasta pronosticar la demanda y personalizar las experiencias, los minoristas utilizan la
          analítica, la IA y el ML para innovar y crear una ventaja competitiva.
        </p>

      </div>
      <br/>
      <br/>

    </>
  )
}
