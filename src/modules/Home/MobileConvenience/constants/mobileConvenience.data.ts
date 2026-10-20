import type { Stat } from "../types/stats.types";

export const MOBILE_IMAGE = {
  src: "/image/iphone.webp",
  alt: "Phone showing a course page in the learning app",
  width: 960,
  height: 1290,
} as const;

export const STATS: Stat[] = [
  { id: "courses", value: "100", label: "Learning Courses" },
  { id: "instructors", value: "500+", label: "Expert Instructors" },
  { id: "support", value: "24/7", label: "Support" },
  { id: "rating", value: "5/5", label: "Review Stars" },
];
