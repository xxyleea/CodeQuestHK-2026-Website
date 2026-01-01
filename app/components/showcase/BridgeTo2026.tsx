"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Gamepad2, Zap } from "lucide-react";

export default function BridgeTo2026() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="mx-auto max-w-7xl px-4">
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-2xl md:grid-cols-2">
          {/* Past - 2025 */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, #1a1a1a 0%, #2d2d2d 100%)",
            }}
          >
            {/* Sepia overlay */}
            <div className="absolute inset-0 bg-amber-900/20 mix-blend-overlay" />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <Gamepad2 className="h-8 w-8 text-amber-200/60" />
                <span className="text-sm tracking-wider text-amber-200/60 uppercase">
                  2025
                </span>
              </div>

              <h3 className="mb-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold text-amber-100/80 md:text-4xl">
                Game Jam
              </h3>

              <ul className="mb-6 space-y-2 text-amber-200/50">
                <li>• 12-hour event</li>
                <li>• 72 participants</li>
                <li>• Game development focus</li>
                <li>• Our first event</li>
              </ul>

              <p className="text-sm text-amber-200/40 italic">
                Where the journey began...
              </p>
            </div>
          </motion.div>

          {/* Center arrow */}
          <motion.div
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="absolute top-1/2 left-1/2 z-10 hidden -translate-x-1/2 -translate-y-1/2 md:flex"
          >
            <div className="bg-electric-cyan shadow-electric-cyan/30 flex h-16 w-16 items-center justify-center rounded-full shadow-lg">
              <ArrowRight className="text-deep-space h-8 w-8" />
            </div>
          </motion.div>

          {/* Future - 2026 */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative p-12 md:p-16"
            style={{
              background: "linear-gradient(135deg, #0d2847 0%, #1a3a5c 100%)",
            }}
          >
            {/* Glow overlay */}
            <div
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                background:
                  "radial-gradient(circle at top right, rgba(0, 212, 255, 0.3), transparent 60%)",
              }}
            />

            <div className="relative">
              <div className="mb-6 flex items-center gap-3">
                <Zap className="text-electric-cyan h-8 w-8" />
                <span className="text-electric-cyan text-sm tracking-wider uppercase">
                  2026
                </span>
              </div>

              <h3 className="gradient-text mb-4 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">
                TyphoonHacks
              </h3>

              <ul className="text-storm-white/80 mb-6 space-y-2">
                <li>• 48-hour hackathon</li>
                <li>• 200+ participants</li>
                <li>• Real industry problems</li>
                <li>• Working prototypes</li>
              </ul>

              <p className="text-electric-cyan text-sm font-medium">
                The next evolution →
              </p>
            </div>
          </motion.div>
        </div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <p className="text-subtle-gray mb-6">
            Experience the evolution. Be part of Hong Kong&apos;s most ambitious
            student hackathon.
          </p>
          <Link
            href="/"
            className="bg-electric-cyan text-deep-space hover:shadow-electric-cyan/30 inline-flex items-center gap-2 rounded-full px-8 py-4 text-lg font-bold transition-all hover:shadow-lg"
          >
            Register for 2026
            <ArrowRight className="h-5 w-5" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
