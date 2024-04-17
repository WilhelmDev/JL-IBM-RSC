'use client'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Locality from './atom-components/locality';
import TableLocality from './table';
import Pagination from '../common/list/pagination';
import { getLocalizationsList } from '@/core/infrastructure/services/tab-agent.service';
import { useSearchParams } from 'next/navigation';
import { parsePagination } from '@/utilis/parsers';

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#eb6753"
        : isHovered
        ? "#eb675312"
        : isFocused
        ? "#eb675312"
        : undefined,
    };
  },
};

export default function List() {
  const [localities, setLocalities] = useState([])
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
    if ( localities !== undefined && localities.length === 0) {
      const fectchLocalities = async (page) => {
        try {
          const {data, meta} = await getLocalizationsList(page)
          const { allPages, range, lastPage } = parsePagination(meta, 'Propiedades')
          setRange(range)
          setPages(allPages)
          setLastPage(lastPage)
          setLocalities(data.length === 0 ? undefined: data)
        } catch (error) {
          setLocalities(undefined)
        }
      }
      fectchLocalities(page)
    }
  }, [page, localities])

  return (
    <main id='list-locations-view'>
      <div className="row mb20 search-row">
        <div className="col-3"> 
          <input type="text" className="form-control" placeholder='Buscar'/>
        </div>
        <div className="col-4">
          <Select
            defaultValue={''}
            name="filter"
            options={[]}
            styles={customStyles}
            className="custom-react_select"
            classNamePrefix="select"
            required
            isDisabled={false}
            isClearable={false}
          />
        </div>
        <div className="col-xl-3">
          <button type="button" className='btn-new'>
            Agregar Nuevo
          </button>
        </div>
      </div>
      <div className="row p30">
        <TableLocality localities={localities}/>
      </div>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page}/>
        </div>
        {/* End Pagination */}
      </div>
    </main>
  )
}
