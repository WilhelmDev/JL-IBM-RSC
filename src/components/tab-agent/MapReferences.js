'use client'
import React, { useEffect, useMemo, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer, useMap } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Localizacion } from '@/utilis/positions';
import { Locations, Others } from '@/utilis/markers';
import MarkerDraggable from './MarkerDraggable';

export default function MapReferences({ markers, last, updatePos}) {
  const [position, setPosition] = useState(Localizacion.buenosAires)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker !== null) {
          const updatedMarker = marker.getLatLng()
          setPosition(updatedMarker)
          // updatePosition(updatedMarker)
        }
      },
    }),
    [],
  )
  

  return (
    <MapContainer id='map-references' center={Localizacion.buenosAires} zoom={13} zoomAnimation scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {
        markers && markers.map((mark) => {
          return <MarkerDraggable key={mark.id} pos={mark.position} id={mark.id} last={last} updatePos={updatePos}/>
        }
        )
      }
      {/* <Marker 
        position={position} icon={Others} 
        draggable eventHandlers={eventHandlers} 
        ref={markerRef} >
        <Popup>
          Esta es la direccion de un punto de referencia <br />
          Puedes arrastrarla
        </Popup>
      </Marker> */}
    </MapContainer>
  )
}
