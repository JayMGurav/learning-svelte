import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";

import Card from "./index.svelte";

const category = {
  id: 1,
  title: "My Account",
  topics: [
    "Create my account",
    "Forgotten password",
    "Communication preferences",
  ],
};

describe("Card", () => {
  render(Card, { props: { category } });
  test("shows proper heading when rendered", () => {
    const heading = screen.getByText("My Account");
    expect(heading).toBeInTheDocument();
  });

  test("shows each topics when rendered", () => {
    render(Card, { props: { category } });
    const topic1 = screen.getByText("Create my account");
    const topic2 = screen.getByText("Forgotten password");
    const topic3 = screen.getByText("Communication preferences");
    expect(topic1).toBeInTheDocument();
    expect(topic2).toBeInTheDocument();
    expect(topic3).toBeInTheDocument();
  });

  test("shows view all link when rendered", () => {
    render(Card, { props: { category } });
    const viewAll = screen.getByText("View all");
    expect(viewAll).toBeInTheDocument();
  });
});
