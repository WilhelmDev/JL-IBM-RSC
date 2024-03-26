'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Localizacion } from '@/utilis/positions';
import { Property } from '@/utilis/markers';

export default function PropertyMap({updatePosition}) {

  const [position, setPosition] = useState(Localizacion.buenosAires)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker !== null) {
          const updatedMarker = marker.getLatLng()
          setPosition(updatedMarker)
          updatePosition(updatedMarker)
        }
      },
    }),
    [],
  )

  return (
    <MapContainer id='map-property' center={Localizacion.buenosAires} zoom={13} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker 
        position={Localizacion.buenosAires} icon={Property}
        draggable eventHandlers={eventHandlers} 
        ref={markerRef} >
        <Popup>
          Esta es la direccion de tu Propiedad <br />
          Puedes arrastrarla
        </Popup>
      </Marker>
    </MapContainer>
  )
}
