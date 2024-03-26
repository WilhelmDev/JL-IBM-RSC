import authRepository from '@/core/infrastructure/repositories/auth.repository'
import { ApiResponse } from '@/core/domain/response';
import { LoginResponse, User, UserLogin } from '@/core/domain/user';
import { toast } from 'react-toastify';

const login = async (userLogin: UserLogin): Promise<ApiResponse<LoginResponse>> => {
    try {
        const response = await authRepository.login(userLogin)
        return response
    } catch (error) {
        console.log('error', error)
        toast.error('un error ha ocurrido')
        return error
    }
}

const myData = async (): Promise<ApiResponse<User>> => {
    try {
        const response = await authRepository.myData()
        return response
    } catch (error) {
        toast.error('un error ha ocurrido')
        return error
    }
}

const logout = async (): Promise<void> => {
    try {
        await authRepository.logout()
    } catch (error) {
        toast.error('un error ha ocurrido')
    }
}

export {
    login,
    myData,
    logout
}