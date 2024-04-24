import { ApiResponse } from "@/core/domain/response"
import { ApiInstance } from "../api"
import { Datum, PropertiesResponse } from "@/core/domain/responses/properties"

export const getFavoritesClient = async function (page: string | number) {
  const { data } = await ApiInstance<PropertiesResponse>(`/auth/get-favorites?page=${page}`)
  return data
}

export const getComparisonsClient = async function (page: string | number) {
    const { data } = await ApiInstance<PropertiesResponse>(`/localities?per_page=2&page=${page}`)
return data
}