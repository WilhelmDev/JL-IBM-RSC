import React from "react";
import SearchFilter from "./Search";
import OrderBy from "./OrderBy";
import { useRouter } from "next/navigation";
import { ROUTES } from "@/utilis/routes";

const NeighborhoodsFilters = ({ handleSortFilter, handleSearch}) => {

  const router = useRouter()

  return (
    <>
      <SearchFilter handleSearch={handleSearch} />
      <OrderBy handleSortFilter={handleSortFilter}/>
      <button className="add-btn" onClick={() => router.push(ROUTES.newNeighborhood)} >Agregar Nuevo</button>
    </>
  );
};

export default NeighborhoodsFilters;
