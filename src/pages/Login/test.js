/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Login } from ".";

let mockedAuth = jest.fn();

jest.mock("../../auth/index.js", () => ({
  useAuthContext: () => mockedAuth
}));

describe("Login", () => {
  beforeEach(() => {
    renderWithReduxProviders(<Login />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Login");
    expect(heading).toBeInTheDocument();
  });
});
