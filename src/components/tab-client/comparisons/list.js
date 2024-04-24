'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { parsePagination } from '@/utilis/parsers'
import Pagination from '@/components/common/list/pagination'
import { getComparisonsClient } from '@/core/infrastructure/services/tab-client.service'
import { useSearchParams, usePathname, useRouter} from 'next/navigation'

const TableComparisons = dynamic(() => import('./atoms/table'), { ssr: false })
// const data = import('../../../data/pagination.json')

export default function ComparisonsListClient() {

  const [comparisons, setComparisons] = useState([])
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
    if (comparisons !== undefined) {
      const getComparisons = async (page) => {
        try {
          const { meta, data } = await getComparisonsClient(page)
          const { allPages, range, lastPage } = parsePagination(meta, 'propiedades')
          setComparisons(data.length === 0 ? undefined : data)
          setRange(range)
          setLastPage(lastPage)
          setPages(allPages)
        } catch (error) {
          setComparisons(undefined)
        }
      }
      getComparisons(page)
    }
  }, [page,comparisons])

  const changePage = (newPage) => {
    if (newPage !== page) {
      router.push(`${pathname}?page=${newPage}`)
      setComparisons([])
    }
  }
  

  return (
    <main id='list-comparisons-view'>
      <div className="row p30">
        <TableComparisons comparisons={comparisons}/>
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
