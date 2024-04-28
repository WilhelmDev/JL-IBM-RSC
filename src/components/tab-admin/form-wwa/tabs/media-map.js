'use client'
import { FrontOptions } from '@/data/selects';
import { Localizacion } from '@/utilis/positions';
import React, { useState } from 'react'
import Select from 'react-select'
import MediaUpload from '../../form-home/atoms/mediaUpload';
// import MapCustom from '../atoms/map';

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
  const [tittle, setTittle] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  return (
    <form className="form-style1" id='home-form-1'>
      <div className="row">
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Titulo</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link video"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Sub Titulo 1</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link video"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-12">
          <label className="heading-color ff-heading fw600 mb10">Descripcion</label>
          <textarea className="form-control mb-3 h-custom" style={{height: '10rem'}}
            placeholder="Esta seria un descripcion del contenido" 
            id="exampleFormControlTextarea1" rows="1" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
          </textarea>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Sub Titulo 2</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link video"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-12">
          <label className="heading-color ff-heading fw600 mb10">Descripcion</label>
          <textarea className="form-control mb-3 h-custom" style={{height: '10rem'}}
            placeholder="Esta seria un descripcion del contenido" 
            id="exampleFormControlTextarea1" rows="1" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
          </textarea>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Sub Titulo 3</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link video"
              value={tittle}
              onChange={(e) => setTittle(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-12">
          <label className="heading-color ff-heading fw600 mb10">Descripcion</label>
          <textarea className="form-control mb-3 h-custom" style={{height: '10rem'}}
            placeholder="Esta seria un descripcion del contenido" 
            id="exampleFormControlTextarea1" rows="1" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
          </textarea>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-6">
          <div className="row">
          <label className="heading-color ff-heading fw600 mb10">Imagen lateral</label>
          <div className="mb20">
            <MediaUpload updatePhotos={updatePhotos} /> 
          </div>
          </div>
        </div>
      </div>

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
