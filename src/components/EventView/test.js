/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as EventView } from ".";


describe("EventView", () => {
    beforeEach(() => {
        renderWithProviders(<EventView />);
    });

    it("Component renders", async () => {
        expect(1).toEqual(1)
    });
});
