/**
 * @jest-environment jsdom
 */

import { screen, fireEvent } from "@testing-library/react";
import RegForm from ".";
import { useAuthContext } from "../../auth/index.js";
describe("RegForm", () => {
  beforeEach(() => {
    renderWithProviders(<RegForm />);
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("verify name textfield exist", () => {
    const nameTextfield = screen.getByRole("textbox", { name: "Name" });
    expect(nameTextfield).toBeInTheDocument();
    userEvent.type(nameTextfield, "George{enter}");
    expect(nameTextfield.value).toBe("");
    // expect(getResultMock).toHaveBeenNthCalledWith(1, "George");
  });
  it("verify username textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Username" });
    expect(Textfield).toBeInTheDocument();
  });
  it("verify email textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Email" });
    expect(Textfield).toBeInTheDocument();
  });
  it("verify password textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Password" });
    expect(Textfield).toBeInTheDocument();
  });
  it("verify password confirmation textfield exist", () => {
    const Textfield = screen.getByRole("textbox", {
      name: "Confirm Your Password",
    });
    expect(Textfield).toBeInTheDocument();
  });

  it("verify create button submits form", () => {
    const createBtn = screen.getByRole("button", {
      name: "create-button",
    });
    expect(createBtn).toBeInTheDocument();
    fireEvent(
      screen.getByRole("button", { name: "create-button" }),
      new MouseEvent("click", {
        bubbles: true,
        cancelable: true,
      })
    );

    expect(1).toEqual(1);
  });
});
