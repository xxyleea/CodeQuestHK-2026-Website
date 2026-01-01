"use client";

import { motion } from "framer-motion";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function ShowcaseHero() {
  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
      {/* Background with flashback effect */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />

      {/* Film grain overlay */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Vignette effect */}
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse at center, transparent 0%, rgba(10, 22, 40, 0.5) 100%)",
        }}
      />

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="mb-6 inline-block"
        >
          <span className="bg-warning-amber/20 text-warning-amber border-warning-amber/30 rounded-full border px-4 py-2 text-sm font-semibold tracking-wider uppercase">
            Looking Back
          </span>
        </motion.div>

        {/* Title */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl lg:text-7xl"
        >
          Our 2025 Game Jam
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          className="text-storm-white/80 mb-8 text-xl md:text-2xl"
        >
          Where it all started — A showcase of what our team can deliver
        </motion.p>

        {/* Intro paragraph */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-subtle-gray mx-auto max-w-2xl leading-relaxed"
        >
          Before TyphoonHacks, our organizing committee ran a successful 12-hour
          game jam that brought together 72 passionate student developers. This
          experience laid the foundation for what would become Hong Kong&apos;s
          most ambitious high school hackathon.
        </motion.p>
      </div>
    </section>
  );
}
