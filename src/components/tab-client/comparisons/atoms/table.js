'use client'
import React, { useEffect, useState } from 'react'
import Locations from "./location/location"
import Pagination from "./location/Pagination"

export default function TableComparisons({localities}) {

  const [property, setProperty] = useState({
    date : "XX-XX-XXX",
    type_comp : "Venta",
    props : {
      imageurl : "/images/home-v3/landscape.jpg",
      nameproperty : "Nombre de la propiedad",
      amount : "140,000 USD"
    }
  });

  const [locations, setLocations] = useState([property,property,property])

  return (
    <div className="row" id='listing-comparisons'>
      {/* Begin headers table */}
      <div className="col-12 headers-container">
        <div>Fecha de comparación</div>
        <div>Tipo de comp</div>
        <div>prop 1</div>
        <div>prop 2</div>
        <div>prop 3</div>
        <div>Acción</div>
      </div>
      {/* End headers table */}

      {/* Begin Content Table */}
      <div className="col-md-12 mb-5">
        {
          locations && locations.length > 0 
          ? locations.map((element) => (
              <>
                <Locations _property={element}/>
              </>
            ))
            : 'No hay localidades para mostrar'
          }
      </div>
      {/* End Content Table */}

      {/* Begin Pagination */}
      <div className="pagination-container">
        <Pagination
          pages={0}
          range={0}
          callback={(newPage) => handleChange(newPage, search, sort, order)}
        />
      </div>
      {/* End Pagination */}
    </div>
  )
}
