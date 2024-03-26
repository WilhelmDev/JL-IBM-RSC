import FormNeighborhood from '@/components/neighborhood/form'
import React from 'react'

export const metadata = {
  title: "Nuevo Barrio || Homez - Real Estate NextJS Template",
};

export default function NewNeighborhoodPage() {
  return (
    <section id='new-neighborhood'>
      <div className='info-page'>
        <p className="title-page">Nuevo Barrio</p>
        <span>Estas agregando un nuevo Barrio, recuerda publicarlo cuando cargues toda la información</span>
      </div>
      <div className='content-page'>
        <FormNeighborhood />
      </div>
    </section>
  )
}
