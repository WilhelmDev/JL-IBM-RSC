'use client'
import React, { useEffect, useState } from 'react'

export default function Pagination({pages, range, callback}) {

  const [currentPage, setCurrentPage] = useState(1);

  // Disable paginations according to their location
  const isDisabled = function (i) {
    if(currentPage === 1 || currentPage === pages.length){
      return true
    }else if (i === 0 || i === pages.length-1){
      return true
    }
    return false
  }

  // Begin of handle control
  const handlePrevius = () => {
    setCurrentPage((prevPage) => prevPage > 1 ? prevPage-1 : prevPage = 1)
    // callback(currentPage)
  }

  const handleNext = () => {
    const pagelimit = pages.length
    setCurrentPage((prevPage) => prevPage < pagelimit ? prevPage+1 : prevPage = pagelimit)
    // callback(currentPage)
  }

  const handleSearch = (label) => {
    setCurrentPage(label);
    // callback(currentPage)
  }
    // End of handle control
  
  const renderPagination = () => {
    let paginationItems = [];

    paginationItems.push(
      <button key={`btn-<`} disabled={currentPage === 1} onClick={handlePrevius} className={'btn-pag arrow'}>
          {'<'}
      </button>
    )
    if(pages.length > 3){
      for(let pageItem = 0; pageItem < pages.length; pageItem++) 
        if(pageItem===currentPage || pageItem===currentPage-1 || pageItem===currentPage+1){
          if(currentPage === 1)
            paginationItems.push(
              <button key={`btn-${pages[pageItem].label}`} disabled={isDisabled(pageItem)} onClick={()=>{handleSearch(pages[pageItem].label)}}
              className={['btn-pag', currentPage == pages[pageItem].label ? 'active' : ''].join(' ')}>
                {pages[pageItem].label}
              </button>
            )
          if(currentPage > 1 && currentPage < pages.length-1 )
            paginationItems.push( 
              <button key={`btn-${pages[pageItem-1].label}`} disabled={isDisabled(pageItem-1)} onClick={()=>{handleSearch(pages[pageItem-1].label)}}
              className={['btn-pag', currentPage == pages[pageItem-1].label ? 'active' : ''].join(' ')}>
                {pages[pageItem-1].label}
              </button>
            )
          if(currentPage > pages.length-2)
            paginationItems.push(
              <button key={`btn-${pages[pageItem].label}`} disabled={isDisabled(pageItem)} onClick={()=>{handleSearch(pages[pageItem].label)}}
              className={['btn-pag', currentPage == pages[pageItem].label ? 'active' : ''].join(' ')}>
                {pages[pageItem].label}
              </button>
            )
        }
    }else{
      pages.map((pageItem,i) => {
        paginationItems.push(
          <button key={`btn-${pageItem.label}`} disabled={isDisabled(i)} onClick={()=>{handleSearch(pageItem.label)}}
          className={['btn-pag', currentPage == pageItem.label ? 'active' : ''].join(' ')}>
            {pageItem.label}
          </button>
          )
      })
    }

    paginationItems.push(
      <button key={`btn->`} onClick={handleNext} className={'btn-pag arrow'}>
          {'>'}
        </button>
    )

    return <>
      <div className='pagination-body'>
        <div className='controls'>
          {paginationItems}
        </div>
        <div className='info'>
          <span>{range}</span>
        </div>
      </div>
    </>;
        
    }

    return renderPagination();
  }
  