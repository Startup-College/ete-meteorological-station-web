import { createContext } from "react";

export interface StationContextProps {
  getStationData: (stationName: string) => void;
  getLastReading: () => void;
  isLoading: boolean;
}

export const StationContext = createContext({} as StationContextProps);
