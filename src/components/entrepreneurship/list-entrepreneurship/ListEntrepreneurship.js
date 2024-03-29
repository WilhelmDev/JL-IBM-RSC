'use client'
import React, { useState, useEffect } from 'react'
import Pagination from "@/components/common/list/pagination"
import TableEntrepreneurship from "@/components/entrepreneurship/table"
import { parsePagination } from '@/utilis/parsers'
import FilterButons from './FilterButons'
import { getEntrepreneurshipsList } from '@/core/infrastructure/services/tab-agent.service'
import { usePathname, useSearchParams, useRouter } from 'next/navigation'
import debounce from 'just-debounce-it'

export default function PageEntrepreneurship() {
    const router = useRouter();
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [entrepreneurship, setEntrepreneurship] = useState([])
    const [pages, setPages] = useState([])
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1)
    const [lastPage, setLastPage] = useState(1)
    const [range, setRange] = useState('')
    const [search , setSearch] = useState(searchParams.get('search') || '')
    const [sort, setSort] = useState(searchParams.get('sort_by') || 'title')
    const [order, setOrder] = useState(searchParams.get('sort_order') || 'asc')  

    const fetchEntrepreneurship = async (page, search, sort, order) => {
        try {
            const {data, meta} = await getEntrepreneurshipsList(page, search, sort, order)
            const { allPages, range, lastPage } = parsePagination(meta, 'Emprendimientos')
            setRange(range)
            setPages(allPages)
            setLastPage(lastPage)
            setEntrepreneurship(data)
        } catch (error) {
            setEntrepreneurship(undefined)
        }
    }

    const handleChange = (newPage, newSearchTerm, newSort, newOrder) => {
        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchTerm = newSearchTerm != null ? newSearchTerm : search;
        newSort = newSort != null ? newSort : sort;
        newOrder = newOrder != null ? newOrder : order;
        newSearchParams.set('page', newPage)
        newSearchParams.set('search', newSearchTerm)
        newSearchParams.set('sort_by', newSort)
        newSearchParams.set('sort_order', newOrder)
        setEntrepreneurship([])
        if (newSearchTerm !== search || newSort !== sort || newOrder !== order) {
            setSearch(newSearchTerm);
            setSort(newSort);
            setOrder(newOrder);
            setPage(1);
            newSearchParams.set('page', 1)
            fetchEntrepreneurship(1, newSearchParams.get('search'), newSearchParams.get('sort_by'), newSearchParams.get('sort_order'));
        } else {
            setSearch(newSearchTerm);
            setSort(newSort);
            setOrder(newOrder);
            setPage(newPage);
            fetchEntrepreneurship(newPage, newSearchParams.get('search'), newSearchParams.get('sort_by'), newSearchParams.get('sort_order'));
        }
        router.push(`${pathname}?${newSearchParams.toString()}`)
    }

    const handleChangeDebounced = debounce(handleChange, 1000)

    useEffect(() => {
        fetchEntrepreneurship(page, search, sort, order)
    }, [page, search, sort, order])

  return (
    <>
        <div className="info-page">
            <p className="title-page">Todos los emprendimientos</p>
                <span>
                    Estas viendo una lista con todos los emprendimientos de la plataforma.
                </span>
        </div>

        <FilterButons callback={({newSearchTerm, newSort, newOrder}) => handleChangeDebounced(page, newSearchTerm, newSort, newOrder)} />

        <div>
            <TableEntrepreneurship entrepreneurship = {entrepreneurship}/>
        </div>

        <div className="pagination-container">
          <Pagination pages={pages} range={range} callback={(newPage) => handleChangeDebounced(newPage, search, sort, order)}/>
        </div>
       
    </>
  )
}
