'use client'
import { FrontOptions } from '@/data/selects';
import React, { useState } from 'react'
import Select from 'react-select'
import MediaUpload from '../../form-home/atoms/mediaUpload';

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

const videoField = [
  { value: "Youtube", label: "Youtube" },
  { value: "Facebook", label: "Facebook" },
  { value: "Vimeo", label: "Vimeo" },
];

export default function HeroTab() {

  const [Hero, setHero] = useState({})
  const [photos, setPhotos] = useState([])
  const [frontPage, setFrontPage] = useState({})
  const [videoLink, setVideoLink] = useState('')
  const [platform, setPlatform] = useState({})

  const updatePhotos = (data) => {
    setPhotos(data)
  }

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
        {/* End .col-12 */}
      </div>
      {/* End row */}
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
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Plataforma del video</label>
            <Select
              defaultValue={''}
              name="colors"
              options={videoField}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={platform}
              onChange={e => setPlatform(e)}
            />
          </div>
        </div>
        <div className="col-sm-4">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Link del video</label>
            <input
              type="text"
              className="form-control"
              placeholder="Link video"
              value={videoLink}
              onChange={(e) => setVideoLink(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* end row */}
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
