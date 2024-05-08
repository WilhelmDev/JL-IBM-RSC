import React, { useState } from "react";
import Select, { components } from "react-select";
import Image from "next/image";

const OrderBy = () => {
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
        />
      </components.DropdownIndicator>
    );
  };

  const options = [
    {
      value: "name-desc",
      label: "Nombre A - Z",
    },
    {
      value: "name-asc",
      label: "Nombre Z - A",
    },
    {
      value: "price-asc",
      label: "Precio Menor - Mayor",
    },
    {
      value: "price-desc",
      label: "Precio Mayor - Menor",
    },
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
          onMenuOpen={() => setMenuIsOpen(true)}
          onMenuClose={() => setMenuIsOpen(false)}
        />
      </div>
    </label>
  );
};

export default OrderBy;
