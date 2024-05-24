"use client";
import { FrontOptions } from "@/data/selects";
import { useEffect, useRef, useState } from "react";
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
  const [portada, setPortada] = useState(undefined)
  const [portadas, setPortadas] = useState([])
  const [catalog, setCatalog] = useState([])
  const [map, setMap] = useState([])
  const catalogRef = useRef(null);
  const mapRef = useRef(null);
  const [front, setFront] = useState(undefined)

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
      portada,
      catalog,
      map,
      link,
      front
    })
  }, [portada, catalog, map, link])

  const handleUpload = (files) => {
    const newItems = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newItems.push(e.target.result);
        setCatalog(newItems);
      };
      reader.readAsDataURL(file);
    }
  };

  const updateMap = (files) => {
    const newItems = [];

    for (const file of files) {
      const reader = new FileReader();
      reader.onload = (e) => {
        newItems.push(e.target.result);
        setMap(newItems);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
    <>
      <div className="col-sm-6 col-xl-3">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Catálogo PDF
          </label>
          <input type="file" name="catag" id="catag" multiple={false}
          onChange={(e) => handleUpload(e.target.files)} ref={catalogRef}
          className="form-control"/>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Mapa del emprendimiento
          </label>
          <input type="file" name="map" id="map" multiple={false}
          onChange={(e) => updateMap(e.target.files)} ref={mapRef}
          className="form-control"/>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Link del video de Youtube
          </label>
          <input type="text" className="form-control" placeholder="Copia y pega el link aqui" value={link} onChange={(e) => setLink(e.target.value)} />
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Seleccionar miniatura (Galeria)
          </label>
          <div className="location-area">
            <Select
              defaultValue={portada}
              name="colors"
              options={portadas}
              styles={customStyles}
              className="custom-react_select pl-0"
              classNamePrefix="select"
              value={portada}
              onChange={(e) => setPortada(e)}
            />
          </div>
        </div>
      </div>
      <div className="col-sm-6 col-xl-3">
        <div className="mb30">
          <label className="heading-color ff-heading fw600 mb10">
            Seleccionar portada (Medios Cargados)
          </label>
          <div className="location-area">
            <Select
              defaultValue={front}
              name="colors"
              options={FrontOptions}
              styles={customStyles}
              className="custom-react_select pl-0"
              classNamePrefix="select"
              value={front}
              onChange={(e) => setFront(e)}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default UploadVideoCustom;
