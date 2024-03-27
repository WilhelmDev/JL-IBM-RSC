export interface EntreprenureshipsResponse {
    data: Datum[];
    links: Links;
    meta: Meta;
}

export interface Details {
    land_sourface:         string;
    covered_sourface:      string;
    semi_covered_sourface: null;
    units_amount:          number;
    taken_units_amount:    number;
    zonification:          string;
    covered_garage:        string;
    semicovered_garage:    string;
    uncovered_garage:      string;
    capital_distance:      string;
    financing:             string;
    echo_construction:     string;
    inmediate_posession:   string;
    amenidades:            Service[];
}

export interface Service {
    id:   number;
    name: string;
}

export interface Datum {
    id:                 number;
    title:              string;
    neighborhood_id:    number;
    ref_code:           string;
    description:        string;
    expensas_amount:    number;
    expensas_date:      Date;
    state:              string;
    internal_notes:     string;
    owner_phone_number: string;
    location:           Location;
    details:            Details;
    services:           Service[];
    offers:             Offer[];
    media:              Media;
}

export interface Location {
    id:           number;
    country:      string;
    province:     string;
    locality:     Locality;
    neighborhood: null;
    street_or_uf: string;
    latitude:     string;
    longitude:    string;
}

export interface Locality {
    id:                        number;
    title:                     string;
    contry:                    string;
    province:                  string;
    partido:                   Service;
    lat:                       string;
    long:                      string;
    front_page:                string;
    video_url:                 string;
    reference_points:          ReferencePoint[];
    images:                    Image[];
    information:               Information;
    reference_points_metadata: ReferencePointsMetadata;
}

export interface Image {
    id:         number;
    mimetype:   Mimetype;
    url:        string;
    front_page: number;
}

export enum Mimetype {
    ImageJPEG = "image/jpeg",
}

export interface Information {
    real_states_amount:       number;
    neighborhoods_amount:     number;
    entrepreneurships_amount: number;
}

export interface ReferencePoint {
    id:          number;
    name:        string;
    type:        string;
    description: string;
    logo:        any[];
    map_address: string;
    link:        string;
}

export interface ReferencePointsMetadata {
    transport_access: number;
    stablishments:    number;
    business:         number;
}

export interface Media {
    video_url: string;
    documents: any[];
    images:    Image[];
}

export interface Offer {
    type:                 string;
    description:          string;
    "un pago":            number;
    "dos pagos":          number | null;
    "tres pagos":         number;
    "cuatro pagos":       number;
    "tipo 5":             null;
    units_amount:         number;
    rooms_amount:         number;
    bathrooms_amount:     number;
    total_sourface:       number;
    covered_sourface:     number;
    semicovered_sourface: number;
    images:               Image[];
}

export interface Links {
    first: string;
    last:  string;
    prev:  string | null;
    next:  string;
}

export interface Meta {
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
