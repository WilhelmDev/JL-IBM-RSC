import React from "react";

const PriceXOperation = ({ properties, enterprises }) => {
  return (
    <td className="price-x-operation">
      <div className="price-x-operation-container">
        <div>
          <span className="fw-bold">$140,000 USD</span>
          <span>4 - Duplex</span>
        </div>
        <div>
          <span className="fw-bold">$14,000 USD</span>
          <span>2- Monoambiente</span>
        </div>
        <div>
          <span className="fw-bold">$35,000 USD</span>
          <span>1 - Oficina</span>
        </div>
      </div>
    </td>
  );
};

export default PriceXOperation;