import server from "@/api/server";
import { StationContext } from "@/context/stations";
import { Readings } from "@/interfaces/readings";
import { ListStationsResponse } from "@/interfaces/stations";
import { AxiosError } from "axios";
import { ReactNode, useState } from "react";

export function StationContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  const [stations, setStations] = useState<ListStationsResponse[]>([]);
  const [readings, setReadings] = useState<Readings[]>([]);
  async function getStationsPositions() {
    setIsLoading(true);
    try {
      const { data } = await server.get("/list-station");
      console.log(data);
      return setStations(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.message;
      }
    } finally {
      setIsLoading(false);
    }
  }
  async function getStationData(stationId: string) {
    setIsLoading(true);
    try {
      // Requisição Axios, no aguardo da API
      const { data } = await server.get(`readings-by-station/${stationId}`);
      setReadings(data);
    } catch (error) {
      if (error instanceof AxiosError) {
        return setIsLoading(false), error.message;
      }
    } finally {
      setIsLoading(false);
    }
  }
  return (
    <StationContext.Provider
      value={{
        getStationData,
        isLoading,
        getStationsPositions,
        stations,
        readings,
      }}
    >
      {children}
    </StationContext.Provider>
  );
}
