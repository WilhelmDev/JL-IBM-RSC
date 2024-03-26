'use client'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import { Countries, NeighborhoodTypes2, Provincies } from '@/data/selects'
import { getLocalizations, getPartidos } from '@/core/infrastructure/services/tab-agent.service';
import { Localizacion } from '@/utilis/positions';
import EntrepreneurshipMap from '../map';

export default function LocalizationTab({updateStepTwo}) {
  const [show, setShow] = useState(false)
  const [partidos, setPartidos] = useState([])
  const [localizations, setLocalizations] = useState([])
  const [position, setPosition] = useState(Localizacion.buenosAires)
  const [country, setCountry] = useState(Countries[0])
  const [province, setProvince] = useState(Provincies[0])
  const [partido, setPartido] = useState(undefined)
  const [locality, setLocality] = useState(undefined)
  const [street, setStreet] = useState('')

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
    if (localizations.length === 0) {
      const fetchPartidos = async () => {
        try {
          const data = await getLocalizations()
          setLocalizations(data)
        } catch (error) {
          setLocalizations([{label: 'Ocurrió un error al cargar', value: 0}])
        }
      }
      fetchPartidos()
    }
  }, [])

  useEffect(() => {
    updateStepTwo({
      position,
      country,
      province,
      partido,
      locality,
      street
    })
  }, [position, country, province, partido, locality, street ])

  const updatePosition = (newPosition) => {
    const { lat, lng } = newPosition
    setPosition([lat, lng])
  }

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

  return (
    <form className="form-style1" id='entrepreneurship-tab-two'>
      <div className="row mb-3">
        <div className="col-3">
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
            value={country}
          />
        </div>
        <div className="col-3">
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
            value={province}
          />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Partido</label>
          <Select
            defaultValue={''}
            name="colors"
            options={partidos}
            styles={customStyles}
            className="custom-react_select"
            classNamePrefix="select"
            required
            isDisabled={false}
            isClearable={false}
            value={partido}
            onChange={(e) => setPartido(e)}
          />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Localidad</label>
          <Select
            defaultValue={''}
            name="colors"
            options={localizations}
            styles={customStyles}
            className="custom-react_select"
            classNamePrefix="select"
            required
            isDisabled={false}
            isClearable={false}
            value={locality}
            onChange={(e) => setLocality(e)}
          />
        </div>
      </div>
      {/* End .col-12 */}

      <div className="row mb-3">
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Calle o UF</label>
          <input
              type="text"
              className="form-control"
              placeholder="Calle o UF"
              value={street}
              onChange={(e) => setStreet(e.target.value)}
            />
        </div>
      </div>
      {/* End .col-12 */}

      <div className="row">
        <div className="col-3">
          <div className="row">
            <div className="col-12 mb-3">
              <label className="heading-color ff-heading fw600 mb10">Selleciona en el mapa</label>
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
        <div className='col-9'>
          {
            show 
            ? <EntrepreneurshipMap updatePosition={updatePosition} />
            : <button onClick={() => setShow(true)}>Abrir mapa</button>
          }
        </div>
      </div>
    </form>
  )
}
