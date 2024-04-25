'use client'
import React, { useState } from 'react'
import { DataSearch } from '@/core/domain/search'
import Detail, { Date } from './details'


interface test{
    element:DataSearch
}

export default function Search({ element }: test) {

  const [item, setItem] = useState(element)
  
  return (
    <div className='data-container'>
        <Detail title={element.query}/>
        <Date date="6464"/>
        <p className='data location'>Localidad</p>
        <div className='data cell-btn'>
        <button>Venta</button>
        </div>
        <div className='data cell-btn'>
        <button>100</button>
        </div>
        <div className='data cell-btn'>
        <button>$140,000usd</button>
        </div>
        <div className='data cell-btn'>
        <button>$140,000usd</button>
        </div>
        <div className='data cell-btn'>
        <button>ver</button>
        <button className='btn-icon'><i className="fa-solid fa-trash"></i></button>
        <button className='btn-icon'><i className="fa-solid fa-share-nodes"></i></button>
        </div>
    </div>
  )
}
