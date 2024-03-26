interface StepOne {
  tittle: string;
  refCode: string;
  operation: State[];
  description: string;
  type: State;
  expensesDate: Date;
  owner: string;
  phone: string;
  sellPrice: Expenses;
  rentPrice: Expenses;
  internalNotes: string;
  state: State;
  expenses: Expenses;
  periods: Period[];
}

interface Expenses {
  arg: string;
  usd: string;
}

interface State {
  label: string;
  value: string;
}

export interface Period {
  name: string;
  priceArs: string;
  priceUsd: string;
}

interface StepTwo {
  country: Country;
  province: Country;
  partido: Barrio;
  locality: Barrio;
  barrio: Barrio;
  street: string;
  position: Position;
}

interface Barrio {
  label: string;
  value: number;
}

interface Country {
  value: string;
  label: string;
}

interface Position {
  lat: number;
  lng: number;
}

interface StepThree {
  surface: string;
  coveredSurface: string;
  semiCoveredSurface: string;
  antique: string;
  front: string;
  back: string;
  zonification: string;
  coberts: number;
  semiCobert: number;
  uncobert: number;
  state: string;
  orientation: string;
  disposition: string;
  ambient: string;
  plants: string;
  rooms: string;
  baths: string;
  bathSuit: string;
  tollet: string;
  sotano: string;
  spaces: Space[];
}

interface Space {
  label: string;
  value: number;
}

interface StepFour {
  servicesChecked: number[];
  additionalsChecked: number[];
}

interface StepFive {
  photos: string[];
  plantas: Plantas;
  docPlant1: string[];
  docPlant2: string[];
  docPlant3: string[];
  videoData: VideoData;
}

interface Plantas {
  planta1: string;
  planta2: string;
  planta3: string;
}

interface VideoData {
  link: string;
  front: Front;
  portada: Front;
}

interface Front {
  label: string;
  value: string;
}

export interface PropertyForm {
  stepOne: StepOne
  stepTwo: StepTwo
  stepThree: StepThree
  stepFour: StepFour
  stepFive: StepFive
}