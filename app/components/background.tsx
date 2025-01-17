"use client";

import { motion } from "framer-motion";
import React from "react";
import { AuroraBackground } from "../components/ui/aurora-background";
import { FlipWords } from "./ui/flipwords";
import ButtonsCard from "./ui/tailwind-css-buttons";

export function AuroraBackgroundDemo() {
  const words = ["Creating", "Developing", "Forming", "Constructing"];
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
        className="relative flex flex-col gap-4 items-center justify-center px-4 mt-48"
      >
        <div className="text-2xl md:text-4xl font-bold font-mono dark:text-white">
        <FlipWords words={words} /> the Future with Cutting-Edge Technolody
        </div>
        <div className="font-extralight font-mono text-base dark:text-neutral-200 py-4">
          Hello, I am a developer. I am passionate about creating innovative solutions.
        </div>
        <ButtonsCard>
          <a   href="/tafadzwacv.pdf" // Update this path to the actual location of your PDF
              download="TafadzwaChitanga.pdf"> 
            <button className="px-8 py-2 border border-black bg-transparent text-black  dark:border-white relative group transition duration-200">
              <div className="absolute -bottom-2 -right-2 bg-blue-300 h-full w-full -z-10 group-hover:bottom-0 group-hover:right-0 transition-all duration-200" />
              <span className="relative font-mono font-semibold">Download CV</span>
            </button>
          </a>
          </ButtonsCard>
      </motion.div>
    </AuroraBackground>
  );
}

export default AuroraBackgroundDemo   