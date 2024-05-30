'use client'
import React, { useEffect, useState } from 'react'
import UploadVideoCustom from '../uploadVideo'
import { FrontOptions } from "@/data/selects";
import Select from "react-select";
import UploadMediaServices from '../uploadMedia';
import { updateHeroService } from '@/core/infrastructure/services/tab-admin.service';
import { toast } from 'react-toastify';

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

export default function Hero() {

  const [photos, setPhotos] = useState([])
  const [videoData, setVideoData] = useState({})
  const [hero, setHero] = useState("")
  const [portada, setPortada] = useState('')
  const [portadas, setPortadas] = useState([])
  const [loading, setLoading] = useState(false)

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const updateVideo = (values) => {
    setVideoData(values)
  }

  const handleSubmit = async () => {
    try {
      setLoading(true)
      await updateHeroService({
        photos,
        videoData,
        hero,
        portada
      });
      toast.success("Hero agregado correctamente")
    } catch (error) {
      toast.error("Ha ocurrido un error al agregar el Hero")
    } finally {
      setLoading(false)
    }
  }

  useEffect(() => {
    if (photos?.length > 0) {
      const images = photos.map((el, i) => {
        const parsed = {
          label: i + 1,
          value: i
        }
        return parsed
      })
      setPortadas(images)
    }
  }, [photos])

  return (
    <div className="ps-widget bgc-white bdrs12">
      <form className="form-style1">
        <div className='row'>
            <div className='col-lg-6 mb-3'>
                <div className="col-12 mb10">
                  <label className="heading-color ff-heading fw600 mb10">Típo de Hero</label>                
                </div>
                <Select
                    defaultValue={''}
                    name="colors"
                    options={FrontOptions}
                    styles={customStyles}
                    className="select-custom pl-0 "
                    classNamePrefix="select"
                    value={hero}
                    onChange={(e) => setHero(e)}
                    />
            </div>
        </div>
        <div className="row">
          <div className="col-lg-8">
            <UploadMediaServices updatePhotos={updatePhotos} label="Galeria de Fotos"  />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12 mb10">
                <label className="heading-color ff-heading fw600 mb10">Portada de galeria</label>                
              </div>
              {/* end col-12 */}
              <div className="col-12 mb10">
                <Select
                      defaultValue={''}
                      name="colors"
                      options={portadas}
                      styles={customStyles}
                      className="select-custom pl-0"
                      classNamePrefix="select"
                      value={portada}
                      onChange={(e) => setPortada(e)}
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
