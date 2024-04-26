'use client'
import React, { useEffect, useState } from 'react'
import Search from './search'

export default function TableSearch({ search }) {
    return (
      <div className='cell-container'>
        <div className='cell-name'>
          <p className='name title'>Título</p>
          <p className='name date'>Fecha de busqueda</p>
          <p className='name location'>Localidad</p>
          <p className='name cell-btn'>Operación</p>
          <p className='name cell-btn'>Cantidad de Resultados</p>
          <p className='name cell-btn'>Precio Mínimo</p>
          <p className='name cell-btn'>Precio Máximo</p>
          <p className='name cell-btn'>Acción</p>
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
  