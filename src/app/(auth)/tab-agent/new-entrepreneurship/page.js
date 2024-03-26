import EntrepreneurshipForm from '@/components/entrepreneurship/form'
import React from 'react'

export const metadata = {
  title: "Nuevo Emprendimiento || Homez - Real Estate NextJS Template",
};

export default function NewEntrepreneurshipPage() {
  return (
    <section id='new-entrepreneurship'>
      <div className='info-page'>
        <p className="title-page">Nuevo Emprendimiento</p>
        <span>Estas agregando un nuevo emprendimiento, recuerda publicarlo cuando cargues toda la información</span>
      </div>
      <div className='content-page'>
        <EntrepreneurshipForm />
      </div>
    </section>
  )
}
