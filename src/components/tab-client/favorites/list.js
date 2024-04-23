'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { parsePagination } from '@/utilis/parsers'
import Pagination from '@/components/common/list/pagination'
import { getFavoritesClient } from '@/core/infrastructure/services/tab-client.service'
import { useSearchParams, usePathname, useRouter} from 'next/navigation'

const TableFavorites = dynamic(() => import('./atoms/table'), { ssr: false })
// const data = import('../../../data/pagination.json')

export default function FavoriteListClient() {

  const [favorites, setFavorites] = useState([])
  const [loading, setLoading] = useState(false)
  const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
  const [pages, setPages] = useState([])
  const [range, setRange] = useState('')
  const [lastPage, setLastPage] = useState(1)

  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const actualPage = params.get('page')
    if (actualPage && +actualPage !== page) {
      setPage((Number(actualPage)))
    }
  }, [params, page])

  useEffect(() => {
    if (favorites !== undefined) {
      const getFavorites = async (page) => {
        try {
          const { meta, data } = await getFavoritesClient(page)
          const { allPages, range, lastPage } = parsePagination(meta, 'propiedades')
          setFavorites(data.length === 0 ? undefined : data)
          setRange(range)
          setLastPage(lastPage)
          setPages(allPages)
        } catch (error) {
          setFavorites(undefined)
        }
      }
      getFavorites(page)
    }
  }, [page])

  const changePage = (newPage) => {
    if (newPage !== page) {
      router.push(`${pathname}?page=${newPage}`)
      setFavorites([])
    }
  }
  

  return (
    <main id='list-favorites-view'>
      <div className="row p30">
        <TableFavorites favorites={favorites}/>
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page} callback={(e) => changePage(e)}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
