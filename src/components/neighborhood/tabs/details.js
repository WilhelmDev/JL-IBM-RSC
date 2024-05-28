'use client'
import React, { useEffect, useState } from 'react'
import { getAminities, getProps, getServices } from '@/core/infrastructure/services/tab-agent.service'

export default function TabDetails({ updateStepThree, stepThree }) {

  const [surface, setSurface] = useState('')
  const [lotes, setLotes] = useState('')
  const [lotesConst, setLotesConst] = useState('')
  const [available, setAvailable] = useState('')
  const [capDistance, setCapDistance] = useState('')
  const [maxSize, setMaxSize] = useState('')
  const [minSize, setMinSize] = useState('')
  
  const [props, setProps] = useState([])
  const [propsChecked, setPropsChecked] = useState([])
  const [amenities, setAmenities] = useState([])
  const [amenitiesChecked, setAmenitiesChecked] = useState([])
  const [services, setServices] = useState([])
  const [servicesChecked, setServicesChecked] = useState([])

  useEffect(() => {
    if (props.length === 0) {
      const fetchProps = async () => {
        try {
          const data = await getProps()
          setProps(data)
        } catch (error) {
          setProps([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchProps()
    }
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
    if (services.length === 0) {
      const fetchServices = async () => {
        try {
          const data = await getServices()
          setServices(data)
        } catch (error) {
          setServices([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchServices()
    }
  }, [])

  const updateProps = (id) => {
    const existInArray = propsChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = propsChecked.filter((el) => el !== Number(id))
      setPropsChecked(filtredData)
    } else {
      setPropsChecked([...propsChecked, Number(id)])
    }
  }

  const updateAmenities = (id) => {
    const existInArray = amenitiesChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = amenitiesChecked.filter((el) => el !== Number(id))
      setAmenitiesChecked(filtredData)
    } else {
      setAmenitiesChecked([...amenitiesChecked, Number(id)])
    }
  }

  const updateServices = (id) => {
    const existInArray = servicesChecked.some((el) => el === Number(id))
    if (existInArray) {
      const filtredData = servicesChecked.filter((el) => el !== Number(id))
      setServicesChecked(filtredData)
    } else {
      setServicesChecked([...servicesChecked, Number(id)])
    }
  }

  useEffect(() => {
    updateStepThree({
      surface, lotes, lotesConst, available,
      capDistance, maxSize, minSize,
      propsChecked,
      amenitiesChecked,
      servicesChecked
    })
  }, [
    surface, lotes, lotesConst, available,
    capDistance, maxSize, minSize,
    propsChecked,
    amenitiesChecked,
    servicesChecked
  ])

  useEffect(() => {
    if(!(Object.keys(stepThree).length === 0) && (
        stepThree.surface !== surface ||
        stepThree.lotes !== lotes ||
        stepThree.lotesConst !== lotesConst ||
        stepThree.available !== available ||
        stepThree.capDistance !== capDistance ||
        stepThree.maxSize !== maxSize ||
        stepThree.minSize !== minSize ||
        stepThree.props !== propsChecked ||
        stepThree.amenities !== amenitiesChecked ||
        stepThree.services !== servicesChecked 
      )){
      setSurface(stepThree?.surface)
      setLotes(stepThree?.lotes)
      setLotesConst(stepThree?.lotesConst)
      setAvailable(stepThree?.available)
      setCapDistance(stepThree?.capDistance)
      setMaxSize(stepThree?.maxSize)
      setMinSize(stepThree?.minSize)
      setPropsChecked(stepThree?.propsChecked)
      setAmenitiesChecked(stepThree?.amenitiesChecked)
      setServicesChecked(stepThree?.servicesChecked)
    }
  }, [stepThree])

  return (
    <form className="form-style1" id='neigborhood-tab-three'>
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Superficie del barrio</label>
            <input
              type="text"
              className="form-control"
              placeholder="Número de Mts2"
              value={surface}
              onChange={(e) => setSurface(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Cantidad de lotes</label>
            <input
              type="text"
              className="form-control"
              placeholder="Cantidad de lotes"
              value={lotes}
              onChange={(e) => setLotes(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Lotes Construidos</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lotes construidos"
              value={lotesConst}
              onChange={(e) => setLotesConst(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Lotes Disponibles</label>
            <input
              type="text"
              className="form-control"
              placeholder="Lotes disponibles"
              value={available}
              onChange={(e) => setAvailable(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Distancia a la capital</label>
            <input
              type="text"
              className="form-control"
              placeholder="Km"
              value={capDistance}
              onChange={(e) => setCapDistance(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tamaño maximo de lotes</label>
            <input
              type="text"
              className="form-control"
              placeholder="000mts2"
              value={maxSize}
              onChange={(e) => setMaxSize(e.target.value)}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tamaño mínimo de lotes</label>
            <input
              type="text"
              className="form-control"
              placeholder="000mts2"
              value={minSize}
              onChange={(e) => setMinSize(e.target.value)}
            />
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">Propiedades</label>
        </div>
        <div className="col-12">
          <div className='row'>
            {
              props && props.map((el) => (
                <div className="col-3" key={el.value}>
                  <div className='check-item'>
                    <input type="checkbox" name={`ckeck-prop-${el.name}`} id={`ckeck-prop-${el.value}`}
                    value={el.value} key={el.value}
                    onChange={(e) => updateProps(e.target.value)}
                    checked={propsChecked.some((id) => id === el.value)}
                    />
                    <label htmlFor={`ckeck-prop-${el.value}`}>{el.label}</label>
                  </div>
                </div>
              ))
            }
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
                    <input type="checkbox" name={`ckeck-${el.name}`} id={`ckeck-amenitie-${el.value}`}
                    value={el.value} key={el.value}
                    onChange={(e) => updateAmenities(e.target.value)}
                    checked={amenitiesChecked.some((id) => id === el.value)}
                    />
                    <label htmlFor={`ckeck-amenitie-${el.value}`}>{el.label}</label>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
      {/* End row */}
      <div className="row mb-3">
        <div className="col-12">
          <label className="heading-color ff-heading fw600 mb10">Servicios</label>
        </div>
        <div className="col-12">
          <div className='row'>
            {
              services && services.map((el) => (
                <div className="col-2 mb-2" key={el.value}>
                  <div className='check-item'>
                    <input type="checkbox" name={`ckeck-service-${el.name}`} id={`ckeck-service-${el.value}`}
                    value={el.value} key={el.value}
                    onChange={(e) => updateServices(e.target.value)}
                    checked={servicesChecked.some((id) => id === el.value)}
                    />
                    <label htmlFor={`ckeck-service-${el.value}`}>{el.label}</label>
                  </div>
                </div>
              ))
            }
          </div>
        </div>
      </div>
    </form>
  )
}
