/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import Search from ".";

describe("Search", () => {
  beforeEach(() => {
    const initState = { searchResults: [] };
    renderWithReduxProviders(<Search />, initState);
  });

  it("verify page content for default route", () => {
    const rejectBtn = screen.getByRole("button", { name: "reject" });
    expect(rejectBtn).toBeInTheDocument();
  });

  it("verify page content for default route", () => {
    const undoBtn = screen.getByRole("button", { name: "undo" });
    expect(undoBtn).toBeInTheDocument();
  });
  it("verify page content for default route", () => {
    const matchBtn = screen.getByRole("button", { name: "match" });
    expect(matchBtn).toBeInTheDocument();
  });
});
