export interface ListStationsResponse {
  name: string;
  longitude: string;
  latitude: string;
  id: number;
  lastReading: {
    dateTime: string;
    humidity: number;
    rainfallVolume: number;
    temperature: number;
  };
  weather: {
    icon: string;
    description: string;
  };
}
