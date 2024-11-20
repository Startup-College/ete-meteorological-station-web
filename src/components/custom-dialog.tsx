import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogTitle,
} from "./ui/dialog";
import { Marker } from "react-leaflet";
import { MarkerProps } from "@/interfaces/marker";
import { CloudHailIcon, ThermometerSunIcon } from "lucide-react";
import { WiHumidity } from "react-icons/wi";
import { Link } from "react-router-dom";

interface CustomDialogProps {
  marker: MarkerProps;
}

function CustomDialog({ marker }: CustomDialogProps) {
  const [open, setOpen] = useState(false);
  console.log(marker);

  function handleMarkerClick() {
    setOpen(true); // Abre o Dialog ao clicar no Marker
  }

  function handleLastReadingInformations(
    information: "temperature" | "humidity" | "rainfallVolume"
  ) {
    switch (information) {
      case "temperature":
        return (
          <div className="flex items-center justify-between text-sm">
            <span>Temperatura</span>
            <div className="flex items-center gap-1">
              <ThermometerSunIcon size={16} />
              <span className="font-semibold">
                {marker.lastReading.temperature} &deg;C
              </span>
            </div>
          </div>
        );
      case "humidity":
        return (
          <div className="flex items-center justify-between text-sm">
            <span>Umidade</span>
            <div className="flex items-center gap-1">
              <WiHumidity size={24} />
              <span className="font-semibold">
                {marker.lastReading.humidity} %
              </span>
            </div>
          </div>
        );
      case "rainfallVolume":
        return (
          <div className="flex items-center justify-between text-sm">
            <span>Volume de chuva</span>
            <div className="flex items-center gap-1">
              <CloudHailIcon size={16} />
              <span className="font-semibold">
                {marker.lastReading.rainfallVolume} mm
              </span>
            </div>
          </div>
        );
    }
  }

  if (!marker) {
    return;
  }

  return (
    <>
      <Marker
        position={marker.position}
        eventHandlers={{ click: handleMarkerClick }}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-4 z-50">
          <DialogTitle>{marker.name}</DialogTitle>
          <DialogDescription>
            <p>
              Última leitura realizada em:{" "}
              {new Date(marker.lastReading.dateTime).toLocaleDateString(
                "pt-BR",
                { hour: "2-digit", minute: "2-digit" }
              )}
            </p>
          </DialogDescription>
          <div className="w-full pr-4 space-y-2">
            {handleLastReadingInformations("temperature")}
            {handleLastReadingInformations("humidity")}
            {handleLastReadingInformations("rainfallVolume")}
          </div>
          <Link
            to={`stations/${marker.id}`}
            rel="noopener noreferrer"
            className="font-semibold underline underline-offset-4 text-center"
          >
            Visitar Estação
          </Link>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CustomDialog;
