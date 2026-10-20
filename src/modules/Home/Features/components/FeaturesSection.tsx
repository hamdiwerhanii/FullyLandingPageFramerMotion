import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/shared/components/Reveal";
import FeatureCard from "./FeatureCard";
import { FEATURES } from "../constants/features.data";

const SECTION_ID = "features";

export default function FeaturesSection() {
  return (
    <Section id={SECTION_ID}>
      <RevealGroup>
        <RevealItem>
          <SectionHeading
            sectionId={SECTION_ID}
            eyebrow="Your learning app"
            title="Diverse Learning Resources"
            description="Access your learning materials on the go. Whether you're commuting, waiting for a friend, or just have a few minutes to spare, our app fits seamlessly into your busy life."
          />
        </RevealItem>
      </RevealGroup>

      <RevealGroup as="ul" className="mt-16 grid gap-x-8 gap-y-12 md:grid-cols-2">
        {FEATURES.map((feature) => (
          <RevealItem as="li" key={feature.id}>
            <FeatureCard feature={feature} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
