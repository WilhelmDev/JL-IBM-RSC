import { addFavorite } from '@/core/infrastructure/services/tab-client.service'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { toast } from 'react-toastify'

export default function Property({ property }) {
  const addPropertyFavorite = async () => {
    try {
      await addFavorite("real-state", property.id)
      toast.success("La propiedad ha sido agregado a favoritos")
    } catch (error) {
      toast.error("Ha ocurrido un error")
    }
  }
  return (
    <main className='property'>
      <section className='img-container'>
        <div className='controls'>
          <div className='category pd-x'>{property?.status}</div>
          <div className='price pd-x-s'>
            <span><strong>${property?.price.retail.usd} USD</strong></span>
            <small>${property?.price.retail.arg} ARS</small>
          </div>
          <div className='icons pd-x'>
            <Link target='_blank' href={`/property-detail/${property?.id}`} style={{padding: 0, border: "none"}}>
              <Image src={'/images/custom/expand.svg'} height={50} width={50} alt='icon' className='icon' /> 
            </Link>
            <Link target='_blank' href={`/comparisons`} style={{padding: 0, border: "none"}}>
              <Image src={'/images/custom/super.svg'} height={50} width={50} alt='icon' className='icon'/> 
            </Link>
            <button style={{padding: 0, border: "none"}} onClick={() => addPropertyFavorite()}>
              <Image src={'/images/custom/favorite.svg'} height={50} width={50} alt='icon' className='icon'/> 
            </button>
          </div>
        </div>
        <Image src={'/images/custom/owner.png'} height={100} width={100} alt='property' className='owner-img'/>
        <Image src={'/images/custom/property.png'} height={100} width={100} alt='property' className='img-property'/>
      </section>
      <section className='content-container'>
        <span>{property?.title}</span>
        <small >Casa</small>
        <div className='specs'>
          <div className='spec'>
            <Image src={'/images/custom/bed.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property?.surface_area.bedroom} cama</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property?.surface_area.bathrooms} baños</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-spec'/>
            <small>{property?.surface_area.covered_surface} mts (cubiertos)</small>
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
