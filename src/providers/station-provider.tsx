import { StationContext } from "@/context/stations";
import axios, { AxiosError } from "axios";
import { ReactNode, useState } from "react";

export function StationContextProvider({ children }: { children: ReactNode }) {
  const [isLoading, setIsLoading] = useState(false);
  async function getStationData(stationName: string) {
    setIsLoading(true);
    try {
      // Requisição Axios, no aguardo da API
      const { data } = await axios.get("https://pokeapi.co/api/v2/pokemon");
      console.log(stationName);

      console.log(data);

      setIsLoading(false);
    } catch (error) {
      if (error instanceof AxiosError) {
        return setIsLoading(false), error.message;
      }
    }
  }
  return (
    <StationContext.Provider value={{ getStationData, isLoading }}>
      {children}
    </StationContext.Provider>
  );
}
