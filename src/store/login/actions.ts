import { createAsyncThunk } from "@reduxjs/toolkit";
import { axiosInstans } from "../../api";
type Login = {
    navigate: (path: string) => void
    username: string,
    password: string
}
export const registerAction = createAsyncThunk<undefined, Login, {rejectValue: string}>(
    'login/registerAction',
    async ({navigate, ...data}, thunkAPI) => {
        try {
            const response = await axiosInstans.post('register/', data)
            navigate('/')
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при регистрации!')
        }
    }
)

export const loginAction = createAsyncThunk<undefined, Login, {rejectValue: string}>(
    'login/loginAction',
    async ({navigate, ...data}, thunkAPI) => {
        try {
            
            const response = await axiosInstans.post('login/', data )
            navigate('/')
            localStorage.setItem('token', response.data.token)
            return response.data
        } catch (e) {
            return thunkAPI.rejectWithValue('Произошла ошибка при авторизации!')
        }
    }
)