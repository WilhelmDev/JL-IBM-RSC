import React from "react";
import SearchFilter from "./Search";
import OrderBy from "./OrderBy";

const NeighborhoodsFilters = () => {
  return (
    <>
      <SearchFilter />
      <OrderBy />
      <button className="add-btn">Agregar Nuevo</button>
    </>
  );
};

export default NeighborhoodsFilters;
