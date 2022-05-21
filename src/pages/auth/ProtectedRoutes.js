import React, { useEffect, useState } from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoutes = () => {
    const [auth,setAuth] = useState(localStorage.getItem('auth'));
    
    useEffect(() => {
        setAuth(localStorage.getItem('auth'));
    },[auth])
   
    return auth ? <><Outlet /></> : <Navigate to="/login" />; 

  
}

export default ProtectedRoutes