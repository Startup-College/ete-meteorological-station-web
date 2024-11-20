import { Readings } from "./readings";

export interface ChartProps {
  data: Readings[];
  type: "humidity" | "rainfallVolume" | "temperature";
}
