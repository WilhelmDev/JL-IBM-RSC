import PropertyHorizontal from "@/components/search-map/atoms/property";
import Property from "@/components/location/property";
import { func } from "prop-types";
import React from "react";
import Tabs from "@/components/location/tabs";
import Entrepreneurship from "@/components/location/entrepreneurship";
import Neighborhood from "@/components/pages/start/generic-components/neighborhood2";

export default function Results({ mapList, setMapList }) {
  const tabs = [
    { id: "buy", label: "Establecimiento (3)" },
    { id: "rent", label: "Transporte y accesos" },
    { id: "sold", label: "Alquiler temporal" },
  ];
  const items = [
    { id: "1", title: "Escuela Primaria Nombre" },
    { id: "2", title: "Hospital" },
    { id: "3", title: "Banco" },
  ];

  const addresses = [
    {
      address: "10425 Tabor St",
      city: "Los Angeles",
      state: "California",
      zipCode: "90034",
      area: "Brookside",
      country: "United States",
    },
    {
      address: "10 Downing Street",
      city: "London",
      state: "Greater London",
      zipCode: "SW1A 2AA",
      area: "Westminster",
      country: "United Kingdom",
    },
  ];
  return (
    <div className="results-container">
      <div className="num-results">
        <p>Mostrando 1-4 de 25 resultados</p>
        <div className="info-results">
          <p>Ordenar por</p>
          <button className="btn-results">Mas relevante <i class="fa-solid fa-chevron-down"></i></button>
          <button className={mapList ? "btn-results btn-list" : "btn-results btn-list active"} onClick={() => setMapList(false)}>Lista</button>
          <button className={!mapList ? "btn-results btn-map" : "btn-results btn-map active"} onClick={() => setMapList(true)}>Mapa</button>
        </div>
      </div>
      <div className="results-card">
        {mapList &&
          <>
            <PropertyHorizontal />
            <PropertyHorizontal />
            <PropertyHorizontal />
            <PropertyHorizontal />
          </>
        }
        {!mapList &&
          <>
            <div className="property-container">
              <Property/>
              <Property/>
              <Property/>
              <Property/>
            </div>
            <div className="row">
              <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
                <h3 style={{fontSize: '20px'}}>CARGAR MÁS</h3>
              </div>
            </div>
            <div className="container card-shadow">
              <div className="col-md-12 map">
                <iframe
                  className="position-relative bdrs12 mt30 map-height"
                  loading="lazy"
                  src={`https://maps.google.com/maps?q=${addresses[0].address}&t=m&z=14&output=embed&iwloc=near`}
                  title={addresses[0].address}
                  aria-label={addresses[0].address}
                />
              </div>
              <section className='p0'>
                <div className="container tabs-wrapper">
                  <Tabs items={items} tabs={tabs}/>
                  <a className="see-properties" href="#">Ver Propiedades de la localidad</a>
                </div>
              </section>
            </div>
            <div className="container my-5">
              <div className="row my-4">
                <div className="col-8 left-side">
                  <h1 style={{fontSize: '30px'}}>Otras propiedades que te pueden interesar</h1>
                  <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
                  </div>
                <div className="col-4 d-flex justify-content-end align-items-center right-side">
                  <h3>VER TODAS</h3>
                </div>
              </div>
            </div>
            <div className="property-container">
              <Property/>
              <Property/>
            </div>
            <div className="container my-5">
              <div className="row my-4">
                <div className="col-12 left-side">
                  <h1 style={{fontSize: '30px'}}>Emprendimientos</h1>
                  <p> Si quieres invertir en tu casa del futuro aquí encontraras los emprendimientos que te ofrecemos </p>
                  </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Entrepreneurship />
                </div>
                <div className="col-6">
                  <Entrepreneurship />
                </div>
              </div>
              <div className="row">
                <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
                  <h3 style={{fontSize: '20px'}}>CARGAR MÁS</h3>
                </div>
              </div>
            </div>
            <div className="container my-5">
              <div className="row my-4">
                <div className="col-12 left-side">
                  <h1 style={{fontSize: '30px'}}>Otros Barrios que pueden Interesarte</h1>
                  <p> Puedes guardar y seleccionar las que te gusten y compararlas </p>
                </div>
                <div className="col-12">
                  <button className="button">Todos</button>
                  <button className="button">Abiertos</button>
                  <button className="button">Semi Cerrados</button>
                  <button className="button">Privados</button>
                  <button className="button">Country Club</button>
                </div>
              </div>
              <div className="row">
                <div className="col-6">
                  <Neighborhood />
                </div>
                <div className="col-6">
                  <Neighborhood />
                </div>
              </div>
              <div className="row">
                <div className="col-12 pt-4 d-flex justify-content-center align-items-center right-side">
                  <h3 style={{fontSize: '20px'}}>CARGAR MÁS</h3>
                </div>
              </div>
            </div>
          </>
        }
      </div>
    </div>
  )
}
export function MapFilter(){
  return(
    <form className="map-filter">
      <span>Ver en el mapa</span>
      <label>
        <input type="checkbox"/>Localidades
      </label>
      <label>
        <input type="checkbox"/>Barrios
      </label>
      <label>
        <input type="checkbox"/>Emprendimientos
      </label>
      <label>
        <input type="checkbox"/>Propiedades
      </label>
      <small>Recomendaciones</small>
      <label>
        <input type="checkbox"/>Comercios Vecinos
      </label>
      <label>
        <input type="checkbox"/>Establecimientos
      </label>          
      <label>
        <input type="checkbox"/>Transporte y accesos
      </label>
    </form>
  )
}
