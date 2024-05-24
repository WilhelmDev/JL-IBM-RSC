import React from "react";
import Image from "next/image";

const Details = ({ name, type, locality }) => {
  return (
    <td className="property-details">
      <Image
        src="/images/tab-agent/all-neighborhoods/neighborhood.jpg"
        width={110}
        height={143}
      />
      <div className="details">
        <h3>{name}</h3>
        <span>{type}</span>
        <span>{locality}</span>
      </div>
    </td>
  );
};

export default Details;
