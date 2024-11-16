import { Readings } from "@/interfaces/readings";
import { ListStationsResponse } from "@/interfaces/stations";
import { createContext } from "react";

export interface StationContextProps {
  getStationData: (id: string) => void;
  getStationsPositions: () => void;
  stations: ListStationsResponse[];
  readings: Readings[];
  isLoading: boolean;
}

export const StationContext = createContext({} as StationContextProps);
