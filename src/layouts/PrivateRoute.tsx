import {Outlet, Navigate} from 'react-router-dom'
import {useContext} from 'react'
import { authContext } from '../context/authContext'

export default function PrivateRoute(){
    const { signed } = useContext(authContext)

    return(
        <>
        {signed ? <Outlet /> : <Navigate to="/"/>}
        </>
    )
}