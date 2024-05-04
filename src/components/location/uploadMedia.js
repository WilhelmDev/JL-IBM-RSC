import React, { useEffect, useState } from "react";
import UploadPhotoGallery from "../tab-admin/list-agent/property/dashboard/dashboard-add-property/upload-media/UploadPhotoGallery";
import VideoOptionFiledCustom from "./videoOption";

const UploadMediaCustom = ({updateStepThree, triggerForm, loading}) => {
  const [photos, setPhotos] = useState({})
  const [videos, setVideos] = useState({})

  useEffect(() => {
    updateStepThree({
      photos,
      videos
    })

  }, [videos, photos])

  const updatePhotos = (data) => {
    setPhotos(data)
  }

  const updateVideos = (data) => {
    setVideos(data)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    triggerForm()
  }

  return (
    <div className="ps-widget bgc-white bdrs12 p30 overflow-hidden position-relative">
      <h4 className="title fz17 mb30">Portada</h4>
      <form className="form-style1" onSubmit={(e) => handleSubmit(e)}>
        <div className="row">
          <div className="col-lg-12">
            <UploadPhotoGallery updatePhotos={updatePhotos}/>
          </div>
        </div>
        {/* End col-12 */}

        <div className="row">
          <VideoOptionFiledCustom updateVideos={updateVideos} photos={photos}/>
        </div>
        {/* End .row */}

        <div className="row">
          <div className="col-12">
            <div className="mb30 buttton-container-custom">
              <button disabled={loading} type="submit"
              >publicar</button>
            </div>
          </div>
        </div>
        {/* End .row */}
      </form>
    </div>
  );
};

export default UploadMediaCustom;
