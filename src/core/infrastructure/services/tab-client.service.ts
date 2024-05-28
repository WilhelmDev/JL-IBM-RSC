import { ApiResponse } from "@/core/domain/response"
import { ApiInstance } from "../api"
import { Datum, PropertiesResponse } from "@/core/domain/responses/properties"
import { Datum as Entrepreneurship } from "@/core/domain/responses/entreprenureships"
import { Datum as Entrepreneurship } from "@/core/domain/responses/entreprenureships"
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

export const getEntrepreneurship = async function (id: number): Promise<Entrepreneurship> {
  const { data } = await ApiInstance(`/entreprenureships/${id}`)
  return data.data
}

export const addFavorite = async function (type: string, id: number) {
  const { data } = await ApiInstance.post(`/auth/toggle-favorite`, {
    type,
    id
  })
  return data
}

export const getNeighborhood = async function (id: number) {
  const { data } = await ApiInstance(`/neighborhood/${id}`)
  return data.data
}

export const getLocality = async function (id: number) {
  const { data } = await ApiInstance(`/localities/${id}`)
  return data.data
}

export const getNeighborhoods = async function (perPage: number, page: number, sortBy: string, sortOrder: string) {
  const { data } = await ApiInstance(`/neighborhood?per_page=${perPage}&page=${page}&sort_by=${sortBy}&sort_order=${sortOrder}`)
  return data.data
}

export const getEntrepreneurships = async function (perPage: number, page: number, sortBy: string, sortOrder: string) {
  const { data } = await ApiInstance(`/entreprenureships?per_page=${perPage}&page=${page}&sort_by=${sortBy}&sort_order=${sortOrder}`)
  return data.data
}

export const getRealStates = async function (perPage: number, page: number) {
  const { data } = await ApiInstance(`/real-state?per_page=${perPage}&page=${page}`)
  return data.data
}

export const getLocalitiesElementsLocations = async function (id: number) {
  const { data } = await ApiInstance(`/localities/${id}/locations`)
  return data
}