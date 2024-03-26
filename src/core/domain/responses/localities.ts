export interface LocalitiesResponse {
  data: Datum[];
  links: Links;
  meta: Meta;
}

export interface Datum {
  id: number;
  title: string;
  contry: string;
  province: string;
  partido: Partido;
  lat: string;
  long: string;
  front_page: string;
  video_url: string;
  reference_points: ReferencePoint[];
  images: Image[];
}

export interface Image {
  id: number;
  mimetype: string;
  name: string;
  front_page: number;
}

export interface Partido {
  id: number;
  name: string;
}

export interface ReferencePoint {
  id: number;
  name: string;
  type: string;
  description: string;
  logo: any[];
  map_address: string;
  link: string;
}

export interface Links {
  first: string;
  last: string;
  prev: string;
  next: null;
}

export interface Meta {
  current_page: number;
  from: number;
  last_page: number;
  links: Link[];
  path: string;
  per_page: number;
  to: number;
  total: number;
}

export interface Link {
  url: null | string;
  label: string;
  active: boolean;
}
