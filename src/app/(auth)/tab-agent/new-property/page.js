import PropertyForm from '@/components/property-form/form'
import React from 'react'

export const metadata = {
  title: "Nueva Propiedad || Homez - Real Estate NextJS Template",
};

export default function NewPropertyPage() {
  return (
    <section id='new-property'>
      <div className='info-page'>
        <p className="title-page">Nueva Propiedad</p>
        <span>Estas agregando una nueva Propiedad, recuerda publicarlo cuando cargues toda la información</span>
      </div>
      <div className='content-page'>
        <PropertyForm />
      </div>
    </section>
  )
}
