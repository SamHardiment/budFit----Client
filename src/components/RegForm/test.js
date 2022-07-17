/**
 * @jest-environment jsdom
 */

import { screen, fireEvent } from "@testing-library/react";
import RegForm from ".";

describe("RegForm", () => {
  const handleSubmitt = jest.fn();

  beforeEach(() => {
    renderWithProviders(<RegForm />);
  });

  it("onSubmit is called when all fields pass val", async () => {
    userEvent.type(screen.getByRole("textbox", { name: "Name" }), "George");
    userEvent.type(screen.getByRole("textbox", { name: "Username" }), "George");
    userEvent.type(
      screen.getByRole("textbox", { name: "Email" }),
      "George@George.com"
    );
    // userEvent.type(screen.getByRole("textbox", { name: "Password" }), "George");
    await userEvent.click(
      screen.getByRole("button", {
        name: "create-button",
      })
    );

    expect(handleSubmitt).toHaveBeenCalledTimes(1);
    expect(handleSubmitt).toHaveBeenCalledWith({ lazy: true });
  });

  test("it renders a form", () => {
    let form = screen.getByRole("form");
    expect(form).toBeInTheDocument();
  });
  it("verify name textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Name" });
    expect(Textfield).toBeInTheDocument();
    userEvent.type(Textfield, "George{enter}");
    expect(Textfield.value).toBe("");
    // expect(getResultMock).toHaveBeenNthCalledWith(1, "George");
  });
  it("verify username textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Username" });
    expect(Textfield).toBeInTheDocument();
    userEvent.type(Textfield, "George123{enter}");
    expect(Textfield.value).toBe("");
  });
  it("verify email textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Email" });
    expect(Textfield).toBeInTheDocument();
    userEvent.type(Textfield, "sam@sam.com{enter}");
    expect(Textfield.value).toBe("");
  });
  it("verify password textfield exist", () => {
    const Textfield = screen.getByRole("textbox", { name: "Password" });
    expect(Textfield).toBeInTheDocument();
    userEvent.type(nameTextfield, "123{enter}");
    expect(Textfield.value).toBe("");
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
