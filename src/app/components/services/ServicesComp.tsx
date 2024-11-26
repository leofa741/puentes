import React from 'react'
import { ImagenCard } from './ImagenCard'
import './contentservices.css'

export const ServicesComp = () => {
  return (
    <>
    <div className="cards-1  items-center justify-items-center  max-w-[1300px]">
        <div className=" container">
            <div className="flex justify-center">
                <div className="col-lg-12">                      
                    <h2 className="h2-heading"
                    style={{
                    color: "black",
                    textAlign: "center",
                    fontWeight: "bold",
                    fontSize: "2.5rem",
                    fontFamily: "sans-serif",
                    textTransform: "uppercase",
                    letterSpacing: "0.2rem",
                    textShadow: '4px 4px 9px #000000', 
                    }}>
                        Nuestros servicios
                    </h2>
                                            
                </div>
            </div>


            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full  ">
                <div className=" items-center justify-center mt-8 w-full ">

                    <div className="card animacion-block">
                        <div className="card-image ">
                                 <ImagenCard
                                url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/description-1.png?raw=true"}
                                  />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Sistemas web a medida</h4>
                            <p>Desarrollamos tu sistema personalizado. Desarrollamos intranet, extranet, portales, portfolios ¡y más! Contanos tu proyecto, seguro podemos ayudarte</p>
                        </div>
                    </div>

                </div>

                <div className=" flex flex-col items-center justify-center mt-8 w-full">

                    <div className="card animacion-block">
                        <div className="card-image ">
                            <ImagenCard
                                url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/E-Commerce.png?raw=true"}
                                    />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">E-commerce</h4>
                            <p>Creamos tu tienda online. con diseño profesional, sin comisiones por ventas y a medida. Gestioná tus ventas minoristas y mayoristas.Metodos de cobros paypal, creditcard  ¿Querés hacer crecer tu negocio? conocé más y tené tu propia tienda online llave en mano</p>
                        </div>
                    </div>

                </div>

                <div className=" flex flex-col items-center justify-center mt-8 w-full">

                    <div className="card animacion-block">
                        <div className="card-image ">
                        <ImagenCard
                                url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/description-2.png?raw=true"}
                                    />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Sitios web & Landing Page</h4>
                            <p>Diseñamos tu sitio web o landig Page. Somos expertos en diseño y usabilidad. Mejoramos la experiencia de navegación de tus clientes y aumentamos la visibilidad de tus productos. Tu Sitio Web o Landing Page está a un clic de volverse realidad.</p>
                        </div>
                    </div>
                </div>
            </div>

                      {/* ---- */}

                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-8 w-full  ">
                      <div className=" flex flex-col items-center justify-center mt-8 w-full">

                    <div className="card animacion-block">
                        <div className="card-image ">
                        <ImagenCard
                                url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/image1-4.png?raw=true"}
                                    />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">App móvil</h4>
                            <p>Tu aplicación para iOS y Android . Si querés lanzar un proyecto único,o facilitar y automatizar tus procesos, la mejor opción es una app. Amigable, poderosa, flexible y 100% escalable.</p>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center mt-8 w-full">

                    <div className="card animacion-block">
                        <div className="card-image ">
                        <ImagenCard
                                url={"https://github.com/leofa741/prixma/blob/master/src/assets/img/Mobile-UI-UX-Design.png?raw=true"}
                                    />
                        </div>
                        <div className="card-body">
                            <h4 className="card-title">Diseño UX/UI</h4>
                            <p>Tu plataforma digital es el nexo directo con tu público. Por eso la experiencia de usuarios debe ser óptima, para que tus valores se reflejen en tu producto o servicio. Potenciamos adaptando las etapas de interacción según: el rubro, las capacidades de tu audiencia </p>
                        </div>
                    </div>
                </div>

                <div className=" flex flex-col items-center justify-center mt-8 w-full">
                     <br />
                        <br />
                        <br />
                    <div className="card animacion-block">
                        <div className="card-image ">
                        <ImagenCard
                                url={  "https://raw.githubusercontent.com/leofa741/prixma/master/src/assets/img/services/producto3.webp"}
                                  />
                        </div>
                        <br />
                        <br />
                        <br />
                        <div className="card-body">
                            <h4 className="card-title"> CRM de gestion</h4>
                            <p>
                            Sistema de gestión para tu empresa. Te ayudamos a optimizar tus procesos y a mejorar la comunicación interna. Conectamos tus áreas de trabajo y automatizamos tareas.
                               </p>
                        </div>
                    </div>

                </div>
            </div>



        </div>
    </div>


</>
    )
    }
