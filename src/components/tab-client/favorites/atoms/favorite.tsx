'use client'
import React, { useState } from 'react'
import Image from 'next/image'
import Detail, { DetailOperation, FavoriteBtn, InfoBrick, LastAction, LastSolicitude } from './details'
import ActtionBtn from './action-btn'

export default function Favorite({ element }) {

  const [item, setItem] = useState(element.element)

  return (
    <div className='favorite-container'>
      <div className="section">
        <div className="image-container">
          <Image src="/images/tab-agent/location.svg" height={5} width={4} alt='image'/>
        </div>
        <div className="info-container">
          <p>{item.title}</p>
          <p className='sub-title'>{item.ref_code}</p>
          <p className='sub-title'>{'localidad, barrio'}</p>
        </div>
      </div>
      <div className="section">
        <DetailOperation price={'$ ' + parseFloat(item?.price?.retail?.usd || 0) + ' USD'} operation={'Venta'} />
        <DetailOperation price={'$ ' + parseFloat(item?.price?.anual_rent?.usd || 0) + ' USD'} operation={'Alquiler'} />
        <DetailOperation price={'Ver / Editar lista'} operation={'Alquiler temporal'} />
      </div>
      <div className="section">
        <InfoBrick type={'Visitas'} quantity={item.requests_amount}/>
        <InfoBrick type={'Permuta'} quantity={1}/>
        < LastSolicitude date={'21/03/2002'}/>
      </div>
      <div className='section'>
        <LastAction action={'{nombre de usuario} solicitó una visita'}/>
      </div>
      <div className='section'>
        <FavoriteBtn quantity={5} variant={'heart-filled'} type={'Favoritos'}/>
        <FavoriteBtn quantity={5} variant={'share'} type={'Compartidos'}/>
      </div>
      <div className="section buttons">
        <ActtionBtn variant={'delete'}/>
        <ActtionBtn variant={'compare'}/>
        <ActtionBtn variant={'share'}/>
      </div>
    </div>
  )
}
