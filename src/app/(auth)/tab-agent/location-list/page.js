import dynamic from 'next/dynamic' 
const List = dynamic(() => import('@/components/location/list'), { ssr: false })

export const metadata = {
  title: "Listado de propiedades || Homez - Real Estate NextJS Template",
};

export default function ListLocations() {
  return (
    <section id='location-list'>
      <div className='info-page'>
        <p className="title-page">Todas las localidades</p>
        <span>Estas viendo una lista con todos los barrios de la plataforma.</span>
      </div>
      <div className='content-page'>
        <List />
      </div>
    </section>
  )
}
