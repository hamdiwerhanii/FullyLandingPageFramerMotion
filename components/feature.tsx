"use client";

import { FaHeart, FaLock } from "react-icons/fa";
import { HiOutlineCursorClick } from "react-icons/hi";
import FeatureCard from "./featureCard";
import { IoBulb } from "react-icons/io5";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const FEATURES = [
  {
    icon: HiOutlineCursorClick,
    title: "Expert Instructors",
    children:
      "Learn from the best. Our instructors are industry experts, academics, and seasoned professionals dedicated to helping you.",
  },
  {
    icon: FaHeart,
    title: "Interactive Learning",
    children:
      "Engage with interactive quizzes, hands-on exercises, and discussion forums to reinforce your understanding and connect.",
  },
  {
    icon: FaLock,
    title: "Achievement Unlocked",
    children:
      "Earn certificates and badges as you complete courses, showcasing your newfound skills to the world.",
  },
  {
    icon: IoBulb,
    title: "Personalized Progress Tracking",
    children:
      "Stay on top of your learning journey with progress tracking and personalized recommendations to keep you motivated.",
  },
];

export function Feature() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="py-28 px-14 lg:px-26"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col justify-center items-center text-center"
        variants={itemVariants}
      >
        <p className="mb-2 font-extrabold text-gray-800 text-xl">
          YOUR LEARNING APP
        </p>
        <h1 className="text-5xl font-semibold text-gray-800 leading-tight mb-2">
          Diverse Learning Resources
        </h1>
        <p className="w-full !text-gray-400 text-xl leading-relaxed font-normal">
          Access your learning materials on the go. Whether you&apos;re
          commuting, waiting for a friend, or just have a few minutes to spare,
          our app fits seamlessly into your busy life.
        </p>
      </motion.div>

      <motion.div
        className="container mt-10 grid grid-cols-1 gap-4 gap-y-12 md:grid-cols-2 max-sm:place-items-center"
        variants={containerVariants}
      >
        {FEATURES.map((features, index) => (
          <motion.div key={index} variants={cardVariants}>
            <FeatureCard {...features} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Feature;
