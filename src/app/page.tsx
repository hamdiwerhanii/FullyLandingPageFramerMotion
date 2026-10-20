import dynamic from "next/dynamic";
import HeroSection from "@/modules/Home/Hero/components/HeroSection";

const ShowcaseSection = dynamic(
  () => import("@/modules/Home/Showcase/components/ShowcaseSection"),
);
const FeaturesSection = dynamic(
  () => import("@/modules/Home/Features/components/FeaturesSection"),
);
const MobileConvenienceSection = dynamic(
  () => import("@/modules/Home/MobileConvenience/components/MobileConvenienceSection"),
);
const TestimonialsSection = dynamic(
  () => import("@/modules/Home/Testimonials/components/TestimonialsSection"),
);

export default function Home() {
  return (
    <>
      <HeroSection />
      <ShowcaseSection />
      <FeaturesSection />
      <MobileConvenienceSection />
      <TestimonialsSection />
    </>
  );
}
