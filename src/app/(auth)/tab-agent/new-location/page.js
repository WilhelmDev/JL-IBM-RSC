import React from 'react'
import dynamic from 'next/dynamic'

const FormLocation = dynamic(() => import('@/components/location/form'), { ssr: false })

export const metadata = {
  title: "Nueva Localidad || Homez - Real Estate NextJS Template",
};

export default function NewLocationPage() {
  return (
    <section id='new-location'>
      <div className='info-page'>
        <p className="title-page">Nueva Localidad</p>
        <span>Estas agregando un nuevo Barrio, recuerda publicarlo cuando cargues toda la información</span>
      </div>
      <div className='content-page'>
        <FormLocation />
      </div>
    </section>
  )
}
