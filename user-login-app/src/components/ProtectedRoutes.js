import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { Navigate } from "react-router-dom";
const ProtectedRoutes = ({children}) => {
  const {isLoggedIn} = useContext(AuthContext)
  return isLoggedIn ? children : <Navigate to="/"> </Navigate>
}

export default ProtectedRoutes;