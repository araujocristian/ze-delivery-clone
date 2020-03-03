import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Header from ".";

test("render Header", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  render(<Header />);

  expect(screen.getByAltText("Logo")).toBeInTheDocument();

  fireEvent.click(screen.getByAltText("Logo"));
  expect(history.location.pathname).toBe("/");
});
