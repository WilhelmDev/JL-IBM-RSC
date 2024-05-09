"use client";
import React, { useEffect, useState } from "react";
import NeighborhoodsList from "./NeighborhoodsList";
import NeighborhoodsFilters from "./filters";
import ListPagination from "./ListPagination";
import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { getNeighborhoodsList } from "@/core/infrastructure/services/tab-agent.service";
import { parsePagination } from "@/utilis/parsers";
import Pagination from "@/components/common/list/pagination";

const Neighborhoods = () => {
  const [neighborhoods, setNeighborhoods] = useState([])
  const [pages, setPages] = useState([])
  const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
  const [search, setSearch] = useState(useSearchParams().get('search')|| '')
  const [sortBy, setSortBy] = useState(useSearchParams().get('sortBy') || 'title')
  const [order, setOrder] = useState(useSearchParams().get('order') || 'asc')
  const [lastPage, setLastPage] = useState(1)
  const [range, setRange] = useState('')
  const [loading, setLoading] = useState(false)

  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const actualPage = params.get('page')
    // console.log('actual ' + actualPage)
    if (actualPage && +actualPage !== page) {
      setPage((Number(actualPage)))
    }
  }, [params, page])

  const fectchNeighborhoods = async () => {
    try {
      setLoading(true)
      const { data, meta } = await getNeighborhoodsList(page, search, sortBy, order)
      const { allPages, range, lastPage } = parsePagination(meta, 'Barrios')
      setRange(range)
      setPages(allPages)
      setLastPage(lastPage)
      setNeighborhoods((data.length > 0) ? data : undefined )
    } catch (error) {
      setNeighborhoods(undefined)
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (!loading && (neighborhoods !== undefined && neighborhoods.length === 0)) {
      fectchNeighborhoods()
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [neighborhoods])

  const updateRoute = (page, sortBy, order, search) => {
    router.replace(`${pathname}?page=${page}&sortBy=${sortBy}&order=${order}${search && '&search=' + search}`)
  }

  const handleChangePage = (newPage) => {
    if (newPage !== page) {
      updateRoute(newPage, sortBy, order, search)
      setPage(newPage)
      setNeighborhoods([])
    }
  }

  const handleSortFilter = (values) => {
    const newSortBy = values.split(' ')[0]
    const newOrder = values.split(' ')[1]
    updateRoute(1, newSortBy, newOrder, search)
    setSortBy(newSortBy)
    setOrder(newOrder)
    setPage(1)
    setNeighborhoods([])
  }

  const handleSearch = (text) => {
    if (text !== search) {
      updateRoute(1, sortBy, order, text)
      setSearch(text)
      setPage(1)
      setNeighborhoods([])
    }
  }

  return (
    <>
      {/*Begin neighborhoods filter*/}
      <div className="neighborhoods-filter">
        <NeighborhoodsFilters handleSortFilter={handleSortFilter} handleSearch={handleSearch}/>
      </div>
      {/*End neighborhoods filter*/}

      {/*Begin neighborhoods list*/}
      <div className="neighborhood-list">
        <NeighborhoodsList neighborhoods={neighborhoods} loading={loading}/>
      </div>
      {/*End neighborhoods list*/}

      {/*Begin pagination*/}
      <div className="pagination-container">
        <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page} callback={handleChangePage}/>
      </div>
      {/*End pagination*/}
    </>
  );
};

export default Neighborhoods;
