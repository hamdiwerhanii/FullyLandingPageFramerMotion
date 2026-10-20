import type { ReactNode } from "react";
import { cn } from "@/shared/utils/cn";

type ContainerProps = {
  className?: string;
  children: ReactNode;
};

export default function Container({ className, children }: ContainerProps) {
  return (
    <div className={cn("mx-auto w-full max-w-7xl px-6 md:px-10 lg:px-20", className)}>
      {children}
    </div>
  );
}
