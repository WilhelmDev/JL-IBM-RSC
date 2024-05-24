import React from "react";

const ListPagination = ({
  totalItems,
  itemsPerPage,
  currentPage,
  onPageChange,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  return (
    <>
      <button
        className="arrow"
        onClick={() => onPageChange(currentPage > 1 ? currentPage - 1 : 1)}
      >
        {"<"}
      </button>
      {[...Array(totalPages)].map((page, i) => (
        <button
          key={i}
          className={`${currentPage === i + 1 ? "current-page" : "pages"}`}
          onClick={() => onPageChange(i + 1)}
        >
          {i + 1}
        </button>
      ))}
      <button
        className="arrow"
        onClick={() =>
          onPageChange(currentPage < totalPages ? currentPage + 1 : totalPages)
        }
      >
        {">"}
      </button>
    </>
  );
};

export default ListPagination;
