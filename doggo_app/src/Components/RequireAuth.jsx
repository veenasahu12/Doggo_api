import React from 'react'
import { Navigate, useLocation } from 'react-router-dom'

const RequireAuth = ({children}) => {
    const isAuth = localStorage.getItem("isAuth") || false
    const location = useLocation()

    console.log("inside login page",location)
    if(!isAuth){
        return <Navigate to="/" state={{from: location}} replace/>
    }
    return children
}

export default RequireAuth;