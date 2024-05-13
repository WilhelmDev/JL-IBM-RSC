import Image from 'next/image'
import React from 'react'
import PropTypes from 'prop-types';

export default function Property({ property }) {
  if (!property) {
    return null; // o devuelve algún tipo de componente de carga o mensaje de error aquí
  }

  return (
    <main className='property'>
      <section className='img-container'>
        <div className='controls'>
          <div className='category pd-x'>{property.classifications.name || 'Clasificación por defecto'}</div>
          <div className='price pd-x-s'>
            <span><strong>{property.price?.retail?.usd || '0'}</strong></span>
            <small>{property.price?.retail?.arg || '0'}</small>
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
        <span>{property.title || 'Título por defecto'}</span>
        <small >Casa</small>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/bed.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property.bedroom || '0'} cama</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property.bathrooms || '0'} baños</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property.land_source || '0'} mts (cubiertos)</small>
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