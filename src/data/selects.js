export const Countries = [
  { value: 'Agertina', label: 'Argentina' }
]

export const Provincies = [
  { value: 'Buenos Aires', label: 'Buenos Aires' }
]

const transports = [
  {
    label: 'Trenes', value: 'trains'
  },
  {
    label: 'Colectivo', value: 'bus'
  },
  {
    label: 'Principales accesos', value: 'access'
  },
]

const locals = [
  {
    label: 'Municipalidad', value: 'municipy'
  },
  {
    label: 'Escuelas', value: 'school'
  },
  {
    label: 'Hospitales', value: 'hospital'
  },
  {
    label: 'Comisarias', value: 'comisaries'
  },
  {
    label: 'Obra social', value: 'social'
  },
  {
    label: 'Bancos', value: 'bank'
  },
]

const stores = [
  {
    label: 'Comercios de confianza', value: 'store-friend'
  },
  {
    label: 'Estacion de servicio', value: 'service-station'
  },
  {
    label: 'Club', value: 'club'
  },
]

export const Types = [
  {
    label: 'Transporte y accesos',
    options: transports
  },
  {
    label: 'Establecimientos',
    options: locals
  },
  {
    label: 'Comercios Amigos',
    options: stores
  },
]

export const NeighborhoodTypes = [
  {
    label: 'Barrio Privado',
    value: 'Barrio Privado'
  },
  {
    label: 'Barrio Abierto',
    value: 'Barrio Abierto'
  },
  {
    label: 'Barrio Semi Cerrado',
    value: 'Barrio Semi Cerrado'
  },
  {
    label: 'Country Club',
    value: 'Country Club'
  },
]

export const NeighborhoodState = [
  {
    label: 'Publicado',
    value: 'Publicado'
  },
  {
    label: 'Borrador',
    value: 'Borrador'
  },
  {
    label: 'Vendido',
    value: 'Vendido'
  },
]

export const NeighborhoodTypes2 = [
  {
    label: 'Barrio',
    value: 'Neighborhood'
  },
  {
    label: 'Countrie',
    value: 'Country'
  },
]

export const ParkingTypes = [
  {
    label: 'Cubiertos',
    options: [{
      label: 'Especifica el numero de estacionamientos',
      value: '',
      isDisabled: true
    }]
  },
]

export const badgeStyles = {
  backgroundColor: '#EBECF0',
  borderRadius: '2em',
  color: '#172B4D',
  display: 'inline-block',
  fontSize: 12,
  fontWeight: 'normal',
  lineHeight: '1',
  minWidth: 1,
  padding: '0.16666666666667em 0.5em',
  textAlign: 'center',
};

const groupStyles = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
};

export const customLabels = (data) => (
  <div style={groupStyles}>
    <span>{data.label}</span>
    <span style={badgeStyles}>{data.options.length}</span>
  </div>
);

export const FrontOptions = [
  {
    label: 'Youtube',
    value: 'Youtube'
  },
  {
    label: 'Vimeo',
    value: 'Vimeo'
  },
  {
    label: 'Tik Tok',
    value: 'Tik Tok'
  },
  {
    label: 'Facebook',
    value: 'Facebook'
  },
]

export const OperationOptions = [
  {
    label: 'Venta',
    value: 'Sale'
  },
  {
    label: 'Alquiler',
    value: 'Rent'
  },
  {
    label: 'Alquiler Temporal',
    value: 'TemporaryRent'
  },
]

export const PropertyStatus = [
  {
    label: 'Publicada',
    value: 'Publicada'
  },
  {
    label: 'Alquilada',
    value: 'Alquilada'
  },
  {
    label: 'Vendida',
    value: 'Vendida'
  },
  {
    label: 'No Publicada',
    value: 'No Publicada'
  }
]

export const PropertyTypes = [
  {
    label: 'Casa',
    value: 'House'
  },
  {
    label: 'Campo',
    value: 'Campo'
  },
  {
    label: 'Departamento',
    value: 'Apartment'
  },
  {
    label: 'Depósito',
    value: 'lot'
  },
  {
    label: 'Fondo de comercio',
    value: 'Fonde de comercio'
  },
  {
    label: 'Nave Industrial',
    value: 'Nave Industrial'
  },
  {
    label: 'Local',
    value: 'Business'
  },
  {
    label: 'Oficina',
    value: 'Office'
  },
  {
    label: 'Quinta',
    value: 'Quinta'
  },
  {
    label: 'Terreno',
    value: 'Land'
  },
]

export const Statusv2 = [
  {
    label: 'Publicado',
    value: 'Publico'
  },
  {
    label: 'Borrador',
    value: 'Borrador'
  },
  {
    label: 'Vendido',
    value: 'Vendido'
  },
]