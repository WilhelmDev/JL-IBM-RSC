import Image from "next/image";
import React from "react";
import ShareFav from "./shareFav";

export default function Property({ property }) {
  return (
    <tr>
      <td className="p-4">
        <div className="d-flex">
          <Image
            src="/images/home/font-home.jpeg"
            alt="Property"
            height={250}
            width={200}
            className="img"
          />
          <div className="ms-3">
            <p className="property-title">{property.title}</p>
            <p className="text-muted mb-0">Tipo de barrio</p>
            <p className="text-muted mb-0">Localidad</p>
          </div>
        </div>
      </td>
      <td className="p-4">
        <div id="operation-price-box">
          <p className="grey-text-box">
            <span>${property.price.retail.usd} USD</span>
            Venta / Editar
          </p>
          <p className="grey-text-box">
            <span>2</span>Alquiler / Editar
          </p>
          <p className="grey-text-box">
            <span>Ver / Editar Lista</span>Alquiler Temporal
          </p>
        </div>
      </td>
      <td className="p-4">
        <div className="text-center">
          <p className="request-text">2 Visitas</p>
          <p className="request-text">1 Permuta</p>
          <h4 className="property-title">12/01/2024</h4>
          <p className="fw-bold">(Última solicitud)</p>
        </div>
      </td>
      <td className="p-4">
        <p>nombre de usuario S solicito una visita</p>
      </td>

      <td className="p-4">
        <ShareFav />
      </td>

      <td className="p-4">
        <div className="inline-elements">
          <div>
            <button className="action-button">
              <Image
                src={`/images/tab-agent/list-actions/delete.svg`}
                width={25}
                height={23}
                className="action-icons"
                alt="share"
              />
            </button>
          </div>
          <div>
            <button className="action-button">
              <Image
                src={`/images/tab-agent/list-actions/edit.svg`}
                width={25}
                height={23}
                className="action-icons"
                alt="share"
              />
            </button>
          </div>
        </div>
        <div className="inline-elements">
          <div>
            <button className="action-button">
              <Image
                src={`/images/tab-agent/list-actions/add.svg`}
                width={25}
                height={23}
                className="action-icons"
                alt="share"
              />
            </button>
          </div>
          <div>
            <button className="action-button">
              {" "}
              <Image
                src={`/images/tab-agent/list-actions/share.svg`}
                width={25}
                height={23}
                className="action-icons"
                alt="share"
              />
            </button>
          </div>
        </div>
      </td>
    </tr>
  );
}
