export type DirectionData = {
  routes: Route[];
  waypoints: Waypoint[];
  code: Code;
  uuid: string;
};

export type Code = "Ok";

export type Route = {
  geometry: Geometry;
  legs: Leg[];
  weight_name: WeightName;
  weight: number;
  duration: number;
  distance: number;
};

export type Geometry = {
  coordinates: Array<number[]>;
  type: Type;
};

export type Type = "LineString";

export type Leg = {
  steps: any[];
  summary: string;
  weight: number;
  duration: number;
  distance: number;
};

export type WeightName = "cyclability";

export type Waypoint = {
  distance: number;
  name: string;
  location: number[];
};
