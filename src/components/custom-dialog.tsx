import { useEffect, useState } from "react";
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
import clsx from "clsx";

interface CustomDialogProps {
  marker: MarkerProps;
}

function CustomDialog({ marker }: CustomDialogProps) {
  const [open, setOpen] = useState(false);
  const [icon, setIcon] = useState("");
  const dayTime = new Date(marker.lastReading.dateTime).getHours();
  useEffect(() => {
    if (!marker) return;

    setIcon(import.meta.env.VITE_ICONS_URL + marker.weather.icon.slice(1));
  }, []);
  // console.log(marker);

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
        <DialogContent
          className={clsx(
            "max-w-md p-4 px-12 z-50 overflow-hidden selection:bg-gray-50/90 selection:text-gray-900",
            {
              "!from-orange-700 !to-amber-800 text-gray-100":
                dayTime >= 6 && dayTime <= 18,
              "!from-indigo-800 !to-sky-900 text-gray-100":
                dayTime < 6 || dayTime > 18,
            }
          )}
        >
          <DialogTitle>{marker.name}</DialogTitle>
          <DialogDescription className="relative">
            <span className="text-gray-300/50">
              Última leitura realizada em:{" "}
              {new Date(marker.lastReading.dateTime).toLocaleDateString(
                "pt-BR",
                { hour: "2-digit", minute: "2-digit" }
              )}
            </span>
          </DialogDescription>
          {icon !== "" && (
            <div className="pointer-events-none absolute top-0 right-0">
              <div className="opacity-90 pointer-events-none">
                <img
                  className="invert pointer-events-none select-none size-56 opacity-10"
                  src={icon}
                  alt=""
                />
              </div>
            </div>
          )}
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
