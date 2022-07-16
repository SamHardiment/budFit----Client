import React, { useState, useContext } from "react";

import jwt_decode from "jwt-decode";
import axios from "axios";

const AuthContext = React.createContext();

export const useAuthContext = () => useContext(AuthContext);

const API_URL = "https://budfit.herokuapp.com"


export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(getCurrentUser());

  function getCurrentUser() {
    const token = localStorage.getItem("token");
    if (token) {
      return jwt_decode(token).sub;
    }
    return null;
  }

  const login = async (userData) => {
      try {
        const options = {
          headers: {
            "Content-Type": "application/json"
          },
        };

        const { data } = await axios.post(
          `${API_URL}/auth/login`,
          userData,
          options
        );

        if (data.success) {
          console.log("Success!");
        } else {
          throw new Error("Login not authorised");
        }

        loginUser(data.token);
        return "Login successful"
      } catch (err) {
        return err.message
      }
  };

  const register = async (userData) => {
    try {
      const options = {
        headers: { "Content-Type": "application/json" }
      };

      const { data } = await axios.post(
        `${API_URL}/auth/register`,
        userData,
        options
      );
      if (data.err) {
        throw Error(data.err);
      }
      await login(userData);
      return "Registration successful";
    } catch (err) {
      return err.message;
    }
  };

  const loginUser = (token) => {
    localStorage.setItem("token", token);
    const user = jwt_decode(token);
    setUser(user.sub);
  };

  const logout = () => {
    localStorage.clear();
    setUser(null);
  };

  const auth = { login, user, logout, setUser, register, getCurrentUser };

  return (
    <>
      <AuthContext.Provider value={auth}>{children}</AuthContext.Provider>
    </>
  );
};