import React from 'react'
import Comparisons from './comparisons/comparisons.js'

export default function TableComparisons({comparisons}) {
  return (
    <div className="row" id='listing-comparisons'>
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
      <Comparisons  element={comparisons?.real_state_1} comp={"Venta"}/>
      <Comparisons  element={comparisons?.real_state_2} comp={"Alquiler"}/>
      <Comparisons  element={comparisons?.real_state_3} comp={"Alquiler Temporal"}/>
        {/* {
          comparisons && comparisons.length > 0 
          ? comparisons.map((element, i) => (
            <Comparisons key={i} element={element}/>
          ))
          : 'No hay comparaciones para mostrar'
        } */}
      </div>
      {/* End Content Table */}
    </div>
  )
}
