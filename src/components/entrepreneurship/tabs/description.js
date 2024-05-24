'use client'
import { getNeighborhoods } from '@/core/infrastructure/services/tab-agent.service'
import { Countries, NeighborhoodState, NeighborhoodTypes, Provincies, Statusv2 } from '@/data/selects'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function DescriptionTab({updateStepOne}) {
  const [title, setTitle] = useState('')
  const [refCode, setRefCode] = useState('')
  const [neighborhood, setNeighborhood] = useState({})
  const [description, setDescription] = useState('')
  const [expenses, setExpenses] = useState(undefined)
  const [expensesDate, setExpensesDate] = useState(undefined)
  const [state, setState] = useState(undefined)
  const [internalNotes, setInternalNotes] = useState('')
  const [phoneOwner, setPhoneOwner] = useState('')
  const [neighborhoods, setNeighborhoods] = useState([])

  useEffect(() => {
    if (neighborhoods.length === 0) {
      const fetchNeighborhoods = async () => {
        try {
          const data = await getNeighborhoods()
          setNeighborhoods(data)
        } catch (error) {
          setNeighborhoods([{label: 'No encontrado', value: 0 }])
        }
      }
      fetchNeighborhoods()
    }
  }, [])
  
  useEffect(() => {
    updateStepOne({
      title,
      refCode,
      neighborhood,
      description,
      expenses,
      expensesDate,
      state,
      internalNotes,
      phoneOwner
    })
  }, [title, refCode, neighborhood, description, expenses, expensesDate, state, internalNotes, phoneOwner])
  

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
    <form className="form-style1" id='entrepreneurship-tab-one'>
      <div className="row">
        <div className="col-sm-6">
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
            <label className="heading-color ff-heading fw600 mb10">Barrio</label>
            <Select
              defaultValue={[]}
              name="colors"
              options={neighborhoods}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              onChange={(e) => setNeighborhood(e)}
              isDisabled={false}
              isClearable={false}
            />
          </div>
        </div>
        <div className="col-sm-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Código de referencia</label>
            <input
              type="text"
              className="form-control"
              placeholder="Nombre de la localidad"
              value={refCode}
              onChange={(e) => setRefCode(e.target.value)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-6">
          <label className="heading-color ff-heading fw600 mb10">Descripción</label>
          <textarea className="form-control mb-3 h-custom"
            value={description} onChange={(e) => setDescription(e.target.value)}
            placeholder="Puedes hablar del sitio compartiendo sus comodidades exclusivas que la diferencian del resto, aclarando cuantas personas son aptas para vivir en que tipo de zona se encuentra y que beneficios adquiere quien compre o alquile la misma." 
            id="exampleFormControlTextarea1" rows="1">
          </textarea>
        </div>
        <div className="col-3 mb-3">
          <div className='row'>
            <div className="col-12 mb-3">
              <label className="heading-color ff-heading fw600 mb10">Expensas</label>
              <input
                type="text"
                className="form-control"
                placeholder="Introduce el monto"
                value={expenses}
                onChange={(e) => setExpenses(e.target.value)}
              />
            </div>
            <div className="col-12">
              <input
                  type="date"
                  className="form-control"
                  placeholder="Fecha de la última revisión de las"
                  value={expensesDate}
                  onChange={(e) => setExpensesDate(e.target.value)}
                />
            </div>
          </div>
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Estado del emprendimiento en la plataforma</label>
          <Select
            defaultValue={[]}
            name="colors"
            options={Statusv2}
            styles={customStyles}
            className="custom-react_select"
            classNamePrefix="select"
            required
            isDisabled={false}
            isClearable={false}
            value={state}
            onChange={(e) => setState(e)}
          />
        </div>
      </div>
      {/* End row */}
      <div className="row">
        <div className="col-6">
          <label className="heading-color ff-heading fw600 mb10">Notas internas</label>
          <textarea className="form-control mb-3 h-custom"
            value={internalNotes} onChange={(e) => setInternalNotes(e.target.value)}
            placeholder="Alguna nota interna que se deba relacionar con la casa, su documentación para tener en cuenta a la hora de realizar una venta. Esta información no se encuentra a disposición en la plataforma para los usuarios, es solo de uso interno." 
            id="exampleFormControlTextarea1" rows="1">
          </textarea>
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Teléfono del propietario</label>
            <input
              type="text"
              value={phoneOwner}
              onChange={(e) => setPhoneOwner(e.target.value)}
              className="form-control"
              placeholder="Numero del propietario (no se muestra)"
            />
        </div>
      </div>
    </form>
  )
}
