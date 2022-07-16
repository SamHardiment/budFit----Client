/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Landing } from ".";

describe("Landing", () => {
  beforeEach(() => {
    renderWithProviders(<Landing />);
  });

  it("verify page content for default route", () => {
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  it("verify page content for default route", () => {
    const registerBtn = screen.getByRole("button", { name: "Register" });
    expect(registerBtn).toBeInTheDocument();
  });
});
