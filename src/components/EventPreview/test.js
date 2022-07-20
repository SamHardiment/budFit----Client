/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as EventPreview } from ".";


describe("EventPreview", () => {
    beforeEach(() => {
        renderWithProviders(<EventPreview />);
    });

    it("Component renders", async () => {
        expect(1).toEqual(1)
    });
});
