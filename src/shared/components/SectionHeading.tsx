import type { ReactNode } from "react";
import { sectionTitleId } from "@/shared/utils/sectionTitleId";
import { cn } from "@/shared/utils/cn";

type SectionHeadingProps = {
  sectionId: string;
  title: string;
  eyebrow?: string;
  description?: string;
  icon?: ReactNode;
  className?: string;
};

export default function SectionHeading({
  sectionId,
  title,
  eyebrow,
  description,
  icon,
  className,
}: SectionHeadingProps) {
  return (
    <div className={cn("flex flex-col items-center text-center", className)}>
      {icon && <div className="mb-10">{icon}</div>}
      {eyebrow && (
        <p className="mb-2 text-xl font-extrabold uppercase text-gray-800">{eyebrow}</p>
      )}
      <h2
        id={sectionTitleId(sectionId)}
        className="mb-2 text-4xl font-semibold leading-tight text-gray-900 md:text-5xl"
      >
        {title}
      </h2>
      {description && (
        <p className="max-w-3xl text-xl leading-relaxed text-gray-600">{description}</p>
      )}
    </div>
  );
}
