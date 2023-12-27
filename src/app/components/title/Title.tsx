import React from 'react'
import './title.css'

interface Props {
    title: string
    subtitle?: string

}

export const Title = ({ title, subtitle }: Props) => {
  return (
    <>
    <div className="title">          
        <h1 className=" font-black  text-white tracking-widest">{title}</h1>
      
    </div>
    <div className="subtitle">          
   
        {subtitle && <h2 className="text-2m  text-white  tracking-widest">{subtitle}</h2>}
    </div>
    </>
  )
}
