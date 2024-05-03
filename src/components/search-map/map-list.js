'use client'
import React, { useState } from 'react';
import { Tags } from "./atoms/filter";
import Tabs from "../location/tabs";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import Image from "next/image";
import Results, { MapFilter } from "./atoms/results";

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

export default function MapList( props ) {
  const [mapList, setMapList] = useState(false)
  return (
    <div className={mapList ? "map-list-container flex-row" : "map-list-container flex-column"}>
      <div className="list">
        <div className="results-desc">
          <h3 className="title">Resultados de: { props.search }</h3>
          <div className="tags-container">
            <p>Avanzado:</p>
            <Tags nametag="Quincho"/>
            <Tags nametag="Asador"/>
          </div>
          <button className="btn">Guardar Búsqueda</button>
          <Results
            mapList={mapList}
            setMapList={setMapList}
          />
        </div>
      </div>
      <div className={mapList ? "map-horizontal" : "map-horizontal none"}>
        <MapFilter />
        <Image
          src={`/images/home-v3/map.png`}
          width={720}
          height={500}
          className="cover"s
          alt='Mapa'
        />
      </div>
    </div>
  )
}
