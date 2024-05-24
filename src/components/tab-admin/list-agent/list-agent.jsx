'use client'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Pagination from "@/components/common/list/pagination";
import { useSearchParams, usePathname, useRouter} from 'next/navigation'
import { parsePagination } from '@/utilis/parsers'
// import { getAgentElements } from '@/core/infrastructure/services/tab-client.service'


const TableListAgent_User = dynamic(() => import('./list/content'))

const ListAgent = ({title_header, content_header, button_label, integration}) => {
    // const [agent_user, setAgent_User] = useState([])
    // const [loading, setLoading] = useState(false)
    const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
    const [pages, setPages] = useState([
        {
        label: '<',
        active: false,
        arrow: true
      },
      {
        label: 1,
        active: true,
        arrow: false
      },
      {
        label: '>',
        active: false,
        arrow: true
      },])
    const [range, setRange] = useState('1 - 1 Comparaciones')
  
    const params = useSearchParams()
    // const router = useRouter()
    // const pathname = usePathname()
  
    useEffect(() => {
      const actualPage = params.get('page')
      if (actualPage && +actualPage !== page) {
        setPage((Number(actualPage)))
      }
    }, [params, page])
  
    // useEffect(() => {
    //   if (agent_user !== undefined) {
    //     const getAgent_User= async (page) => {
    //       try {
    //         const { meta, data };
    //         switch(integration){
    //            case 'usuario': { meta, data } = await getUserList(page) 
    //            break;
    //            case 'agente': { meta, data } = await getAgentList(page)
    //            break;
    //         } 
    //         const { allPages, range, lastPage } = parsePagination(meta, 'Agente')
    //         setAgent_User(data.length === 0 ? undefined : data)
    //         setRange(range)
    //         setLastPage(lastPage)
    //         setPages(allPages)
    //       } catch (error) {
    //         setAgent_User(undefined)
    //       }
    //     }
    //     getAgent_User(page)
    //   }
    // }, [page, agent_user])
  
    // const changePage = (newPage) => {
    //   if (newPage !== page) {
    //     router.push(`${pathname}?page=${newPage}`)
    //     setAgent_user([])
    //   }
    // }
    
    return(
        <main className="list-agents">
            <div className="container-agent">
                <div className="header-agent">
                    <h1 className="title-page">{title_header}</h1>
                    <p>{content_header}</p>
                </div>
                <TableListAgent_User integration={integration}/>
            </div> 
            <div className="container-bottom row p10">
                {/* Begin Pagination */}
                <div className="pagination-container">
                    <Pagination pages={pages} range={range} callback={(e) => changePage(e)}/>
                </div>
                {/* End Pagination */}
                <button className="create-agent">{button_label}</button>
            </div>
        </main>
    )
}

export default ListAgent;