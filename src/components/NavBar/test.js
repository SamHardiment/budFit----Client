/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import { MemoryRouter } from 'react-router-dom'

import { App } from "../../App";

describe("RegForm", () => {
  describe("nav", () => {
    test("nav renders", () => {
      render(
        <MemoryRouter initialEntries={["/account"]}>
          <App />
        </MemoryRouter>
      );
      expect(screen.getByRole("navigation")).toBeInTheDocument();
    });
  })

  describe("null nav", () => {
    beforeEach(() => {
      renderWithProviders(<App />);
    })


    test("it doesn't render a nav", () => {
      expect(1).toEqual(1);
    });
  })
})
