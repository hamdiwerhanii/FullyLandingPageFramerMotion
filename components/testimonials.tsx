"use client";

import { IoPersonSharp } from "react-icons/io5";
import TestimonialCard from "./testimonialCard";
import imgOne from "../public/image/avatar1.jpg";
import imgTwo from "../public/image/avatar2.jpg";
import imgThree from "../public/image/avatar3.jpg";
import { motion, Variants } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const TESTIMONIALS = [
  {
    feedback:
      "It has been a game-changer for my business. Their dedication, expertise, and attention to detail have truly set them apart. I highly recommend their services!",
    client: "Jessica Devis",
    title: "CEO @ MARKETING DIGITAL LTD.",
    img: imgOne,
  },
  {
    feedback:
      "It understood my unique needs and delivered a tailored solution promptly. Their customer support is top-notch, and I appreciate their commitment.",
    client: "Mary Joshiash",
    title: "MARKETING @ APPLE INC.",
    img: imgTwo,
  },
  {
    feedback:
      "They not only met but exceeded our expectations. Their innovative approach and technical proficiency have been instrumental in our success.",
    client: "Marcell Glock",
    title: "CFO @ APPLE INC..",
    img: imgThree,
  },
];

export function Testimonials() {
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

  const headerVariants: Variants = {
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
        duration: 0.7,
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
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      className="container mx-auto !py-20 px-10"
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
    >
      <motion.div
        className="flex flex-col items-center text-center mb-20"
        variants={headerVariants}
      >
        <motion.div
          className="bg-gray-900 w-12 h-12 rounded-xl flex justify-center items-center mb-10"
          whileHover={{
            scale: 1.1,
            rotate: 5,
            transition: { duration: 0.2 },
          }}
        >
          <IoPersonSharp className="text-white w-5 h-5" />
        </motion.div>
        <div>
          <h2 className="text-4xl font-semibold leading-[1.3] text-gray-900 mb-2">
            What Clients Say
          </h2>
          <p className="text-xl font-normal leading-relaxed mb-10 max-w-3xl text-center text-gray-500">
            Discover what our valued clients have to say about their experiences
            with our services. We take pride in delivering exceptional results
            and fostering lasting partnerships.
          </p>
        </div>
      </motion.div>

      <motion.div
        className="grid grid-col-1 md:grid-cols-3 lg:px-20 gap-x-8"
        variants={containerVariants}
      >
        {TESTIMONIALS.map((props, index) => (
          <motion.div key={index} variants={cardVariants}>
            <TestimonialCard {...props} img={props.img.src} />
          </motion.div>
        ))}
      </motion.div>
    </motion.div>
  );
}

export default Testimonials;
