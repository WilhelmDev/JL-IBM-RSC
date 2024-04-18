import React from 'react'

export default function TableFavorites({localities}) {
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
      <div className="col-md-12">
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
