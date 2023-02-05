import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/svelte";

import CardList from "./index.svelte";

describe("CardList", () => {
  test("should render list of 8 cards", () => {
    render(CardList);
    const list = screen.getByRole("list", {
      name: /categories/i,
    });
    const { getAllByTestId } = within(list);
    const items = getAllByTestId("card");
    expect(items.length).toBe(8);
  });
});
