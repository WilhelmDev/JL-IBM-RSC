"use client";
import React, { useState } from "react";
import NeighborhoodsList from "./NeighborhoodsList";
import NeighborhoodsFilters from "./filters";
import ListPagination from "./ListPagination";

const Neighborhoods = () => {
  const neighborhoods = [
    {
      name: "Barrio 1",
      type: "Residential",
      locality: "Locality 1",
      properties: 16,
      enterprises: 2,
      visits: 2,
      swap: 1,
      valuation: 1,
      lastRequest: "12/01/2024",
      lastAction: "User1 requested a visit",
      favorites: 10,
      shared: 20,
    },
    {
      name: "Barrio 2",
      type: "Commercial",
      locality: "Locality 2",
      properties: 20,
      enterprises: 3,
      visits: 5,
      swap: 2,
      valuation: 2,
      lastRequest: "13/02/2024",
      lastAction: "User2 requested a visit",
      favorites: 15,
      shared: 25,
    },
    {
      name: "Barrio 3",
      type: "Residential",
      locality: "Locality 3",
      properties: 18,
      enterprises: 4,
      visits: 3,
      swap: 1,
      valuation: 3,
      lastRequest: "14/03/2024",
      lastAction: "User3 requested a visit",
      favorites: 20,
      shared: 30,
    },
    {
      name: "Barrio 4",
      type: "Commercial",
      locality: "Locality 4",
      properties: 22,
      enterprises: 5,
      visits: 4,
      swap: 2,
      valuation: 4,
      lastRequest: "15/04/2024",
      lastAction: "User4 requested a visit",
      favorites: 25,
      shared: 35,
    },
  ];

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 2;

  const [currentItems, setCurrentItems] = useState(
    neighborhoods.slice(
      (currentPage - 1) * itemsPerPage,
      currentPage * itemsPerPage
    )
  );

  const handlePageChange = (newPage) => {
    setCurrentPage(newPage);
    setCurrentItems(
      neighborhoods.slice((newPage - 1) * itemsPerPage, newPage * itemsPerPage)
    );
  };
  return (
    <>
      {/*Begin neighborhoods filter*/}
      <div className="neighborhoods-filter">
        <NeighborhoodsFilters />
      </div>
      {/*End neighborhoods filter*/}

      {/*Begin neighborhoods list*/}
      <div className="neighborhood-list">
        <NeighborhoodsList neighborhoods={currentItems} />
      </div>
      {/*End neighborhoods list*/}

      {/*Begin pagination*/}
      <div className="pagination-container">
        <ListPagination
          totalItems={neighborhoods.length}
          itemsPerPage={itemsPerPage}
          currentPage={currentPage}
          onPageChange={handlePageChange}
        />
      </div>
      {/*End pagination*/}
    </>
  );
};

export default Neighborhoods;
