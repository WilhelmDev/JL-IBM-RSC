import React from 'react'
import dynamic from 'next/dynamic'

const InfoCards = dynamic(() => import('@/components/tab-admin/home/info-card'), { ssr: false })
const InfoRows = dynamic(() => import('@/components/tab-admin/home/info-row'), { ssr: false })

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
