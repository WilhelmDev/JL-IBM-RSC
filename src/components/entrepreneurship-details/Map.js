import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Localizacion } from "@/utilis/positions";
import { Entrepreneurship, Neighborhood, Property } from "@/utilis/markers";
import dynamic from "next/dynamic";

const CustomMarker = dynamic(
  () => import('./Marker'),
  { ssr: false }
)


export default function LocalityElementsMap({ positions }) {
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
          key={index}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Property}
          description={pos.title}
        ></CustomMarker>
      ))}
      {positions.neighborhood.map((pos, index) => (
        <CustomMarker
          key={index}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Neighborhood}
          description={pos.title}
        ></CustomMarker>
      ))}
      {positions.entrepreneurship.map((pos, index) => (
        <CustomMarker
          key={index}
          pos={[parseInt(pos.lat), parseInt(pos.long)]}
          icon={Entrepreneurship}
          description={pos.title}
        ></CustomMarker>
      ))}
    </MapContainer>
  );
}
