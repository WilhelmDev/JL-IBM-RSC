import React from "react";
import Image from "next/image";

const TableProperty = () => {
  return (
    <table className="table bg-white"id="table">
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
        <tr>
          <td className="p-4">
            <div className="d-flex align-items-center">
              <Image
                src="/images/tab-agent/stock.svg"
                alt="icon"
                height={20}
                width={20}
                className="img bg-custom"
              />
              <div className="ms-3">
                <p className="fw-bold mb-1">Nombre del Barrio</p>
                <p className="text-muted mb-0">Código</p>
                <p className="text-muted mb-0">Localidad, Barrio</p>
              </div>
            </div>
          </td>
          <td className="p-4">
            <div className="operation-price-box">
              <p className="grey-text-box">
                <span className="fw-bold">16</span>Propiedades
              </p>
              <p className="grey-text-box">
                <span className="fw-bold">2</span>Emprendimientos
              </p>
              <p className="grey-text-box">
                <a className="fw-bold">Ver / Editar Lista </a>
                <a className="text-muted mb-0">Alquiler temporal</a>
              </p>
            </div>
          </td>
          <td className="p-4">
            <div className="text-center">
              <p className="request-text">2 Visitas</p>
              <p className="request-text">1 Permuta</p>
              <p className="request-text">1 Tasación</p>
              <h5>12/01/2024</h5>
              <h6>(Última solicitud)</h6>
            </div>
          </td>
          <td className="p-4">
            {" "}
            <p>nombre de usuario S solicito una visita</p>
          </td>
          <td className="p-4">
            <div className="text-center">
              <div>
                <p>corazon</p>
                <p>10 Favoritos</p>
              </div>
              <div>
                <p>compartir</p>
                <p>Compartido 20</p>
              </div>
            </div>
          </td>
          <td className="p-4">
            <div className="d-flex flex-nowrap justify-content-center">
              <div>
                <button className="btn btn-outline-dark m-2">papelera</button>
              </div>
              <div>
                <button className="btn btn-outline-dark m-2">lapiz</button>
              </div>
            </div>
            <div className="d-flex flex-nowrap justify-content-center">
              <div>
                <button className="btn btn-outline-dark m-2">ventanas</button>
              </div>
              <div>
                <button className="btn btn-outline-dark m-2">compartir</button>
              </div>
            </div>
          </td>
        </tr>
      </tbody>
    </table>
  );
};

export default TableProperty;
