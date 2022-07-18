/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import { UserEvents } from ".";

const mockedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("UserEvents", () => {
  beforeEach(() => {
    renderWithProviders(<UserEvents />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Joined Events: 0");
    expect(heading).toBeInTheDocument();
  });

  it("New event link works", () => {
    fireEvent(
      screen.getByTestId("newBtn"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })

  it("New event link works", () => {
    fireEvent(
      screen.getByTestId("warnBtn"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
});
