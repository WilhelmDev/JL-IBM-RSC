import React, { useEffect, useState } from "react";
import Image from "next/image";

const SearchFilter = ({handleSearch}) => {

const [search, setSearch] = useState('')

useEffect(() => {
  const timeout = setTimeout(() => {
    handleSearch(search)
  }, 600);

  return () => {
    clearTimeout(timeout)
  }
// eslint-disable-next-line react-hooks/exhaustive-deps
}, [search])

  return (
        <div className="search">
          <Image
            src="/images/tab-agent/list-actions/search.svg"
            alt="search"
            style={{marginLeft: '10px'}}
            height={20}
            width={20}
            className="img"
          />
          <input
            type="text"
            className="search-input"
            placeholder="Buscar"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>
  );
};

export default SearchFilter;
