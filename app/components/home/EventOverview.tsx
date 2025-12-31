"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import SectionWrapper from "@/app/components/SectionWrapper";

export default function EventOverview() {
  return (
    <SectionWrapper id="overview">
      {/* Headline Section */}
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          What is TyphoonHacks?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-6 max-w-3xl text-lg leading-relaxed md:text-xl"
        >
          Hong Kong&apos;s only student-run, high-school-only, 48-hour hackathon
          with a different theme every year.
        </motion.p>
      </div>

      {/* Diagonal Layout */}
      <div className="space-y-8 lg:relative lg:min-h-[700px] lg:space-y-0">
        {/* Row 1: Text Block 1 (top-left) + Image 1 (top-right) */}
        <div className="space-y-8 lg:absolute lg:top-0 lg:right-0 lg:left-0 lg:flex lg:items-start lg:justify-between lg:gap-8 lg:space-y-0">
          {/* Block 1 - Top left */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="max-w-md text-left"
          >
            <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
              A True Hackathon Experience
            </h3>
            <p className="text-subtle-gray leading-relaxed">
              TyphoonHacks is Hong Kong&apos;s first genuine 48-hour high school
              hackathon where students must build everything from scratch during
              the event. Unlike other competitions where participants
              pre-prepare their projects, TyphoonHacks requires all development
              to happen within the limited time frame—creating real-world
              pressure and authentic innovation.
            </p>
          </motion.div>

          {/* Image 1 - Top right */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.15, duration: 0.5 }}
            className="relative lg:mt-4 lg:mr-20 lg:w-72 lg:flex-shrink-0"
          >
            <div className="glass overflow-hidden rounded-xl">
              <div className="relative aspect-[4/3]">
                <Image
                  src="/codequest-coding.jpg"
                  alt="Students collaborating at a hackathon"
                  fill
                  sizes="(max-width: 1024px) 100vw, 288px"
                  className="object-cover"
                />
                <div className="from-deep-space/50 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
            </div>
            <div className="bg-electric-cyan/15 pointer-events-none absolute -inset-3 -z-10 rounded-2xl blur-xl" />
          </motion.div>
        </div>

        {/* Row 2: Text Block 2 (center, offset right) */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="max-w-sm text-left lg:absolute lg:top-[38%] lg:left-1/2 lg:-translate-x-1/4"
        >
          <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
            You belong in TyphoonHacks
          </h3>
          <p className="text-subtle-gray text-lg leading-relaxed italic">
            Whether you&apos;re a coder, designer, or business strategist,
            we&apos;ve got a place for you. Work in teams of 3–5, foster new
            connections and collaboration with fellow high schoolers, while
            having fun at this unique challenge.
          </p>
        </motion.div>

        {/* Row 3: Image 2 (bottom-left) + Text Block 3 (bottom-right) */}
        <div className="space-y-8 lg:absolute lg:right-0 lg:bottom-0 lg:left-0 lg:flex lg:items-end lg:justify-between lg:gap-8 lg:space-y-0">
          {/* Image 2 - Bottom left */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.25, duration: 0.5 }}
            className="relative order-2 lg:order-1 lg:mb-6 lg:ml-24 lg:w-64 lg:flex-shrink-0"
          >
            <div className="glass overflow-hidden rounded-xl">
              <div className="relative aspect-square">
                <Image
                  src="/codequest-presenting.jpg"
                  alt="Hackathon participants presenting"
                  fill
                  sizes="(max-width: 1024px) 100vw, 256px"
                  className="object-cover"
                />
                <div className="from-deep-space/50 absolute inset-0 bg-gradient-to-t to-transparent" />
              </div>
            </div>
            <div className="bg-electric-cyan/15 pointer-events-none absolute -inset-3 -z-10 rounded-2xl blur-xl" />
          </motion.div>

          {/* Block 3 - Bottom right */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="order-1 max-w-md text-left lg:order-2 lg:mr-4"
          >
            <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
              Each year brings a new challenge theme
            </h3>
            <p className="text-subtle-gray leading-relaxed">
              In 2025, we ran a game development jam where students created
              original games celebrating Hong Kong culture and sustainability.
            </p>
            <Link
              href="/2025"
              className="text-electric-cyan hover:text-electric-cyan/80 group mt-3 inline-flex items-center gap-1 text-sm font-medium transition-colors"
            >
              See our 2025 showcase
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
