import React from "react";
import SearchFilter from "./Search";
import OrderBy from "./OrderBy";

const NeighborhoodsFilters = ({ handleSortFilter, handleSearch}) => {
  return (
    <>
      <SearchFilter handleSearch={handleSearch} />
      <OrderBy handleSortFilter={handleSortFilter}/>
      <button className="add-btn">Agregar Nuevo</button>
    </>
  );
};

export default NeighborhoodsFilters;
