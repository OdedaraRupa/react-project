import React, { useContext } from 'react'
import { AuthContext } from '../Context/AuthContext';
import { useNavigate } from "react-router-dom"; 
const Dashboard = () => {
  const {logout} = useContext(AuthContext);
  const navigate = useNavigate()
  const handleLogout = () => {
    logout();
    navigate("/");
  };
  return(
    <>
    <h1> WelCome Dashboard</h1>
    <button onClick={handleLogout}> Logout</button>
    </>
  )
}
export default Dashboard;