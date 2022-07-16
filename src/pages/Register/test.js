/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Register } from ".";

describe("Register", () => {
  beforeEach(() => {
    renderWithProviders(<Register />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Register your account");
    expect(heading).toBeInTheDocument();
  });
  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Please fill in your details below");
    expect(heading).toBeInTheDocument();
  });
});
