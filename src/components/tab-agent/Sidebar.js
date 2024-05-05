"use client";
import { ROUTES } from '@/utilis/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/core/infrastructure/services/auth.service'

export default function SidebarTabAgent() {
  const router = useRouter()

  const userLogout = async () => {
    try {
      await logout();
      localStorage.removeItem('token')
      router.push(ROUTES.Login)
    } catch (error) {
      console.log(error)
    }
      
  }

  return (
    <aside className='container sidebar-container'>
      <h5 className='title'>Agente de JL Bienes Raices</h5>
      <div className='tab-btn'>
        <Image src="/images/tab-agent/compass.svg" alt="compass-img" height={20} width={20} className='img' />
        <Link href={ROUTES.homeAgent}>
          <span>Tablero</span>
        </Link>
      </div>
      <div className='list-managment'>
        <span>Manejo de listas</span>
        <section className='container p-0 section-container'>
          <div className="section-link">
            <span>Propiedades</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.newProperty}>
                <span>Nueva propiedad</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.propertyList}>
                <span>Mis propiedades</span>
              </Link>
            </div>
          </div>
          <div className="section-link">
            <span>Barrios o contries</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.newNeighborhood}>
                <span>Nuevo barrio</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              {/* <Link href={ROUTES.neighborhoodList}> */}
                <span>Todos los barrios</span>
              {/* </Link> */}
            </div>
          </div>
          <div className="section-link">
            <span>Emprendimiento</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.newEntrepreneurship}>
                <span>Nuevo emprendimiento</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.entrepreneurshipList}>
                <span>Todos los emprendimientos</span>
              </Link>
            </div>
          </div>
          <div className="section-link">
            <span>Localidades</span>
            <div className='link-container'>
              <Image  src="/images/tab-agent/dock-plus.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.newLocality}>
                <span>Nuevo Localidad</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-agent/property.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.locationList}>
                <span>Todas las localidades</span>
              </Link>
            </div>
          </div>
        </section>
      </div>
      <div className='account-managment'>
        <span>MANAGE ACCOUNT</span>
        <main className='container links-account'>
          <div className='link'>
            <Image  src="/images/tab-agent/user.svg" alt="user-img" height={20} width={20} className='img' />
            <Link href={ROUTES.agentProfile}>
              <span>Mi Cuenta</span>
            </Link>
          </div>
          <div className='link'>
            <Image  src="/images/tab-agent/exit.svg" alt="user-img" height={20} width={20} className='img' />
            <button onClick={() => userLogout()}>
              <span>Cerrar sesión</span>
            </button>
          </div>
        </main>
      </div>
    </aside>
  )
}
