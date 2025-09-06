import client from "../api/client"
import { login as loginApi } from "../api/users.api"
import { clearUserData, setUserData as setUserDataAction, type UserDataState } from "../slices/userData"
import { useAppDispatch, useAppSelector } from "./redux"

export const useUser = () => {
    const userData = useAppSelector(state => {
        return state.userData.userData
    })
    const dispatch = useAppDispatch()

    const login = async (email: string, password: string) => {
        const userData = await loginApi(email, password)
        console.log('userData', userData)
        setUserData(userData)
    }

    const logout = () => {
        client.defaults.headers.common['Authorization'] = undefined
        dispatch(clearUserData())
        localStorage.removeItem('userData')
    }

    const setUserData = (userData: UserDataState['userData']) => {
        client.defaults.headers.common['Authorization'] = `Bearer ${userData?.token}`
        localStorage.setItem('userData', JSON.stringify(userData))
        dispatch(setUserDataAction({ userData }))
    }

    return {
        login,
        userData,
        setUserData,
        logout
    }
}