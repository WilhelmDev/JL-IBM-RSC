'use client'
import React from 'react'
import Pagination from "@/components/common/list/pagination";
import TableEntrepreneurship from "@/components/entrepreneurship/table";
import { useSearchParams } from 'next/navigation';
import { parsePagination } from '@/utilis/parsers';
import { useState, useEffect } from 'react';
import FilterButons from './FilterButons';
import { getEntrepreneurshipsList } from '@/core/infrastructure/services/tab-agent.service';

export default function PageEntrepreneurship() {

    const [entrepreneurship, setEntrepreneurship] = useState([])
    const [pages, setPages] = useState([])
    const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
    const [lastPage, setLastPage] = useState(1)
    const [range, setRange] = useState('')

    const params = useSearchParams()

    useEffect(() => {
        const actualPage = params.get('page')
        if (actualPage && +actualPage !== page) {
          setPage((Number(actualPage)))
        }
      }, [params, page])
    
      useEffect(() => {
        if (entrepreneurship !== undefined && entrepreneurship.length === 0) {
            
        }
      }, [page, entrepreneurship])

          

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
            <TableEntrepreneurship />
        </div>

        <div className="row p10">
            <div className="pagination-container">
                <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page}/>
            </div>
      </div>
    </>
  )
}
