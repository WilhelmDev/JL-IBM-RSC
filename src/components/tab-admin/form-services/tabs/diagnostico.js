'use client'
import React, { useState } from 'react'
import UploadMediaServices from '../uploadMedia'
import { updateDiagnosticService } from '@/core/infrastructure/services/tab-admin.service'
import { toast } from 'react-toastify'

export default function Diagnosis() {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [shortDescription, setShortDescription] = useState('')
  const [photos, setPhotos] = useState([])
  const [loading, setLoading] = useState(false)

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await updateDiagnosticService({
        title,
        shortDescription,
        description,
        photos
      })
      toast.success("Diagnóstico agregado correctamente")
    } catch (error) {
      if(error.response.status === 403){
        toast.error("No tienes permisos para agregar un Diagnóstico")
      } else {
        toast.error("Ha ocurrido un error al agregar el Diagnóstico")
      }
    } finally {
      setLoading(false)
    }
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
              onChange={(e) => setTitle(e.target.value)}
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
              value={shortDescription}
              onChange={(e) => setShortDescription(e.target.value)}
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
          <div className="col-lg-8">
            <UploadMediaServices updatePhotos={updatePhotos} label="Imagen Lateral" />
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
