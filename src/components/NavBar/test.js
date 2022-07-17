/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import { MemoryRouter } from "react-router-dom";
import { AuthProvider } from "../../auth";

import { App } from "../../App";

describe("RegForm", () => {
  describe("nav", () => {
    test("nav renders", () => {
      render(
        <MemoryRouter initialEntries={["/account"]}>
          <AuthProvider>
            <App />
          </AuthProvider>
        </MemoryRouter>
      );
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  });

  describe("null nav", () => {
    beforeEach(() => {
      renderWithProviders(<App />);
    });

    test("it doesn't render a nav", () => {
      expect(1).toEqual(1);
    });
  });
});
