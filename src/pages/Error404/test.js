/**
 * @jest-environment jsdom
 */

import { fireEvent, screen } from "@testing-library/react";

import { Error404 } from "../";

const mockedUserValue = jest.fn()
const mockedNavigate = jest.fn()

jest.mock("../../auth/index.js", () => ({
  useAuthContext: () => ({ user: mockedUserValue() }),
}));

jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("Error404", () => {

  beforeEach(() => {
    renderWithProviders(<Error404 />);
  });

  it("Renders with user:true", () => {
    mockedUserValue.mockImplementation(() => true)

    
    const heading = screen.getByText("Oops, you're lost.");
    expect(heading).toBeInTheDocument();
  });
  
  it("Renders with user:false", () => {
    mockedUserValue.mockImplementation(() => false)
    
    fireEvent(
      screen.getByText("return to the search page"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    const heading = screen.getByText("Oops, you're lost.");
    expect(heading).toBeInTheDocument();
    expect(mockedNavigate).toHaveBeenCalled()
  });

  it("Landing page link works", () => {
    mockedUserValue.mockImplementation(() => true)

    fireEvent(
      screen.getByText("register or log in"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(mockedNavigate).toHaveBeenCalled()
  })
});
