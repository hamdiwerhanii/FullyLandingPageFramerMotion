import type { ReactElement } from "react";
import { render } from "@testing-library/react";
import axe from "axe-core";
import NotFound from "@/app/not-found";
import FeaturesSection from "@/modules/Home/Features/components/FeaturesSection";
import HeroSection from "@/modules/Home/Hero/components/HeroSection";
import MobileConvenienceSection from "@/modules/Home/MobileConvenience/components/MobileConvenienceSection";
import ShowcaseSection from "@/modules/Home/Showcase/components/ShowcaseSection";
import TestimonialsSection from "@/modules/Home/Testimonials/components/TestimonialsSection";
import Footer from "@/modules/Shared/Footer/components/Footer";
import Header from "@/shared/components/Header";

const AXE_OPTIONS: axe.RunOptions = {
  runOnly: { type: "tag", values: ["wcag2a", "wcag2aa", "wcag21a", "wcag21aa", "best-practice"] },
  rules: {
    "color-contrast": { enabled: false },
    region: { enabled: false },
  },
};

const formatViolations = (violations: axe.Result[]) =>
  violations.map((v) => `${v.id}: ${v.help} (${v.nodes.map((n) => n.target.join(" ")).join(", ")})`);

async function expectNoViolations(ui: ReactElement) {
  const { container } = render(ui);
  const results = await axe.run(container, AXE_OPTIONS);
  expect(formatViolations(results.violations)).toEqual([]);
}

describe("accessibility (axe-core)", () => {
  it.each([
    ["Header", <Header key="header" />],
    ["Footer", <Footer key="footer" />],
    ["404 page", <main key="not-found"><NotFound /></main>],
  ])("%s has no violations", async (_name, ui) => {
    await expectNoViolations(ui);
  });

  it("home page sections have no violations", async () => {
    await expectNoViolations(
      <main>
        <HeroSection />
        <ShowcaseSection />
        <FeaturesSection />
        <MobileConvenienceSection />
        <TestimonialsSection />
      </main>,
    );
  });
});
