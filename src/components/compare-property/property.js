import Image from 'next/image'
import React from 'react'

export default function Property() {
  return (
    <div className="membership_header" id='property-compare'>
      <div className="container-property">
        <div className='actions'>

        </div>
        <Image
          width={331}
          height={245}
          className="img-fluid w100"
          src="/images/listings/compare-1.jpg"
          alt="compare-1"
        />
        <span>Nombre de la propiedad</span>
        <div className="specs">
          <div className="spec">
            <span className="h6 price mt-1">$14,000 / mo</span>
            <small className="address mb-0">California City, CA, USA</small>
          </div>
          <div className='spec'>
            <Image src={'/images/custom/bed.svg'} height={10} width={10} alt='icon' className='icon-spec'/>
            <small>1 cama</small>
          </div>
          <div className="link">
          <small>Localidad - Partido</small>
          </div>
        </div>
      </div>
    </div>
  )
}
