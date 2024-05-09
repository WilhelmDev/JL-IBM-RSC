import React, { useState } from "react";
import Select, { components } from "react-select";
import Image from "next/image";

const OrderBy = ({handleSortFilter}) => {
  const [menuIsOpen, setMenuIsOpen] = useState(false);

  const customStyles = {
    control: (provided) => ({
      ...provided,
      border: 0,
      boxShadow: "none",
      outline: "0px",
      height: "100%",
      cursor: "pointer",
      flexGrow: 1,
    }),
    option: (provided, state) => ({
      ...provided,
      padding: "10px",
      cursor: "pointer",
      backgroundColor:
        state.isFocused || state.isSelected ? "#06173d" : "#f8f9fa",
      color: state.isFocused || state.isSelected ? "white" : "black",
    }),
    indicatorSeparator: (provided) => ({
      ...provided,
      display: "none",
    }),
  };

  const DropdownIndicator = (props) => {
    return (
      <components.DropdownIndicator {...props}>
        <Image
          src={
            menuIsOpen
              ? "/images/tab-agent/all-neighborhoods/up-arrow.svg"
              : "/images/tab-agent/all-neighborhoods/down-arrow.svg"
          }
          width={10}
          height={10}
          alt="arrow"
        />
      </components.DropdownIndicator>
    );
  };

  const options = [
    {
      value: "title asc",
      label: "Nombre A - Z",
    },
    {
      value: "title desc",
      label: "Nombre Z - A",
    },
    // {
    //   value: "price-asc",
    //   label: "Precio Menor - Mayor",
    // },
    // {
    //   value: "price-desc",
    //   label: "Precio Mayor - Menor",
    // },
  ];
  return (
    <label className="order-neighborhoods-by">
      <span className="order-title">Ordenar por:</span>
      <div className="select-container">
        <Select
          options={options}
          components={{ DropdownIndicator }}
          styles={customStyles}
          defaultValue={options[0]}
          menuIsOpen={menuIsOpen}
          onChange={(e) => handleSortFilter(e.value)}
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
        />
      </div>
    </label>
  );
};

export default OrderBy;
