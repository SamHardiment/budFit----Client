import React from "react";
import * as pages from "./pages";
import { Routes, Route } from "react-router-dom";
import ReactDevicePreview from "react-device-preview";
import { useAuthContext } from "./auth/index.js";

import { NavBar } from "./components";

import "./App.css";

export const App = () => {
  const { user } = useAuthContext();

  return (
    <ReactDevicePreview device="iphonex" scale="1">
      <div id="app">
        <Routes>
          <Route path="/" element={<pages.Landing />} />
          {/* 
        {!user ? (
          <> */}
          <Route path="/Login" element={<pages.Login />} />
          <Route path="/Register" element={<pages.Register />} />
          {/* </>
        ) : (
          <> */}
          <Route path="/Searching" element={<pages.Searching />} />
          <Route path="/Search" element={<pages.Search />} />

          {/* </>
        )} */}

          <Route path="/Account" element={<pages.Account />} />
          <Route path="/Chat" element={<pages.ChatRoom />} />
          <Route path="/Events" element={<pages.UserEvents />} />
          <Route path="/Create" element={<pages.CreateEvent />} />
          <Route path="/Safety" element={<pages.UserSafety />} />
          <Route path="/Success" element={<pages.CreateEventSuccess />} />

          <Route path="*" element={<pages.Error404 />} />
        </Routes>
        <NavBar />
      </div>
    </ReactDevicePreview>
  );
};
