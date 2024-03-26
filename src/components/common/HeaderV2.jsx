import { ROUTES } from '@/utilis/routes'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

export default function HeaderV2() {
  return (
    <header className='header-v2'>
      <div className='logo'>
        <Image src="/images/header/logo.svg" alt="logo" width={100} height={100} className='logo-img'/>
      </div>
      <div className='navs-container'>
        <section className='info-links'>
          <div className='links-container'>
            <div className='link'>
              <Image src={'/images/header/info/email.svg'} height={60} width={60} alt='email' className='icon-header'/>
              <span className='paragraph'>info@jlbienesraices.com.ar</span>
            </div>
            <div className='link'>
              <Image src={'/images/header/info/phone.svg'} height={60} width={60} alt='email' className='icon-header'/>
              <span className='paragraph'>0111566717961</span>
            </div>
            <div className='link'>
              <Image src={'/images/header/info/whatsapp.svg'} height={60} width={60} alt='email' className='icon-header'/>
              <span className='paragraph'>549 11 66717961</span>
            </div>
            <div className='link social'>
              <Image src={'/images/header/info/facebook.svg'} height={60} width={60} alt='email' className='icon-header'/>
              <Image src={'/images/header/info/youtube.svg'} height={60} width={60} alt='email' className='icon-header'/>
              <Image src={'/images/header/info/instagram.svg'} height={60} width={60} alt='email' className='icon-header'/>
            </div>
          </div>
        </section>
        <section className="nav-links">
          <main className="navs">
            <Link href={ROUTES.Home}>Inicio</Link>
            <Link href={ROUTES.Browser}>Buscador</Link>
            <Link href={ROUTES.Neighborhoods}>Barrios y countrys</Link>
            <Link href={ROUTES.Entrepreneurship}>Emprendimientos</Link>
            <Link href={ROUTES.WhoWeAre}>Quienes Somos</Link>
            <Link href={ROUTES.Services}>Servicios</Link>
            <div className='login'>
              <Image src={'/images/header/navs/login.svg'} height={50} width={50} alt='user-logo' className='user-logo'/>
              <strong><Link href={ROUTES.Login}>Iniciar / Registrarse</Link></strong>
            </div>
            <button className='btn-custom'><Link href={ROUTES.Appraisals}>Tasaciones</Link></button>
            <Image src={'/images/header/navs/expand.svg'} height={50} width={50} alt='expand-logo' className='expand-logo'/>
          </main>
        </section>
      </div>
    </header>
  )
}
