import Image from 'next/image'
import React from 'react'
import Detail, { MoreDetails } from './detail'
import ActtionBtn from './action-btn'

export default function Locality({item}) {
  const {title, information, reference_points_metadata, id} = item
  return (
    <div className='locality-container'>
      <div className="section-one">
        <div className="image-container">
          <Image src="/images/tab-agent/location.svg" height={5} width={4} alt='image'/>
        </div>
        <div className="info-container">
          <p>{title}</p>
        </div>
      </div>
      <div className="section-two">
        <Detail title={'Propiedades'} quantity={information.real_states_amount}/>
        <Detail title={'Barrios'} quantity={information.neighborhoods_amount}/>
        <Detail title={'Emprendimientos'} quantity={information.entrepreneurships_amount}/>
      </div>
      <div className="section-three">
        <Detail title={'Transporte y accesos'} quantity={reference_points_metadata.transport_access}/>
        <Detail title={'Establecimientos'} quantity={reference_points_metadata.stablishments}/>
        <Detail title={'recomendaciones'} quantity={reference_points_metadata.business}/>
        <MoreDetails />
      </div>
      <div className="section-four">
        <ActtionBtn variant={'delete'} itemId = {id} action ={"localities"}/>
        <ActtionBtn variant={'edit'}/>
        <ActtionBtn variant={'share'}/>
      </div>
    </div>
  )
}
