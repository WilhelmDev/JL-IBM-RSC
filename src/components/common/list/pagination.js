'use client'
import React, { useEffect } from 'react'

export default function Pagination({pages, range, lastPage, actualPage}) {

  const isLastPage = function (i) {
    let isDisabedArrow = false
    if (i === (pages.length -1) ) {
      isDisabedArrow = pages[pages.length-2].active
    }
    return isDisabedArrow
  }

  const isfirstPage = function(i) {
    let isDisabedArrow = false
    if (i === 0) {
      isDisabedArrow = pages[1].active 
    }
    return isDisabedArrow
  }
  
  const isDisabled = function (i) {
    const lastPageValidation = isLastPage(i)
    if (lastPageValidation) {
      return lastPageValidation
    }

    const firstPageValidation = isfirstPage(i)
    if (firstPageValidation) {
      return firstPageValidation
    }

    return false
  }
  return (
    <div className='pagination-body'>
      <div className='controls'>
        {pages.map((pageItem, i) => (
          <button key={`btn-${pageItem.label}`} disabled={isDisabled(i)}
          className={['btn-pag', pageItem.active ? 'active' : '', pageItem.arrow ? 'arrow' : ''].join(' ')}>
            {pageItem.label}
          </button>
        ))
        }
      </div>
      <div className='info'>
        <span>{range}</span>
      </div>
    </div>
  )
}
