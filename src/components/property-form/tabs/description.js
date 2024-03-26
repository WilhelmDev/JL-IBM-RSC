'use client'
import { OperationOptions, PropertyStatus, PropertyTypes } from '@/data/selects';
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Modal from 'react-modal';
import PeriodTable from '../periodTable';
import { getOperations } from '@/core/infrastructure/services/tab-agent.service';

const basePrice = {
  arg: '',
  usd: ''
}

export default function DescriptionTab({updateStepOne}) {

  const [operations, setOperations] = useState([])

  const [tittle, setTittle] = useState('')
  const [refCode, setRefCode] = useState('')
  const [operation, setOperation] = useState([])
  const [description, setDescription] = useState('')
  const [type, setType] = useState(undefined)
  const [expensesDate, setExpensesDate] = useState('')
  const [owner, setOwner] = useState('')
  const [phone, setPhone] = useState('')
  const [sellPrice, setSellPrice] = useState(basePrice)
  const [rentPrice, setRentPrice] = useState(basePrice)
  const [internalNotes, setInternalNotes] = useState('')
  const [state, setState] = useState(undefined)
  const [expenses, setExpenses] = useState(basePrice)
  const [periods, setPeriods] = useState([])

  const [modalPeriods, setModalPeriods] = useState(false)

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

  const modalStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };

  const modalTrigger = () => {
    setModalPeriods(!modalPeriods)
  }

  const handleTouch = () => {
    if (!(!operation || operation.some(el => el.label === 'Alquiler Temporal'))) {
      return
    }
    modalTrigger()
  }

  const updatePeriods = (values) => {
    setPeriods(values)
  }

  useEffect(() => {
    if (operations.length === 0) {
      const fetchOperations = async () => {
        try {
          const data = await getOperations()
          setOperations(data)
        } catch (error) {
          setOperations([{label: 'Ocurrió un error al cargar', value: 0}])
        }
      }
      fetchOperations()
    }
  }, [])

  useEffect(() => {
    updateStepOne({
      tittle, refCode, operation,
      description, type, expensesDate,
      owner, phone, sellPrice, rentPrice,
      internalNotes, state, expenses, periods
    })
  }, [tittle, refCode, operation,
    description, type, expensesDate,
    owner, phone, sellPrice, rentPrice,
    internalNotes, state, expenses, periods
  ])
  

  return (
    <>
      <Modal 
      isOpen={modalPeriods}
      onRequestClose={modalTrigger}
      style={modalStyles}
      contentLabel="Modal de periodos"
      >
        <PeriodTable modalTrigger={modalTrigger} updatePeriods={updatePeriods} savedPeriods={periods}/>
      </Modal>
      <form className="form-style1" id='property-tab-one'>
        <div className="row">
          <div className="col-sm-6">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Título</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la localidad"
                value={tittle}
                onChange={(e) => setTittle(e.target.value)}
              />
            </div>
          </div>
          <div className="col-sm-6 col-md-3">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Codigo de referencia</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la localidad"
                value={refCode}
                onChange={(e) => setRefCode(e.target.value)}
              />
              </div>
          </div>
          <div className="col-sm-3">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Operación</label>
              <Select
              defaultValue={''}
              name="colors"
              options={operations}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              value={operation}
              isDisabled={false}
              isClearable={false}
              isMulti
              onChange={(e) => setOperation(e)}
            />
            </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-6">
            <label className="heading-color ff-heading fw600 mb10">Descripción</label>
            <textarea className="form-control mb-3 h-custom"
              placeholder="Puedes hablar del sitio compartiendo sus comodidades exclusivas que la diferencian del resto, aclarando cuantas personas son aptas para vivir en que tipo de zona se encuentra y que beneficios adquiere quien compre o alquile la misma." 
              id="exampleFormControlTextarea1" rows="1" 
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              >
            </textarea>
          </div>
          <div className="col-3 mb20">
            <label className="heading-color ff-heading fw600 mb10">Tipo de propiedad</label>
            <Select
              defaultValue={''}
              name="colors"
              options={PropertyTypes}
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
          <div className="col-3">
            <label className="heading-color ff-heading fw600 mb10">Expensas (fecha de referencia)</label>
            <input
              type="date"
              className="form-control"
              placeholder="Nombre de la localidad"
              value={expensesDate}
              onChange={(e) => setExpensesDate(e.target.value)}
              />
          </div>
        </div>
        {/* End row */}
        <div className="row mb20">
          <div className="col-sm-3">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Propietario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre del propietario (No se muestra)"
                value={owner}
                onChange={(e) => setOwner(e.target.value)}
              />
            </div>
          </div>
          <div className="col-md-3">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Teléfono del propietario</label>
              <input
                type="text"
                className="form-control"
                placeholder="Número de teléfono (No se muestra)"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
              </div>
          </div>
          <div className="col-sm-3">
            <div className='row'>
                <div className="col-12 mb-3">
                  <label className="heading-color ff-heading fw600 mb10">Precio Venta</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Introduce monto en USD"
                    disabled={!(!operation || operation.some(el => el.label === 'Venta'))}
                    value={sellPrice.usd}
                    onChange={(e) => setSellPrice({...sellPrice, usd: e.target.value})}
                  />
                </div>
                <div className="col-12">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Introduce monto en ARS"
                      disabled={!(!operation || operation.some(el => el.label === 'Venta'))}
                      value={sellPrice.arg}
                      onChange={(e) => setSellPrice({...sellPrice, arg: e.target.value})}
                    />
                </div>
              </div>
          </div>
          <div className="col-sm-3">
            <div className='row'>
                <div className="col-12 mb-3">
                  <label className="heading-color ff-heading fw600 mb10">Precio Alquiler Anual</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Introduce monto en USD"
                    disabled={!(!operation || operation.some(el => el.label === 'Alquiler'))}
                    value={rentPrice.usd}
                    onChange={(e) => setRentPrice({...rentPrice, usd: e.target.value})}
                  />
                </div>
                <div className="col-12">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Introduce monto en ARS"
                      disabled={!(!operation || operation.some(el => el.label === 'Alquiler'))}
                      value={rentPrice.arg}
                      onChange={(e) => setRentPrice({...rentPrice, arg: e.target.value})}
                    />
                </div>
              </div>
          </div>
        </div>
        {/* End row */}
        <div className="row">
          <div className="col-3">
            <label className="heading-color ff-heading fw600 mb10">Notas internas</label>
            <textarea className="form-control mb-3 h-custom"
              placeholder="Alguna nota interna que se deba relacionar con la casa, su documentación para tener en cuenta a la hora de realizar una venta. Esta información no se encuentra a disposición en la plataforma para los usuarios, es solo de uso interno." 
              id="exampleFormControlTextarea1" rows="1"
              value={internalNotes}
              onChange={(e) => setInternalNotes(e.target.value)}
              >
            </textarea>
          </div>
          <div className="col-3">
            <label className="heading-color ff-heading fw600 mb10">Estado de la propiedad</label>
              <Select
                defaultValue={''}
                name="colors"
                options={PropertyStatus}
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
          <div className="col-sm-3">
            <div className="mb20">
              <label className="heading-color ff-heading fw600 mb10">Precio de Alquiler temporal</label>
              <input
                type="text"
                className="form-control"
                placeholder="Nombre de la localidad"
                disabled={!(!operation || operation.some(el => el.label === 'Alquiler Temporal'))}
                onClick={()=> handleTouch()}
                value={''}
              />
            </div>
          </div>
          <div className="col-sm-3">
            <div className='row'>
                <div className="col-12 mb-3">
                  <label className="heading-color ff-heading fw600 mb10">Expensas</label>
                  <input
                    type="text"
                    className="form-control"
                    placeholder="Introduce monto en USD"
                    value={expenses.usd}
                    onChange={(e) => setExpenses({...expenses, usd: e.target.value})}
                  />
                </div>
                <div className="col-12">
                  <input
                      type="text"
                      className="form-control"
                      placeholder="Introduce monto en ARS"
                      value={expenses.arg}
                      onChange={(e) => setExpenses({...expenses, arg: e.target.value})}
                    />
                </div>
              </div>
          </div>
        </div>
      </form>
    </>
  )
}
