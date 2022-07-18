/**
 * @jest-environment jsdom
 */
 import { screen } from "@testing-library/react";
 import { UserSafety } from "../";
 
 describe("UserSafety", () => {
   beforeEach(() => {
     renderWithProviders(<UserSafety />);
   });
 
   it("Expect there to be a header on the page", () => {
     const heading = screen.getByText("User Safety Advice");
     expect(heading).toBeInTheDocument();
   });
 });
 