export interface MapProps {
  markers?: Markers[];
}

export interface Markers {
  name: string;
  position: [number, number];
  url: string;
  id: string;
}
