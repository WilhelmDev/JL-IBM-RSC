'use client'
import React, { useEffect, useState } from 'react'
import dynamic from 'next/dynamic'
import { getLocalizationsList } from "@/core/infrastructure/services/tab-client.services";
import Pagination from '@/components/common/list/pagination';
import { parsePagination } from '@/utilis/parsers';
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { getPropertiesList } from '@/core/infrastructure/services/tab-agent.service';
import RootLayout from '@/app/layout';

const TableComparisons = dynamic(() => import('./atoms/table'), { ssr: false })

export default function ComparisonsListClient() {

  // Begin of temporal test variables
const testlink = (_url, _label, _active) => {
  const link = {
    url : _url,
    label : _label,
    active : _active
  }
  return link;
}

const [metatest, setMetatest] = useState({
  current_page: 1,
  from: 1,
  to: 8,
  total: 20,
  last_page: 2,
  links: [testlink("url","1",true),testlink("url","2",false),testlink("url","3",false),testlink("url","4",false),testlink("url","5",false),testlink("url","6",false),testlink("url","7",false),testlink("url","8",false)],
});

const { allPages, _rang, lastPage } = parsePagination(metatest, "Propiedades")

const [localities, setLocalities] = useState([])
const [page, setPage] = useState(lastPage)
const [pages, setPages] = useState(allPages)
const [range, setRange] = useState(_rang)

const searchParams = useSearchParams();
// End of temporal test variables

// Incorporation of elements extracted from the backend
useEffect(() =>  {
  if(localities !== undefined && localities.length === 0){
    const fetchLocalities = async (page) => {
      try{
        const { data, meta } = await getLocalizationsList(page);
        const { allPages, _rang, lastPage } = parsePagination(metatest, "Propiedades")
        setRange(_rang)
        setPages(allPages)
        setPage(lastPage)
        setLocalities(data.length === 0 ? undefined : data)
      }catch (error) {
        setLocalities(undefined)
      }
    }
  }
})

// This should handle the locations according to the paginations (3 locations per page is expected).
const handleChange = (newPage) => {
  const newSearchParams = new URLSearchParams(searchParams.toString());
  const newPages = pages;
}

  return (
    <main id='list-comparisons-view'>
      <div className="row p30">
        <TableComparisons/>
      </div>
      <div className="row p10" id='content'>
        {/* Begin Pagination */}
        <div className="pagination-container">
              <Pagination pages={pages} range={range} callback={() => handleChange()}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
