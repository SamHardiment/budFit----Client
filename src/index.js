import React from "react";
import ReactDOM from 'react-dom/client';

import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheck } from '@fortawesome/free-solid-svg-icons' 
// Put the names of icons you want to import in this last import bracket

import './index.css';
import { App } from "./App";

library.add(fab, faCheck)

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
