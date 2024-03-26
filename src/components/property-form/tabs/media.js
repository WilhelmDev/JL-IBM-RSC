'use client'
import React, { useEffect, useRef, useState } from 'react'
import UploadMediaProperty from '../uploadMedia'
import UploadVideoCustom from '../uploadVideo'

export default function MediaTab({updateStepFive, loading, sendForm}) {

  const [photos, setPhotos] = useState([])
  const [plantas, setPlantas] = useState({
    planta1: '',
    planta2: '',
    planta3: ''
  })
  const [docPlant1, setDocPlant1] = useState([])
  const [docPlant2, setDocPlant2] = useState([])
  const [docPlant3, setDocPlant3] = useState([])
  const [videoData, setVideoData] = useState({})
  const refPlant1 = useRef(null);
  const refPlant2 = useRef(null);
  const refPlant3 = useRef(null);

  useEffect(() => {
    updateStepFive({
      photos,
      plantas,
      docPlant1,
      docPlant2,
      docPlant3,
      videoData
    })
  }, [
    photos,
    plantas,
    docPlant1,
    docPlant2,
    docPlant3,
    videoData
  ])
  

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const handleUpload = (files, target) => {
    const newItems = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newItems.push(e.target.result);
        if (target === 1) {
          setDocPlant1(newItems);
        }
        if (target === 2) {
          setDocPlant2(newItems);
        }
        if (target === 3) {
          setDocPlant3(newItems);
        }
      };
      reader.readAsDataURL(file);
    }
  }

  const updateVideo = (values) => {
    setVideoData(values)
  }

  const handleSubmit = () => {
    sendForm()
  }


  return (
    <div className="ps-widget bgc-white bdrs12 p30 ">
      <form className="form-style1">
        <div className="row">
          <div className="col-lg-6">
            <UploadMediaProperty updatePhotos={updatePhotos} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12 mb10">
                <label className="heading-color ff-heading fw600 mb10">Planos por planta</label>                
              </div>
              {/* end col-12 */}
              <div className="col-12 mb10">
                <div className="row">
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Planta 1</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    value={plantas.planta1}
                    onChange={(e) => setPlantas({...plantas, planta1: e.target.value})}
                  />
                  </div>
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Archivo</label>
                  <input
                    ref={refPlant1}
                    type="file"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    onChange={(e) => handleUpload(e.target.files, 1)}
                  />
                  </div>
                </div>
              </div>
              {/* end col-12 */}
              <div className="col-12 mb10">
                <div className="row">
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Planta 2</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    value={plantas.planta2}
                    onChange={(e) => setPlantas({...plantas, planta2: e.target.value})}
                  />
                  </div>
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Archivo</label>
                  <input
                    ref={refPlant2}
                    type="file"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    onChange={(e) => handleUpload(e.target.files, 2)}
                  />
                  </div>
                </div>
              </div>
              {/* end col-12 */}
              <div className="col-12">
                <div className="row">
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Planta 3</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    value={plantas.planta3}
                    onChange={(e) => setPlantas({...plantas, planta3: e.target.value})}
                  />
                  </div>
                  <div className="col-6">
                  <label className="heading-color ff-heading fw600 mb10">Archivo</label>
                  <input
                    ref={refPlant3}
                    type="file"
                    className="form-control"
                    placeholder="Nombre de la planta"
                    onChange={(e) => handleUpload(e.target.files, 3)}
                  />
                  </div>
                </div>
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
            <div className="mb30 buttton-container-custom">
              <button type="button" disabled={loading} onClick={() => handleSubmit()}
              >publicar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  )
}
