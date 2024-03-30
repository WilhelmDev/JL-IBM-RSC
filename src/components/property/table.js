import React from "react";
import Image from "next/image";
import Property from "./atom-components/property";

const TableProperty = ({ properties }) => {
  return (
    <table className="bg-white" id="table">
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
          {properties && properties.length > 0
            ? properties.map((element, index) => (
                <Property key={index} property={element} />
              ))
            : "No hay propiedades para mostrar"}
      </tbody>
    </table>
  );
};

export default TableProperty;
