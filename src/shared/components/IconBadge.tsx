import type { IconType } from "react-icons";
import { cn } from "@/shared/utils/cn";

type IconBadgeProps = {
  icon: IconType;
  className?: string;
};

export default function IconBadge({ icon: Icon, className }: IconBadgeProps) {
  return (
    <span
      className={cn(
        "flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-ink text-white",
        className,
      )}
    >
      <Icon aria-hidden className="h-5 w-5" />
    </span>
  );
}
