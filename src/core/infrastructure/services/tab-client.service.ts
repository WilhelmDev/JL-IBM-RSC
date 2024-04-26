import { ApiResponse } from "@/core/domain/response"
import { ApiInstance } from "../api"
import { Datum, PropertiesResponse } from "@/core/domain/responses/properties"
import { Search } from "@/core/domain/search"

export const getFavoritesClient = async function (page: string | number) {
  const { data } = await ApiInstance<PropertiesResponse>(`/auth/get-favorites?page=${page}`)
  return data
}

export const getComparisonsClient = async function (page: string | number) {
    const { data } = await ApiInstance<PropertiesResponse>(`/auth/comparisons?per_page=15&page=${page}`)
return data
}

export const getSearchClient = async function (page: string | number) {
  const { data } = await ApiInstance<Search>(`/auth/search?page=1`)
  return data
}