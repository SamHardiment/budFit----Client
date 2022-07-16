/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import Search from ".";

describe("Search", () => {
  beforeEach(() => {
    renderWithReduxProviders(<Search />);
  });

  it("verify page content for default route", () => {
    const rejectBtn = screen.getByRole("button", { name: "Reject" });
    expect(rejectBtn).toBeInTheDocument();
  });

  it("verify page content for default route", () => {
    const undoBtn = screen.getByRole("button", { name: "Undo" });
    expect(undoBtn).toBeInTheDocument();
  });
  it("verify page content for default route", () => {
    const matchBtn = screen.getByRole("button", { name: "Match" });
    expect(matchBtn).toBeInTheDocument();
  });
});
