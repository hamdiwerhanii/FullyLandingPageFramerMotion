import HoverMotion from "@/shared/components/HoverMotion";
import type { Stat } from "../types/stats.types";

type StatCardProps = {
  stat: Stat;
};

export default function StatCard({ stat }: StatCardProps) {
  return (
    <HoverMotion effect="grow" className="flex flex-col text-center">
      <dt className="text-gray-600">{stat.label}</dt>
      <dd className="order-first mb-2 text-3xl font-bold text-gray-900">{stat.value}</dd>
    </HoverMotion>
  );
}
