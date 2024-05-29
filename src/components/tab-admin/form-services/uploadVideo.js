"use client";
import { FrontOptions, VideoPlatformsOptions } from "@/data/selects";
import { useEffect, useState } from "react";
import Select from "react-select";

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

const UploadVideoCustom = ({updateVideo}) => {
  const [link, setLink] = useState('')
  const [videoPlatform, setVideoPlatform] = useState(undefined)

  useEffect(() => {
    updateVideo({
      link,
      videoPlatform,
    })
  }, [link, videoPlatform])

  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="mb10">
          <label className="heading-color ff-heading fw600 mb20">
            Plataforma de video
          </label>
          <div className="location-area">
            <Select
              defaultValue={''}
              name="colors"
              options={VideoPlatformsOptions}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              onChange={(e) => setVideoPlatform(e)}
              value={videoPlatform}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb10">
          <label className="heading-color ff-heading fw600 mb20">
            Link del video
          </label>
          <input type="text" className="form-control" placeholder="Copia y pega el link aqui" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
      </div>
    </>
  );
};

export default UploadVideoCustom;
