import React from 'react'
import './home.css'

export const HomeComponent = () => {
  return (
   <>
    
    <div className="section bg-primary pt-0 pb-0 ">
        <div className="container">
            <div className="row align-items-center col-12">
                <div className="col-lg-6" >
                    <div className="img-border">
                        <img className="img-fluid" src="/assets/img/sitio-web.webp" alt=""/>
                    </div>
                </div>
                <div className="col-lg-6 wow fadeInUp" data-wow-delay="0.5s">
                    <div className="h-100">
                        <h6 className=" section-title text-start  pe-2 font-bold  xs:text-xl sm:text-xl md:text-3xl lg:text-3xl xl:text-3xl 2xl:text-3xl">Puentes Digitales</h6>                      
                         
                        <h1 className="mb-4  font-bold text-4xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-5xl xl:text-5xl 2xl:text-5xl"> Conectando el futuro
                        <span className="text-2xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-4xl "> soluciones digitales  </span>
                         <span className="text-1xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-4xl "> que </span>   
                         <span className="text-2xl xs:text-5xl sm:text-5xl md:text-5xl lg:text-4xl xl:text-4xl 2xl:text-4xl ">    superan expectativa</span>                   
                           </h1>                    
                               
                        
                        <p className="mb-4">  Talento profesional, procesos y tecnologías asociadas, determinan nuestras áreas de conocimiento en Outsourcing de Innovación.</p>                      
                        
                        <p className="mb-4"> Transformamos ideas en productos digitales, a través de un proceso de innovación que integra diseño, tecnología y estrategia.</p>

                        
                         
                        

                    </div>
                </div>
            </div>
        </div>
    </div>


   
   
   </>
  )
}
