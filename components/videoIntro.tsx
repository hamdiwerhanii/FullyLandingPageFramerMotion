"use client";

import Image from "next/image";
import video from "../public/image/Background.png";
import { FaRegCirclePlay } from "react-icons/fa6";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

export function VideoIntro() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const containerVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 60,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const playButtonVariants: Variants = {
    hidden: {
      opacity: 0,
      scale: 0.5,
      rotate: -180,
    },
    visible: {
      opacity: 1,
      scale: 1,
      rotate: 0,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="px-14 lg:px-26 mt-32 w-full"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <div className="container w-full h-full relative">
        <Image
          src={video}
          width={768}
          height={400}
          alt="video"
          className="w-full h-full rounded-xl"
        />
        <motion.div
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
          variants={playButtonVariants}
        >
          <FaRegCirclePlay className="z-50 text-white w-14 h-14" />
        </motion.div>
      </div>
    </motion.div>
  );
}

export default VideoIntro;
