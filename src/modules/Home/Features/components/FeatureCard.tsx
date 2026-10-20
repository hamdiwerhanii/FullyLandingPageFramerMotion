import HoverMotion from "@/shared/components/HoverMotion";
import IconBadge from "@/shared/components/IconBadge";
import type { Feature } from "../types/features.types";

type FeatureCardProps = {
  feature: Feature;
};

export default function FeatureCard({ feature }: FeatureCardProps) {
  return (
    <article className="flex flex-col items-center text-center sm:items-start sm:text-left">
      <HoverMotion effect="tilt" className="mb-4">
        <IconBadge icon={feature.icon} />
      </HoverMotion>
      <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
      <p className="text-gray-600">{feature.description}</p>
    </article>
  );
}
