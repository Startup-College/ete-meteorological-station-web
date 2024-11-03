import { StationContextProvider } from "@/providers/station-provider";
import { ReactNode } from "react";

function AppProvider({ children }: { children: ReactNode }) {
  return <StationContextProvider>{children}</StationContextProvider>;
}

export default AppProvider;
