'use client'
import React, { useEffect, useState } from 'react'
import Locations from "./location/location"

export default function TableComparisons({localities}) {

  // Begin of temporal test variables
  const [property1, setProperty1] = useState({
    date : "01-01-2024",
    type_comp : "Venta",
    props : {
      imageurl : "/images/home-v3/landscape.jpg",
      nameproperty : "Nombre de la propiedad",
      amount : "140,000 USD"
    }
  });
  const [property2, setProperty2] = useState({
    date : "01-01-2024",
    type_comp : "Alquiler",
    props : {
      imageurl : "/images/home-v3/landscape.jpg",
      nameproperty : "Nombre de la propiedad",
      amount : "140,000 USD"
    }
  });
  const [property3, setProperty3] = useState({
    date : "01-01-2024",
    type_comp : "Alquiler Temporal",
    props : {
      imageurl : "/images/home-v3/landscape.jpg",
      nameproperty : "Nombre de la propiedad",
      amount : "140,000 USD"
    }
  });
  // End of temporal test variables

  const [locations, setLocations] = useState([property1,property2,property3])

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
    </div>
  )
}
