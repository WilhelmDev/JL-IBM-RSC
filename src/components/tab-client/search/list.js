'use client'
import React, { useEffect, useState } from 'react'
import Pagination from "@/components/common/list/pagination";
import TableSearch from "./atoms/table";
import { getSearchClient } from '@/core/infrastructure/services/tab-client.service';
import { useSearchParams, usePathname, useRouter } from 'next/navigation';
import { paginas } from '@/data/pagination';
import { parsePagination } from '@/utilis/parsers';


export default function SearchList() {

  const router = useRouter()
  const pathname = usePathname()

  const [search, setSearch] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
  const [pages, setPages] = useState([])
  const [range, setRange] = useState('')
  const [lastPage, setLastPage] = useState(1)

  useEffect(() => {
    if (search !== undefined) {
      const getSearch = async (page) => {
        try {
          const { data, meta } = await getSearchClient(page)
          const { allPages, range, lastPage } = parsePagination(meta, 'Busquedas')
          setSearch(data.length === 0 ? undefined : data)
          setRange(range)
          setLastPage(lastPage)
          setPages(allPages)
        } catch (error) {
          setSearch(undefined)
        }
      }
      getSearch(page)
    }
  }, [page])

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
