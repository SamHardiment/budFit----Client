/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { App } from "./App.js";

describe("App", () => {
  beforeEach(() => {
    renderWithProviders(<App />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("budFit");
    expect(heading).toBeInTheDocument();
  });
});
