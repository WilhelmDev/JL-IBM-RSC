'use client'
import React from 'react'
import dynamic from 'next/dynamic'
import data from '../../../data/pagination.json'
import { parsePagination } from '@/utilis/parsers'
import Pagination from '@/components/common/list/pagination'

const TableFavorites = dynamic(() => import('./atoms/table'), { ssr: false })
// const data = import('../../../data/pagination.json')

export default function FavoriteListClient() {

  
  const { allPages, range, lastPage } = parsePagination(data, 'propiedades')
  const changePage = (e) => {
    console.log(e)
  }

  return (
    <main id='list-favorites-view'>
      <div className="row p30">
        <TableFavorites/>
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination pages={allPages} lastPage={lastPage} range={range} actualPage={2} callback={(e) => changePage(e)}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
