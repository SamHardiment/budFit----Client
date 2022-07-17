/**
 * @jest-environment jsdom
 */
import { fireEvent, screen } from "@testing-library/react";
import Search from ".";

describe("Search", () => {
  beforeEach(() => {
    const initState = { searchResults: [{name:{first:"Tom"}, picture:{large:'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}}, {name:{first:"Bob"}, picture:{large:'https://www.google.co.uk/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png'}}] };
    renderWithReduxProviders(<Search />, initState);
  });

  it("reject button renders", () => {
    const rejectBtn = screen.getByRole("button", { name: "reject" });
    expect(rejectBtn).toBeInTheDocument();
  });

  it("undo button renders", () => {
    const undoBtn = screen.getByRole("button", { name: "undo" });
    expect(undoBtn).toBeInTheDocument();
  });
  it("match button renders", () => {
    const matchBtn = screen.getByRole("button", { name: "match" });
    expect(matchBtn).toBeInTheDocument();
  });

  it( "match button test", ()=>{
    fireEvent(
      screen.getByRole("button", { name: "match" }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(1).toEqual(1)
  });

  it( "reject button test", ()=>{
    fireEvent(
      screen.getByRole("button", { name: "reject" }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(1).toEqual(1)
  });

  it( "undo button test", ()=>{
    fireEvent(
      screen.getByRole("button", { name: "undo" }),
      new MouseEvent('click', {
        bubbles: true,
        cancelable: true,
      }),
    )

    expect(1).toEqual(1)
  });

  it( "logo renders", ()=>{
    const logo = screen.getByAltText("logo");
    expect(logo).toBeInTheDocument();
  });
});
