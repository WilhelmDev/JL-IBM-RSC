import Image from 'next/image'
import React from 'react'
import InfoCards from './(home)/info-card'
import InfoRows from './(home)/info-row'

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
          <InfoCards/>
          <InfoRows/>
        </div>
      </section>
      {/* End Agent Tab Section Area */}
    </>
  )
}

export default AgentAdminHome
