import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
const Register = () => {

  const [email,setEmail] =  useState("eve.holt@reqres.in");
  const [password,setPassword] = useState("pistol");
  const navigate = useNavigate();
  const [error, setError] = useState(""); 
  const handleRegistration = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch ("https://reqres.in/api/register",{
        method: "POST",
        headers: {"Content-type": "application/json"},
        body: JSON.stringify({email,password}),
      })

      const data = await res.json();
      if(res.ok){
        alert("Registration is done ! Login Now");
        navigate("/")
      }
      else{
        setError(data.error || "Registration Failed");
      }
    } catch (error) {
        setError("Something went wrong");
    }
  }
  return(
    <>
    <h2> Registration </h2>
   
    <form onSubmit={handleRegistration} >
      <input type="text" value={email} name="email" onChange={(e) => setEmail(e.target.value)}  />
      <input type="password" value={password} name="password" onChange={(e) => setPassword(e.target.value)} />
      <button type='submit'>Register</button>
    </form>
    </>
  )
}
export default Register;