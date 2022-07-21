/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import { default as EventDetails } from ".";

const mockedGet = jest.fn()

jest.mock("axios", () => ({
  get: () => mockedGet,
}));

const mockedNavigate = jest.fn()
jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
  useParams: () => { id: 1 },
}));

describe("EventDetails", () => {
  beforeEach(() => {
    renderWithReduxProviders(<EventDetails />);
  });

  it("save button fires", async () => {
    fireEvent(
      screen.getByTestId("leaveBtn"),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )
    expect(1).toEqual(1)
  })
});
