"use client";

import { motion } from "framer-motion";

interface FeatureCardProps {
  icon: React.ElementType;
  title: string;
  children: React.ReactNode;
}

export function FeatureCard({ icon: Icon, title, children }: FeatureCardProps) {
  return (
    <motion.div
      className="flex flex-col items-start max-sm:items-center text-left max-sm:text-center"
      whileHover={{
        scale: 1.02,
        transition: { duration: 0.2 },
      }}
    >
      <div>
        <motion.div
          className="bg-gray-900 w-12 h-12 rounded-xl flex justify-center items-center mb-4"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
        >
          {<Icon className="text-white w-5 h-5" />}
        </motion.div>
      </div>
      <h5 className="text-xl font-semibold mb-2">{title}</h5>
      <div className="font-normal !text-gray-500">{children}</div>
    </motion.div>
  );
}

export default FeatureCard;
