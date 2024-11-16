import { Readings } from "./readings";

export interface ChartProps {
  station: {
    name: string;
    id: string;
  };
  data: Readings[];
  type: "humidity" | "rainfallVolume" | "temperature";
}
