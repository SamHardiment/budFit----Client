import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";

import { useAuthContext } from "./auth/index.js";

import { NavBar } from "./components";

import "./App.css";

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
            <Route path="/Account" element={<pages.Account />} />
            <Route path="/Chat" element={<pages.ChatRoom />} />
            <Route path="/Events" element={<pages.UserEvents />} />
            <Route path="/Create" element={<pages.CreateEvent />} />
            <Route path="/Safety" element={<pages.UserSafety />} />
            <Route path="/Success" element={<pages.CreateEventSuccess />} />
            <Route path="/u/:id" element={<pages.UserDetails />} />

            <Route path="*" element={<pages.Error404 />} />
          </>
        )}
      </Routes>
    </div>
  );
};
