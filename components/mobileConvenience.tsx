"use client";

import Image from "next/image";
import iphone from "../public/image/iphone.png";
import InfoCard from "./infoCard";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const OPTIONS = [
  {
    title: "100",
    description: "Learning Courses",
  },
  {
    title: "500+",
    description: "Expert Instructors",
  },
  {
    title: "24/7",
    description: "Support",
  },
  {
    title: "5/5",
    description: "Review Stars",
  },
];

export function MobileConvenience() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const leftVariants: Variants = {
    hidden: {
      opacity: 0,
      x: -50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const rightVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.2,
      },
    },
  };

  const statVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 30,
      scale: 0.9,
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

  return (
    <motion.div
      ref={ref}
      className="py-20 px-8"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 max-w-6xl mx-auto items-center">
        <motion.div variants={leftVariants}>
          <Image
            width={256}
            height={256}
            src={iphone}
            className="col-span-1 w-1/2 mx-auto lg:w-10/12"
            alt="iphone-photo"
          />
        </motion.div>

        <motion.div className="mx-auto" variants={rightVariants}>
          <div>
            <h1 className="text-4xl racking-normal font-semibold leading-[1.3] text-gray-900 mb-4">
              Mobile Convenience
            </h1>
            <p className="text-gray-400 text-xl mb-5">
              Access your learning materials on the go.
            </p>
          </div>

          <motion.div
            className="grid grid-cols-2 gap-x-5 gap-y-16 py-6"
            variants={containerVariants}
          >
            {OPTIONS.map((options, index) => (
              <motion.div key={index} variants={statVariants}>
                <InfoCard {...options} />
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
}

export default MobileConvenience;
