import React from 'react'
import Image from 'next/image'

const InfoRows = () => {
  return (
    <>
    <div className='card-container row pt-3 '>
            <div className='admin-content-info-layout'>
                    <span className='admin-content-info-header'>Ultimas Actividades</span>   

                    <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                            <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a<span className='admin-content-info-span'> Nombre de la propiedad</span></p>
                          </div>
                    </div>

                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-admin/texto.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> modifico la información del emprendimiento </p>
                          </div>
                    </div>

                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-admin/corazon.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> Guardo en su lista la propiedad</p>
                          </div>
                    </div>

                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> ha realizado una oferta de permuta en la propiedad</p>
                          </div>
                    </div>

                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-admin/texto.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span>ha solicitado enviado una consulta al agente</p>
                          </div>
                    </div>
                    
                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-admin/corazon.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'>Someone favorites your <span className='admin-content-info-span'>Triple Story House for Rent </span> listing </p>
                          </div>
                    </div>

                    <div className='admin-content-info-row'>
                          <div className='admin-content-info-icon'>
                            <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                          </div>
                          <div className='admin-content-info'>
                              <p className='admin-content-info'>Someone favorites your <span className='admin-content-info-span'>Triple Story House for Rent </span> listing </p>
                          </div>
                    </div>

                    
              </div>

          </div>


    </>
  )
}

export default  InfoRows
