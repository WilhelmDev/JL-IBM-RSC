import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function Neighborhood({ neighborhood }) {
  return (
    <main className='neighborhood'>
      <section className='info-cont'>
        <div className='available'>{neighborhood?.details.available_lots}</div>
        <div className='category'>
          <span>Propiedades</span>
          <span>Disponibles</span>
        </div>
        <div className='price'>
          {/*<span><strong>Desde ${neighborhood.details.lots_amount} USD</strong></span>*/}
        </div>
      </section>
      <section className='img-container'>
        <Image src={'/images/custom/logo.png'} height={100} width={100} alt='logo' className='logo-img'/>
        <Image src={'/images/custom/neighborhood.png'} height={100} width={100} alt='neighborhood' className='img-neighborhood'/>
      </section>
      <section className='content-container'>
        <span>{neighborhood?.title}</span>
        <small>{neighborhood?.zonificacion}</small>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/house.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{neighborhood?.details.lots_amount} unidades en total</small>
          </div>
          <div className='spec'>
            <small>{neighborhood?.details.available_lots} Disponibles</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{neighborhood?.details.neighborhood_surface} mts (totales)</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/pin-map.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <Link href="/search-map">
              <small className='map-link'>Ver en el mapa</small>
            </Link>
          </div>
        </div>
        <Link href="/search-map" className='link'>
          <small>Barrio, emprendimiento (Link Página) - Partido (Link al partido en el mapa)</small>
        </Link>
      </section>
    </main>
  )
}
