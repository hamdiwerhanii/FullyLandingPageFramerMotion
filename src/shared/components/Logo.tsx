import { HOME_HREF } from "@/shared/constants/nav";
import { SITE } from "@/shared/constants/site";
import { cn } from "@/shared/utils/cn";

type LogoProps = {
  className?: string;
};

export default function Logo({ className }: LogoProps) {
  return (
    <a
      href={HOME_HREF}
      aria-label={`${SITE.name} home`}
      className={cn("text-lg font-bold tracking-tight text-white", className)}
    >
      {SITE.name}
    </a>
  );
}
