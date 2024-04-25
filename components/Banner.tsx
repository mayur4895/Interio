"use client";

import { motion } from "framer-motion";
import React from "react"; 
import { AuroraBackground } from "./ui/aurora-background";

export function Banner() {
  return (
    <AuroraBackground>
      <motion.div
        initial={{ opacity: 0.0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{
          delay: 0.3,
          duration: 0.8,
          ease: "easeInOut",
        }}
        className="relative flex h-fit flex-col gap-4 items-center justify-center px-4  rounded-xl"
      >
        <div className="text-3xl md:text-7xl font-bold dark:text-white text-center">
        Beautify And Enhance Your Space With Our Expertise
        </div>
        <div className="font-extralight text-center text-base md:text-xl dark:text-neutral-200 py-4">
        We Help You to Unloack the beautiy and comfort of your space that
          inspire and inriches your life
        </div>
        <button className="bg-black dark:bg-white rounded-full w-fit text-white dark:text-black px-4 py-2">
         Contact Now
        </button>
      </motion.div>
    </AuroraBackground>
  );
}
