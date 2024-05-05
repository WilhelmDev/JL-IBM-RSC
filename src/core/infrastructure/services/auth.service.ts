import authRepository from '@/core/infrastructure/repositories/auth.repository'
import { ApiResponse } from '@/core/domain/response';
import { ResponseLogin, User, UserLogin } from '@/core/domain/user';
import { toast } from 'react-toastify';
import { ApiInstance } from '../api';

const login = async (userLogin: UserLogin): Promise<ApiResponse<ResponseLogin>> => {
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
        throw error
    }
}

const loginV2 = async (data: UserLogin) => {
    try {
        toast.dismiss('invalid-form-login')
        const response = await ApiInstance.post<Promise<ApiResponse<ResponseLogin>>>('/auth/login', data)
        return response.data
    } catch (error) {
        toast.error('Credenciales inválidas', {
            toastId: 'invalid-form-login',
            closeOnClick: true
        })
        console.log(error)
    }
}
export {
    login,
    myData,
    logout,
    loginV2
}