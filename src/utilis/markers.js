import L from 'leaflet'

export const Locations = L.icon({
  iconUrl: '/images/map/markers/location.svg',
  iconSize: [60,60],
  iconAnchor: [32, 64],
  popupAnchor: [0, -55]
});

export const Others = L.icon({
  iconUrl: '/images/map/markers/others.svg',
  iconSize: [40,40],
  iconAnchor: [32, 64],
  popupAnchor: [-10, -55]
});

export const Neighborhood = L.icon({
  iconUrl: '/images/map/markers/neighborhood.svg',
  iconSize: [60,60],
  iconAnchor: [32, 64],
  popupAnchor: [0, -55]
});

export const Entrepreneurship = L.icon({
  iconUrl: '/images/map/markers/entrepreneurship.svg',
  iconSize: [60,60],
  iconAnchor: [32, 64],
  popupAnchor: [0, -55]
});

export const Property = L.icon({
  iconUrl: '/images/map/markers/propertys.svg',
  iconSize: [80,80],
  iconAnchor: [32, 64],
  popupAnchor: [10, -55]
});

export const idGenerator = function () {
  const id = Math.random().toString(36).substring(2, 11)
  const date = Date.now().toString(36)
  return id + date
}