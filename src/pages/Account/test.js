/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Account } from ".";

let mockedAuth = jest.fn();

jest.mock("../../auth/index.js", () => ({
  useAuthContext: () => mockedAuth
}));

describe("Account", () => {
  beforeEach(() => {
    renderWithReduxProviders(<Account />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Loading Account");
    expect(heading).toBeInTheDocument();
  });
});
