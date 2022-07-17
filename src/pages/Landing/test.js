/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Landing } from ".";

describe("Landing", () => {
  beforeEach(() => {
    renderWithProviders(<Landing />);
  });

  it("Login Button exists", () => {
    const loginBtn = screen.getByRole("button", { name: "Login" });
    expect(loginBtn).toBeInTheDocument();
  });

  it("Register Button exists", () => {
    const registerBtn = screen.getByRole("button", { name: "Register" });
    expect(registerBtn).toBeInTheDocument();
  });
});
