'use client'
import React, { useEffect, useState } from 'react'
import Pagination from "@/components/common/list/pagination";
import TableSearch from "./atoms/table";
import { getSearchClient } from '@/core/infrastructure/services/tab-client.service';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { paginas } from '@/data/pagination';
import { parsePagination } from '@/utilis/parsers';


export default function SearchList() {

  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
  const [pages, setPages] = useState([])
  const [range, setRange] = useState('')
  const [lastPage, setLastPage] = useState(1)

  useEffect(() =>{
    const { allPages, range, lastPage } = parsePagination(paginas, 'Busquedas')
    setRange(range)
    setLastPage(lastPage)
    setPages(allPages)
    
  })
  const changePage = (newPage) => {
    if (newPage !== page) {
      router.push(`${pathname}?page=${newPage}`)
      setSearch([])
    }
  }
  

  return (
    <div>
      <TableSearch search={search}/>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page} callback={(e) => changePage(e)}/>
        </div>
        {/* End Pagination */}
      </div>
    </div>
  )
}
