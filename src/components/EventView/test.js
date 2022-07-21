/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as EventView } from ".";


describe("EventView", () => {
    beforeEach(() => {
        renderWithProviders(<EventView activity="Football" dateTime="Sat, 23 Jul 2022 00:00:00 GMT" title="A Football Event" location="Antrim" description="Description" spaces="6" attendees={[{user_id:1, name:"Tom"}, {user_id:2, name:"Sam"}, {user_id:3, name:"Bob"}]} />);
    });

    it("Component renders", async () => {
        expect(1).toEqual(1)
    });
});
