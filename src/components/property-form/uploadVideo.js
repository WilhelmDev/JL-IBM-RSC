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

const UploadVideoCustom = ({photos, updateVideo}) => {
  const [link, setLink] = useState('')
  const [portada, setPortada] = useState('')
  const [front, setFront] = useState(undefined)
  const [portadas, setPortadas] = useState([])

  useEffect(() => {
    if (photos.length > 0) {
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

  useEffect(() => {
    updateVideo({
      link,
      front,
      portada
    })
  }, [link, front, portada])

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
              defaultValue={''}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="select-custom pl-0"
              classNamePrefix="select"
              onChange={(e) => setFront(e)}
              value={front}
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
              className="select-custom pl-0"
              classNamePrefix="select"
              value={portada}
              isMulti={false}
              onChange={(e) => setPortada(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideoCustom;
