"use client";
import { ROUTES } from '@/utilis/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/core/infrastructure/services/auth.service'

export default function SidebarTabClient() {
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
        <Link href={ROUTES.clientHome}>
          <span>Tablero</span>
        </Link>
      </div>
      <div className='list-managment'>
        <section className='container p-0 section-container'>
          <div className="section-link">
            <span>Listas</span>
            <div className='link-container'>
              <Image  src="/images/tab-client/favorites.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.clientFavorites}>
                <span>Favoritos</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-client/comparisons.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.clientComparisons}>
                <span>Comparaciones</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-client/searchs.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.clientSearchs}>
                <span>Búsquedas</span>
              </Link>
            </div>
            <div className='link-container'>
              <Image  src="/images/tab-client/requests.svg" alt="img-link" height={20} width={20} className='img' />
              <Link href={ROUTES.clientRequests}>
                <span>Solicitudes</span>
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
            <Link href={ROUTES.newAgent}>
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
