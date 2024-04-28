import React from 'react'
import dynamic from 'next/dynamic'

export const metadata = {
  title: "Edición Página Quienes Somos ? || Homez - Real Estate NextJS Template",
};

const Form = dynamic(() => import('@/components/tab-admin/form-wwa/form'), { ssr: false })

export default function PageWhoWeWareForm() {
  return (
    <section id='admin-form-wwa'>
      <div className='info-page'>
        <p className="title-page">Edición Página Quienes Somos ?</p>
        <span>Estas agregando una nueva propiedad, recuerda publicar al cuando cargues toda la información.</span>
      </div>
      <div className='content-page'>
        <Form />
      </div>
    </section>
  )
}
