/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import { CreateEvent } from ".";

const mockedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("CreateEvent", () => {
  beforeEach(() => {
    renderWithProviders(<CreateEvent />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("New Event");
    expect(heading).toBeInTheDocument();
  });

  it("New event link works", () => {
    fireEvent(
      screen.getByTestId("postBtn"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
});
