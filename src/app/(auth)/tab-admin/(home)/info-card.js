import React from 'react'
import Image from 'next/image'

const InfoCards = () => {
  return (
    <>
  <div className='row w-100 gap-3 '>
                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>

                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Emprendimientos</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-admin/lupa.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de barrios</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon ">
                      <Image src="/images/tab-admin/texto.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Localidades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-admin/corazon.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Agentes</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-admin/texto.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              
                <div className='d-flex justify-content-between admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de Clientes</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-admin/texto.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>              
          </div>

    </>
  )
}

export default  InfoCards
