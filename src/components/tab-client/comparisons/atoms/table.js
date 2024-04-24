import React from 'react'
import Property from './location/property'

export default function TableComparisons({localities}) {
  return (
    <div className="row" id='listing-favorites'>
      {/* Begin headers table */}
      <div className="col-12 headers-container">
        <div>Fecha de comparación</div>
        <div>Tipo de comp</div>
        <div>Prop 1</div>
        <div>Prop 2</div>
        <div>Prop 3</div>
        <div>Acción</div>
      </div>
      {/* End headers table */}

      {/* Begin Content Table */}
      <div className="col-md-12">
        <Property comparisons={localities}/>
        {
          localities && localities.length > 0 
          ? localities.map((element, i) => (
            // <Locality key={i} item={element}/>
            <>Hola</>
          ))
          : 'No hay localidades para mostrar'
        }
      </div>
      {/* End Content Table */}
    </div>
  )
}
