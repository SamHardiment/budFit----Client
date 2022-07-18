/**
 * @jest-environment jsdom
 */
import { screen } from "@testing-library/react";
import '@testing-library/jest-dom/extend-expect';
import axios from 'axios';

import Searching from ".";

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

  test('should set state', async () => {
    const setState = jest.fn();
    const useStateSpy = jest.spyOn(React, 'useState');
    useStateSpy.mockImplementation((init) => [init, setState]);
    
    const res = {
      "results": [
        { category: 'smart', joke: 'sam' }
      ]
    };
    jest.spyOn(axios, 'get').mockResolvedValueOnce(res);

    expect(setState).toHaveBeenCalled;
  });
});
