"use client";
import { FrontOptions } from "@/data/selects";
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

const VideoOptionFiledCustom = ({videos, updateVideos, photos}) => {
  const [link, setLink] = useState('')
  const [portada, setPortada] = useState('')
  const [portadas, setPortadas] = useState([])
  const [front, setFront] = useState(undefined)

  useEffect(() => {
    if (photos?.uploadedImages?.length > 0) {
      const images = photos.uploadedImages.map((el, i) => {
        const parsed = {
          label: i + 1,
          value: i
        }
        return parsed
      })
      setPortadas(images)
    }
  }, [photos])

  useEffect(() => {
    if(!(Object.keys(videos).length === 0) && (videos.portada !== portada || videos.link !== link || videos.front !== front)){
      setPortada(videos.portada);
      setLink(videos.link);
      setFront(videos.front);
    }
  }, [videos]);
  
  useEffect(() => {
    if((videos.link !== link || videos.portada !== portada || videos.front !== front)){
      updateVideos({
        link,
        portada,
        front
      });
    }
  }, [link, portada, front]);

  return (
    <>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Link del video
          </label>
          <input type="text" className="form-control" placeholder="Copia y pega el link aqui" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Seleccione portada (Medios Cargados)
          </label>
          <div className="location-area">
            <Select
              defaultValue={""}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={FrontOptions.find(option => option.value === front)}
              onChange={e => {setFront(e)}}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-4">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Seleccione miniatura (Galeria de IMG)
          </label>
          <div className="location-area">
            <Select
              defaultValue={''}
              name="colors"
              options={portadas}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={portada}
              onChange={e => setPortada(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default VideoOptionFiledCustom;
