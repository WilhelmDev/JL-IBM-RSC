import Image from 'next/image'
import React from 'react'

export default function Neighborhood() {
  return (
    <main className='neighborhood2'>
      <section className='img-container'>
        <Image src={'/images/custom/logo.png'} height={100} width={100} alt='logo' className='logo-img'/>
        <span className='neighborhood-name'>Nombre del barrio </span>
        <Image src={'/images/image-start/neighborhood2.png'} height={500} width={500} alt='neighborhood' className='img-neighborhood'/>
      </section>

      <section className='info-cont'>
        <div className='available'>10</div>
        <div className='category'>
          <span>Propiedades</span>
          <span>Disponibles</span>
        </div>
        <div className='price'>
          <span><strong>Desde $25,000 USD</strong></span>
          <small>A $150.000 USD</small>
        </div>
      </section>

      <section className='content-container rounded-bottom'>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/house.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>20 unidades en total</small>
          </div>
          <div className='spec'>
            <small>5 Disponibles</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>1200 mts (totales)</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/pin-map.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small className='map-link'>Ver en el mapa</small>
          </div>
        </div>
      </section>
    </main>
  )
}
