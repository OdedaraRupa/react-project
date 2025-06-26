import React, { useContext, useState } from "react";
import { Validation } from "../utils/Validation";
import { AuthContext } from "../Context/AuthContext";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [serverError, setServerError] = useState("");
  const [error, setError] = useState({});
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = Validation(formData);
    if (Object.keys(validationErrors).length > 0) {
      setError(validationErrors);
      return;
    }
    setIsSubmitting(true);
    setServerError("");

    try {
      const res = await fetch("https://reqres.in/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
           "x-api-key": "reqres-free-v1",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      }).then(response => {
        if(response.ok){
          throw new Error('Login Failed' + response.status);
        }
        return response.json();
      })
      .then(data => console.log('Login Successful',data))
    } catch (error) {
      setServerError("Something Went Wrong");
    } finally {
      setIsSubmitting(false);
    }
  };
  return (
    <>
      <h2> Login</h2>
      {serverError && <p style={{ color: "red" }}>{serverError}</p>}

      <form onSubmit={handleSubmit}>
        <div className="input-container">
          <label>Email:</label>
          <input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
          ></input>
          {error.email && <span style={{ color: "red" }}>{error.email}</span>}
        </div>
        <di className="input-container">
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          ></input>
          {error.password && (
            <span style={{ color: "red" }}>{error.password}</span>
          )}
        </di>
        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Logged in.." : "Login"}
        </button>
      </form>
    </>
  );
};
export default Login;
