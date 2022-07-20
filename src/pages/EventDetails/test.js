/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import { default as EventDetails } from ".";

const mockedGet = jest.fn()

jest.mock("axios", () => ({
  get: () => mockedGet,
}));

describe("EventDetails", () => {
    beforeEach(() => {
        renderWithProviders(<EventDetails />);
    });

    it("Component renders", async () => {
        expect(1).toEqual(1)
    });
});
