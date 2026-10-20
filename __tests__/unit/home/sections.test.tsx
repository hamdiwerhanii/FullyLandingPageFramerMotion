import { render, screen, within } from "@testing-library/react";
import FeaturesSection from "@/modules/Home/Features/components/FeaturesSection";
import { FEATURES } from "@/modules/Home/Features/constants/features.data";
import MobileConvenienceSection from "@/modules/Home/MobileConvenience/components/MobileConvenienceSection";
import { STATS } from "@/modules/Home/MobileConvenience/constants/mobileConvenience.data";
import TestimonialsSection from "@/modules/Home/Testimonials/components/TestimonialsSection";
import { TESTIMONIALS } from "@/modules/Home/Testimonials/constants/testimonials.data";

describe("Home sections", () => {
  it("renders every feature as a list item with its own heading", () => {
    render(<FeaturesSection />);
    const section = screen.getByRole("region", { name: "Diverse Learning Resources" });

    expect(within(section).getAllByRole("listitem")).toHaveLength(FEATURES.length);
    for (const feature of FEATURES) {
      expect(within(section).getByRole("heading", { level: 3, name: feature.title })).toBeInTheDocument();
    }
  });

  it("pairs each statistic value with its label", () => {
    render(<MobileConvenienceSection />);

    for (const stat of STATS) {
      const label = screen.getByText(stat.label);
      expect(label.tagName).toBe("DT");
      expect(within(label.parentElement!).getByText(stat.value).tagName).toBe("DD");
    }
  });

  it("shows each testimonial with the client's photo described by name", () => {
    render(<TestimonialsSection />);

    for (const testimonial of TESTIMONIALS) {
      expect(screen.getByRole("img", { name: testimonial.name })).toBeInTheDocument();
    }
  });
});
