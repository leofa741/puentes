import React from 'react'

import './contentservices.css'


export const ImagenCard = ({ url }: { url: string }) => {

    
  return (
   
        <img className="img-fluid animacion-block1" src={url} alt="alternative" />
      )
}