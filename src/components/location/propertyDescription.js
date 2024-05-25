"use client";
import Select from "react-select";
import MapCustom from "../tab-agent/Map";
import { Countries, Provincies } from "@/data/selects";
import { Localizacion } from "@/utilis/positions";
import { useEffect, useState } from "react";
import { getPartidos } from "@/core/infrastructure/services/tab-agent.service";

const PropertyDescriptionCustom = ({stepOne, updateStepOne}) => {
  const [position, setPosition] = useState(Localizacion.buenosAires)
  const [title, setTitle] = useState('')
  const [partido, setPartido] = useState('')
  const [partidos, setPartidos] = useState([])

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
        zIndex: 150
      };
    },
  };

  useEffect(() => {
    if(!(Object.keys(stepOne).length === 0) && (stepOne.title !== title || stepOne.position !== position || stepOne.partido !== partido)){
      setTitle(stepOne?.title)
      setPosition(stepOne?.position)
      setPartido(stepOne?.partido)
    }
  }, [stepOne])

  const updatePosition = (newPosition) => {
    const { lat, lng } = newPosition
    setPosition([lat, lng])
  }

  useEffect(() => {
    if (partidos.length === 0) {
      const fetchPartidos = async () => {
        try {
          const data = await getPartidos()
          setPartidos(data)
        } catch (error) {
          setPartidos([{label: 'Ocurrió un error al cargar', value: 0}])
        }
      }
      fetchPartidos()
    }
  }, [])

  useEffect(() => {
    const updateStep = () => {
      updateStepOne(
        {
          title,
          position,
          partido
        }
      )
    }
    updateStep()
  }, [position, title, partido])
  

  return (
    <form className="form-style1">
      <div className="row">
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Título</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la localidad"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">País</label>
            <Select
              defaultValue={[Countries[0]]}
              name="colors"
              options={Countries}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isDisabled={true}
              isClearable={false}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Provincia</label>
            <Select
              defaultValue={[Provincies[0]]}
              name="colors"
              options={Provincies}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isDisabled={true}
              isClearable={false}
            />
          </div>
        </div>
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Partido</label>
            <Select
              defaultValue={''}
              name="colors"
              options={partidos}
              styles={customStyles}
              className="custom-react_select over"
              classNamePrefix="select"
              required
              isDisabled={false}
              isClearable={false}
              value={partido}
              onChange={(e) => {
                console.log(e)
                setPartido(e)}}
            />
          </div>
        </div>
        {/* End .col-12 */}

        <div className="row">
          <div className="col-3">
            <div className="row">
              <div className="col-12 mb-3">
                <label className="heading-color ff-heading fw600 mb10">Selecciona en el mapa</label>
                <input
                  type="text"
                  className="form-control"
                  placeholder="Latitud: EJ O´12,123,3"
                  value={position[0]}
                  disabled
                />
              </div>
              <div className="col-12">
                <input
                  type="text"
                  className="form-control"
                  placeholder="Longitud: EJ S´123,12,12"
                  value={position[1]}
                  disabled
                />
              </div>
            </div>
          </div>
          <div className="col-9">
            <MapCustom markPosition={position} updatePosition={updatePosition} />
          </div>
        {/* End .col-12 */}
        </div>
      </div>
    </form>
  );
};

export default PropertyDescriptionCustom;