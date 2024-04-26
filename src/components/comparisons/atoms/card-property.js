import React from 'react'
import Image from 'next/image'

export default function CardPorperty({ property }) {

  return (
    <>
        <div className={property ? 'card-property' : 'none'}>
            <div className='btn-container'>
                <button className='btn'><i class="fa-solid fa-arrow-up-right-from-square"></i></button>
                <button className='btn'><i class="fa-regular fa-square-plus"></i></button>
                <button className='btn'><i class="fa-regular fa-heart"></i></button>
                <button className='btn'><i class="fa-solid fa-trash"></i></button>
            </div>
            <Image
                src={`/images/properties/font.png`}
                width={370}
                height={380}
                className="comparisons-img cover"s
                alt='Propiedad'
            />
            <div className='characteristics'>
                <p className='name'>Nombre de la propiedad</p>
                <div className='other'>
                    <p><i class="fa-solid fa-bed"></i> 1 cama</p>
                    <p><i class="fa-solid fa-shower"></i> 2 baños</p>
                </div>
                <a className='links' href='#'>Barrio - Partido</a>
            </div>
        </div>
        <div className={!property ? 'new-property' : 'none'}>
            <div className='btn-new'>
                <button className='btn'>Agregar Propiedad</button>
            </div>
        </div>
    </>
  )
}
