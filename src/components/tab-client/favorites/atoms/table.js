import React from 'react'
import Favorite from './favorite'

export default function TableFavorites({localities}) {
  return (
    <div className="row" id='listing-favorites'>
      {/* Begin headers table */}
      <div className="col-12 headers-container">
        <div>Propiedades y detalles</div>
        <div>Precio x operación</div>
        <div>Solicitudes</div>
        <div>Última acción</div>
        <div>Favoritos y compartidos</div>
        <div>Acción</div>
      </div>
      {/* End headers table */}

      {/* Begin Content Table */}
      <div className="col-md-12">
        {
          favorites && favorites.length > 0 
          ? favorites.map((element, i) => (
            <>
            <Favorite key={i} element={element}/>
            </>
          ))
          : 'No hay Favoritos para mostrar'
        }
      </div>
      {/* End Content Table */}
    </div>
  )
}
