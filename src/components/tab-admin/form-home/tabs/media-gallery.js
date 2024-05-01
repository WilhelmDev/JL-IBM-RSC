'use client'
import React, { useState } from 'react'
import Select from 'react-select'
import MediaUpload from '../atoms/mediaUpload';
import { FrontOptions } from '@/data/selects';

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

export default function MediaTab() {

  const [photos, setPhotos] = useState([])
  const [frontPage, setFrontPage] = useState({})

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  return (
    <form className="form-style1" id='home-form-1'>
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
          <label className="heading-color ff-heading fw600 mb10">Galeria de fotos</label>
          <div className="mb20">
            <MediaUpload updatePhotos={updatePhotos} /> 
          </div>
          </div>
        </div>
        <div className="col-sm-6">
          <div className="row">
          <label className="heading-color ff-heading fw600 mb10">Portada de galería</label>
          <div className="mb20">
            <Select
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={frontPage}
              onChange={e => setFrontPage(e)}
            />
          </div>
          </div>
        </div>
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
