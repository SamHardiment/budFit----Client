/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as CreateEventSuccess } from ".";

describe("CreateEventSucces", () => {
  beforeEach(() => {
    renderWithProviders(<CreateEventSuccess />);
  });

  it("Renders success message on page", () => {
    const heading = screen.getByText("Event successfully created!");
    expect(heading).toBeInTheDocument();
  });
});
