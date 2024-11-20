import { Readings } from "@/interfaces/readings";
import { ListStationsResponse } from "@/interfaces/stations";
import { createContext } from "react";

export interface StationContextProps {
  getReadings: (id: string) => void;
  getStationsPositions: () => void;
  isLoading: boolean;
  stations: ListStationsResponse[];
  readings: Readings[];
}

export const StationContext = createContext({} as StationContextProps);
