/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { HomeBtns } from ".";

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
    const regbtn = screen.getByTestId("signInBtn");
    await userEvent.click(button);
    expect(regbtn).toBeInTheDocument();
    expect(mockedUsedNavigate).toHaveBeenCalledWith("/Register");
  });
});
