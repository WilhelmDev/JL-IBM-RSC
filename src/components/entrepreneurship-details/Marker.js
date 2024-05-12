import React, { useRef } from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function CustomMarker({pos, icon, description = ''}) {
    const markerRef = useRef(null)
  return (
    <Marker
      draggable={false}
      position={pos} icon={icon}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span>
            {description}
        </span>
      </Popup>
    </Marker>
  )
}
