'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { getLocalizationsList } from "@/core/infrastructure/services/tab-client.service";
import Pagination from '@/components/common/list/pagination';
import { parsePagination } from '@/utilis/parsers';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import RootLayout from '@/app/layout';

const TableComparisons = dynamic(() => import('./atoms/table'), { ssr: false })

export default function ComparisonsListClient() {

const [localities, setLocalities] = useState([])
const [page, setPage] = useState(1)
const [pages, setPages] = useState([])
const [range, setRange] = useState("")

const searchParams = useSearchParams();

// Incorporation of elements extracted from the backend
useEffect(() =>  {
  (async () => {
    if(localities !== undefined && localities.length === 0)
      try{
        const { data, meta } = await getLocalizationsList(page);
        const { allPages, _rang, lastPage } = parsePagination(meta, "Propiedades")
        setRange(_rang)
        setPages(allPages)
        setPage(lastPage)
        // setLocalities(data.length === 0 ? undefined : data)
      }catch(error){
        setLocalities(undefined)
      }
  })
},[localities, page])

// This should handle the locations according to the paginations (3 locations per page is expected).
const handleChange = (currentPage) => {
    // setLocalitiesView([]);
    // const newSearchParams = new URLSearchParams(searchParams.toString());
    // localities.map((location,i) => {
    //   if(currentPage > i && currentPage < localities.length){
    //     localitiesView.push(location);
    //   }
    // })
  }

  return (
    <main id='list-comparisons-view'>
      <div className="row p30">
        <TableComparisons localities={localitiesView}/>
      </div>
      <div className="row p10" id='content'>
        {/* Begin Pagination */}
        <div className="pagination-container">
              <Pagination pages={pages} range={range} page={page} callback={() => handleChange()}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
