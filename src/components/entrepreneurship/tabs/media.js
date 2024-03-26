'use client'
import React, { useEffect, useRef, useState } from 'react'
import UploadMediaCustom from '../uploadMedia'
import UploadVideoCustom from '../uploadVideo'
import { Tooltip as ReactTooltip } from "react-tooltip";
import Image from 'next/image'

export default function MediaTab({ updateStepSix, sendForm, loading, stepFive}) {

  const [photos, setPhotos] = useState([])
  const [uploadedImages, setUploadedImages] = useState([]);
  const [uploadedImages2, setUploadedImages2] = useState([]);
  const [uploadedImages3, setUploadedImages3] = useState([]);
  const [uploadedImages4, setUploadedImages4] = useState([]);
  const [videoData, setVideoData] = useState({})
  const fileInputRef = useRef(null);
  const fileInputRef2 = useRef(null);
  const fileInputRef3 = useRef(null);
  const fileInputRef4 = useRef(null);

  useEffect(() => {
    if (uploadedImages.length > 0) {
      updatePhotos(uploadedImages)
    }
  }, [uploadedImages])

  useEffect(() => {
    updateStepSix({
      photos,
      uploadedImages,
      uploadedImages2,
      uploadedImages3,
      uploadedImages4,
      videoData
    })
  }, [photos, uploadedImages, uploadedImages2, uploadedImages3, uploadedImages4, videoData])


  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const handleUpload = (files) => {
    const newImages = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleUpload2 = (files) => {
    const newImages = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages2(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleUpload3 = (files) => {
    const newImages = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages3(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  
  const handleUpload4 = (files) => {
    const newImages = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newImages.push(e.target.result);
        setUploadedImages4(newImages);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleDelete = (index) => {
    const newImages = [...uploadedImages];
    newImages.splice(index, 1);
    setUploadedImages(newImages);
  };

  const handleDelete2 = (index) => {
    const newImages = [...uploadedImages2];
    newImages.splice(index, 1);
    setUploadedImages2(newImages);
  };

  const handleDelete3 = (index) => {
    const newImages = [...uploadedImages3];
    newImages.splice(index, 1);
    setUploadedImages3(newImages);
  };

  const handleDelete4 = (index) => {
    const newImages = [...uploadedImages4];
    newImages.splice(index, 1);
    setUploadedImages4(newImages);
  };

  const updateVideo = (values) => {
    setVideoData(values)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    sendForm()
  }

  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <form className="form-style1" onSubmit={handleSubmit}>
        <div className="row">
          <div className="col-lg-6">
            <UploadMediaCustom updatePhotos={updatePhotos} />
          </div>
          <div className="col-6">
            <div className="row">
              <div className="col-12">
                <label className="heading-color ff-heading fw600 mb10">Galerias por tipo de propiedad</label>                
              </div>
              <div className="col-6 mb-3">
                <label className="heading-color ff-heading fw600 mb10">{(stepFive?.elements && stepFive.elements[0].name !== '' ) ? stepFive.elements[0].name : '(Nombre 1)'}</label>
                { uploadedImages.length > 0 && (
                 // {/* Display uploaded images */}
                <div className="row profile-box position-relative d-md-flex align-items-end mb50">
                  {uploadedImages.map((imageData, index) => (
                    <div className="col-12" key={index}>
                      <div className="profile-img mb20 position-relative">
                        <Image
                          width={212}
                          height={194}
                          className="w-100 bdrs12 cover"
                          src={imageData}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                        <button
                          style={{ border: "none" }}
                          className="tag-del"
                          title="Delete Image"
                          onClick={() => handleDelete(index)}
                          type="button"
                          data-tooltip-id={`delete-${index}`}
                        >
                          <span className="fas fa-trash-can" />
                        </button>

                        <ReactTooltip
                          id={`delete-${index}`}
                          place="right"
                          content="Delete Image"
                        />
                      </div>
                  </div>
                  ))}
                </div>
                )}
                <input
                onChange={(e) => handleUpload(e.target.files)}
                ref={fileInputRef}
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
              />
              </div>
              <div className="col-6 mb-3">
                <label className="heading-color ff-heading fw600 mb10">{(stepFive?.elements && stepFive.elements[1].name !== '' ) ? stepFive.elements[1].name : '(Nombre 2)'}</label>
                { uploadedImages2.length > 0 && (
                 // {/* Display uploaded images */}
                <div className="row profile-box position-relative d-md-flex align-items-end mb50">
                  { uploadedImages2.map((imageData, index) => (
                    <div className="col-12" key={index}>
                      <div className="profile-img mb20 position-relative">
                        <Image
                          width={212}
                          height={194}
                          className="w-100 bdrs12 cover"
                          src={imageData}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                        <button
                          style={{ border: "none" }}
                          className="tag-del"
                          title="Delete Image"
                          onClick={() => handleDelete2(index)}
                          type="button"
                          data-tooltip-id={`delete-${index}`}
                        >
                          <span className="fas fa-trash-can" />
                        </button>

                        <ReactTooltip
                          id={`delete-${index}`}
                          place="right"
                          content="Delete Image"
                        />
                      </div>
                  </div>
                  ))}
                </div>
                )}
                <input
                onChange={(e) => handleUpload2(e.target.files)}
                type="file"
                ref={fileInputRef2}
                className="form-control"
                placeholder="Buscar archivos"
              />
              </div>
              <div className="col-6 mb-3">
                <label className="heading-color ff-heading fw600 mb10">{(stepFive?.elements && stepFive.elements[2].name !== '' ) ? stepFive.elements[2].name : '(Nombre 3)'}</label>
                { uploadedImages3.length > 0 && (
                 // {/* Display uploaded images */}
                <div className="row profile-box position-relative d-md-flex align-items-end mb50">
                  { uploadedImages3.map((imageData, index) => (
                    <div className="col-12" key={index}>
                      <div className="profile-img mb20 position-relative">
                        <Image
                          width={212}
                          height={194}
                          className="w-100 bdrs12 cover"
                          src={imageData}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                        <button
                          style={{ border: "none" }}
                          className="tag-del"
                          title="Delete Image"
                          onClick={() => handleDelete3(index)}
                          type="button"
                          data-tooltip-id={`delete-${index}`}
                        >
                          <span className="fas fa-trash-can" />
                        </button>

                        <ReactTooltip
                          id={`delete-${index}`}
                          place="right"
                          content="Delete Image"
                        />
                      </div>
                  </div>
                  ))}
                </div>
                )}
                <input
                onChange={(e) => handleUpload3(e.target.files)}
                ref={fileInputRef3}
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
              />
              </div>
              <div className="col-6 mb-3">
                <label className="heading-color ff-heading fw600 mb10">{(stepFive?.elements && stepFive.elements[3].name !== '' ) ? stepFive.elements[0].name : '(Nombre 4)'}</label>
                { uploadedImages4.length > 0 && (
                 // {/* Display uploaded images */}
                <div className="row profile-box position-relative d-md-flex align-items-end mb50">
                  { uploadedImages4.map((imageData, index) => (
                    <div className="col-12" key={index}>
                      <div className="profile-img mb20 position-relative">
                        <Image
                          width={212}
                          height={194}
                          className="w-100 bdrs12 cover"
                          src={imageData}
                          alt={`Uploaded Image ${index + 1}`}
                        />
                        <button
                          style={{ border: "none" }}
                          className="tag-del"
                          title="Delete Image"
                          onClick={() => handleDelete4(index)}
                          type="button"
                          data-tooltip-id={`delete-${index}`}
                        >
                          <span className="fas fa-trash-can" />
                        </button>

                        <ReactTooltip
                          id={`delete-${index}`}
                          place="right"
                          content="Delete Image"
                        />
                      </div>
                  </div>
                  ))}
                </div>
                )}
                <input
                onChange={(e) => handleUpload4(e.target.files)}
                ref={fileInputRef4}
                type="file"
                className="form-control"
                placeholder="Buscar archivos"
              />
              </div>
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
