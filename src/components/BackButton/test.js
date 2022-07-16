/**
 * @jest-environment jsdom
 */
import * as router from "react-router";
import { screen } from "@testing-library/react";
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
    const backBtn = screen.getByRole("button", { name: "back-button" });
    userEvent.click(backBtn);
    expect(navigate).toHaveBeenCalledTimes(1);
  });
});
