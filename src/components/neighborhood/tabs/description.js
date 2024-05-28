'use client'
import { Countries, NeighborhoodState, NeighborhoodTypes, Provincies } from '@/data/selects'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'

export default function TabDescription({updateStepOne, stepOne}) {

  const [title, setTitle] = useState('')
  const [refCode, setRefCode] = useState('')
  const [type, setType] = useState('')
  const [description, setDescription] = useState('')
  const [expenses, setExpenses] = useState('')
  const [expensesDate, setExpensesDate] = useState('')
  const [state, setState] = useState('')
  const [notes, setNotes] = useState('')
  const [phone, setPhone] = useState('')
  const [zonification, setZonification] = useState('')


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

  useEffect(() => {
    updateStepOne({
      title, refCode, type,
      description, expenses, expensesDate, state,
      notes, phone, zonification
    })

  }, [title, refCode, type,
    description, expenses, expensesDate, state,
    notes, phone, zonification])
  
    useEffect(() => {
      if(!(Object.keys(stepOne).length === 0) && (
          stepOne.title !== title ||
          stepOne.refCode !== refCode ||
          stepOne.type !== type ||
          stepOne.description !== description ||
          stepOne.expenses !== expenses ||
          stepOne.expensesDate !== expensesDate ||
          stepOne.state !== state ||
          stepOne.notes !== notes ||
          stepOne.phone !== phone ||
          stepOne.zonification !== zonification 
        )){
        setTitle(stepOne?.title)
        setRefCode(stepOne?.refCode)
        setType(stepOne?.type)
        setDescription(stepOne?.description)
        setExpenses(stepOne?.expenses)
        setExpensesDate(stepOne?.expensesDate)
        setState(stepOne?.state)
        setNotes(stepOne?.notes)
        setPhone(stepOne?.phone)
        setZonification(stepOne?.zonification)
      }
    }, [stepOne])

  return (
    <form className="form-style1" id='neigborhood-tab-one'>
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
        <div className="col-sm-6 col-md-3">
          <div className="mb20">
            <label className="heading-color ff-heading fw600 mb10">Tipo de Barrio</label>
            <Select
              defaultValue={''}
              name="colors"
              options={NeighborhoodTypes}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isDisabled={false}
              isClearable={false}
              value={type}
              onChange={(e) => setType(e)}
            />
          </div>
        </div>
        {/* End .col-12 */}
      </div>
      {/* end Row */}
      <div className="row">
        <div className="col-6">
          <label className="heading-color ff-heading fw600 mb10">Descripción</label>
          <textarea className="form-control mb-3 h-custom" 
            placeholder="Puedes hablar del sitio compartiendo sus comodidades exclusivas que la diferencian del resto, aclarando cuantas personas son aptas para vivir en que tipo de zona se encuentra y que beneficios adquiere quien compre o alquile la misma." 
            id="exampleFormControlTextarea1" rows="1"
            value={description}
            onChange={(e) => setDescription(e.target.value)}>
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
          <label className="heading-color ff-heading fw600 mb10">Estado del barrio en la plataforma</label>
          <Select
            defaultValue={[]}
            name="colors"
            options={NeighborhoodState}
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
      {/* End row*/}
      <div className="row">
        <div className="col-6">
          <label className="heading-color ff-heading fw600 mb10">Notas</label>
          <textarea className="form-control mb-3 h-custom"
            placeholder="Alguna nota interna que se deba relacionar con la casa, su documentación para tener en cuenta a la hora de realizar una venta. Esta información no se encuentra a disposición en la plataforma para los usuarios, es solo de uso interno." 
            id="exampleFormControlTextarea1" rows="1"
            value={notes}
            onChange={(e) => setNotes(e.target.value)}>
          </textarea>
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Teléfono del propietario</label>
            <input
              type="text"
              className="form-control"
              placeholder="Numero del propietario (no se muestra)"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
        </div>
        <div className="col-3">
          <label className="heading-color ff-heading fw600 mb10">Zonificación</label>
            <input
              type="text"
              className="form-control"
              placeholder="Escribir"
              value={zonification}
              onChange={(e) => setZonification(e.target.value)}
            />
        </div>
      </div>
    </form>
  )
}
