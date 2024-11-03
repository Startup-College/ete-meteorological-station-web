import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import { Link } from "react-router-dom";
import { Button } from "./ui/button";
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
        className="min-h-96"
        center={[-8.139346734349745, -34.945850832525984]}
        zoom={25}
        scrollWheelZoom={false}
      >
        <TileLayer
          attribution='<a target="_blank" href="https://ete-webpage.onrender.com/">Projeto</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />

        {markers?.map((marker, i) => {
          return (
            <Marker key={i} position={marker.position}>
              <Popup>
                <Link target="_self" to={`/stations/${marker.url}`}>
                  <Button className="text-gray-950" variant={"link"}>
                    {marker.name}
                  </Button>
                </Link>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}

export default Map;
