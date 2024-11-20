import { useState } from "react";
import { Dialog, DialogContent } from "./ui/dialog";
import { Marker } from "react-leaflet";

interface CustomDialogProps {
  marker: {
    name: string;
    position: [number, number];
    url: string;
  };
}

function CustomDialog({ marker }: CustomDialogProps) {
  const [open, setOpen] = useState(false);

  function handleMarkerClick() {
    setOpen(true); // Abre o Dialog ao clicar no Marker
  }

  return (
    <>
      <Marker
        position={marker.position}
        eventHandlers={{ click: handleMarkerClick }}
      />
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent className="max-w-md p-4 z-50">
          <div className="text-lg font-semibold">{marker.name}</div>
          <p className="text-sm text-gray-600 mt-2">
            Informações adicionais podem ser exibidas aqui.
          </p>
          <a
            href={`stations/${marker.url}`}
            target="_blank"
            rel="noopener noreferrer"
            className="text-blue-500 underline"
          >
            Visitar link
          </a>
        </DialogContent>
      </Dialog>
    </>
  );
}

export default CustomDialog;
