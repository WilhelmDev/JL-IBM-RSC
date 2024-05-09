'use client'
import React, { useEffect, useState } from 'react'
import Select, { components } from 'react-select'
import Locality from './atom-components/locality';
import TableLocality from './table';
import Pagination from '../common/list/pagination';
import { getLocalizationsList } from '@/core/infrastructure/services/tab-agent.service';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import { parsePagination } from '@/utilis/parsers';
import Image from 'next/image';
import { ROUTES } from '@/utilis/routes';

const customStyles = {
  control: (provided) => ({
    ...provided,
    boxShadow: "none",
    outline: "0px",
    height: "100%",
    cursor: "pointer",
    flexGrow: 1,
  }),
  option: (provided, state) => ({
    ...provided,
    padding: "10px",
    cursor: "pointer",
    backgroundColor:
      state.isFocused || state.isSelected ? "#06173d" : "#f8f9fa",
    color: state.isFocused || state.isSelected ? "white" : "black",
  }),
  indicatorSeparator: (provided) => ({
    ...provided,
    display: "none",
  }),
};

const options = [
  { value: 'title asc', label: 'Nombre A - Z' },
  { value: 'title desc', label: 'Nombre Z - A' },
  { value: 'real_states_amount asc', label: 'Cantidad de Propiedades (-) A (+)' },
  { value: 'real_states_amount desc', label: 'Cantidad de Propiedades (+) A (-)' },
];

export default function List() {
  const [localities, setLocalities] = useState([])
  const [pages, setPages] = useState([])
  const [page, setPage] = useState(Number(useSearchParams().get('page')) || 1)
  const [lastPage, setLastPage] = useState(1)
  const [range, setRange] = useState('')
  const [search, setSearch] = useState(useSearchParams().get('search')|| '')
  const [searchText, setSearchText] = useState('')
  const [sortBy, setSortBy] = useState(useSearchParams().get('sortBy') || 'title')
  const [order, setOrder] = useState(useSearchParams().get('order') || 'asc')
  const [loading, setLoading] = useState(false)
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const params = useSearchParams()
  const router = useRouter()
  const pathname = usePathname()

  useEffect(() => {
    const actualPage = params.get('page')
    if (actualPage && +actualPage !== page) {
      setPage((Number(actualPage)))
    }
  }, [params, page])

  useEffect(() => {
    if ( localities !== undefined && localities.length === 0) {
      const fectchLocalities = async (page) => {
        try {
          setLoading(true)
          const { data, meta } = await getLocalizationsList(page, search, sortBy, order)
          const { allPages, range, lastPage } = parsePagination(meta, 'Localidades')
          setRange(range)
          setPages(allPages)
          setLastPage(lastPage)
          setLocalities(data.length === 0 ? undefined: data)
        } catch (error) {
          setLocalities(undefined)
        } finally {
          setLoading(false)
        }
      }
      fectchLocalities(page)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [localities])

  const updateRoute = (page, sortBy, order, search) => {
    router.replace(`${pathname}?page=${page}&sortBy=${sortBy}&order=${order}${search && '&search=' + search}`)
  }

  const handleChangePage = (newPage) => {
    if (newPage !== page) {
      updateRoute(newPage, sortBy, order, search)
      setPage(newPage)
      setLocalities([])
    }
  }

  const handleSortFilter = (values) => {
    const newSortBy = values.split(' ')[0]
    const newOrder = values.split(' ')[1]
    updateRoute(1, newSortBy, newOrder, search)
    setSortBy(newSortBy)
    setOrder(newOrder)
    setPage(1)
    setLocalities([])
  }

  const handleSearch = (text) => {
    if (text !== search) {
      updateRoute(1, sortBy, order, text)
      setSearch(text)
      setPage(1)
      setLocalities([])
    }
  }

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          src={
            menuIsOpen
              ? "/images/tab-agent/all-neighborhoods/up-arrow.svg"
              : "/images/tab-agent/all-neighborhoods/down-arrow.svg"
          }
          width={10}
          height={10}
          alt="arrow"
        />
      </components.DropdownIndicator>
    );
  };

  useEffect(() => {
    const timeout = setTimeout(() => {
      handleSearch(searchText)
    }, 600);
  
    return () => {
      clearTimeout(timeout)
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchText])

  return (
    <main id='list-locations-view'>
      <div className="row mb20 search-row">
        <div className="col-3"> 
        <div className="search_area">
          <input
            type="text"
            className="form-control"
            placeholder=""
            
            onChange={(e)=> setSearchText(e.target.value)}
          />
          <label>
            <span className="flaticon-search" />
          </label>
        </div>
        </div>
        <div className="col-4">
          <Select
            options={options}
            components={{ DropdownIndicator }}
            styles={customStyles}
            defaultValue={options[0]}
            menuIsOpen={menuIsOpen}
            onChange={(e) => handleSortFilter(e.value)}
            onMenuOpen={() => setMenuIsOpen(true)}
            onMenuClose={() => setMenuIsOpen(false)}
            className="custom-react_select"
            classNamePrefix="select"
          />
        </div>
        <div className="col-xl-3">
          <button type="button" className='btn-new' onClick={() => router.push(ROUTES.newLocality)}>
            Agregar Nuevo
          </button>
        </div>
      </div>
      <div className="row p30">
        <TableLocality localities={localities} loading={loading}/>
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page} callback={handleChangePage}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
