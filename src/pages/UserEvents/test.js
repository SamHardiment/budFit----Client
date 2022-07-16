/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { UserEvents } from ".";

describe("UserEvents", () => {
  beforeEach(() => {
    renderWithProviders(<UserEvents />);
    // <UserEvents />;
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("UserEvents");
    expect(heading).toBeInTheDocument();
  });
});
