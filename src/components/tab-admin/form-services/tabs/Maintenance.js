'use client'
import React, { useEffect, useState } from 'react'
import UploadMediaServices from '../uploadMedia'

export default function Diagnosis({updateStepThree, loading, sendForm}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])

  useEffect(() => {
    updateStepThree({
      photos,
    })
  }, [
    photos,
  ])


  const updatePhotos = (data) => {
    setPhotos(data)
  }

  // const handleUpload = (files, target) => {
  //   const newItems = [];

  //   for (const file of files) {
  //     const reader = new FileReader();
  //     reader.onload = (e) => {
  //       newItems.push(e.target.result);
  //       if (target === 1) {
  //         setDocPlant1(newItems);
  //       }
  //       if (target === 2) {
  //         setDocPlant2(newItems);
  //       }
  //       if (target === 3) {
  //         setDocPlant3(newItems);
  //       }
  //     };
  //     reader.readAsDataURL(file);
  //   }
  // }

  const handleSubmit = () => {
    sendForm()
  }


  return (
    <div className="ps-widget bgc-white bdrs12 p30 ">
      <form className="form-style1">
        <div className='row'>
          <div className="col-6 mb20">
            <label className="heading-color ff-heading fw600 mb10">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la localidad"
              value={title}
            />
          </div>
        </div>
        {/* End Row */}

        <div className='row'>
          <div className="col-12">
            <label className="heading-color ff-heading fw600 mb10">Descripción Corta</label>
            <textarea 
              className="form-control mb-3 h-custom-desc-small"
              placeholder='Verifica la tuya' 
              rows="" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </div>
        </div>
        {/* End Row */}

        <div className='row'>
          <div className="col-12">
            <label className="heading-color ff-heading fw600 mb10">Descripción</label>
            <textarea 
            className="form-control mb-3 h-custom"
            placeholder='' 
            rows="" 
            value={description}
            >
            </textarea>
          </div>
        </div>
        {/* End Row */}

        <div className="row">
          <div className="col-lg-8">
            <UploadMediaServices updatePhotos={updatePhotos} label="Imagen Latera" />
          </div>
        </div>
        {/* End Row */}

        <div className="row">
          <div className="col-12">
            <div className="mb30 buttton-container-custom">
              <button type="button" disabled={loading} onClick={() => handleSubmit()}
              >Guardar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  )
}