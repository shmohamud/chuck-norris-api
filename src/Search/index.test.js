import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Search from "./index.jsx";
import "@testing-library/jest-dom/extend-expect";

//Test to ensure proper error message shows up when server returns no results

describe("Input value", () => {
  it("updates on change", () => {
    const setFact = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setFact={setFact} />);

    const searchInput = queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "test" } });

    expect(searchInput.value).toBe("test");
  });
});

describe("Search Button", () => {
  it("Disabled with less than 3 chars", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "tw" } });
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton.disabled).toBe(true);
  });
  it("Disabled with more than 10 chars", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "morethanten" } });
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton.disabled).toBe(true);
  });
  it("Enabled with 5 chars", () => {
    const setSearch = jest.fn((value) => {});

    const { queryByPlaceholderText } = render(<Search setSearch={setSearch} />);

    const searchInput = queryByPlaceholderText("Search...");

    fireEvent.change(searchInput, { target: { value: "fivee" } });
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton.disabled).toBe(false);
  });
});
