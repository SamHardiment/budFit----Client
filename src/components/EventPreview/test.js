/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as EventPreview } from ".";


describe("EventPreview", () => {
    beforeEach(() => {
        renderWithProviders(<EventPreview activity="Football" dateTime="Thu, 28 Jul 2022 00:00:00 GMT" title="Football" event_id="1" />);
    });

    it("Component renders", async () => {
        expect(1).toEqual(1)
    });
});
