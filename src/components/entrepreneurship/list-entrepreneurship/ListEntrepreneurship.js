'use client'
import React, { useState, useEffect } from 'react'
import Pagination from "@/components/common/list/pagination"
import TableEntrepreneurship from "@/components/entrepreneurship/table"
import { parsePagination } from '@/utilis/parsers'
import FilterButons from './FilterButons'
import { getEntrepreneurshipsList } from '@/core/infrastructure/services/tab-agent.service'
import { usePathname, useSearchParams } from 'next/navigation'

export default function PageEntrepreneurship() {
    const pathname = usePathname()
    const searchParams = useSearchParams()
    const [entrepreneurship, setEntrepreneurship] = useState([])
    const [pages, setPages] = useState([])
    const [page, setPage] = useState(Number(searchParams.get('page')) || 1)
    const [lastPage, setLastPage] = useState(1)
    const [range, setRange] = useState('')

    const fetchEntrepreneurship = async (page) => {
        try {
            const {data, meta} = await getEntrepreneurshipsList(page)
            const { allPages, range, lastPage } = parsePagination(meta, 'Emprendimientos')
            setRange(range)
            setPages(allPages)
            setLastPage(lastPage)
            setEntrepreneurship(data)
        } catch (error) {
            setEntrepreneurship(undefined)
        }
    }

    const handleChangePage = (newPage) => {
        const newSearchParams = new URLSearchParams(searchParams.toString())
        newSearchParams.set('page', newPage)
        window.history.pushState({}, '', `${pathname}?${newSearchParams.toString()}`)
        setEntrepreneurship([])
        fetchEntrepreneurship(newPage)
        setPage(newPage)
    }

    useEffect(() => {
        fetchEntrepreneurship(page)
    }, [page])

  return (
    <>
        <div className="info-page">
            <p className="title-page">Todos los emprendimientos</p>
                <span>
                    Estas viendo una lista con todos los emprendimientos de la plataforma.
                </span>
        </div>

        <FilterButons />

        <div>
            <TableEntrepreneurship entrepreneurship = {entrepreneurship}/>
        </div>

        <div className="pagination-container">
          <Pagination pages={pages} range={range} callback={handleChangePage}/>
        </div>
       
    </>
  )
}
