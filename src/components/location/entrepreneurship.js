import Image from 'next/image'
import Link from 'next/link';
import React from 'react'

export default function Entrepreneurship({ entrepreneurship }) {
  const minPrice = entrepreneurship?.offers.reduce((min, offer) => Math.min(min, offer.min_max_price.min.amount), Infinity);
  const maxPrice = entrepreneurship?.offers.reduce((max, offer) => Math.max(max, offer.min_max_price.max.amount), -Infinity);
  const unitsAmount = entrepreneurship?.details.units_amount ? Math.floor(entrepreneurship.details.units_amount) : 0;
  const coveredSourface = entrepreneurship?.details.covered_sourface ? Math.floor(entrepreneurship.details.covered_sourface) : 0;
  const totalBathrooms = entrepreneurship?.offers.reduce((total, offer) => total + offer.bathrooms_amount, 0);
  return (
    <main className='entrepreneurship'>
      <section className='info-cont'>
        <div className='available'>{unitsAmount}</div>
        <div className='category'>
          <span>{entrepreneurship?.title || 'No disponible'}</span>
          <span>Disponibles</span>
        </div>
        <div className='price'>
          <span><strong>Desde ${minPrice} USD</strong></span>
          <small>A ${maxPrice} USD</small>
        </div>
      </section>
      <section className='img-container'>
        <Image src={'/images/custom/owner.png'} height={100} width={100} alt='logo' className='logo-img'/>
        <Image src={'/images/custom/entrepreneurship.png'} height={100} width={100} alt='neighborhood' className='img-neighborhood'/>
      </section>
      <section className='content-container'>
        <span>{entrepreneurship?.title}</span>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/item.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{unitsAmount} unidades en total</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{totalBathrooms} Disponibles</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{coveredSourface} mts (cubiertos)</small>
          </div>
        </div>
        <div className='specs b-bt'>
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