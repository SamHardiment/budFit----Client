/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";

import { MemoryRouter } from "react-router-dom";
import { Provider } from "react-redux";

import { AuthProvider } from "../../auth";
import { default as store } from "../../store";

import { Register } from ".";

describe("Register", () => {
  beforeEach(() => {
    render(
      <MemoryRouter>
        <AuthProvider>
          <Provider store={store}>
            <Register />
          </Provider>
        </AuthProvider>
      </MemoryRouter>
    );
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Register an account");
    expect(heading).toBeInTheDocument();
  });
  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Please fill in your details below");
    expect(heading).toBeInTheDocument();
  });
});
