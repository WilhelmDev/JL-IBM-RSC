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

// Begin of temporal test variables
const [property1, setProperty1] = useState({
  date : "01-01-2024",
  type_comp : "Venta",
  props : {
    imageurl : "/images/home-v3/landscape.jpg",
    nameproperty : "Nombre de la propiedad",
    amount : "140,000 USD"
  }
});
const [property2, setProperty2] = useState({
  date : "01-01-2024",
  type_comp : "Alquiler",
  props : {
    imageurl : "/images/home-v3/landscape.jpg",
    nameproperty : "Nombre de la propiedad",
    amount : "140,000 USD"
  }
});
const [property3, setProperty3] = useState({
  date : "01-01-2024",
  type_comp : "Alquiler Temporal",
  props : {
    imageurl : "/images/home-v3/landscape.jpg",
    nameproperty : "Nombre de la propiedad",
    amount : "140,000 USD"
  }
});

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
// End of temporal test variables

const [data, setData] = useState([property1,property2,property3])
const [localities, setLocalities] = useState([])
const [localitiesView, setLocalitiesView] = useState([]);
const [page, setPage] = useState(1)
const [pages, setPages] = useState([])
const [range, setRange] = useState("")

const searchParams = useSearchParams();

// Incorporation of elements extracted from the backend
useEffect(() =>  {
  // (async () => {
    if(localities !== undefined && localities.length === 0)
      try{
        // const { data, meta } = await getLocalizationsList(page);
        const { allPages, _rang, lastPage } = parsePagination(metatest, "Propiedades")
        setRange(_rang)
        setPages(allPages)
        setPage(lastPage)
        setLocalities(data.length === 0 ? undefined : data)
        setLocalitiesView(data)
      }catch(error){
        setLocalities(undefined)
      }
  // })
},[localities, localitiesView, metatest, data, page])

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
