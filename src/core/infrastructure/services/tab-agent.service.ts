
import { PropertyForm } from "@/core/domain/form"
import { ApiInstance } from "../api"
import { Amenities } from "@/core/domain/responses"
import { parseAditionals, parseAmenities, parseEntrepreneurship, parseLocalities, parseLocation, parseNeighborhood, parsePeriodsForm, parseProperty, parseServices } from "@/utilis/parsers"
import { PeriodsResponse, PropertyPayload } from "@/core/domain/parsed"
import { Datum as Locality, LocalitiesResponse } from "@/core/domain/responses/localities"
import { PropertiesResponse } from "@/core/domain/responses/properties"
import { EntreprenureshipsResponse } from "@/core/domain/responses/entreprenureships"
import { NeighborhoodResponse } from "@/core/domain/responses/neighborhood"

export const sendFormLocation = async (data: any) => {
  const parsed = parseLocation(data)
  try {
    await ApiInstance.post('/localities', parsed)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const updateLocation = async (data: any, id: string) => {
  const parsed = parseLocation(data)
  try {
    await ApiInstance.patch(`/localities/${id}`, parsed)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const sendNeighborhoodForm = async (data: any) => {
  const parsed = parseNeighborhood(data)
  try {
    await ApiInstance.post('/neighborhood', parsed)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const sendEntrepreneurshipForm = async (data: any) => {
  const parsed = parseEntrepreneurship(data)
  try {
    await ApiInstance.post('/entreprenureships', parsed)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const sendPropertyForm = async (data: PropertyForm) => {
  let parsed = parseProperty(data)
  try {
    if (parsed.periods.data.length > 0) {
      const { data } = await ApiInstance.post('/price-by-time', parsed.periods)
      const parsedPeriods = parsePeriodsForm(data as PeriodsResponse)
      parsed = {
        ...parsed,
        price_by_times: parsedPeriods
      } as PropertyPayload
    }
    await ApiInstance.post('/real-state', parsed as PropertyPayload)
  } catch (error) {
    console.log(error)
    throw error
  }
}

export const getAminities = async function () {
  const { data } = await ApiInstance('/amenidades')
  const parsed = parseAmenities(data as Amenities)
  return parsed
}

export const getPartidos = async function () {
  const { data } = await ApiInstance('/partidos')
  const parsed = parseAmenities(data)
  return parsed
}

export const getProps = async function () {
  const { data } = await ApiInstance('/props')
  const parsed = parseAmenities(data)
  return parsed
}

export const getServices = async function () {
  const { data } = await ApiInstance('/services')
  const parsed = parseServices(data.data.services)
  return parsed
}

export const getAllServices = async function () {
  const { data } = await ApiInstance('/services')
  const services = parseServices(data.data.services)
  const additionals = parseAditionals(data.data.additional)
  return {
    services,
    additionals
  }
}

export const getSpaces = async function () {
  const { data } = await ApiInstance('/space-areas')
  const parsed = parseServices(data.data)
  return parsed
}

export const getOperations = async function () {
  const { data } = await ApiInstance('/operations')
  const parsed = parseServices(data.data)
  return parsed
}

export const getLocalizations = async function () {
  const { data } = await ApiInstance('/localities?per_page=15')
  const parsed = parseLocalities(data.data)
  return parsed
}

export const getLocalizationsList = async function (page: string | number, search: string, sort_by: string, sort_order: string) {
  const { data } = await ApiInstance(`/localities?per_page=2&page=${page}&search=${search}&sort_by=${sort_by}&sort_order=${sort_order}`)
  return data as LocalitiesResponse
}

export const getNeighborhoods = async function () {
  const { data } = await ApiInstance('/neighborhood')
  const parsed = parseLocalities(data.data)
  return parsed
}

export const getPropertiesList = async function (page: string | number, search: string, sort_by: string, sort_order: string) {
  const { data } = await ApiInstance(`/real-state?per_page=2&page=${page}&search=${search}&sort_by=${sort_by}&sort_order=${sort_order}`)
  return data as PropertiesResponse
}  

export const getEntrepreneurshipsList = async function (page: string | number, search: string, sort_by: string, sort_order: string) {
  const { data } = await ApiInstance(`/entreprenureships?per_page=2&page=${page}&search=${search}&sort_by=${sort_by}&sort_order=${sort_order}`)
  return data as EntreprenureshipsResponse
}

export const getNeighborhoodsList = async function (page: string | number, search: string, sort_by: string, sort_order: string) {
  const { data } = await ApiInstance(`/neighborhood?per_page=2&page=${page}&search=${search}&sort_by=${sort_by}&sort_order=${sort_order}`)
  return data as NeighborhoodResponse
} 

export const getLocationId = async function (id: number) {
  const { data } = await ApiInstance(`/localities/${id}`)
  return data
}

export const getLocalitiesElementsLocations = async function (id: number) {
  const { data } = await ApiInstance(`/localities/${id}/locations`)
  return data
}  

export const getLocality = async function (id: string) {
  const { data } = await ApiInstance(`/localities/${id}`)
  return data.data as Locality
}

export const getImage = async function (url: string){
  const response = await ApiInstance(url, { responseType: 'arraybuffer' })
  return response
}