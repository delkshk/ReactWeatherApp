/* eslint-disable testing-library/no-node-access */
/* eslint-disable testing-library/prefer-screen-queries */
import { render } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import React from "react";
import App from "./App";

test("Shoud have Dallol in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/dallol/i);

  expect(linkElement).toBeInTheDocument();
});
test("Shoud have Fairbanks in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/fairbanks/i);

  expect(linkElement).toBeInTheDocument();
});
test("Shoud have London in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/london/i);

  expect(linkElement).toBeInTheDocument();
});
test("Shoud have Recife in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/recife/i);

  expect(linkElement).toBeInTheDocument();
});
test("Shoud have Vancouver in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/vancouver/i);

  expect(linkElement).toBeInTheDocument();
});
test("Shoud have Yakutsk in home", () => {
  const { getByText } = render(<App></App>);

  const linkElement = getByText(/yakutsk/i);

  expect(linkElement).toBeInTheDocument();
});
