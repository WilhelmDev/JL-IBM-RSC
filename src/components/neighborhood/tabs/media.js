'use client'
import React, { useEffect, useState } from 'react'
import UploadMediaCustom from '../uploadMedia'
import UploadVideoCustom from '../uploadVideo'

export default function TabMedia({stepFour, updateStepFour, loading, sendForm}) {

  const [photos, setPhotos] = useState([])
  const [airDoc, setAirDoc] = useState([])
  const [logoDoc, setLogoDoc] = useState([])
  const [rulesDoc, setRulesDoc] = useState([])
  const [videoData, setVideoData] = useState({})

  const handleUpload = (files, target) => {
    const newItems = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newItems.push(e.target.result);
        if (target === 1) {
          setAirDoc(newItems);
        }
        if (target === 2) {
          setLogoDoc(newItems);
        }
        if (target === 3) {
          setRulesDoc(newItems);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const updateVideo = (values) => {
    setVideoData(values)
  }

  useEffect(() => {
    updateStepFour({
      photos, airDoc, logoDoc, rulesDoc,
      videoData
    })
  }, [photos, airDoc, logoDoc, rulesDoc,
    videoData
  ])
  
  const handleSubmit = (e) => {
    e.preventDefault()
    sendForm()
  }

  useEffect(() => {
    if(!(Object.keys(stepFour).length === 0) && (
        stepFour.photos !== photos ||
        stepFour.videoData !== videoData 
      )){
      setPhotos(stepFour?.photos)
      setVideoData(stepFour?.videoData)
    }
  }, [stepFour])

  return (
    <div className="ps-widget bgc-white bdrs12 p30 position-relative">
      <form className="form-style1" onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-lg-8">
            <UploadMediaCustom updatePhotos={updatePhotos} />
          </div>
          <div className="col-4">
            <div className="row">
              <div className="col-12">
                <label className="heading-color ff-heading fw600 mb10">Planos del barrio</label>                
              </div>
              <div className="col-12">
                <label className="heading-color ff-heading fw600 mb10">Plano Vista Aerea</label>
                <input
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
                onChange={(e) => handleUpload(e.target.files, 1)}
              />
              </div>
              <div className="col-12">
                <label className="heading-color ff-heading fw600 mb10">Logotipo del barrio</label>
                <input
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
                onChange={(e) => handleUpload(e.target.files, 2)}
              />
              </div>
              <div className="col-12">
                <label className="heading-color ff-heading fw600 mb10">Reglamento</label>
                <input
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
                onChange={(e) => handleUpload(e.target.files, 3)}
              />
              </div>
            </div>
          </div>
        </div>
        {/* End Row */}

        <div className="row">
          <UploadVideoCustom photos={photos} updateVideo={updateVideo}/>
        </div>
        {/* End Row */}

        <div className="row">
          <div className="col-12">
            <div className="mb30 buttton-container-custom">
              <button type="submit" disabled={loading}
              >publicar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  )
}
