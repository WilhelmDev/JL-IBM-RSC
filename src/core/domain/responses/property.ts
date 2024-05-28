export interface GetProperty {
    status: number
    message: string
    data: DataProperty
}

export interface DataProperty {
    id: number
    description: string
    title: string
    requests_amount: number
    status: string
    type: string
    owner: string
    phone: string
    ref_code: string
    classifications: Classification[]
    location: Location
    price: Price
    expensas: Expensas
    internal_notes: string
    price_by_times: PriceByTime[]
    surface_area: SurfaceArea
    services: Service2[]
    media: Media2
}

export interface Classification {
    id: number
    name: string
}

export interface Location {
    id: number
    country: string
    province: string
    locality: Locality
    neighborhood: Neighborhood
    street_or_uf: string
    latitude: string
    longitude: string
}

export interface Locality {
    id: number
    title: string
    contry: string
    province: string
    partido: Partido
    lat: string
    long: string
    front_page: string
    video_url: string
    reference_points: ReferencePoint[]
    images: Image[]
    information: Information
    reference_points_metadata: ReferencePointsMetadata
}

export interface Partido {
    id: number
    name: string
}

export interface ReferencePoint {
    id: number
    name: string
    type: string
    description: string
    logo: Logo[]
    map_address: string
    link: string
}

export interface Logo {
    id: number
    mimetype: string
    url: string
    front_page: number
}

export interface Image {
    id: number
    mimetype: string
    url: string
    front_page: number
}

export interface Information {
    real_states_amount: number
    neighborhoods_amount: number
    entrepreneurships_amount: number
}

export interface ReferencePointsMetadata {
    transport_access: number
    stablishments: number
    business: number
}

export interface Neighborhood {
    id: number
    title: string
    ref_code: string
    type: string
    description: string
    expensas_amount: string
    expensas_date: string
    state: string
    internal_notes: string
    phone: string
    zonificacion: string
    locality_title: string
    meta: Meta
    details: Details
    media: Media
}

export interface Meta {
    dependencies: Dependencies
    requests: Requests
    latest_actions: string[]
    shared_favorites: SharedFavorites
}

export interface Dependencies {
    real_states_amount: number
    entreprenureships_amount: number
}

export interface Requests {
    views: number
    exchange: number
    rating: number
}

export interface SharedFavorites {
    shared: number
    favorites: number
}

export interface Details {
    neighborhood_surface: string
    lots_amount: string
    lots_built_year: number
    available_lots: number
    capital_distance: number
    lots_max_size: number
    lots_min_size: number
    props: Prop[]
    amenidades: Amenidade[]
    services: Service[]
}

export interface Prop {
    id: number
    name: string
}

export interface Amenidade {
    id: number
    name: string
}

export interface Service {
    id: number
    name: string
}

export interface Media {
    video_platform: any
    video_link: string
    front_page: string
    images: Image2[]
    documents: Document[]
}

export interface Image2 {
    id: number
    mimetype: string
    url: string
    front_page: number
}

export interface Document {
    id: number
    name: string
    title: string
}

export interface Price {
    retail: Retail
    anual_rent: AnualRent
}

export interface Retail {
    arg: string
    usd: string
}

export interface AnualRent {
    arg: string
    usd: string
}

export interface Expensas {
    amount_usd: string
    amount_arg: string
    referenceDate: string
}

export interface PriceByTime {
    id: number
    title: string
    price_usd: string
    price_arg: string
}

export interface SurfaceArea {
    land_source: string
    covered_surface: string
    semicovered_surface: string
    age: number
    front: string
    depth: string
    zonification: string
    garage_covered: number
    garage_semicovered: number
    garage_uncovered: number
    property_status: string
    orientation: string
    disposition: string
    rooms: number
    floors: number
    bedroom: number
    bathrooms: number
    en_suite_bathrooms: number
    toilet: number
    basement: number
    spaces: Space[]
}

export interface Space {
    id: number
    name: string
}

export interface Service2 {
    id: number
    name: string
}

export interface Media2 {
    video_url: string
    front_page: string
    gallery: Gallery[]
    documents: Document2[]
}

export interface Gallery {
    id: number
    mimetype: string
    url: string
    front_page: number
}

export interface Document2 {
    id: number
    name: string
    title: string
}
