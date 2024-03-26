import React from 'react'
import Locality from './atom-components/locality'

export default function TableLocality({localities}) {
  return (
    <div className="row" id='listing-location'>
      {/* Begin headers table */}
      <div className="col-md-12 headers-container">
        <div>Nombre y detalles</div>
        <div>Información</div>
        <div>Amenidades Urbanas</div>
        <div>Acción</div>
      </div>
      {/* End headers table */}

      {/* Begin Content Table */}
      <div className="col-md-12">
        {
          localities && localities.length > 0 
          ? localities.map((element, i) => (
            <Locality key={i} item={element}/>
          ))
          : 'No hay localidades para mostrar'
        }
      </div>
      {/* End Content Table */}
    </div>
  )
}
