import { StationContext, StationContextProps } from "@/context/stations";
import { useContext } from "react";

function useStation(): StationContextProps {
  const context = useContext(StationContext);
  return context;
}

export default useStation;
