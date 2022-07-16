/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { SetupPreferences } from ".";

describe("SetupPreferences", () => {
  beforeEach(() => {
    renderWithProviders(<SetupPreferences />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("SetupPreferences");
    expect(heading).toBeInTheDocument();
  });
});
