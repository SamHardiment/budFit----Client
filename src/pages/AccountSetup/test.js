/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { AccountSetup } from ".";

let mockedAuth = jest.fn();

jest.mock("../../auth/index.js", () => ({
  useAuthContext: () => mockedAuth
}));

describe("Account", () => {
  beforeEach(() => {
    renderWithReduxProviders(<AccountSetup />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Account Setup");
    expect(heading).toBeInTheDocument();
  });
});
