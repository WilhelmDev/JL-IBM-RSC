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
        
      useEffect(() => {
        if (entrepreneurship !== undefined && entrepreneurship.length === 0) {
          const fectchEntrepreneurship = async (page) => {
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
          fectchEntrepreneurship(page)
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
            <TableEntrepreneurship entrepreneurship = {entrepreneurship}/>
        </div>

       
    </>
  )
}
