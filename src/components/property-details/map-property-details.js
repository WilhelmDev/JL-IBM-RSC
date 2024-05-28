'use client'
import React, { useEffect, useRef, useState } from 'react'
import { MapContainer, Marker, Popup, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import { Localizacion } from '@/utilis/positions';
import { Entrepreneurship, Neighborhood, Property } from '@/utilis/markers';

export default function MapPropertyDetails({ location }) {

    return (
        <MapContainer style={{ height: "600px" }} id='map-details' center={Localizacion.buenosAires} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            {location.real_states && location.real_states.map((item) => (
                <MarkerCustom item={item} key={item.id} icon={Property}/>
            ))}

             {location.neighborhood && location.neighborhood.map((item) => (
                <MarkerCustom item={item} key={`${item.id}-neigh`} icon={Neighborhood}/>
            ))}
            {location.entrepreneurship && location.entrepreneurship.map((item) => (
                <MarkerCustom item={item} key={`${item.id}-entre`} icon={Entrepreneurship}/>
            ))}
        </MapContainer>
    )
}

function MarkerCustom({ item, icon }) {
    return (
        <Marker
        position={[item.lat, item.long]} icon={icon}
        >
            <Popup>
                { item.title }
            </Popup>
        </Marker>
    )
}
