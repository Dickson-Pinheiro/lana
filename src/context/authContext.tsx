import {ReactNode, createContext, useEffect, useState} from 'react'
import { ISignInUser, LoginResponse } from '../types/auth'
import { useLogin } from '../hooks/useLogin'
import { api } from '../services/api'
import { toast } from 'react-toastify'
import { AxiosError } from 'axios'

interface PropsAuthContext {
    user?: LoginResponse | undefined,
    signed?: boolean,
    isLoading?: boolean,
    isLoginError?: boolean
    signIn?: (data: ISignInUser) => void
    logout?: () => void
}

interface PropsAuthContextProvider {
    children: ReactNode
}

export const authContext = createContext<PropsAuthContext>({})

export function AuthContextProvider({ children }: PropsAuthContextProvider){
    const [user, setUser] = useState<LoginResponse>()
    const [signed,setSigned] = useState<boolean>(true)
    const { mutate, error, isError, data, isSuccess, isLoading } = useLogin()

    function signIn(data: ISignInUser){
        console.log("chamou")
        mutate(data)
    }
    
    function logout(){
        console.log('logout')
        localStorage.removeItem('user')
        localStorage.removeItem('token')
        setSigned(false)
    }

    useEffect(() => {
        function loadStorageData(){
            const storageUser = localStorage.getItem('user')
            const storageToken = localStorage.getItem('token')
            if(storageToken && storageUser){
                setSigned(true)
                api.defaults.headers.common['Authorization'] = `Bearer ${storageToken}`
                setUser(JSON.parse(storageUser))
            } else {
                setUser(undefined)
                setSigned(false)
            }
        }
        loadStorageData()
    }, [])

    useEffect(() => {
        if(isError){
            const axiosError = error as AxiosError<{message: string}>
            toast(axiosError?.response?.data?.message)
        }
        if(isSuccess){
            console.log("isSuccess is true")
            setUser(data.data)
            setSigned(true)
            api.defaults.headers.common['Authorization'] = `Bearer ${data.data.token}`
        }
    }, [isError, isSuccess])

    return(
        <authContext.Provider value={{
            user,
            signed,
            signIn,
            isLoading,
            logout,
            isLoginError: isError
        }}>
            {children}
        </authContext.Provider>
    )
}