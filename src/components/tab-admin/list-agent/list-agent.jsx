'use client'
import React, { useState, useEffect } from "react";
import dynamic from "next/dynamic";
import Pagination from "@/components/common/list/pagination";
import { useSearchParams, usePathname, useRouter} from 'next/navigation'
import { parsePagination } from '@/utilis/parsers'
// import { getAgentElements } from '@/core/infrastructure/services/tab-client.service'


const TableListAgent = dynamic(() => import('./list/content'))

const ListAgent = () => {
    // const [agent, setAgent] = useState([])
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
    //   if (agent !== undefined) {
    //     const getAgent = async (page) => {
    //       try {
    //         const { meta, data } = await getAgentList(page)
    //         const { allPages, range, lastPage } = parsePagination(meta, 'Agente')
    //         setAgent(data.length === 0 ? undefined : data)
    //         setRange(range)
    //         setLastPage(lastPage)
    //         setPages(allPages)
    //       } catch (error) {
    //         setAgent(undefined)
    //       }
    //     }
    //     getAgent(page)
    //   }
    // }, [page, agent])
  
    // const changePage = (newPage) => {
    //   if (newPage !== page) {
    //     router.push(`${pathname}?page=${newPage}`)
    //     setAgent([])
    //   }
    // }
    
    return(
        <main className="list-agents">
            <div className="container-agent">
                <div className="header-agent">
                    <h1 className="title-page">Agente {'{Numero total de agentes}'}</h1>
                    <p>Aqui puedes ver todos los agentes que dispone la plataforma, puedes editar la información borrarlos y ademas crear nuevos.</p>
                </div>
                <TableListAgent />
            </div> 
            <div className="container-bottom row p10">
                {/* Begin Pagination */}
                <div className="pagination-container">
                    <Pagination pages={pages} range={range} callback={(e) => changePage(e)}/>
                </div>
                {/* End Pagination */}
                <button className="create-agent">CREAR AGENTE</button>
            </div>
        </main>
    )
}

export default ListAgent;