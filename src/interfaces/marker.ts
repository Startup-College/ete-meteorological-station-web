export interface MarkerProps {
  name: string;
  position: [number, number];
  lastReading: {
    dateTime: string;
    humidity: number;
    rainfallVolume: number;
    temperature: number;
  };
  id: number;
  weather: {
    icon: string;
    description: string;
  };
}
