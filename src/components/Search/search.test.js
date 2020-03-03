import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Search from ".";

test("render Header", () => {
  // const history = createMemoryHistory({ initialEntries: ["/"] });

  render(<Search />);

  expect(
    screen.getByPlaceholderText("Insira o endereço e número")
  ).toBeInTheDocument();

  // fireEvent.click(screen.getByAltText("Logo"));
  // expect(history.location.pathname).toBe("/");
});
