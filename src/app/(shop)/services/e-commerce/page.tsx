import { BanerServicesContact, Title } from '@/app/components'
import { BannerHeader } from '@/app/components/bannerheader/BannerHeader'
import MannequinScene from '@/app/components/ejemplothree/Image3DEffect'
import ARViewer from '@/app/components/product3dcard/ARViewer'
import Product3DCard from '@/app/components/product3dcard/Product3DCard'
import { ImagenCard } from '@/app/components/services/ImagenCard'
import { Metadata } from 'next'




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
            <p className="text-gray-600 mb-8">
              <strong>Destaca tus productos y servicios</strong> con un <strong>E-commerce personalizado</strong>.
              Creamos plataformas que maximizan el impacto visual de tus productos a través de <strong>imágenes de alta calidad y diseño intuitivo</strong>.
              Implementamos <strong>sistemas de pago y envío seguros</strong> para facilitar tus ventas en línea.
              Haz que tu catálogo sea irresistible y accesible, mostrando tus productos de manera <strong>atractiva y fácil de usar</strong>.
              Nuestro enfoque combina creatividad y tecnología para potenciar tu negocio.
            </p>

            <p className="text-gray-600 mb-8">
              <strong>¿Qué es un E-commerce?</strong>
              Un E-commerce es una plataforma digital que permite a los usuarios comprar y vender productos y servicios a través de internet.
              Los E-commerce son una excelente opción para las empresas que desean expandir su alcance y aumentar sus ventas.
              Con un E-commerce, puedes llegar a una audiencia global y ofrecer tus productos y servicios a clientes de todo el mundo.
              Los E-commerce son una forma conveniente y eficiente de hacer negocios en línea.
            </p>
          </div>


          <div className="w-full sm:w-1/2 p-6">
            {/* <ImagenCard
              url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/E-Commerce.png?raw=true"}
            /> */}
            {/* <ProductTree
          imageUrl="/assets/img/red-t-shirt-free-png.webp"
          title="Producto Destacado"
          price={100}
        /> */}
            {/* <Image3DEffect 
        modelUrl="/assets/models/maniqui.glb"
        /> */}
            {/* <MannequinScene
           modelUrl="/assets/img/maniqui.glb"
           textureUrl="/assets/img/red-t-shirt-free-png.webp"
           
                 /> */}

            <Product3DCard

              modelUrl="/assets/img/remera_modelo_3d_-_creditos_a_quien_corresponda.glb"
              defaultColor="#ffffff"
              colors={[
                { name: 'Blanco', hex: '#ffffff' },
                { name: 'Rojo', hex: '#ff0000' },
                { name: 'Negro', hex: '#000000' },
                { name: 'Verde', hex: '#00ff00' },
                { name: 'Azul', hex: '#0000ff' },
                { name: 'Amarillo', hex: '#ffff00' },
                { name: 'Rosa', hex: '#ff00ff' }
              ]}
              title="Camiseta Cuello redondo"
              price={29.99}
              description="Camiseta unisex "
              sizes={['S', 'M', 'L', 'XL']}
              scala={[0.3, 0.3, 0.3]}
              position={[0, -11.5, 0]}
              
             />

             
          </div>
        </div>
        <div className="w-full sm:w-1/2 p-6">
            {/* <ImagenCard
              url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/E-Commerce.png?raw=true"}
            /> */}
            {/* <ProductTree
          imageUrl="/assets/img/red-t-shirt-free-png.webp"
          title="Producto Destacado"
          price={100}
        /> */}
            {/* <Image3DEffect 
        modelUrl="/assets/models/maniqui.glb"
        /> */}
            {/* <MannequinScene
           modelUrl="/assets/img/maniqui.glb"
           textureUrl="/assets/img/red-t-shirt-free-png.webp"
           
                 /> */}

            <Product3DCard
              modelUrl="/assets/img/zapatilla_demo.glb"
              defaultColor=""
              colors={[
              { name: 'Blanco', hex: '#ffffff' },
              { name: 'Rojo', hex: '#ff0000' },
              { name: 'Negro', hex: '#000000' },
              { name: 'Verde', hex: '#00ff00' },
              { name: 'Azul', hex: '#0000ff' },
              { name: 'Amarillo', hex: '#ffff00' },
              { name: 'Rosa', hex: '#ff00ff' }
              ]}
              title="Zapatillas"
              price={19.99}
              description="Zapatillas cómodas y elegantes para cualquier ocasión."
              sizes={['S', 'M', 'L', 'XL']}
              scala={[49.3, 49.3, 49.3]}
              position={[0, -0.5, 0]}
            />

              {/* Carga de tu producto 
              <ARViewer modelUrl="/assets/models/remera_modelo_3d_-_creditos_a_quien_corresponda.glb" />*/}

            </div>
            
            <h2 className="w-full my-2 text-3xl font-bold leading-tight text-center text-gray-800">
            Implementación de nuestro E-commerce
            </h2>

        <p className="text-gray-600 mb-8">
          La implementación de “Puented Digitales” consta de un Portal Web de eCommerce
          que permite a los comercios y emprendedores vender sus productos y/o servicios
          a través de internet. El portal web de eCommerce se encuentra integrado con un
          sistema de gestión de ventas y stock que permite a los comercios y emprendedores
          administrar sus ventas y productos de manera eficiente.

        </p>

        <div className="cards-1  items-center justify-items-center  max-w-[1300px]">
          <div className=" container">
            <div className="flex justify-center">
              <div className="col-lg-12">
                <h2 className="h2-heading"
                  style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "1.5rem",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.1rem",
                    textShadow: '4px 4px 9px #000000',
                  }}>
                  Implementación
                </h2>

              </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full  ">
              <div className=" items-center justify-center mt-8 w-full ">

                <div className="card animacion-block">
                  <div className="card-image ">
                    <ImagenCard
                      url={"../assets/img/726_6219f1cbb41bb.webp"}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Cliente</h4>
                    <p>Podrá registrarse, navegar las diferentes secciones del mismo, agregar  artículos a su carrito de compras,
                      y una vez finalizada la selección, confirmar su compra eligiendo la forma de pago y tipo de envio.
                      El Cliente también podrá realizar toda la gestión de compra desde la App.
                    </p>
                  </div>
                </div>

              </div>

              <div className=" flex flex-col items-center justify-center mt-8 w-full">

                <div className="card animacion-block">
                  <div className="card-image ">
                    <ImagenCard
                      url={"../assets/img/ShopApp-para-la-gestión-de-pedidos-y-ventas.jpg"}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Proveedor</h4>
                    <p>Procesará el pedido realizado por el cliente, actualizará el estado de los pedidos permitiendo al cliente realizar el seguimiento correspondiente.
                      También podrá gestionar sus artículos, precios, etc.</p>
                  </div>
                </div>

              </div>

              <div className=" flex flex-col items-center justify-center mt-8 w-full">

                <div className="card animacion-block">
                  <div className="card-image ">
                    <ImagenCard
                      url={"../assets/img/portada-home.png"}
                    />
                  </div>
                  <div className="card-body">
                    <h4 className="card-title">Administrador</h4>
                    <p>Podrá autogestionar toda la plataforma, pudiendo mantener la información de todos los productos adheridos y accediendo a reportes en tiempo real.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* ---- */}




          </div>
        </div>




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
