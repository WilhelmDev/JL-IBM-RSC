"use client";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Localizacion } from "@/utilis/positions";
import { Entrepreneurship, Neighborhood, Property } from "@/utilis/markers";
import CustomMarker from "./Marker";
import { useRef } from "react";

export default function LocalityElementsMap({ positions }) {
  const markerRef = useRef(null);
  return (
    <MapContainer
      id="elements-map"
      center={Localizacion.buenosAires}
      zoom={13}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {positions.real_states.map((pos, index) => (
        <CustomMarker
          key={pos.ref_code}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Property}
          description={pos.title}
        ></CustomMarker>
      ))}
      {positions.neighborhood.map((pos, index) => (
        <CustomMarker
          key={pos.ref_code}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Neighborhood}
          description={pos.title}
        ></CustomMarker>
      ))}
      {positions.entrepreneurship.map((pos, index) => (
        <CustomMarker
          key={pos.ref_code}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Entrepreneurship}
          description={pos.title}
        ></CustomMarker>
      ))}
    </MapContainer>
  );
}
