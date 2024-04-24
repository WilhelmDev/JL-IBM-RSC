'use client'
import React, { useEffect, useState } from 'react'

export default function TableSearch(props) {
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
        <div className='data-container'>
          <p className='data title'>Titulo de la busqueda</p>
          <p className='data date'>01/01/2024</p>
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
            <button className='btn-icon'><i class="fa-solid fa-trash"></i></button>
            <button className='btn-icon'><i class="fa-solid fa-share-nodes"></i></button>
          </div>
        </div>
      </div>
    )
  }
  