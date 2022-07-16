/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import { Searching } from ".";

describe("Searching", () => {
  beforeEach(() => {
    renderWithReduxProviders(<Searching />);
  });

  it("Expect there to be a header on the page", () => {
    // const initState = { searchResults: [] };
    // renderWithReduxProviders(<Searching />, { initState });
    renderWithProviders(<Searching />);
    const heading = screen.getByText("Pulling search results");
    expect(heading).toBeInTheDocument();
  });
});
