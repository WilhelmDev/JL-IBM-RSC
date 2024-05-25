import React from 'react'
import dynamic from 'next/dynamic'
import ServiceForm from '@/components/tab-admin/form-appraisals/form';


export const metadata = {
  title: "Nueva Propiedad || Homez - Real Estate NextJS Template",
};

export default function NewPropertyPage() {
  return (
    <section id='form-appraisals'>
      <div className='info-page'>
        <p className="title-page">Edición Página Tasaciones</p>
        <span>Aqui puedes modificar las secciones de la página a continuación, Cada numero indica una sección y su correspondiente contenido</span>
      </div>
      <div className='content-page'>
        <ServiceForm />
      </div>
    </section>
  )
}
