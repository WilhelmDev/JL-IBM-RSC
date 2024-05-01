'use client'
import { FrontOptions } from '@/data/selects';
import React, { useState } from 'react'
import Select from 'react-select'

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

export default function HeroTab() {

  const [Hero, setHero] = useState({})
  const [tittle, setTittle] = useState('')
  const [subTitle, setSubTitle] = useState('')

  return (
    <form className="form-style1" id='home-form-1'>
      <div className="row">
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tipo de Hero</label>
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={Hero}
              onChange={e => setHero(e)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Tenemos las mejores propiedades"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Subtitulo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Busca tu próxima casa aquí"
              value={subTitle}
              onChange={(e) => setSubTitle(e.target.value)}
            />
          </div>
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
