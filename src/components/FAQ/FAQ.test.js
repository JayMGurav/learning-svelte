import "@testing-library/jest-dom";
import { render, screen, within } from "@testing-library/svelte";

import FAQ from "./index.svelte";

describe("FAQ", () => {
  test("should render list of 6 questions", () => {
    render(FAQ);
    const list = screen.getByRole("list", {
      name: /faqs/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    expect(items.length).toBe(6);
  });

  test("should render list of questions in a specific order", () => {
    render(FAQ);
    const list = screen.getByRole("list", {
      name: /faqs/i,
    });
    const { getAllByRole } = within(list);
    const items = getAllByRole("listitem");
    const faqs = items.map((item) => item.textContent);
    expect(faqs).toEqual([
      "Do you offer free shipping?",
      "How long do you hold click and collect orders?",
      "What is the delivery time of my order?",
      "Can I create a return on my delivery app?",
      "I don't see the ASDA option at checkout?",
      "My local store is closed due to lockdown - how do I return my item?",
    ]);
  });
});
