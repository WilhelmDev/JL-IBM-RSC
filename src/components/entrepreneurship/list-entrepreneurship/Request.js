import React from "react";

const Requests = ({ visits, swap, lastRequest }) => {
  return (
    <td className="requests">
      <div className="requests-container">
        <span className="request-item">{visits} Visitas</span>
        <span className="request-item">{swap} Permuta</span>
        <div className="last-request">
          <span>{lastRequest}</span>
          <span>(ultima solicitud)</span>
        </div>
      </div>
    </td>
  );
};

export default Requests;