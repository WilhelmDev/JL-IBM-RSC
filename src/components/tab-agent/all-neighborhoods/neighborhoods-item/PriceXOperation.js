import React from "react";

const PriceXOperation = ({ properties, enterprises }) => {
  return (
    <td className="price-x-operation">
      <div className="price-x-operation-container">
        <div>
          <span>{properties}</span>
          <span>Propiedades</span>
        </div>
        <div>
          <span>{enterprises}</span>
          <span>Emprendimientos</span>
        </div>
        <button>VER LISTA</button>
      </div>
    </td>
  );
};

export default PriceXOperation;
