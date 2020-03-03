import React from "react";
import { render, fireEvent, screen } from "@testing-library/react";
import { createMemoryHistory } from "history";
import Footer from ".";

test("render footer", () => {
  const history = createMemoryHistory({ initialEntries: ["/"] });

  render(<Footer />);

  expect(screen.getByAltText("Logo white")).toBeInTheDocument();

  fireEvent.click(screen.getByAltText("Logo white"));
  expect(history.location.pathname).toBe("/");
});
