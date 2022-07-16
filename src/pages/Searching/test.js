/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import Searching from ".";

describe("Searching", () => {
  beforeEach(() => {
    renderWithProviders(<Searching />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Pulling search results");
    expect(heading).toBeInTheDocument();
  });
});
