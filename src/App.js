import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";
export const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<pages.Landing />} />
        <Route path="/Login" element={<pages.Login />} />
        <Route path="/Register" element={<pages.Register />} />
      </Routes>
    </div>
  );
};
