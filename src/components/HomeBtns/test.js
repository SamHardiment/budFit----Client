/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import HomeBtns from ".";

const mockedUsedNavigate = jest.fn();
jest.mock("react-router-dom", () => ({
  ...jest.requireActual("react-router-dom"),
  useNavigate: () => mockedUsedNavigate,
}));

describe("HomeBtns", () => {
  beforeEach(() => {
    renderWithProviders(<HomeBtns />);
  });

  it("User navigates to register page when register button is clicked", async () => {
    const regbtn = screen.getByRole("button", { name: "Register" });
    await userEvent.click(regbtn);
    expect(regbtn).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/register");
  });

  it("User navigates to register page when register button is clicked", async () => {
    const logbtn = screen.getByRole("button", { name: "Login" });
    await userEvent.click(logbtn);
    expect(logbtn).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledTimes(1);
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/login");
  });
});
