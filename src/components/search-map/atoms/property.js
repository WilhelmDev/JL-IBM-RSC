import Image from 'next/image'
import React from 'react'

export default function PropertyHorizontal() {
  return (
    <div className='card-property'>
      <div className='img-container'>
        <Image src={'/images/custom/property.png'} height={100} width={100} alt='property' className='img-property'/>
      </div>
      <div className='card-content'>
        <div className='status'>
          <div className='category'>
            <div className='plus'>+</div>
            <div className='category-mane'>En venta</div>
            </div>
          <div className='price'>
            <span><strong>$140,000 USD</strong></span>
            <span><small>$1.400.000 ARS</small></span>
          </div>
          <div className='icons'>
            <Image src={'/images/custom/expand.svg'} height={50} width={50} alt='icon' className='icon'/> 
            <Image src={'/images/custom/super.svg'} height={50} width={50} alt='icon' className='icon'/> 
          </div>
        </div>
        <div className='characteristics'>
          <span>Nombre de la propiedad</span>
          <small >Ubicación de la propiedad</small>
          <div className='data'>
            <div className='datum'>
              <Image src={'/images/custom/bed.svg'} height={100} width={100} alt='icon' className='icon-datum'/>
              <small>1 cama</small>
            </div>
            <div className='datum'>
              <Image src={'/images/custom/shower.svg'} height={100} width={100} alt='icon' className='icon-datum'/>
              <small>2 baños</small>
            </div>
            <div className='datum'>
              <Image src={'/images/custom/area.svg'} height={100} width={100} alt='icon' className='icon-datum'/>
              <small>1200 mts (cubiertos)</small>
            </div>
          </div>
          <div className='link'>
            <small>Barrio, emprendimiento - Partido</small>
          </div>
        </div>
      </div>
    </div>
  )
}
