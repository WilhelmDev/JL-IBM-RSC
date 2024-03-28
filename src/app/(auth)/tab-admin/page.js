import Image from 'next/image'
import React from 'react'

export const metadata = {
  title: 'Tablero de administrador || Homez - Real Estate NextJS Template'
}

const AgentAdminHome = ({ params }) => {
  return (
    <>
      {/* Agent Tab Section Area */}
      <section className='main-content' id='agent-tab-home'>
        <div className='info-user-cont gap-1'>
          <p className='welcome-user'>Hola, Admin</p>
          <span>Que bueno verte nuevamente por aquí</span>
        </div>
        <div className='admin-home-container d-flex pt-5 '>
          <div className='row w-100 gap-3 '>
                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              

                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
              
                <div className='d-flex admin-content-layout col-sm-6'>
                  <div className='item-data'>
                    <span>Total de propiedades</span>
                    <h2>583</h2>  
                  </div>
                  <div className="admin-content-icon">
                      <Image src="/images/tab-agent/property.svg" alt="icon" height={40} width={40} className='img bg-custom' />
                   </div>
                </div>
            


               
          </div>

          <div className='row w-50 pt-3 '>
                <div className='admin-content-info-layout'>
                    <span className='admin-content-info-header'>Ultimas Actividades</span>
                    
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                <div className='admin-content-info-row'>
                      <div className='admin-content-info-icon'>
                        <Image src="/images/tab-agent/property.svg" alt="icon" height={20} width={20} className='img bg-custom' />
                      </div>
                      <div className='admin-content-info'>
                          <p className='admin-content-info'><span className='admin-content-info-span'>Nombre del usuario</span> a solicitado una visita a <span  className='admin-content-info-span'>Nombre de la propiedad</span></p>
                      </div>
                </div>
                </div>

          </div>


        </div>
      </section>
      {/* End Agent Tab Section Area */}
    </>
  )
}

export default AgentAdminHome
