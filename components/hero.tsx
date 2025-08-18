"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import apple from "../public/logos/logo-apple.png";
import google from "../public/logos/logo-google.png";
import landing from "../public/image/iphones.png";
import { motion, Variants } from "framer-motion";

function Hero() {
  // Animation variants for staggered entrance
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
      y: 30,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.6,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    },
  };

  const imageVariants: Variants = {
    hidden: {
      opacity: 0,
      x: 50,
      scale: 0.9,
      rotateY: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      scale: 1,
      rotateY: 0,
      transition: {
        duration: 0.8,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.3,
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 20,
      scale: 0.9,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: [0.25, 0.46, 0.45, 0.94],
      },
    },
  };

  const cardVariants: Variants = {
    hidden: {
      opacity: 0,
      y: 40,
      scale: 0.95,
    },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        duration: 0.7,
        ease: [0.25, 0.46, 0.45, 0.94],
        delay: 0.6,
      },
    },
  };

  return (
    <div className="relative min-h-screen w-full">
      <motion.header
        className="grid !min-h-[49rem] bg-[#212121]"
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        <div className="container mx-auto mt-32 grid h-full w-full grid-cols-1 place-items-center lg:mt-14 lg:grid-cols-2 text-white lg:px-20 px-10">
          <div className="col-span-1">
            <motion.h1
              className="scroll-m-20 text-6xl font-extrabold tracking-tight text-balance mb-7"
              variants={itemVariants}
            >
              Your Perfect <br /> Learning App
            </motion.h1>

            <motion.p
              className="mb-7 !text-white md:pr-16 xl:pr-36 text-xl"
              variants={itemVariants}
            >
              Our app is here to empower you on your quest for knowledge,
              anytime and anywhere.
            </motion.p>

            <motion.h6 className="mb-4 font-bold" variants={itemVariants}>
              Get the app
            </motion.h6>

            <motion.div
              className="flex flex-col gap-2 md:mb-2 md:w-10/12 md:flex-row"
              variants={containerVariants}
            >
              <motion.div variants={buttonVariants}>
                <Button
                  variant={"secondary"}
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src={apple}
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  App Store
                </Button>
              </motion.div>

              <motion.div variants={buttonVariants}>
                <Button
                  variant={"secondary"}
                  size="lg"
                  color="white"
                  className="flex justify-center items-center gap-3"
                >
                  <Image
                    width={256}
                    height={256}
                    src={google}
                    alt="metamask"
                    className="w-6 h-6"
                  />
                  Google Play
                </Button>
              </motion.div>
            </motion.div>
          </div>

          <motion.div variants={imageVariants} className="col-span-1">
            <Image
              width={470}
              height={576}
              src={landing}
              alt="team work"
              className="col-span-1 my-36 h-full max-h-[30rem] -translate-y-32 md:max-h-[36rem] lg:my-0 lg:ml-auto lg:max-h-[40rem] lg:translate-y-0"
            />
          </motion.div>
        </div>
      </motion.header>

      <motion.div
        className="mx-14 :lgx-26 -mt-24 rounded-xl bg-white p-5 md:p-14 shadow-md"
        initial="hidden"
        animate="visible"
        variants={cardVariants}
      >
        <div>
          <motion.h3
            className="mb-3 text-3xl font-bold"
            variants={itemVariants}
          >
            Learning App
          </motion.h3>
          <motion.p
            className="font-normal !text-gray-500 lg:w-5/12"
            variants={itemVariants}
          >
            Download our app to dive into a vast library of courses, tutorials,
            and study materials on a wide range of subjects - from programming
            and language learning to personal development and beyond
          </motion.p>
        </div>
      </motion.div>
    </div>
  );
}

export default Hero;
