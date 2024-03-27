import React from 'react'
import Select from 'react-select'

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

export default function FilterButons() {
  return (
    <div className='buttons'>
        <div className="row mb20 search-row">
        <div className="col-3">
          <input type="text" className="form-control" placeholder='Buscar'/>
        </div>
        <div className="col-4">
          <Select
            defaultValue={''}
            name="filter"
            options={[]}
            styles={customStyles}
            className="custom-react_select"
            classNamePrefix="select"
            required
            isDisabled={false}
            isClearable={false}
          />
        </div>
        <div className="col-xl-3">
          <button type="button" className='btn-new'>
            Agregar Nuevo
          </button>
        </div>
      </div>
    </div>
  )
}
