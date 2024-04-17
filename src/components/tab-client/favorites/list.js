import React from 'react'
import dynamic from 'next/dynamic'

const TableFavorites = dynamic(() => import('./atoms/table'), { ssr: false })

export default function FavoriteListClient() {
  return (
    <main id='list-favorites-view'>
      <div className="row p30">
        <TableFavorites/>
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          {/* <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page}/> */}
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
