import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";

import { NavBar } from "./components";
import './App.css'

export const App = () => {
  return (
    <div id="app">
      <Routes>
        <Route path="/" element={<pages.Landing />} />
        <Route path="/Login" element={<pages.Login />} />
        <Route path="/Register" element={<pages.Register />} />
        <Route path="/Searching" element={<pages.Searching />} />
        <Route path="/Search" element={<pages.Search />} />
        <Route path="/Account" element={<pages.Account />} />
        <Route path="/Chat" element={<pages.ChatRoom />} />
        <Route path="/Events" element={<pages.CreateEvent />} />
      </Routes>
      <NavBar />
    </div>
  );
};
