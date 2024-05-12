"use client"
import { addFavorite } from "@/core/infrastructure/services/tab-client.service";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { toast } from "react-toastify";

const TableEnterprises = ({ entrepreneurship }) => {
  const pathname = usePathname();
  const [offer, setOffer] = useState({
    type: entrepreneurship.offers[0] ? entrepreneurship.offers[0].type : "",
    payment: entrepreneurship.offers[0]["Tipo de pago 1"] ?? 0,
    meters: entrepreneurship.offers[0]?.covered_sourface ?? 0,
  });
  function copyCurrentUrlToClipboard() {
    const currentUrl = window.location.origin + pathname;
    try {
      navigator.clipboard.writeText(currentUrl)
      toast.success("Copiado en el portapeles")
    } catch (error) {

    }
  }
  return (
    <>
      <section className="py-5 bgc-white">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-end">
                <button className="btn btn-primary fw-bold bg-white w-50">SOLICITAR UNA VISITA</button>
              </div>
            </div>
            <div className="col-lg-6 wow fadeInUp" data-wow-delay="100">
              <div className="main-title text-start">
                <button className="btn btn-primary fw-bold bg-white w-50">SOLICITAR UNA VISITA</button>
              </div>
            </div>

            <div className="col-lg-7 wow fadeInUp" data-wow-delay="100">
              <div className="text-start">
                <h4>{entrepreneurship.title}</h4>
              </div>
              <div className="d-flex text-start">
                <p className="me-3">Partido</p>
                <p className="me-3">Localidad</p>
                <p className="me-3">Barrio</p>
                <p className="me-3">Ubicación</p>
              </div>
              <div className="d-flex text-start">
                <div className="card me-3 p-2 btn" onClick={async () => {
                  try {
                    await addFavorite("entreprenureship", entrepreneurship.id)
                    toast.success("El emprendimiento ha sido agregado a favoritos")
                  } catch (error) {
                    toast.error("Ha ocurrido un error")
                  }
                }}><i class="fa-regular fa-heart fs-3"></i></div>
                <div className="card me-3 p-2 btn" onClick={copyCurrentUrlToClipboard}><i class="fa-regular fa-share-nodes fs-3"></i></div>
                <div className="card me-3 p-2 btn"><i class="fa-solid fa-print fs-3"></i></div>
              </div>
            </div>

            { entrepreneurship.offers &&
              <div className="col-lg-5 justify-content-end d-flex mb-5 wow fadeInUp" data-wow-delay="100">
              <div className="d-grid">
              { entrepreneurship.offers.map((item, index) => {
                  if(item.type === offer.type)
                    return <button key={index} style={{ border: '1px solid #DDDDDD', background: '#06173D', color: 'white', borderRadius: '0px' }} className="btn mb-1">{item.type}</button>
                  else
                    return <button key={index} style={{ border: '1px solid #DDDDDD', borderRadius: '0px' }} className="btn mb-1 bg-white" onClick={() => {
                      setOffer({
                        type: item.type ?? "",
                        payment: item["Tipo de pago 1"] ?? 0,
                        meters: item.covered_sourface ?? 0,
                      })
                    }}>{item.type}</button>
                })
              }
              </div>
              <button style={{ border: '1px solid #DDDDDD', height: '122px', borderRadius: '0px' }} className="btn">{offer.payment}USD <br /> {offer.meters} mts cubiertos</button>
            </div>
            }

            <div className="col-lg-12 d-flex mt-4 wow fadeInUp" data-wow-delay="100">
              <div className="card me-3" style={{ width: "11rem" }}>
                <h1 className="text-center fs-1 fw-normal">
                  {entrepreneurship.offers.reduce((unitsAvaliable, item) => unitsAvaliable + item.units_amount, 0)}
                </h1>

                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Unidades disponibles</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "11rem" }}>
                <div className="d-flex my-0 mx-auto">
                  <h1 className="text-center fs-1 fw-normal">
                    {entrepreneurship.details.capital_distance}
                  </h1>
                  <p className="d-flex align-items-end fw-bold">KM</p>
                </div>
                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Distancia de la capital</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "11rem" }}>
                <h1 className="text-center fs-1 fw-normal">
                  {entrepreneurship.offers.reduce((unitsAvaliable, item) => unitsAvaliable + 1, 0)}
                </h1>

                <div style={{ marginTop: '1px' }} className="card text-center rounded-0">
                  <p className="fw-bold">Tipos de propiedades</p>
                </div>
              </div>

              <div className="card me-3" style={{ width: "6rem" }}>
                <h1 className="text-center fs-1 fw-normal"><i class="fa-solid fa-download"></i></h1>

                <div className="card text-center rounded-0">
                  <p className="fw-bold">Catalogo</p>
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-5 wow fadeInUp" data-wow-delay="100">
              <div className="text-start">
                <p className="fw-bold mb-0">Descripción del Emprendimiento</p>
                <p className="mb-0">{entrepreneurship.description}</p>
                {/*<a href="#">Leer mas</a>*/}
              </div>
            </div>

            <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
              <div className="container">
                <p className="fw-bold mb-2">Amenites</p>
                <div className="row ms-3">
                  {entrepreneurship.details.amenidades.map((amenidad, index) => {
                    return (
                      <div key={index} className="col-lg-3 mb-4">
                        <p className="mb-0">{amenidad.name}</p>
                      </div>
                    )
                  })}
                </div>
              </div>
            </div>

            <div className="col-lg-12 mt-3 wow fadeInUp" data-wow-delay="100">
              <div className="container">
                <p className="fw-bold mb-2">Detalles</p>
                <div className="row ms-1">
                  {entrepreneurship.services.map((service, index) => {
                      return (
                        <div key={index} className="col-lg-4 mb-4">
                          <p className="mb-0 fw-bold">{service.name}</p>
                        </div>
                      )
                  })}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default TableEnterprises;
