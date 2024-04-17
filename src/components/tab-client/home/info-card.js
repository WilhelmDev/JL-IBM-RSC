import React from 'react'
import Image from 'next/image'

const InfoCards = () => {
  return (
    <>
  <div className='row w-100 gap-3 '>
                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Comparaciones</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Búsquedas guardadas</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-admin/lupa.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Solicitudes realizadas</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon ">
                    <Image src="/images/tab-admin/texto.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                  </div>
                </div>

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Favoritos</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                    <Image src="/images/tab-admin/corazon.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                  </div>
                </div>
              
          </div>

    </>
  )
}

export default  InfoCards
