export interface NeighborhoodResponse {
  data:  Neighborhood[];
  links: Links;
  meta:  NeighborhoodResponseMeta;
}

export interface Neighborhood {
  id:              number;
  title:           string;
  ref_code:        string;
  type:            string;
  description:     string;
  expensas_amount: number;
  expensas_date:   Date;
  state:           string;
  internal_notes:  string;
  phone:           string;
  zonificacion:    string;
  locality_title:  string;
  meta:            DatumMeta;
  details:         Details;
  media:           Media;
}

export interface Details {
  neighborhood_surface: string;
  lots_amount:          string;
  lots_built_year:      number;
  available_lots:       number;
  capital_distance:     number;
  lots_max_size:        number;
  lots_min_size:        number;
  props:                Amenidade[];
  amenidades:           Amenidade[];
  services:             Amenidade[];
}

export interface Amenidade {
  id:   number;
  name: string;
}

export interface Media {
  video_platform: null;
  video_link:     string;
  front_page:     string;
  images:         Image[];
  documents:      Document[];
}

export interface Document {
  id:    number;
  name:  string;
  title: string;
}

export interface Image {
  id:         number;
  mimetype:   string;
  url:        string;
  front_page: number;
}

export interface DatumMeta {
  dependencies:     Dependencies;
  requests:         Requests;
  latest_actions:   string[];
  shared_favorites: SharedFavorites;
}

export interface Dependencies {
  real_states_amount:       number;
  entreprenureships_amount: number;
}

export interface Requests {
  views:    number;
  exchange: number;
  rating:   number;
}

export interface SharedFavorites {
  shared:    number;
  favorites: number;
}

export interface Links {
  first: string;
  last:  string;
  prev:  null;
  next:  string;
}

export interface NeighborhoodResponseMeta {
  current_page: number;
  from:         number;
  last_page:    number;
  links:        Link[];
  path:         string;
  per_page:     number;
  to:           number;
  total:        number;
}

export interface Link {
  url:    null | string;
  label:  string;
  active: boolean;
}
