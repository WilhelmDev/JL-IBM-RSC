'use client'
import React, { useState } from 'react'
import { DataSearch } from '@/core/domain/search'
import Detail, { Date, Location, Operation, Resuls, MaxPrice, MinPrice } from './details'


interface test{
    element:DataSearch
}

export default function Search({ element }: test) {

  const [item, setItem] = useState(element)
  
  return (
    <div className='data-container'>
        <Detail title={element.query}/>
        <Date date="25/04/2014"/>
        <Location location="localidad"/>
        <Operation operation="Venta"/>
        <Resuls results="100"/>
        <MaxPrice maxPrice={element.price.max}/>
        <MinPrice minPrice={element.price.min}/>
        <div className='data cell-btn'>
        <button className='button'>ver</button>
        <button className='btn-icon button'><i className="fa-solid fa-trash"></i></button>
        <button className='btn-icon button'><i className="fa-solid fa-share-nodes"></i></button>
        </div>
    </div>
  )
}
