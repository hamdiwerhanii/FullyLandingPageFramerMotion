import { render, screen } from "@testing-library/react";
import StoreButtons from "@/shared/components/StoreButtons";
import { STORE_LINKS } from "@/shared/constants/site";

describe("StoreButtons", () => {
  it("renders a safe external link for every store", () => {
    render(<StoreButtons />);

    for (const store of STORE_LINKS) {
      const link = screen.getByRole("link", { name: store.label });
      expect(link).toHaveAttribute("href", store.href);
      expect(link).toHaveAttribute("target", "_blank");
      expect(link).toHaveAttribute("rel", "noopener noreferrer");
    }
  });
});
