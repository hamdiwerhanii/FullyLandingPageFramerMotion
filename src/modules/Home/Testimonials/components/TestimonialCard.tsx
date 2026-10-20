import Image from "next/image";
import HoverMotion from "@/shared/components/HoverMotion";
import type { Testimonial } from "../types/testimonials.types";

type TestimonialCardProps = {
  testimonial: Testimonial;
};

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <HoverMotion
      as="figure"
      effect="lift"
      className="flex h-full flex-col justify-between rounded-xl bg-white p-6 shadow-lg"
    >
      <blockquote className="mb-6 leading-relaxed text-gray-600">
        <p>“{testimonial.quote}”</p>
      </blockquote>
      <figcaption className="flex items-center gap-3">
        <Image
          src={testimonial.image}
          alt={testimonial.name}
          width={48}
          height={48}
          className="h-12 w-12 rounded-full object-cover"
        />
        <div>
          <p className="font-semibold text-gray-900">{testimonial.name}</p>
          <p className="text-sm uppercase text-gray-600">{testimonial.role}</p>
        </div>
      </figcaption>
    </HoverMotion>
  );
}
