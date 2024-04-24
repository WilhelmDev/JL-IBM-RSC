'use client'
import React, { useEffect, useState } from 'react'
import Pagination from "@/components/common/list/pagination";
import TableSearch from "./atoms/table";


export default function SearchList(props) {

  return (
    <div>
      <TableSearch/>
      <div className="row p10">
        {/* Begin Pagination */}
        <div className="pagination-container">
          {/* <Pagination pages={pages} lastPage={lastPage} range={range} actualPage={page}/> */}
        </div>
        {/* End Pagination */}
      </div>
    </div>
  )
}
