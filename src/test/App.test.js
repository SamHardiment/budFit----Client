/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { App } from "../App.js";

describe("App", () => {
  beforeEach(() => {
    render(<App />);
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("budFit");
    expect(heading).toBeInTheDocument();
  });
});
