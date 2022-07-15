import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from 'react-redux';

import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import { faCheck, faXmark, faRotateLeft } from "@fortawesome/free-solid-svg-icons";
// Put the names of icons you want to import in this last import bracket

import "./index.css";
import { App } from "./App";

import { default as store } from './store.js'

library.add(fab, faCheck, faXmark, faRotateLeft); 

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>
);
