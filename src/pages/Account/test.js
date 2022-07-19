/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { Account } from ".";

describe("Account", () => {
  beforeEach(() => {
    renderWithProviders(<Account />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Account");
    expect(heading).toBeInTheDocument();
  });
});
