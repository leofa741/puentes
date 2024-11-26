import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import { ImagenCard } from '@/app/components/services/ImagenCard'
import { Metadata } from 'next'
import Image from 'next/image'

export const metadata: Metadata = {
  keywords: 'Puentech, Puentes Digitales, Outsourcing de Innovación, Desarrollo web, ecommerce, aplicaciones web, aplicaciones móviles, desarrollo de software, desarrollo de aplicaciones, desarrollo de aplicaciones móviles, desarrollo de aplicaciones web, desarrollo de ',
  title: "Soluciones | Puentech",
  description: "Puentech es una empresa de desarrollo de software que se especializa en la creación de aplicaciones web y sitios web para pequeñas y medianas empresas.",

}


export default function Soluciones() {
  return (
    <>
      <div className='titleheader'>
        <Title title="Soluciones" subtitle="Puentech" />

      </div>
      <BannerHeader
        title="Soluciones"
        descripcion="Puentech"
        video='/assets/videos/videoblocks3.mp4' />

      <div className="flex min-h-screen flex-col items-center justify-between p-4">

        <h1 className="w-full my-2 text-4xl font-bold leading-tight text-center text-gray-800">
          convertirse en un comercio minorista basado en datos
        </h1>

        <div className="flex flex-wrap">
          <div className="w-5/6 sm:w-1/2 p-6">
            <h3 className="text-3xl text-gray-800 font-bold leading-none mb-3">
              Convierta los datos de las ventas minoristas en una ventaja competitiva
            </h3>
            <p className="text-gray-600 mb-8">
              Los datos se han convertido en uno de los activos más valiosos para ayudar a los minoristas
              a optimizar los procesos, reducir los costos, obtener una ventaja competitiva y satisfacer a los
              clientes.<br /> Si bien los comercios minoristas producen enormes cantidades de datos, por lo general
              están aislados en diferentes aplicaciones y bases de datos, a las que solo puede acceder el
              equipo que administra o usa la aplicación de forma regular.<br /> Establecer una estrategia de datos
              es un paso importante para aprovechar el machine learning (ML) en toda la empresa minorista y
              conectar los puntos entre las diferentes partes de la organización. <br />En esta guía práctica, aprenderá
              sobre la evolución de los datos en el sector minorista y por qué se han convertido en un activo
              fundamental.<br /> También aprenderá que, si se recopilan, almacenan, mantienen y extraen con una
              cultura basada en los datos, estrategias bien diseñadas, una gobernanza adecuada y tecnologías
              basadas en la nube, los datos pueden convertirse en una ventaja competitiva para conectar
              puntos aparentemente no relacionados, ver lo que no se ve y revelar oportunidades mucho antes
              de que se generalicen, para impulsar a su empresa por encima de sus competidores y preparar a
              su organización para el futuro.

            </p>
          </div>


          <div className="w-full sm:w-1/2 p-6">
          <ImagenCard
              url={"../assets/img/learning1.png"}
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
          La evolución del comercio minorista
        </h3>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Tiendas familiares
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Hace décadas, antes de Internet e incluso antes de los grandes centros comerciales, nuestros
          abuelos compraban de todo, desde comida hasta ropa y ferretería, en pequeñas tiendas de
          barrio. Iban a las mismas tiendas y el comerciante, probablemente el propietario, los conocía por
          su nombre y los trataba de forma individual recomendándoles artículos según sus preferencias
          y necesidades personales. Este escenario ofrecía un toque personal en el que el comerciante
          minorista era recompensado con la lealtad de los compradores.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Centros comerciales y cadenas de tiendas
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Pasamos algunas décadas hasta que los centros comerciales y las grandes cadenas de tiendas
          consolidaron muchos tipos de comercios minoristas o categorías de productos similares en un
          solo lugar que atendió a una amplia audiencia de compradores. Por lo general, este enfoque
          implicaba productos con precios más bajos porque ofrecía un modelo de compra de autoservicio
          masivo en el que los minoristas no necesitaban tantas personas para dotar de personal a las
          tiendas. Como aspecto negativo, los clientes a menudo tenían dificultades para encontrar a
          alguien que respondiera preguntas, recomendara productos o validara las decisiones de compra.
        </p>

        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Internet y comercio electrónico
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Los compradores personales, las opciones de productos seleccionadas, los horarios de compra
          anticipada, los eventos de presentación previa de productos, las ventas y promociones especiales,
          las líneas de pago específicas, el envío o la entrega gratuitos y otros beneficios similares se han
          convertido en el nuevo lujo para atraer y recompensar a los compradores presenciales por su lealtad.
          Sin embargo, estas ventajas también proporcionan un propósito práctico para los minoristas. Estas
          tácticas ayudan a los minoristas a recopilar información sobre los compradores, desde información
          demográfica básica hasta preferencias de productos, compras repetidas y horarios de compra
          preferidos. Esta información permite a los minoristas expertos prestar más atención a sus clientes
          más lucrativos y leales. Los beneficios hacen que los compradores se sientan especiales. Con la ayuda
          adicional del personal de la tienda para responder preguntas, recomendar nuevos productos y validar
          las decisiones de compra, se logra el objetivo subyacente de reducir el tiempo de toma de decisiones,
          recomendar y vender más artículos con altos márgenes y mantener la lealtad de los compradores.
        </p>



        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Los clientes esperan más
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Sin embargo, a medida que nuestro mundo se ha acelerado aún más, los clientes se han
          vuelto impacientes. El tiempo es un activo valioso, y eso significa que los compradores
          esperan y recompensan a los minoristas que ofrecen una experiencia de compra
          optimizada y personalizada. Los clientes quieren:
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Ser reconocidos como un cliente valioso en todos los canales de compras minoristas.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Acceder a productos seleccionados y contenido de marca recomendados
          en función de las preferencias y necesidades.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Recibir ofertas de promociones y descuentos para recompensar la lealtad.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Recibir solo campañas de marketing que se aplican a ellos.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Recibir opciones rápidas y sencillas para comprar y devolver artículos.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          • Ser tratados de manera justa, respetuosa y rápida cuando surgen problemas.
        </p>
        <h4 className="w-full my-2 text-2xl font-bold leading-tight text-left text-gray-800">
          Los datos son el motor
        </h4>

        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Si bien los procesos automatizados son un componente fundamental para proporcionar
          estos servicios mejorados, los datos son el motor. Del mismo modo que el comerciante
          de antaño recordaba detalles específicos sobre las preferencias de compra de nuestros
          abuelos, los minoristas modernos necesitan datos para administrar a los clientes, ofrecer
          un servicio de primera clase y aumentar los ingresos a gran escala.
        </p>
        <p className="w-full my-2 text-l leading-tight text-left text-gray-600 mb-8">
          Dicho esto, los datos sobre clientes individuales pueden ayudar a los minoristas a personalizar las experiencias. Sin embargo,
          los datos agregados (de los clientes y las operaciones) pueden ayudar a los minoristas a crear estrategias basadas en datos
          para definir las carteras de productos en función de las preferencias de los clientes; pronosticar la demanda para adquirir,
          reponer y almacenar el inventario de manera más eficiente; y optimizar las presentaciones de los productos para fomentar la venta
          cruzada y aumentar los ingresos. La recopilación y extracción de datos con una estrategia centralizada que los hace
          fácilmente accesibles para los equipos y las personas que los necesitan permite a los minoristas utilizar el aprendizaje automático
          para aprender del pasado y utilizar esos hallazgos para mejorar y predecir el futuro, a fin de aumentar las ventas, mejorar las
          experiencias de los clientes y empleados, gestionar las operaciones de manera más eficiente, reducir los residuos y mejorar la sostenibilidad.
        </p>

        <a className="w-full my-2 text-l font-bold text-right text-black mb-8" href='/soluciones/datos' >Leer la importancia de los datos</a>

      </div>

    </>
  )
}
