/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { ChatRoom } from ".";

describe("ChatRoom", () => {
  beforeEach(() => {
    renderWithProviders(<ChatRoom />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("hello");
    expect(heading).toBeInTheDocument();
  });
});
