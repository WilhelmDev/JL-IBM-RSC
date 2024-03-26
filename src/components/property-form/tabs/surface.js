'use client'
import { getSpaces } from '@/core/infrastructure/services/tab-agent.service'
import { ParkingTypes } from '@/data/selects'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function SurfaceTab({updateStepThree}) {

  const [surface, setSurface] = useState('')
  const [coveredSurface, setCoveredSurface] = useState('')
  const [semiCoveredSurface, setSemiCoveredSurface] = useState('')
  const [antique, setAntique] = useState('')
  const [front, setFront] = useState('')
  const [back, setBack] = useState('')
  const [zonification, setZonification] = useState('')
  const [coberts, setCoberts] = useState(0)
  const [semiCobert, setSemiCobert] = useState(0)
  const [uncobert, setUncobert] = useState(0)
  const [state, setState] = useState('')
  const [orientation, setOrientation] = useState('')
  const [disposition, setDisposition] = useState('')
  const [ambient, setAmbient] = useState('')
  const [plants, setPlants] = useState('')
  const [rooms, setRooms] = useState('')
  const [baths, setBaths] = useState('')
  const [bathSuit, setBathSuit] = useState('')
  const [tollet, setTollet] = useState('')
  const [sotano, setSotano] = useState('')
  const [spaces, setSpaces] = useState([])
  const [spaceSelected, setSpaceSelected] = useState([])




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
    if (spaces.length === 0) {
      const fetchSpaces = async () => {
        try {
          const data = await getSpaces()
          setSpaces(data)
        } catch (error) {
          setSpaces([{label: 'Ocurrió un error al cargar', value: 0}])
        }
      }
      fetchSpaces()
    }
  }, [])

  useEffect(() => {
    updateStepThree({
      surface, coveredSurface, semiCoveredSurface, antique,
      front, back, zonification, coberts, semiCobert, uncobert,
      state, orientation, disposition, ambient,
      plants, rooms, baths, bathSuit,
      tollet, sotano,
      spaces
    })
  }, [
    surface, coveredSurface, semiCoveredSurface, antique,
    front, back, zonification, coberts, semiCobert, uncobert,
    state, orientation, disposition, ambient,
    plants, rooms, baths, bathSuit,
    tollet, sotano,
    spaces
  ])

  const updateSpaces = (id) => {
    const existInArray = spaceSelected.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = spaceSelected.filter((el) => el !== Number(id))
      setSpaceSelected(filtredData)
    } else {
      setSpaceSelected([...spaceSelected, Number(id)])
    }
  }

  const handleChips = function() {
    let parkings = []
    if (coberts > 0) {
      const cobetParking = {
        label: 'CU ' + coberts,
        value: 'cubiertos'
      }
      parkings = [...parkings, cobetParking]
    }
    if (semiCobert > 0) {
      const semicovertParking = {
        label: 'SC ' + semiCobert,
        value: 'SemiCubiertos'
      }
      parkings = [...parkings, semicovertParking]
    }
    if (uncobert > 0) {
      const uncobertParking = {
        label: 'DE ' + uncobert,
        value: 'Descubiertos'
      }
      parkings = [...parkings, uncobertParking]
    }
    return parkings
  }

  return (
    <form className="form-style1" id='property-tab-three'>
      <div className="row mb-3">
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Superficie del terreno</label>
          <input
              type="text"
              className="form-control"
              placeholder="Calle o UF"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Superficie cubierta</label>
          <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={coveredSurface}
              onChange={(e) => setCoveredSurface(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Superficie Semi-Cubierta</label>
          <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={semiCoveredSurface}
              onChange={(e) => setSemiCoveredSurface(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Antiguedad</label>
          <input
              type="text"
              className="form-control"
              placeholder="Años"
              value={antique}
              onChange={(e) => setAntique(e.target.value)}
            />
        </div>
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Frente</label>
          <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={front}
              onChange={(e) => setFront(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Fondo</label>
          <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={back}
              onChange={(e) => setBack(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Zonificación</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ej. Industrial"
              value={zonification}
              onChange={(e) => setZonification(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Estacionamiento</label>
          <Select formatGroupLabel={customLabels} placeholder={'Seleccion'}
            options={ParkingTypes} styles={customStyles}
            className="custom-react_select" isClearable={false}
            classNamePrefix="select" isMulti
            value={handleChips()}
            />
        </div>
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Estado de la propiedad</label>
          <input
              type="text"
              className="form-control"
              placeholder="Completar"
              value={state}
              onChange={(e) => setState(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Orientacion</label>
          <input
              type="text"
              className="form-control"
              placeholder="Completar"
              value={orientation}
              onChange={(e) => setOrientation(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Disposisión</label>
          <input
              type="text"
              className="form-control"
              placeholder="Completar"
              value={disposition}
              onChange={(e) => setDisposition(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Ambientes</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={ambient}
              onChange={(e) => setAmbient(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Plantas</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={plants}
              onChange={(e) => setPlants(e.target.value)}
            />
        </div>
        {/* End first Five fields */}
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Dormitorios</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={rooms}
              onChange={(e) => setRooms(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Baños</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={baths}
              onChange={(e) => setBaths(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Baños en Suit</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={bathSuit}
              onChange={(e) => setBathSuit(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Tollet</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={tollet}
              onChange={(e) => setTollet(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Sótano</label>
          <input
              type="text"
              className="form-control"
              placeholder="Ninguno"
              value={sotano}
              onChange={(e) => setSotano(e.target.value)}
            />
        </div>
        {/* End second Five fields */}
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb20">Otros Espacios</label>
        </div>
        <div className="col-12">
          <div className='row'>
            {
              spaces && spaces.map((el) => (
                <div className="col-2 mb-2" key={el.value}>
                  <div className='check-item' key={el.value} >
                    <input type="checkbox" name={`ckeck-space-${el.name}`} id={`ckeck-space-${el.value}`} 
                    value={el.value}
                    onChange={(e) => updateSpaces(e.target.value)}
                    checked={spaceSelected.some((id) => id === el.value)}
                    />
                    <label htmlFor={`ckeck-space-${el.value}`}>{el.label}</label>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* end row */}
    </form>
  )
}
