import React from "react";

const PriceXOperation = ({ properties }) => {

  const calculateTotalSurfaceAndCount = (offers) => {
    return offers.reduce((acc, offer) => {
      if (!acc[offer.type]) {
        acc[offer.type] = { totalSurface: 0, count: 0 };
      }
      acc[offer.type].totalSurface += offer.total_sourface;
      acc[offer.type].count += 1;
      return acc;
    }, {});
  };
  
  const result = calculateTotalSurfaceAndCount(properties);

  return (
    <td className="price-x-operation">
      <div className="price-x-operation-container">
        {Object.keys(result).map((key) => (
          <div key={key}>
            <span>${result[key].totalSurface} USD</span>
            <span>{result[key].count} - {key}</span>
          </div>
        ))}
          
      </div>
    </td>
  );
};

export default PriceXOperation;