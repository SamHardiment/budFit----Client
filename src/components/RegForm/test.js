/**
 * @jest-environment jsdom
 */

import { screen } from "@testing-library/react";
import RegForm from ".";

describe("RegForm", () => {
  let getResultMock;
  beforeEach(() => {
    renderWithProviders(<RegForm />);
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("verify name textfield exist", () => {
    getResultMock = jest.fn();
    const nameTextfield = screen.getByRole("textbox", { name: "Name" });
    expect(nameTextfield).toBeInTheDocument();
    userEvent.type(nameTextfield, "George{enter}");
    expect(getResultMock).toHaveBeenNthCalledWith(1, "George");
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
});
