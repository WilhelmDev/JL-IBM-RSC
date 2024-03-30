export interface Get {
    data:  Datum[];
    links: Links;
    meta:  Meta;
}

export interface Datum {
    id:              number;
    description:     string;
    title:           string;
    requests_amount: number;
    status:          string;
    type:            string;
    owner:           string;
    phone:           string;
    ref_code:        string;
    classifications: Classification[];
    price:           Price;
    expensas:        Expensas;
    internal_notes:  string;
    price_by_times:  PriceByTime[];
    surface_area:    SurfaceArea;
    services:        Classification[];
    media:           Media;
}

export interface Classification {
    id:   number;
    name: string;
}

export interface Expensas {
    amount_usd:    string;
    amount_arg:    string;
    referenceDate: Date;
}

export interface Media {
    video_url:  string;
    front_page: string;
    gallery:    Gallery[];
    documents:  any[];
}

export interface Gallery {
    id:         number;
    mimetype:   string;
    url:        string;
    front_page: number;
}

export interface Price {
    retail:     AnualRent;
    anual_rent: AnualRent;
}

export interface AnualRent {
    arg: string;
    usd: string;
}

export interface PriceByTime {
    id:        number;
    title:     string;
    price_usd: string;
    price_arg: string;
}

export interface SurfaceArea {
    land_source:         number;
    covered_surface:     number;
    semicovered_surface: number;
    age:                 number;
    front:               number;
    depth:               number;
    zonification:        string;
    garage_covered:      number;
    garage_semicovered:  number;
    garage_uncovered:    number;
    property_status:     string;
    orientation:         string;
    disposition:         string;
    rooms:               number;
    floors:              number;
    bedroom:             number;
    bathrooms:           number;
    en_suite_bathrooms:  number;
    toilet:              number;
    basement:            number;
    spaces:              Classification[];
}

export interface Links {
    first: string;
    last:  string;
    prev:  null;
    next:  null;
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
