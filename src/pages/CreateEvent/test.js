/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { CreateEvent } from ".";

describe("CreateEvent", () => {
  beforeEach(() => {
    renderWithProviders(<CreateEvent />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("New Event");
    expect(heading).toBeInTheDocument();
  });
});
