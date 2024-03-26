import { Others } from '@/utilis/markers'
import React, { useCallback, useEffect, useMemo, useRef, useState } from 'react'
import { Marker, Popup } from 'react-leaflet'

export default function MarkerDraggable({pos, last, updatePos, id}) {
  const [draggable, setDraggable] = useState(false)
  const [position, setPosition] = useState(pos)
  const markerRef = useRef(null)
  const eventHandlers = useMemo(
    () => ({
      dragend() {
        const marker = markerRef.current
        if (marker != null) {
          const { lat, lng } = marker.getLatLng() 
          setPosition([lat, lng])
          updatePos({id, position: [lat, lng]})
        }
      },
    }),
    [id],
  )
  useEffect(() => {
    if(last.id === id) {
      setDraggable(true)
    } else {
      setDraggable(false)
    }
  }, [last, id])
  
  return (
    <Marker
      draggable={draggable}
      eventHandlers={eventHandlers}
      position={position} icon={Others}
      ref={markerRef}>
      <Popup minWidth={90}>
        <span>
          Este es un punto de referencia <br />
          Puedes Arrastrarlo
        </span>
      </Popup>
    </Marker>
  )
}
