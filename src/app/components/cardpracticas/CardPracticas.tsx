import React from 'react'
import './items.css'

export const CardPracticas = () => {
  return (
    <>

    <div className="containercard items-center justify-items-center  max-w-[1300px]"> 

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/sistemas1.png" alt="sistemas" />                             
                   <h3>software A Medida</h3>                
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p> Desarrollamos software a medida, para que tu empresa pueda crecer y adaptarse a los cambios del mercado.  </p>
                      
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/arquitectura-100x100.png" alt="arquitectura"  />                    
                   <h3>Arquitectura de software</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Brindamos servicios de consultoría en Arquitectura de Software en función de sus necesidades.  </p>
                       
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/devops_icon.png"  alt="devops"   />                    
                   <h3>DevOps</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Innovamos con nuevos marcos de trabajo que logran un desarrollo de aplicaciones en menor tiempo y a menor costo. </p>
                       
                </div>
            </div>
        </div>

        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/icon_mobile.png"  alt="sistemasweb"/>                    
                <h3>App´s</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Desarrollamos aplicaciones web, aplicaciones móviles para android /IOS ,desarrollo de software a medida. </p>
                     
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/basededatos.png"  alt="basededatos"   />                    
                   <h3>Base de datos</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Creamos y administramos bases de datos, para que su empresa pueda crecer y adaptarse a los cambios .  </p>
                      
                </div>
            </div>
        </div>
        <div className="card">
            <div className="face face1">
                <div className="content">
                <img src="assets/img/ecomerce.png" alt="ecomerce"   />                    
                <h3>Ecommerce</h3>
                </div>
            </div>
            <div className="face face2">
                <div className="content">
                    <p>Diseño de tiendas online, con la mejor tecnología y experiencia de usuario. </p>
                    
                </div>
            </div>
        </div>
    </div>

    </>
  )
}
