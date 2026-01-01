"use client";

import { motion } from "framer-motion";
import { Check, Lightbulb, Users, Building } from "lucide-react";
import TyphoonLogo from "../TyphoonLogo";
import SectionWrapper from "@/app/components/SectionWrapper";

const features = [
  "Interview company representatives",
  "Design innovative solutions",
  "Build working prototypes",
  "Pitch to expert panel",
];

export default function ThemeSection() {
  return (
    <SectionWrapper>
      <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-5">
        {/* Left content - 3 columns */}
        <div className="lg:col-span-3">
          <motion.span
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
          >
            2026 Theme
          </motion.span>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-storm-white mt-4 mb-6 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl lg:text-5xl"
          >
            Technology Consulting for the Future
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-subtle-gray mb-8 text-lg leading-relaxed"
          >
            This year, we&apos;re bridging the gap between student innovation
            and industry needs. You&apos;ll act as junior tech consultants,
            receiving real business pain points from sponsoring companies.
            Examples could include retail customer experience optimization,
            smart logistics solutions, or other industry challenges.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4"
          >
            {features.map((feature, index) => (
              <motion.li
                key={feature}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.3 + index * 0.1 }}
                className="text-storm-white flex items-center gap-3"
              >
                <Check className="text-electric-cyan h-5 w-5 flex-shrink-0" />
                <span>{feature}</span>
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* Right visual - 2 columns */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="relative lg:col-span-2"
        >
          <div className="relative mx-auto aspect-square max-w-md">
            {/* Orbiting elements container */}
            <div className="absolute inset-0 flex items-center justify-center">
              {/* Orbit ring 1 - Lightbulb */}
              <motion.div
                className="absolute h-48 w-48"
                initial={{ rotate: 0, scale: 0 }}
                whileInView={{ rotate: 360, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  rotate: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  scale: {
                    duration: 0.5,
                    ease: "easeOut",
                  },
                }}
                animate={{ rotate: 360 }}
                style={{ animationDelay: "0.8s" }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.8,
                  }}
                  className="absolute h-full w-full"
                >
                  <div className="glass absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl p-4">
                    <Lightbulb className="text-warning-amber h-8 w-8" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Orbit ring 2 - Users */}
              <motion.div
                className="absolute h-56 w-56"
                initial={{ rotate: 120, scale: 0 }}
                whileInView={{ rotate: 480, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  rotate: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  scale: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.1,
                  },
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.8,
                  }}
                  className="absolute h-full w-full"
                >
                  <div className="glass absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl p-4">
                    <Users className="text-electric-cyan h-8 w-8" />
                  </div>
                </motion.div>
              </motion.div>

              {/* Orbit ring 3 - Building */}
              <motion.div
                className="absolute h-64 w-64"
                initial={{ rotate: 240, scale: 0 }}
                whileInView={{ rotate: 600, scale: 1 }}
                viewport={{ once: true }}
                transition={{
                  rotate: {
                    duration: 0.8,
                    ease: [0.16, 1, 0.3, 1],
                  },
                  scale: {
                    duration: 0.5,
                    ease: "easeOut",
                    delay: 0.2,
                  },
                }}
              >
                <motion.div
                  animate={{ rotate: 360 }}
                  transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear",
                    delay: 0.8,
                  }}
                  className="absolute h-full w-full"
                >
                  <div className="glass absolute -top-6 left-1/2 -translate-x-1/2 rounded-xl p-4">
                    <Building className="text-success-teal h-8 w-8" />
                  </div>
                </motion.div>
              </motion.div>
            </div>

            {/* Central illustration */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative h-48 w-48">
                {/* Connecting lines */}
                <svg
                  className="absolute inset-0 h-full w-full"
                  viewBox="0 0 200 200"
                >
                  <motion.path
                    d="M100,50 L150,100 L100,150 L50,100 Z"
                    stroke="rgba(0, 212, 255, 0.3)"
                    strokeWidth="1"
                    fill="none"
                    initial={{ pathLength: 0 }}
                    whileInView={{ pathLength: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 2 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="50"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.5 }}
                  />
                  <motion.circle
                    cx="150"
                    cy="100"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.7 }}
                  />
                  <motion.circle
                    cx="100"
                    cy="150"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.9 }}
                  />
                  <motion.circle
                    cx="50"
                    cy="100"
                    r="6"
                    fill="#00d4ff"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: 1.1 }}
                  />
                </svg>

                {/* Central hub */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <TyphoonLogo className="text-electric-cyan h-16 w-16" />
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
