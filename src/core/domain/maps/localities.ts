export interface Localities {
    real_states: RealState[]
    neighborhood: Neighborhood[]
    entrepreneurship: any[]
}

export interface RealState {
    id: number
    title: string
    ref_code: string
    lat: string
    long: string
    type: string
}

export interface Neighborhood {
    id: number
    title: string
    ref_code: string
    lat: string
    long: string
    type: string
}
