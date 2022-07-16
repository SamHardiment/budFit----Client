import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";
import { useAuthContext } from "./auth/index.js"


import './App.css'

export const App = () => {
  const { user } = useAuthContext();

  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<pages.Landing />} />

        {!user ? (
          <>
        <Route path="/Login" element={<pages.Login />} />
        <Route path="/Register" element={<pages.Register />} />
        </>
        ) : (
          <>
        <Route path="/Searching" element={<pages.Searching />} />
        <Route path="/Search" element={<pages.Search />} />
        </>
        )}

      </Routes>
    </div>
  );
};
