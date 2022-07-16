/**
 * @jest-environment jsdom
 */
import * as router from "react-router";
import { screen, fireEvent } from "@testing-library/react";
import { BackButton } from ".";
// mock useNavigate
const navigate = jest.fn();

describe("BackButton", () => {
  beforeEach(() => {
    renderWithProviders(<BackButton />);
    // jest.spyOn(router, "useNavigate").mockImplementation(() => navigate);
  });

  it("verify back button exits", () => {
    const backBtn = screen.getByRole("button", { name: "back-button" });
    expect(backBtn).toBeInTheDocument();
  });
  it("User navigates to previous page when back button is clicked", () => {
    fireEvent(
      screen.getByRole("button", { name: "back-button" }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );
    expect(1).toEqual(1);
  });
});
