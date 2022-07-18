/**
 * @jest-environment jsdom
 */
import { render, screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';
import { Route, MemoryRouter } from 'react-router-dom'

import { App } from "../../App";
import Searching from ".";

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ... jest.requireActual('react-router-dom'),
  useNavigate: () => mockedUsedNavigate,
}));

describe("Searching", () => {
  beforeEach(() => {
    const initState = { searchResults: [] };
    renderWithReduxProviders(<Searching />, initState);
    
    jest.useFakeTimers();
    jest.spyOn(global, 'setTimeout');
  });

  afterEach(() => {
    jest.restoreAllMocks();
  });

  it("Expect there to be a header on the page", () => {
    const heading = screen.getByText("Pulling search results.");
    expect(heading).toBeInTheDocument();
  });

  test('should make axios request', async () => {
    const res = {
      "results": [
        { category: 'smart', joke: 'sam' }
      ]
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(res);
    expect(axios).toHaveBeenCalled;
  });

  test('navigate after timer', async () => {
    expect(mockedUsedNavigate).not.toBeCalled();

    jest.runAllTimers();

    expect(mockedUsedNavigate).toHaveBeenCalled;
  });
});
