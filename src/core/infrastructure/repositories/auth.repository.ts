import axios from "@/core/infrastructure/api"
import { ApiResponse } from "@/core/domain/response"
import { LoginResponse, User, UserLogin } from "@/core/domain/user"

const login = async (userLogin: UserLogin): Promise<ApiResponse<LoginResponse>> => {
    const { data } = await axios.post<ApiResponse<LoginResponse>>('/auth/login', {
        email: userLogin.email,
        password: userLogin.password
    })

    return data
}

const myData = async (): Promise<ApiResponse<User>> => {
    const { data } = await axios.get<ApiResponse<User>>(`/auth/me`);

    return data;
};

const logout = async (): Promise<void> => {
    await axios.post('/auth/logout');
};

export default {
    login,
    myData,
    logout
} as const

