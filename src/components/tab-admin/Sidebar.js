"use client";
import { ROUTES } from '@/utilis/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import { useRouter } from 'next/navigation'
import { logout } from '@/core/infrastructure/services/auth.service'

export default function SidebarTabAdmin() {
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
      <h5 className='title'>Admin de JL Bienes Raices</h5>
      <div className='tab-btn'>
        <Image src="/images/tab-agent/compass.svg" alt="compass-img" height={20} width={20} className='img' />
        <Link href={ROUTES.adminHome}>
          <span>Bandeja de entrada</span>
        </Link>
      </div>
      <div className='list-managment'>
        <section className='container p-0 section-container'>
          <div className="section-link">
            <span>Contenidos x página</span>
            <div className='link-container'>
              <Link href={ROUTES.formHome}>
                <span>Inicio</span>
              </Link>
            </div>
            <div className='link-container'>
              <Link href={ROUTES.formWhoWeAre}>
                <span>Quienes Somos</span>
              </Link>
            </div>
            <div className='link-container'>
              <Link href={ROUTES.Services}>
                <span>Servicios</span>
              </Link>
            </div>
            <div className='link-container'>
              <Link href={ROUTES.Appraisals}>
                <span>Tasaciones</span>
              </Link>
            </div>
          </div>
          <div className="section-link">
            <span>Usuarios</span>
            <div className='link-container'>
              <Link href={ROUTES.newAgent}>
                <span>Agentes</span>
              </Link>
            </div>
            <div className='link-container'>
              <Link href={ROUTES.Home}>
                <span>Clientes</span>
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
