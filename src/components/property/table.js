import React from "react";
import Property from "./atom-components/property";

const TableProperty = ({ properties }) => {
  return (
    <table className="bg-white" id="property-table">
      <thead>
        <tr className="text-center">
          <th>Propiedad y detalles</th>
          <th>Precio x Operación</th>
          <th>Solicitudes</th>
          <th>Última Acción</th>
          <th>Favoritos y Compartido</th>
          <th>Acción</th>
        </tr>
      </thead>
      <tbody>
        {properties 
        ? (
          properties.map((element, index) => (
            <Property key={index} property={element} />
          ))
        )
        : (
          <tr>
            <td>
              <p>No hay propiedades para mostrar</p>
            </td>{" "}
          </tr>
        )}
      </tbody>
    </table>
  );
};

export default TableProperty;
