/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import Searching from ".";

describe("Searching", () => {
  beforeEach(() => {
    const initState = { searchResults: [] };

    renderWithReduxProviders(<Searching />, initState);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Pulling search results.");
    expect(heading).toBeInTheDocument();
  });
});
