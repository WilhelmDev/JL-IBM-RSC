'use client'
import React, { useEffect, useState } from 'react'
import Search from './search'

export default function TableSearch({ search }) {
    return (
      <div className='cell-container'>
        <div className='cell-name'>
          <p className='name title'>Titulo</p>
          <p className='name date'>Fecha de busqueda</p>
          <p className='name location'>Localidad</p>
          <p className='name cell-btn'>Operacion</p>
          <p className='name cell-btn'>Cantidad de Resultados</p>
          <p className='name cell-btn'>Precio Minimo</p>
          <p className='name cell-btn'>Precio Maximo</p>
          <p className='name cell-btn'>Accion</p>
        </div>
      {/* Begin Content Table */}
      <>
        {
          search && search.length > 0 
          ? search.map((element, i) => (
            <>
            <Search key={i} element={element}/>
            </>
          ))
          : <div className='no-searches'>No hay busquedas para mostrar</div>
        }
      </>
      {/* End Content Table */}
      </div>
    )
  }
  