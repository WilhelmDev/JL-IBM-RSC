'use client'
import React, { useEffect, useState } from 'react'
import UploadVideoCustom from '../uploadVideo'
import { FrontOptions } from "@/data/selects";
import Select from "react-select";
import UploadMediaServices from '../uploadMedia';

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

export default function Hero({updateStepOne, loading, sendForm}) {

  const [photos, setPhotos] = useState([])
  const [videoData, setVideoData] = useState({})

  useEffect(() => {
    updateStepOne({
      photos,
      videoData
    })
  }, [
    photos,
    videoData
  ])  

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const updateVideo = (values) => {
    setVideoData(values)
  }


  return (
    <div className="ps-widget bgc-white bdrs12">
      <form className="form-style1">
        <div className='row'>
            <div className='col-lg-6 mb-3'>
                <div className="col-12 mb10">
                  <label className="heading-color ff-heading fw600 mb10">Típo de Hero</label>                
                </div>
                <Select
                    placeholder="Galeria"
                    defaultValue={''}
                    name="colors"
                    options={FrontOptions}
                    styles={customStyles}
                    className="select-custom pl-0 "
                    classNamePrefix="select"
                    />
            </div>
        </div>
        <div className="row">
          <div className="col-lg-8 mb20">
            <UploadMediaServices updatePhotos={updatePhotos} label="Galeria de Fotos"  />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 mb10">
                <label className="heading-color ff-heading fw600 mb10">Portada de galeria</label>                
                <label className="heading-color ff-heading fw600 mb10">Selecionar Portada(Medios cargados)</label>                
              </div>
              {/* end col-12 */}
              <div className="col-12 mb10">
                <Select
                      placeholder="Selecciona"
                      defaultValue={''}
                      name="colors"
                      options={FrontOptions}
                      styles={customStyles}
                      className="select-custom pl-0"
                      classNamePrefix="select"
                      />
              </div>
              {/* end col-12 */}
            </div>
          </div>
        </div>
        {/* End Row */}

        <div className="row">
          <UploadVideoCustom photos={photos} updateVideo={updateVideo} />
        </div>
        {/* End Row */}

        <div className="row">
          <div className="col-12">
            <div className="buttton-container-custom">
              <button type="button"
              >Guardar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  )
}
