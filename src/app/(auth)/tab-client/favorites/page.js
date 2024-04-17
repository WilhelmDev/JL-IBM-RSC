import React from 'react'
import dynamic from 'next/dynamic'

const List = dynamic(() => import('@/components/tab-client/favorites/list'), { ssr: false })

export default function FavoritesList() {
  return (
    <section id='favorite-list'>
      <div className='info-page'>
        <p className="title-page">Favoritos</p>
        <span>Estas viendo una lista con todas las propiedades que has marcado como favoritas.</span>
      </div>
      <div className='content-page'>
        <List />
      </div>
    </section>
  )
}
