import { IoPersonSharp } from "react-icons/io5";
import IconBadge from "@/shared/components/IconBadge";
import Section from "@/shared/components/Section";
import SectionHeading from "@/shared/components/SectionHeading";
import { RevealGroup, RevealItem } from "@/shared/components/Reveal";
import TestimonialCard from "./TestimonialCard";
import { TESTIMONIALS } from "../constants/testimonials.data";

const SECTION_ID = "testimonials";

export default function TestimonialsSection() {
  return (
    <Section id={SECTION_ID}>
      <RevealGroup>
        <RevealItem>
          <SectionHeading
            sectionId={SECTION_ID}
            icon={<IconBadge icon={IoPersonSharp} />}
            title="What Clients Say"
            description="Discover what our valued clients have to say about their experiences with our services. We take pride in delivering exceptional results and fostering lasting partnerships."
          />
        </RevealItem>
      </RevealGroup>

      <RevealGroup as="ul" className="mt-16 grid gap-8 md:grid-cols-3 lg:px-20">
        {TESTIMONIALS.map((testimonial) => (
          <RevealItem as="li" key={testimonial.id}>
            <TestimonialCard testimonial={testimonial} />
          </RevealItem>
        ))}
      </RevealGroup>
    </Section>
  );
}
