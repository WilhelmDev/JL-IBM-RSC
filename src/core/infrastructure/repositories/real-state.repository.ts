
import axios from "axios"
import { ApiResponse } from "@/core/domain/response";
import { RealStateData, RealStateItem, UserResponseData } from "@/core/domain/real-state";

export const get = async (): Promise<ApiResponse<RealStateData>> => {
    const { data } = await axios.get<ApiResponse<RealStateData>>('/real-state');

    return data;
};

export const getRealStateById = async (id: RealStateItem['id']): Promise<ApiResponse<UserResponseData>> => {
    const { data } = await axios.get<ApiResponse<UserResponseData>>(`/real-state/${id}`);

    return data;
};