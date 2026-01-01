"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import ParticleBackground from "@/app/components/ParticleBackground";

export default function PartnersHero() {
  const scrollToContent = () => {
    const nextSection = document.getElementById("partnership-types");
    nextSection?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative flex min-h-[60vh] items-center justify-center overflow-hidden pt-20">
      {/* Background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0a1628 0%, #0d2847 40%, #1a3a5c 70%, #0d2847 100%)",
        }}
      />

      <ParticleBackground />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl px-4 py-16 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1 }}
          className="mb-6 inline-block"
        >
          <span className="bg-electric-cyan/20 text-electric-cyan border-electric-cyan/30 rounded-full border px-4 py-2 text-sm font-semibold tracking-wider uppercase">
            We&apos;re Looking for Partners
          </span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-6xl lg:text-7xl"
        >
          Support the Next Generation of{" "}
          <span className="gradient-text">Tech Innovators</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
          className="text-storm-white/80 mb-6 text-xl md:text-2xl"
        >
          TyphoonHacks 2026 needs your support
        </motion.p>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-subtle-gray mx-auto max-w-2xl leading-relaxed"
        >
          We&apos;re building Hong Kong&apos;s premier student-led high school
          hackathon—a 48-hour innovation sprint where students tackle real-world
          challenges. Whether you can provide resources, mentorship, or industry
          problems to solve, there&apos;s a way to get involved.
        </motion.p>

        {/* Scroll indicator */}
        <motion.button
          onClick={scrollToContent}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-electric-cyan hover:text-electric-cyan/80 mx-auto mt-10 flex flex-col items-center gap-2 transition-colors"
        >
          <span className="text-sm">Learn how you can help</span>
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ChevronDown className="h-5 w-5" />
          </motion.div>
        </motion.button>
      </div>
    </section>
  );
}
