"use client";
import React, { useState } from "react";
import Select, { components } from "react-select";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utilis/routes";

const option = [
  { value: { field: "title", order: "asc" }, label: "Nombre A - Z" },
  { value: { field: "title", order: "desc" }, label: "Nombre Z - A" },
  { value: "3", label: "Cantidad de Propiedades (-) A (+)" },
  { value: "4", label: "Cantidad de Propiedades (+) A (-)" },
];

const customStyles = {
  option: (styles, { isFocused, isSelected, isHovered }) => {
    return {
      ...styles,
      backgroundColor: isSelected
        ? "#3356f1"
        : isHovered
        ? "#a9d0eb"
        : isFocused
        ? "#a9d0eb"
        : undefined,
    };
  },
};

export default function FilterButtons({ callback }) {
  const [selectedOption, setSelectedOption] = useState(null);

  const router = useRouter()

  const handleChange = (option) => {
    setSelectedOption(option);
    callback({ newSort: option.value.field, newOrder: option.value.order });
  };

  const handleSearchChange = (e) => {
    callback({ newSearchTerm: e.target.value });
  };

  const SingleValue = ({ children, ...props }) => (
    <components.SingleValue {...props}>
      <span style={{ color: "#999" }}>Ordenar por:</span> {children}
    </components.SingleValue>
  );

  return (
    <div className="buttons">
      <div className="row mb20 search-row">
        <div className="col-3 search">
          <Image
            src="/images/tab-agent/list-actions/search.svg"
            alt="search"
            height={20}
            width={20}
            className="img"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar"
            onChange={handleSearchChange}
          />
        </div>
        <div className="col-4">
          <div className="select-container">
            <Select
              defaultValue={option[0]}
              name="filter"
              options={option}
              styles={customStyles}
              className="custom-react_select"
              classNamePrefix="select"
              required
              isDisabled={false}
              isClearable={false}
              onChange={handleChange}
              placeholder="Ordenar por:"
              components={{ SingleValue }}
            />
          </div>
        </div>
        <div className="col-xl-3">
          <button type="button" id="search-button" onClick={() => router.push(ROUTES.newProperty)}>
            Agregar Nuevo
          </button>
        </div>
      </div>
    </div>
  );
}
