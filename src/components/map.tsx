import { MapContainer, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";

import CustomDialog from "./custom-dialog";
interface MapProps {
  markers?: {
    name: string;
    position: [number, number];
    url: string;
  }[];
}

function Map({ markers }: MapProps) {
  return (
    <div className="w-full min-h-96 h-full">
      <MapContainer
        className="min-h-96 z-0"
        center={[-8.139346734349745, -34.945850832525984]}
        zoom={25}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a target="_blank" href="https://ete-webpage.onrender.com/">Projeto</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers?.map((marker, i) => {
          return <CustomDialog marker={marker} key={i} />;
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
