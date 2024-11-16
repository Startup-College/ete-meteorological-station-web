export interface Readings {
  station: {
    name: string;
    id: string;
  };
  temperature: number;
  humidity: number;
  dateTime: string;
  rainFallVolume: number;
  weateher: Weather;
}
export interface Weather {
  description: string;
  icon: string;
}
