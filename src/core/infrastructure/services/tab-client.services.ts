import { LocalitiesResponse } from "@/core/domain/responses/localities"
import { PropertiesResponse } from "@/core/domain/responses/properties"
import { ApiInstance } from "../api"


export const getPropertiesList = async function (page: string | number, search: string, sort_by: string, sort_order: string) {
  const { data } = await ApiInstance(`/real-state?per_page=2&page=${page}&search=${search}&sort_by=${sort_by}&sort_order=${sort_order}`)
  return data as PropertiesResponse
}  

export const getLocalizationsList = async function (page: string | number) {
  const { data } = await ApiInstance(`/localities?per_page=2&page=${page}`)
  return data as LocalitiesResponse
}
