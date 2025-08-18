"use client";

import { motion } from "framer-motion";

interface InfoCardProps {
  title: string;
  description: string;
}

export function InfoCard({ title, description }: InfoCardProps) {
  return (
    <motion.div
      className="text-center"
      whileHover={{
        scale: 1.05,
        transition: { duration: 0.2 },
      }}
    >
      <motion.h3
        className="text-3xl font-bold text-gray-900 mb-2"
        whileHover={{
          scale: 1.1,
          transition: { duration: 0.2 },
        }}
      >
        {title}
      </motion.h3>
      <p className="text-gray-600">{description}</p>
    </motion.div>
  );
}

export default InfoCard;
