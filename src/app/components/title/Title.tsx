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
        <h1 className="text-2l font-black  text-black tracking-widest">{title}</h1>
      
    </div>
    <div className="subtitle">          
   
        {subtitle && <h2 className="text-2m  text-black tracking-widest">{subtitle}</h2>}
    </div>
    </>
  )
}
