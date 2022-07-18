/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import { default as CreateEventSuccess } from ".";

const mockedNavigate = jest.fn()

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("CreateEventSucces", () => {
  beforeEach(() => {
    renderWithProviders(<CreateEventSuccess />);
  });

  it("Renders success message on page", () => {
    const heading = screen.getByText("Event successfully created!");
    expect(heading).toBeInTheDocument();
  });

  it("New event link works", () => {
    fireEvent(
      screen.getByText("Create another event"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
  
  it("New event link works", () => {
    fireEvent(
      screen.getByText("Search for events to join"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
  
  it("New event link works", () => {
    fireEvent(
      screen.getByText("View your chats"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
});
