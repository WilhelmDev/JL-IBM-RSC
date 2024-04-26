import React from 'react'
import dynamic from 'next/dynamic'

const List = dynamic(() => import('@/components/tab-client/comparisons/list'), { ssr: false })

export default function ComparisonsList() {
  return (
    <section id='comparisons-list'>
      <div className='info-page'>
        <p className="title-page">Comparaciones</p>
        <span>Estas viendo una lista con todas las comparaciones que guardaste.</span>
      </div>
      <div className='content-page'>
        <List />
      </div>
    </section>
  )
}
