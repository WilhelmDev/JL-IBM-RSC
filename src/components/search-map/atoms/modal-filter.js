'use client'
import { AllProperties } from '@/data/selects';
import React, { useState } from 'react';
import InputRange from 'react-input-range'
import "react-input-range/lib/css/index.css";
import Select from 'react-select'


export default function ModalFilter({ openModal, setOpenModal }) {

  const [price, setPrice] = useState({ value: { min: 20, max: 70987 } });
  const [surface, setSurface] = useState({ value: { min: 20, max: 70987 } });
  const [build, setBuild] = useState({ value: { min: 20, max: 70987 } });

  const [operations, setOperations] = useState([])
  const [operation, setOperation] = useState([])
  


  // price range handler
  const priceOnChange = (value) => {
    setPrice({ value });
  };
  const surfaceOnChange = (value) => {
    setSurface({ value });
  }; 
  const builtOnChange = (value) => {
    setBuild({ value });
  };

  const customStyles = {
    option: (styles, { isFocused, isSelected, isHovered }) => {
      return {
        ...styles,
        backgroundColor: isSelected
          ? "#eb6753"
          : isHovered
          ? "#eb675312"
          : isFocused
          ? "#eb675312"
          : undefined,
      };
    },
  };



  return (
    <div className={openModal ? 'modal-filter' : 'modal-filter none'}>
      <div className='modal-container'>
        <form className='form'>
          <div className='row-modal'>
            <div className='column-modal'>
              <label for="search">Encuentra lo que buscas</label>
              <input type="text" id="search" className='search' placeholder="Que estas buscando?"/>
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
              <label>Tipos de propiedad</label>
              <Select
                  defaultValue={''}
                  name="colors"
                  options={AllProperties}
                  styles={customStyles}
                  className="custom-react_select"
                  classNamePrefix="select"
                  required
                  value={operation}
                  isDisabled={false}
                  isClearable={false}
                  isMulti
                  onChange={(e) => setOperation(e)}
                />
            </div>
          </div>
          <div className='row-modal'>
            <div className='column-modal'>
              <label for="price">Precio</label>
              <InputRange
                formatLabel={() => ``}
                maxValue={100000}
                minValue={0}
                value={price.value}
                onChange={(value) => priceOnChange(value)}
                id="slider"
              />
              <div className='range'>
                <input className='ranges' type="text" id="price" placeholder={"$" + price.value.min}/>
                <small>-</small>
                <input className='ranges' type="text" id="price" placeholder={"$" + price.value.max}/>
              </div>
              <label for="price">Superficie del terreno</label>
              <InputRange
                formatLabel={() => ``}
                maxValue={100000}
                minValue={0}
                value={surface.value}
                onChange={(value) => surfaceOnChange(value)}
                id="slider"
              />
              <div className='range'>
                <input className='ranges' type="text" id="price" placeholder={surface.value.min + "m"}/>
                <small>-</small>
                <input className='ranges' type="text" id="price" placeholder={surface.value.max + "m"}/>
              </div>
              <label for="buildedSurface">Superficie Construida</label>
              <InputRange
                maxValue={100000}
                formatLabel={() => ``}
                minValue={0}
                value={build.value}
                onChange={(value) => builtOnChange(value)}
                id="slider"
              />
              <div className='range'>
                <input className='ranges' type="text" id="buildedSurface" placeholder={build.value.min + "m"}/>
                <small>-</small>
                <input className='ranges' type="text" id="buildedSurface" placeholder={build.value.max + "m"}/>
              </div>
            </div>
            <div className='column-modal'>
              <label for="type-property">Partido</label>
              <Select
                defaultValue={''}
                name="colors"
                options={AllProperties}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                value={operation}
                isDisabled={false}
                isClearable={false}
                isMulti
                onChange={(e) => setOperation(e)}
              />
              <label for="type-property">Localidad</label>
              <Select
                defaultValue={''}
                name="colors"
                options={AllProperties}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                value={operation}
                isDisabled={false}
                isClearable={false}
                isMulti
                onChange={(e) => setOperation(e)}
              />
              <label for="type-property">Barrio</label>
              <Select
                defaultValue={''}
                name="colors"
                options={AllProperties}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                value={operation}
                isDisabled={false}
                isClearable={false}
                isMulti
                onChange={(e) => setOperation(e)}
              />
              <label for="type-property">Emprendimiento</label>
              <Select
                defaultValue={''}
                name="colors"
                options={AllProperties}
                styles={customStyles}
                className="custom-react_select"
                classNamePrefix="select"
                required
                value={operation}
                isDisabled={false}
                isClearable={false}
                isMulti
                onChange={(e) => setOperation(e)}
              />
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
