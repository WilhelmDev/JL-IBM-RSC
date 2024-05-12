import Image from 'next/image'
import React from 'react'

export default function Entrepreneurship({ entrepreneurship }) {
  return (
    <main className='entrepreneurship'>
      <section className='info-cont'>
        <div className='available'>{entrepreneurship.offers.reduce(
          (acc, offer) => acc + offer.units_amount, 0
        )}</div>
        <div className='category'>
          <span>Propiedades</span>
          <span>Disponibles</span>
        </div>
        <div className='price'>
          <span><strong>Desde $25,000 USD</strong></span>
          <small>A $150.000 USD</small>
        </div>
      </section>
      <section className='img-container'>
        <Image src={'/images/custom/owner.png'} height={100} width={100} alt='logo' className='logo-img'/>
        <Image src={'/images/custom/entrepreneurship.png'} height={100} width={100} alt='neighborhood' className='img-neighborhood'/>
      </section>
      <section className='content-container'>
        <span>{entrepreneurship.title}</span>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/item.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{entrepreneurship.offers[0].units_amount} unidades en total</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{entrepreneurship.offers[0].bathrooms_amount} Disponibles</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{entrepreneurship.offers[0].covered_sourface} mts (cubiertos)</small>
          </div>
        </div>
        <div className='specs b-bt'>
          <div className='spec'>
            <Image src={'/images/custom/pin-map.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small className='map-link'>Ver en el mapa</small>
          </div>
        </div>
        <div className='link'>
          <small>Barrio, emprendimiento (Link Página) - Partido (Link al partido en el mapa)</small>
        </div>
      </section>
    </main>
  )
}
