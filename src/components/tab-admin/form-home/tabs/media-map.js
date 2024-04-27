'use client'
import { FrontOptions } from '@/data/selects';
import { Localizacion } from '@/utilis/positions';
import React, { useState } from 'react'
import Select from 'react-select'
import MapCustom from '../atoms/map';

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

export default function MediaMapTab() {

  const [position, setPosition] = useState(Localizacion.buenosAires)
  const [visible, setVisible] = useState(false)

  const updatePosition = (newPosition) => {
    const { lat, lng } = newPosition
    setPosition([lat, lng])
  }

  return (
    <form className="form-style1" id='home-form-1'>
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Propiedad</label>
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              // value={Hero}
              // onChange={e => setHero(e)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Barrio</label>
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              // value={Hero}
              // onChange={e => setHero(e)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Emprendimiento</label>
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              // value={Hero}
              // onChange={e => setHero(e)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Localidad</label>
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              // value={Hero}
              // onChange={e => setHero(e)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}

      <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-12 mb-3">
                <label className="heading-color ff-heading fw600 mb10">Selecciona en el mapa</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Latitud: EJ O´12,123,3"
                  value={position[0]}
                  disabled
                />
              </div>
              <div className="col-12 mb-3">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longitud: EJ S´123,12,12"
                  value={position[1]}
                  disabled
                />
              </div>
              <div>
                <button type="button" onClick={() => setVisible(!visible)}>
                  {visible ? 'Cerrar' : 'Abrir'} mapa
                </button>
              </div>
            </div>
          </div>
          <div className="col-9">
            {
              visible && <MapCustom updatePosition={updatePosition} />
            }
          </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}

      <div className="row">
        <div className="col-12">
          <div className="mb30 buttton-container-custom">
            <button type="submit"
            >Guardar</button>
          </div>
        </div>
      </div>
      {/* End row */}
    </form>
  )
}
