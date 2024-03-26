export interface StepOne {
  title: string;
  refCode: string;
  type: State;
  description: string;
  expenses: string;
  expensesDate: Date;
  state: State;
  notes: string;
  phone: string;
  zonification: string;
}

export interface State {
  label: string;
  value: string;
}

export interface StepTwo {
  country: Barrio;
  province: Barrio;
  partido: Locality;
  locality: Locality;
  barrio: Barrio;
  street: string;
  position: number[];
}

export interface Barrio {
  label: string;
  value: string;
}

export interface Locality {
  label: string;
  value: number;
}

export interface StepThree {
  surface: string;
  lotes: string;
  lotesConst: string;
  available: string;
  capDistance: string;
  maxSize: string;
  minSize: string;
  propsChecked: number[];
  amenitiesChecked: number[];
  servicesChecked: number[];
}

export interface StepFour {
  photos: string[];
  airDoc: any[];
  logoDoc: any[];
  rulesDoc: any[];
  videoData: VideoData;
}

export interface VideoData {
  link: string;
  portada: Portada;
  front: Front;
}

export interface Front {
  label: string;
  value: string;
}

export interface Portada {
  label: number;
  value: number;
}

export interface NeighborhoodForm {
  stepOne: StepOne
  stepTwo: StepTwo
  stepThree: StepThree
  stepFour: StepFour
}