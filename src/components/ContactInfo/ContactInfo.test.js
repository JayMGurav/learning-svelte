import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/svelte";

import ContactInfo from "./index.svelte";

describe("Contact Info", () => {
  test("shows whatsapp when rendered", () => {
    render(ContactInfo);
    const whatsapp = screen.getByText("Whatsapp");
    expect(whatsapp).toBeInTheDocument();
  });

  test("shows twitter when rendered", () => {
    render(ContactInfo);
    const twitter = screen.getByText("Twitter");
    expect(twitter).toBeInTheDocument();
  });

  test("shows 'Email us' in contact info when rendered", () => {
    render(ContactInfo);
    const emailUs = screen.getByText("Email us");
    expect(emailUs).toBeInTheDocument();
  });

  test("shows 'Contact B2B customer service' in contact info when rendered", () => {
    render(ContactInfo);
    const contactUs = screen.getByText("Contact B2B customer service");
    expect(contactUs).toBeInTheDocument();
  });
});
