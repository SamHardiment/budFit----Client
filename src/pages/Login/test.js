/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Login } from ".";

describe("Login", () => {
  beforeEach(() => {
    renderWithProviders(<Login />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
});
