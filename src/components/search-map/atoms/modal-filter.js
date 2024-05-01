import React from 'react'

export default function ModalFilter({ openModal, setOpenModal }) {
  return (
    <div className={openModal ? 'modal-filter' : 'modal-filter none'}>
      <div className='modal-container'>
        <form className='form'>
          <div className='row-modal'>
            <div className='column-modal'>
              <label for="search">Encuentra lo que buscas</label>
              <input type="text" id="search" placeholder="Que estas buscando?"/>
            </div>
            <div className='column-modal'>
              <label>Operación</label>
              <div className='operation'>
                <label>
                  <input type="radio" name="operation"/>Venta
                </label>        
                <label>
                  <input type="radio" name="operation"/>Alquiler
                </label>        
                <label>
                  <input type="radio" name="operation"/>Alquiler Temporal
                </label>
              </div>
            </div>
            <div className='column-modal'>
              <label for="type-property">Tipos de propiedad</label>
              <select name="type-property">
                <option value="propiedad-1">Propiedad-1</option>
                <option value="propiedad-2">Propiedad-2</option>
                <option value="propiedad-3">Propiedad-3</option>
                <option value="propiedad-4">Propiedad-4</option>
              </select>
            </div>
          </div>
          <div className='row-modal'>
            <div className='column-modal'>
              <label for="price">Precio</label>
              <div className='range'>
                <input className='ranges' type="text" id="price" placeholder="USD 1000"/>
                <small>-</small>
                <input className='ranges' type="text" id="price" placeholder="USD 100000"/>
              </div>
              <label for="price">Superficie del terreno</label>
              <div className='range'>
                <input className='ranges' type="text" id="price" placeholder="MIN"/>
                <small>-</small>
                <input className='ranges' type="text" id="price" placeholder="MAX"/>
              </div>
              <label for="buildedSurface">Superficie Construida</label>
              <div className='range'>
                <input className='ranges' type="text" id="buildedSurface" placeholder="MIN"/>
                <small>-</small>
                <input className='ranges' type="text" id="buildedSurface" placeholder="MAX"/>
              </div>
            </div>
            <div className='column-modal'>
              <label for="type-property">Partido</label>
              <select name="type-property">
                <option value="partidos-1">Todos los partidos</option>
                <option value="partidos-2">Todos los partidos</option>
                <option value="partidos-3">Todos los partidos</option>
                <option value="partidos-4">Todos los partidos</option>
              </select>
              <label for="type-property">Localidad</label>
              <select name="type-property">
                <option value="localidades-1">Todos las Localidades</option>
                <option value="localidades-2">Todos las Localidades</option>
                <option value="localidades-3">Todos las Localidades</option>
                <option value="localidades-4">Todos las Localidades</option>
              </select>
              <label for="type-property">Barrio</label>
              <select name="type-property">
                <option value="barrio-1">Todos los Barrio</option>
                <option value="barrio-2">Todos los Barrio</option>
                <option value="barrio-3">Todos los Barrio</option>
                <option value="barrio-4">Todos los Barrio</option>
              </select>
              <label for="type-property">Emprendimiento</label>
              <select name="type-property">
                <option value="emprendimiento-1">Todos los Emprendimiento</option>
                <option value="emprendimiento-2">Todos los Emprendimiento</option>
                <option value="emprendimiento-3">Todos los Emprendimiento</option>
                <option value="emprendimiento-4">Todos los Emprendimiento</option>
              </select>
            </div>
            <div className='column-modal'>
              <div className='antiquity-code'>
                <div>
                  <label for="antiquily">Antiguedad</label>
                  <input type="text" id="antiquily" placeholder="Todas"/>
                </div>
                <small>-</small>
                <div>
                  <label for="code">Código</label>
                  <input type="text" id="code" placeholder="frh212123"/>
                </div>
              </div>
              <div>
                <label>Baños</label>
                <div className='amount'>
                  <button>Todos</button>
                  <button>1+</button>
                  <button>2+</button>
                  <button>3+</button>
                  <button>4+</button>
                  <button>5+</button>
                </div>
              </div>
              <div>
                <label>Habitaciones</label>
                <div className='amount'>
                  <button>Todos</button>
                  <button>1+</button>
                  <button>2+</button>
                  <button>3+</button>
                  <button>4+</button>
                  <button>5+</button>
                </div>
              </div>
            </div>
          </div>
          <span>Espacios, Servicios y Adicionales</span>
          <div className='row-modal'>
            <div className='column-modal'>
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Lavadero
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Cochera
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Quincho
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Parrilla
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Estacionamiento
              </label> 
            </div>
            <div className='column-modal'>
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Gas Natural
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Internet
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Pavimento
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Hogar
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Averturas DVH
              </label> 
            </div>
            <div className='column-modal'>
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Perimetral
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Interno
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Pileta
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Alambrado Perimetral
              </label> 
              <label className='checkbox'>
                <input type="checkbox" name="operation"/>Alarma
              </label> 
            </div>
          </div>
          <div className='btn-container'>
            <div>
              <button className='search-btn'>BUSCAR</button>
              <button className='reset-btn btn'>Restablecer Filtros</button>
              <button className='save-btn btn'>Guardar Búsqueda</button>
            </div>
            <button className='close btn' onClick={() => setOpenModal(false)}>x</button>
          </div>
        </form>
      </div>
    </div>
  )
}
