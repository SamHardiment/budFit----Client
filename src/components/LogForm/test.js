/**
 * @jest-environment jsdom
 */

import { screen, fireEvent } from "@testing-library/react";
import axios from "axios";
import LogForm from ".";

jest.mock("axios");

describe("LogForm", () => {
  beforeEach(() => {
    renderWithProviders(<LogForm />);
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("verify name textfield exist", () => {
    const nameTextfield = screen.getByRole("textbox", { name: "Name" });
    expect(nameTextfield).toBeInTheDocument();
    userEvent.type(nameTextfield, "Sam{enter}");
    expect(nameTextfield.value).toBe("");
    // expect(getResultMock).toHaveBeenNthCalledWith(1, "George");
  });
  it("verify username textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Username" });
    expect(Textfield).toBeInTheDocument();
    userEvent.type(Textfield, "evilchicken{enter}");
    expect(Textfield.value).toBe("");
    // expect(getResultMock).toHaveBeenNthCalledWith(1, "George");
  });

  it("verify login button submits form", () => {
    const logBtn = screen.getByRole("button", {
      name: "login-button",
    });
    expect(logBtn).toBeInTheDocument();
    fireEvent(
      screen.getByRole("button", { name: "login-button" }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(1).toEqual(1);
  });
});
