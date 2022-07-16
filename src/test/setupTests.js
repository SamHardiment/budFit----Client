import React from "react";

import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import "@testing-library/jest-dom/extend-expect";
import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import Reducer from "../redux/reducer";

const WrapProviders = ({ children }) => {
  return <MemoryRouter>{children}</MemoryRouter>;
};
const renderWithProviders = (ui1, options1) =>
  render(ui1, { wrapper: WrapProviders, ...options1 });

const reduxProviders = ({ initState }) => {
  initState ||= { searchResults: [] };
  const testStore = createStore(
    () => Reducer(initState, { type: "@@INIT" }),
    applyMiddleware(thunk)
  );

  return ({ children }) => <Provider store={testStore}>{children}</Provider>;
};

const renderWithReduxProviders = (ui, options) =>
  render(ui, { wrapper: reduxProviders, ...options });

global.renderWithProviders = renderWithProviders;
global.renderWithReduxProviders = renderWithReduxProviders;
global.React = React;
global.render = render;
global.userEvent = userEvent;
