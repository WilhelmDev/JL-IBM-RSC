import React from "react";
import Image from "next/image";

const SearchFilter = () => {
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
            // onChange={handleSearchChange}
          />
        </div>
  );
};

export default SearchFilter;
