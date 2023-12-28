import React from 'react'

import './bannerheader.css'

interface Props {
    title: string;
    descripcion: string;
    video: string;
    }


export const BannerHeader = ({title, descripcion, video}: Props) => {
  return (
    <>
    <section className="portfolio video-container" id="portfolio"> 
          <div className="container ">    
              <div className="row">
                  <div className="col-12">
                      <div className="intro">
                      <video autoPlay loop muted  
                              style={{width: "100%",                                    
                                      objectFit: "cover",
                                      position: "absolute",
                                      top: "0",
                                       left: "0",
                                       zIndex: "-1"
                                       }} >
                            <source src={video} type="video/mp4"   />
                      </video>
          
                          <div className="titlebbaner">                  
                          <h1 className="title__primary" data-aos="fade-up"  data-aos-duration="1000"  data-aos-delay="100"
  
                          style={{
                            color: "black",
                            fontSize: "3rem",
                            fontWeight: "700",
                            lineHeight: "1.1",
                            marginBottom: "1rem",
                            textTransform: "uppercase",
                            textAlign: "center",
                            textShadow: "0 0 10px #ffffff",
                         
                            }}                     
                          >{title}</h1>
                          </div>
                          <p className="mx-auto title__secondary"
                          style={{color: "black",                      
                        
                          fontWeight: "400",
                          lineHeight: "1.1",
                          marginBottom: "1rem",
                          textTransform: "uppercase",
                          textAlign: "center",
                          textShadow: "0 0 10px #ffffff"
                                }}
                          > {descripcion}  </p>                       
                      </div>
                  </div>
              </div>
          </div>       
      </section>
      </>
  )
}
