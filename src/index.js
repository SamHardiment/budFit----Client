import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { AuthProvider } from "./auth/index.js";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab } from "@fortawesome/free-brands-svg-icons";
import {
  faCheck,
  faPlus,
  faXmark,
  faRotateLeft,
  faAngleLeft,
} from "@fortawesome/free-solid-svg-icons";
// Put the names of icons you want to import in this last import bracket

import "./index.css";
import { App } from "./App";

import { default as store } from "./store.js";

library.add(fab, faCheck, faPlus, faXmark, faRotateLeft, faAngleLeft);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <BrowserRouter>
    <AuthProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AuthProvider>
  </BrowserRouter>
);
