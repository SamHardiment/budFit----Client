/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { SetupAcc } from ".";

describe("SetupAcc", () => {
  beforeEach(() => {
    renderWithProviders(<SetupAcc />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("SetupAcc");
    expect(heading).toBeInTheDocument();
  });
});
