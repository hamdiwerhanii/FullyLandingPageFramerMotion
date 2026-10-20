import { fireEvent, render, screen, within } from "@testing-library/react";
import Header from "@/shared/components/Header";

describe("Header", () => {
  it("opens and closes the mobile menu from the toggle button", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "true");
    expect(toggle).toHaveAccessibleName("Close menu");
    expect(document.body.style.overflow).toBe("hidden");

    fireEvent.click(toggle);
    expect(toggle).toHaveAttribute("aria-expanded", "false");
    expect(document.body.style.overflow).toBe("");
  });

  it("closes the mobile menu on Escape", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    fireEvent.keyDown(window, { key: "Escape" });

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("closes the mobile menu when a link is chosen", () => {
    render(<Header />);
    const toggle = screen.getByRole("button", { name: "Open menu" });

    fireEvent.click(toggle);
    const mobileNav = screen.getByRole("navigation", { name: "Mobile" });
    fireEvent.click(within(mobileNav).getByRole("link", { name: "Testimonials" }));

    expect(toggle).toHaveAttribute("aria-expanded", "false");
  });

  it("links every nav item to a home page section, so links also work from other pages", () => {
    render(<Header />);
    const mainNav = screen.getByRole("navigation", { name: "Main" });

    for (const link of within(mainNav).getAllByRole("link")) {
      expect(link.getAttribute("href")).toMatch(/^\/#[a-z-]+$/);
    }
  });
});
