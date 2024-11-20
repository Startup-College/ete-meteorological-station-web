import { StationContext } from "@/context/stations";
import axios, { AxiosError } from "axios";
import { ReactNode, useState } from "react";

export function StationContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  async function getStationData(stationName: string) {
    setIsLoading(true);
    try {
      // Requisição Axios, no aguardo da API
      const { data } = await axios.get(
        `http://localhost:3333/api/v1/readings-by-station/${stationName}`
      );
      console.log(stationName);

      console.log(data);

      setIsLoading(false);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        return setIsLoading(false), error.message;
      }
    }
  }

  async function getLastReading() {
    console.log("chamou");
    setIsLoading(true);
    try {
      const { data } = await axios.get(
        `http://localhost:3333/api/v1/last-readings-by-station`
      );
      console.log(data);
      return;
    } catch (error) {
      if (error instanceof AxiosError) {
        return error.message;
      }
    } finally {
      setIsLoading(false);
    }
  }

  return (
    <StationContext.Provider
      value={{ getStationData, isLoading, getLastReading }}
    >
      {children}
    </StationContext.Provider>
  );
}
