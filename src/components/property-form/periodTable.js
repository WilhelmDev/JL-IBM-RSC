import Image from 'next/image'
import React, { useEffect, useState } from 'react'
import Select from 'react-select'
import Period from './atom-components/period'

const basePeriod = {
  name: '',
  priceArs: '',
  priceUsd: ''
}

export default function PeriodTable({modalTrigger, updatePeriods, savedPeriods}) {

  const [newPeriod, setNewPeriod] = useState(basePeriod)
  const [isPeriodEdited, setIsPeriodEdited] = useState(false)
  const [periods, setPeriods] = useState([])
  const [previousPeriods, setPreviousPeriods] = useState([])
  const [selectedPeriod, setSelectedPeriod] = useState(undefined)

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

  const isEdited = function (state) {
    const values = Object.values(state)
    const edited = values.some(value => (value === ''))
    return !edited
  }

  const updateRecomendations = () => {
    const periodSaveds = periods
    const parsedPreviews = periodSaveds.map((period) => {
      const parsed = {
        label: period.name,
        value: period.name
      }
      return parsed
    })
    setPreviousPeriods(parsedPreviews)
  }

  useEffect(() => {
    setIsPeriodEdited(isEdited(newPeriod))
  }, [newPeriod])

  useEffect(() => {
    if (periods.length > 0) {
      updatePeriods(periods)
      updateRecomendations()
    }
  }, [periods])

  useEffect(() => {
    if (savedPeriods.length > 0) {
      setPeriods(savedPeriods)
    }
  }, [])
  
  const savePeriod = () => {
    setPeriods([...periods, newPeriod])
    setNewPeriod(basePeriod)
    return
  }

  const deletePeriod = (id) => {
    const periodsCopy = periods
    if (periodsCopy.length === 1) {
      setPeriods([])
      setPreviousPeriods([])
      return
    }
    let periodsUpdated = periodsCopy.map((el, i) => i !== id ? el : null)
    periodsUpdated = periodsUpdated.filter(el => el !== null)
    setPeriods(periodsUpdated)
  }

  const selectPeriod = (value) => {
    setNewPeriod({...newPeriod, name: value})
  }

  const resetPeriod = () => {
    setNewPeriod(basePeriod)
  }

  const handleSave = () => {
    updatePeriods(periods)
    modalTrigger()
  }


  return (
    <main id='modal-periods'>
      <div className='container'>
        <h2 className='text-center mb20'>Modal de periodos</h2>
        <table className="table table-borderless" id='table-periods'>
          <thead>
            <tr>
              <th scope="col" className='name-heading' >Nombre del periodo</th>
              <th scope="col" className='price-heading'>Precio ( ARS )</th>
              <th scope="col" className='price-heading'>Precio ( USD )</th>
            </tr>
          </thead>
          <tbody>
            {
              periods && periods.map((period, i) => (
                <Period period={{...period, id: i}} key={i} deletePeriod={deletePeriod} />
                ))
              }
            <tr>
              <td>
              <input type="text" placeholder='+ Agrege uno nuevo' value={newPeriod.name} onChange={(e) => setNewPeriod({...newPeriod, name: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='123123' value={newPeriod.priceArs} onChange={(e) => setNewPeriod({...newPeriod, priceArs: e.target.value})} />
              </td>
              <td>
                <input type="text" placeholder='123123' value={newPeriod.priceUsd} onChange={(e) => setNewPeriod({...newPeriod, priceUsd: e.target.value})} />
              </td>
              {/* <td>
                <Image src="/images/tab-agent/table-periods/pencil.svg" className='action-icons' width={10} height={10} alt='icon' />
              </td> */}
              <td>
              {
                isPeriodEdited && (
                  <Image src="/images/tab-agent/table-periods/save.svg" className='action-icons' width={10} height={10} alt='icon' onClick={() => savePeriod()} />
                )
              }
              </td>
              <td>
                <Image src="/images/tab-agent/table-periods/delete.svg" className='action-icons' width={10} height={10} alt='icon' onClick={() => resetPeriod()} />
              </td>
            </tr>
            {/* End Row */}
            {
              (previousPeriods && previousPeriods.length > 0) && (
                <tr>
                  <td>
                    <Select
                      defaultValue={selectedPeriod}
                      name="colors"
                      options={previousPeriods}
                      styles={customStyles}
                      className="custom-react_select"
                      classNamePrefix="select"
                      required
                      id='select-periods'
                      isDisabled={false}
                      isClearable={false}
                      placeholder='Seleccionar'
                      value={selectedPeriod}
                      onChange={(e) => selectPeriod(e.label)}
                    />
                  </td>
                </tr>
              ) 
            }
          </tbody>
        </table>
        <div className="row">
          <div className="col-6 col-md-3">
            <button className='btn-periods' onClick={() => handleSave()}>
              Guardar
            </button>
          </div>
        </div>
      </div>
    </main>
  )
}
