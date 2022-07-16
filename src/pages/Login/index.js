
import React, { useState } from "react";

import { useAuthContext } from "/Users/nasiimamohamed/Desktop/auguste/coursework/week_13/client-budfit/budFit----Client/src/auth/index.js";
import { useNavigate } from "react-router-dom";
import jwt_decode from "jwt-decode";



export const Login = () => {
  const { login } = useAuthContext();
  // const navigate = useNavigate();

  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState();
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    setError();
    const value = e.target.value;
    return setFormData((prev) => ({
      ...prev,
      [e.target.name]: value,
    }));
  };

  const formIncomplete = () => {
    Object.values(formData).some((value) => !value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true);
      const loginResult = await login(formData);
      if (loginResult === "Login successful") {
        // navigate("/main");
      } else {
        throw new Error(loginResult);
      }
    } catch (err) {
      setLoading(false);
      setError(err.message);
    }
  };

  return (
    <>
   
        <form aria-label="login-form" id="login_form" onSubmit={handleSubmit}>
        
   
            <h1 id="login-title"> Login Sheet</h1>
          
           
              <label htmlFor="username">Username:</label>
              <input
                id="username"
                className="password-field"
                aria-label="username-field"
                type="text"
                name="username"
                value={formData.username}
                onChange={handleInput}
                placeholder="username"
                required
              />
     
     
       
            <label htmlFor="password">Password:</label>
            <input
              id="password"
              aria-label="password-field"
              type="password"
              name="password"
              value={formData.password}
              onChange={handleInput}
              placeholder="password"
              required
            />
    
   
            <input
              id="submit_btn"
              type="submit"
              disabled={formIncomplete()}
              value="Login"
            />
    
        </form>
   
    </>
  );
};
