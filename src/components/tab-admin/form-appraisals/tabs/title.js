'use client'
import React, { useState } from 'react'

export default function Title({updateStepTwo, loading, sendForm}) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [photos, setPhotos] = useState([])

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const handleSubmit = () => {
    sendForm()
  }


  return (
    <div className="ps-widget bgc-white bdrs12">
      <form className="form-style1">
        <div className='row'>
          <div className="col-6 mb20">
            <label className="heading-color ff-heading fw600 mb20">Título</label>
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
            <label className="heading-color ff-heading fw600 mb20">Descripción Corta</label>
            <textarea 
              className="form-control mb20 h-custom-desc-small"
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
            <label className="heading-color ff-heading fw600 mb20">Descripción</label>
            <textarea 
            className="form-control mb20 h-custom"
            placeholder='' 
            rows="" 
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            >
            </textarea>
          </div>
        </div>
        {/* End Row */}

        <div className="row">
          <div className="col-12">
            <div className="buttton-container-custom">
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
