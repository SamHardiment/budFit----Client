/**
 * @jest-environment jsdom
 */
import { screen, fireEvent } from "@testing-library/react";
import { default as UserDetails } from "./index";

const mockedNavigate = jest.fn()
const mockedParams = { id:1 }


jest.mock("react-router-dom", () => ({
  useNavigate: () => mockedNavigate,
  useParams: () => mockedParams,
}));

describe("UserDetails", () => {
  beforeEach(() => {
    renderWithProviders(<UserDetails />);
  });

  it("page renders", () => {
    
    expect(1).toEqual(1);
  });
});
