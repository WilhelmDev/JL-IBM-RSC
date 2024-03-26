import Image from 'next/image'
import React from 'react'

export default function Property() {
  return (
    <main className='property'>
      <section className='img-container'>
        <div className='controls'>
          <div className='category pd-x'>En venta</div>
          <div className='price pd-x-s'>
            <span><strong>$140,000 USD</strong></span>
            <small>$1.400.000 ARS</small>
          </div>
          <div className='icons pd-x'>
            <Image src={'/images/custom/expand.svg'} height={50} width={50} alt='icon' className='icon'/> 
            <Image src={'/images/custom/super.svg'} height={50} width={50} alt='icon' className='icon'/> 
            <Image src={'/images/custom/favorite.svg'} height={50} width={50} alt='icon' className='icon'/> 
          </div>
        </div>
        <Image src={'/images/custom/owner.png'} height={100} width={100} alt='property' className='owner-img'/>
        <Image src={'/images/custom/property.png'} height={100} width={100} alt='property' className='img-property'/>
      </section>
      <section className='content-container'>
        <span>Nombre de la propiedad</span>
        <small >Casa</small>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/bed.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>1 cama</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>2 baños</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>1200 mts (cubiertos)</small>
          </div>
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
