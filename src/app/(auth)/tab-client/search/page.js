import React from 'react'
import dynamic from 'next/dynamic' 
const List = dynamic(() => import('@/components/tab-client/search/list'), { ssr: false })


export default function Search() {
  return (
    <section id='search'>
      <div className='info-page'>
        <p className="title-page">Búsquedas</p>
        <span>Estas viendo una lista con todas las búsquedas que realizaste</span>
      </div>
      <div className='content-page'>
        <List/>
      </div>
    </section>
  )
}