"use client";

import React from "react";
import { aboutText, coreStrengths, interests } from "@/app/data/about";
import { motion, Variants } from "framer-motion";

// Container variant for staggering children
const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      delayChildren: 0.2,
    },
  },
};

// Individual item variant
const itemVariants: Variants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const, // TS-safe
    },
  },
};

export default function About() {
  return (
    <motion.section
      id="about"
      className="py-20 bg-base-200"
      variants={containerVariants}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
    >
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <motion.div variants={itemVariants} className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-bold mb-4">Who Am I</h2>
          <div className="w-24 h-1 bg-primary mx-auto"></div>
        </motion.div>

        {/* Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <motion.div variants={itemVariants}>
            <div className="prose prose-lg max-w-none">
              {aboutText.map((paragraph, idx) => (
                <p key={idx} className="text-lg leading-relaxed mb-6">
                  {paragraph}
                </p>
              ))}
            </div>
          </motion.div>

          {/* Cards */}
          <motion.div variants={itemVariants} className="space-y-6">
            {/* Core Strengths */}
            <motion.div
              variants={itemVariants}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h3 className="card-title text-primary">Core Strengths</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {coreStrengths.map((strength, idx) => (
                    <span
                      key={idx}
                      className="badge badge-primary text-sm px-3 py-2 sm:px-4 sm:py-4 break-words max-w-full"
                    >
                      {strength}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Interests */}
            <motion.div
              variants={itemVariants}
              className="card bg-base-100 shadow-xl"
            >
              <div className="card-body">
                <h3 className="card-title text-secondary">Interests</h3>
                <div className="flex flex-wrap gap-2 mt-2">
                  {interests.map((interest, idx) => (
                    <span
                      key={idx}
                      className="badge badge-secondary text-sm px-3 py-2 sm:px-4 sm:py-4 break-words max-w-full"
                    >
                      {interest}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
}
