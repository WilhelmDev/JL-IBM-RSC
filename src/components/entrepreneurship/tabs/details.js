'use client'
import React, { useEffect, useState } from 'react'
import { Countries, ParkingTypes, Provincies, Types } from '@/data/selects'
import Select from 'react-select'
import { getAminities, getProps, getServices } from '@/core/infrastructure/services/tab-agent.service'


export default function DetailsTab({updateStepThree}) {
  const [amenities, setAmenities] = useState([])
  const [coberts, setCoberts] = useState(0)
  const [semiCobert, setSemiCobert] = useState(0)
  const [uncobert, setUncobert] = useState(0)
  const [totalSurface, setTotalSurface] = useState('')
  const [surfaceCovered, setSurfaceCovered] = useState('')
  const [semiCoveredSurface, setSemiCoveredSurface] = useState('')
  const [units, setUnits] = useState('')
  const [unitsTaken, setUnitsTaken] = useState('')
  const [zonification, setZonification] = useState('')
  const [capitalDistance, setCapitalDistance] = useState('')
  const [financing, setFinancing] = useState('')
  const [ecoConstruction, setEcoConstruction] = useState('')
  const [posetionInmediate, setPosetionInmediate] = useState('')
  const [amenitiesChecked, setAmenitiesChecked] = useState([])

  const groupStyles = {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'space-between',
    position: 'relative',
    fontSize: 12
  };

  const badgeStyles = {
    borderRadius: '2em',
    color: '#172B4D',
    display: 'flex',
    gap: '10px',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
  };

  const iconStyles = {
    backgroundColor: '#EBECF0',
    borderRadius: '2em',
    color: '#172B4D',
    fontSize: 12,
    fontWeight: 'normal',
    lineHeight: '1',
    minWidth: 1,
    padding: '0.16666666666667em 0.5em',
    textAlign: 'center',
    cursor: 'pointer'
  };

  const customLabels = (data) => (
    <>
    <div style={groupStyles}>
      <span>Cubiertos: {coberts}</span>
      <span style={badgeStyles}>
        <i style={iconStyles} onClick={() => setCoberts(coberts === 0 ? 0 : coberts - 1)} class="fa-solid fa-minus"></i>
        <i style={iconStyles} onClick={() => setCoberts(coberts + 1)} class="fa-solid fa-plus"></i>
      </span>
    </div>
    <div style={groupStyles}>
      <span>Semi-Cubiertos: {semiCobert}</span>
      <span style={badgeStyles}>
        <i style={iconStyles} onClick={() => setSemiCobert(semiCobert === 0 ? 0 : semiCobert - 1)} class="fa-solid fa-minus"></i>
        <i style={iconStyles} onClick={() => setSemiCobert(semiCobert + 1)} className="fa-solid fa-plus"></i>
      </span>
    </div>
    <div style={groupStyles}>
      <span>Descubiertos: {uncobert}</span>
      <span style={badgeStyles}>
        <i style={iconStyles} onClick={() => setUncobert(uncobert === 0 ? 0 : uncobert -1)} class="fa-solid fa-minus"></i>
        <i style={iconStyles} onClick={() => setUncobert(uncobert + 1)} className="fa-solid fa-plus"></i>
      </span>
    </div>
    </>
  );


  useEffect(() => {
    if (amenities.length === 0) {
      const fetchAmenities = async () => {
        try {
          const data = await getAminities()
          setAmenities(data)
        } catch (error) {
          setAmenities([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchAmenities()
    }
  }, [])

  useEffect(() => {
    updateStepThree({
      totalSurface,
      surfaceCovered,
      semiCoveredSurface,
      units,
      unitsTaken,
      zonification,
      covertGarage: coberts,
      semiCobertGarage: semiCobert,
      uncobertGarage: uncobert,
      capitalDistance,
      financing,
      ecoConstruction,
      posetionInmediate,
      amenitiesChecked
    })
  }, [totalSurface, surfaceCovered, semiCoveredSurface,
    units, unitsTaken, zonification, coberts, semiCobert, uncobert,
    capitalDistance, financing, ecoConstruction, posetionInmediate,
    amenitiesChecked])

  const updateAmenities = (id) => {
    const existInArray = amenitiesChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredAmenities = amenitiesChecked.filter((el) => el !== Number(id))
      setAmenitiesChecked(filtredAmenities)
    } else {
      setAmenitiesChecked([...amenitiesChecked, Number(id)])
    }
  }

  return (
    <form className="form-style1" id='entrepreneurship-tab-three'>
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Superficie del terreno</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={totalSurface}
              onChange={(e) => setTotalSurface(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Supertficie cubierta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={surfaceCovered}
              onChange={(e) => setSurfaceCovered(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Superficie Semi-Cubierta</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={semiCoveredSurface}
              onChange={(e) => setSemiCoveredSurface(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Cantidad de unidades</label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
              value={units}
              onChange={(e) => setUnits(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Cantidad de unidades ocupadas</label>
            <input
              type="text"
              className="form-control"
              placeholder="0"
              value={unitsTaken}
              onChange={(e) => setUnitsTaken(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Zonificación</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ej. Industrial"
              value={zonification}
              onChange={(e) => setZonification(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Estacionamiento</label>
            <Select formatGroupLabel={customLabels} placeholder={'Seleccion'}
            options={ParkingTypes}
            />
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Distancia en KM a la capital</label>
            <input
              type="text"
              className="form-control"
              placeholder="Completar"
              value={capitalDistance}
              onChange={(e) => setCapitalDistance(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Financiación</label>
            <input
              type="text"
              className="form-control"
              placeholder="Completar"
              value={financing}
              onChange={(e) => setFinancing(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Eco Construcción</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={ecoConstruction}
              onChange={(e) => setEcoConstruction(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Posesión inmediata</label>
            <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={posetionInmediate}
              onChange={(e) => setPosetionInmediate(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">Amenidades</label>
        </div>
        <div className="col-12">
          <div className='row'>
            {
              amenities && amenities.map((el) => (
                <div className="col-2 mb-2" key={el.value}>
                  <div className='check-item'>
                    <input type="checkbox" name={`ckeck-${el.name}`} id={`ckeck-${el.value}`} 
                    onChange={(e) => updateAmenities(e.target.value)}
                    value={el.value}
                    checked={amenitiesChecked.some((id) => id === el.value)} />
                    <label htmlFor={`ckeck-${el.value}`}>{el.label}</label>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* End row */}
    </form>
  )
}
