import { FaAward, FaChalkboardTeacher, FaChartLine, FaComments } from "react-icons/fa";
import type { Feature } from "../types/features.types";

export const FEATURES: Feature[] = [
  {
    id: "expert-instructors",
    icon: FaChalkboardTeacher,
    title: "Expert Instructors",
    description:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    id: "interactive-learning",
    icon: FaComments,
    title: "Interactive Learning",
    description:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    id: "achievements",
    icon: FaAward,
    title: "Achievement Unlocked",
    description:
      "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  },
  {
    id: "progress-tracking",
    icon: FaChartLine,
    title: "Personalized Progress Tracking",
    description:
      "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];
