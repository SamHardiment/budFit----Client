/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import { AccountSetup } from ".";

let mockedAuth = jest.fn();
jest.mock("../../auth/index.js", () => ({
  useAuthContext: () => mockedAuth
}));

const mockedGet = jest.fn()
jest.mock("axios", () => ({
  get: () => mockedGet,
}));

const mockedNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
}));

describe("Account", () => {
  beforeEach(() => {
    renderWithReduxProviders(<AccountSetup />);
  });

  it("Expect there to be a header on the page", () => {
    fireEvent(
      screen.getByTestId("saveBtn"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    const heading = screen.getByText("Account Setup");
    expect(heading).toBeInTheDocument();
  });
});
