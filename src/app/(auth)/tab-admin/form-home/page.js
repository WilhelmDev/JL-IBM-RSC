import dynamic from 'next/dynamic' 
const Form = dynamic(() => import('@/components/tab-admin/form-home/form'), { ssr: false })

export const metadata = {
  title: "Edicion de vista Home || Homez - Real Estate NextJS Template",
};

export default function Page() {
  return (
    <section id='admin-form-home'>
      <div className='info-page'>
        <p className="title-page">Edición Página Inicio</p>
        <span>Estas agregando una nueva propiedad, recuerda publicar al cuando cargues toda la información.</span>
      </div>
      <div className='content-page'>
        <Form />
      </div>
    </section>
  )
}
