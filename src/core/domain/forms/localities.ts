export interface StepOne {
  title: string;
  position: number[];
  partido: Partido;
}

export interface Partido {
  label: string;
  value: number;
}

export interface StepTwo {
  references: Reference[];
}

export interface Reference {
  id: string;
  name: string;
  description: string;
  ubication: Ubication;
  logo: string;
  type: string;
  link: string;
}

export interface Ubication {
  id: string;
  position: number[];
}

export interface StepThree {
  photos: Photos;
  videos: Videos;
}

export interface Photos {
  uploadedImages: string[];
}

export interface Videos {
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


export interface LocalityForm {
  stepOne: StepOne
  stepTwo: StepTwo
  stepThree: StepThree
}