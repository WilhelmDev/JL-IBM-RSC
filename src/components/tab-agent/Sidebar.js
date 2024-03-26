import Image from 'next/image'
import React from 'react'

export default function SidebarTabAgent() {
  return (
    <aside className='container sidebar-container'>
      <h5 className='title'>Agente de JL Bienes Raices</h5>
      <div className='tab-btn'>
        <Image src="/images/tab-agent/compass.svg" alt="compass-img" height={20} width={20} className='img' />
        <span>Tablero</span>
      </div>
      <div className='list-managment'>
        <span>Manejo de listas</span>
        <section className='container p-0 section-container'>
          <div className="section-link">
            <span>Propiedades</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Nueva propiedad</span>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Mis propiedades</span>
            </div>
          </div>
          <div className="section-link">
            <span>Barrios o contries</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Nuevo barrio</span>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Todos los barrios</span>
            </div>
          </div>
          <div className="section-link">
            <span>Emprendimiento</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Nuevo emprendimiento</span>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Todos los emprendimientos</span>
            </div>
          </div>
          <div className="section-link">
            <span>Localidades</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Nuevo Localidad</span>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <span>Todas las localidades</span>
            </div>
          </div>
        </section>
      </div>
      <div className='account-managment'>
        <span>MANAGE ACCOUNT</span>
        <main className='container links-account'>
          <div className='link'>
            <Image  src="/images/tab-agent/user.svg" alt="user-img" height={20} width={20} className='img' />
            <span>Mi Cuenta</span>
          </div>
          <div className='link'>
            <Image  src="/images/tab-agent/exit.svg" alt="user-img" height={20} width={20} className='img' />
            <span>Cerrar sesión</span>
          </div>
        </main>
      </div>
    </aside>
  )
}
