import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("combine", () => {
  beforeAll(() => {
    console.log("before all");
  });

  beforeEach(() => {
    console.log("before each");
  });

  afterAll(() => {
    console.log("after all");
  });

  afterEach(() => {
    console.log("after each");
  });

  test("render", () => {
    render(<Contact />);

    const heading = screen.getByRole("heading");
    expect(heading).toBeInTheDocument();
  });

  test("render button", () => {
    render(<Contact />);

    const button = screen.getByRole("button");
    expect(button).toBeInTheDocument();
  });

  it("render xzcv", () => {
    render(<Contact />);

    const heading1 = screen.getByPlaceholderText("Name");
    expect(heading1).toBeInTheDocument();
  });

  test("render dsa", () => {
    render(<Contact />);

    const input = screen.getAllByRole("textbox");
    expect(input[0]).toBeInTheDocument();
    expect(input.length).not.toBe(3);
  });
});
