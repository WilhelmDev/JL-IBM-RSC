export interface ParsedLocalityForm {
  title: string;
  partido_id: number;
  lat: number;
  long: number;
  video_url: string;
  front_page: string;
  reference_points: ReferencePoint[];
  media: MediaLocality;
}

export interface MediaLocality {
  images: Image[];
}

export interface Image {
  front_page: boolean;
  image: string;
}

export interface ReferencePoint {
  name: string;
  type: string;
  description: string;
  map_address: string;
  link: string;
  logo: Image | string;
}


// Neighborhoods
export interface NeighborhoodParsedForm {
  title: string;
  ref_code: string;
  type: string;
  description: string;
  expensas_amount: number;
  expensas_date: Date;
  state: string;
  phone: string;
  zonificacion: string;
  internal_notes: string;
  location: LocationNeighborhood;
  details: DetailsNeighborhood;
  media: MediaNeighborhood;
}

export interface DetailsNeighborhood {
  neighborhood_surface: number;
  lots_amount: number;
  lots_built_year: number;
  available_lots: number;
  capital_distance: number;
  lots_max_size: number;
  lots_min_size: number;
  props: number[];
  amenidades: number[];
  services: number[];
}

export interface LocationNeighborhood {
  country: string;
  province: string;
  partido_id: number;
  locality_id: number;
  type: string;
  street_or_uf: string;
  map_selection: string;
  latitude: number;
  longitude: number;
}

export interface MediaNeighborhood {
  video_platform?: string;
  front_page: string
  video_link: string;
  images: Image[];
  documents: Document[];
}

export interface DocumentNeighborhood {
  name: string;
  document: string;
}

export interface Image {
  front_page: boolean;
  image: string;
}


// Propertys
export interface ParsedPropertyForm {
  description: string;
  title: string;
  status: string;
  classifications: number[];
  type: string;
  ref_code: string;
  temp_rent?: string;
  price: Price;
  expensas: Expensas;
  owner: string;
  phone: string;
  internal_notes: string;
  location: Location;
  surface_area: SurfaceArea;
  services: number[];
  media: Media;
  periods?: PeriodsPayload
}

export interface PropertyPayload extends ParsedPropertyForm {
  price_by_times: number[];
}

interface Expensas {
  amount_usd: number;
  amount_arg: number;
  referenceDate: Date;
}

interface Location {
  partido_id: number;
  locality_id: number;
  neighborhood_id: number;
  street_or_uf: string;
  latitude: number;
  longitude: number;
}

interface Media {
  video_url: string;
  front_page: string;
  gallery: Gallery[];
  documents: Document[];
}

interface Document {
  name: string;
  document: string;
}

interface Gallery {
  front_page: boolean;
  image: string;
}

interface Price {
  retail: priceCurrency
  anual_rent: priceCurrency
}

type priceCurrency = {
  usd: number
  arg: number
}

interface SurfaceArea {
  land_source: number;
  covered_surface: number;
  semicovered_surface: number;
  age: number;
  front: number;
  depth: number;
  zonification: string;
  garage_covered: number;
  garage_semicovered: number;
  garage_uncovered: number;
  property_status: string;
  orientation: string;
  disposition: string;
  rooms: number;
  floors: number;
  bedroom: number;
  bathrooms: number;
  en_suite_bathrooms: number;
  toilet: number;
  basement: number;
  spaces: number[];
}

export interface PeriodsPayload {
  data: DataPeriods[];
}

interface DataPeriods {
  title: string;
  price_usd: number;
  price_arg: number;
}

interface DataResponse extends DataPeriods {
  id: number
}

export interface PeriodsResponse {
  data: DataResponse[];
}