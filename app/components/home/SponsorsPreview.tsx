"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

const benefits = [
  {
    title: "Brand Visibility",
    description: "Showcase your brand to talented young innovators",
  },
  {
    title: "Real Solutions",
    description: "Get fresh perspectives on your company's challenges",
  },
  {
    title: "Talent Pipeline",
    description: "Connect with the next generation of tech talent",
  },
];

export default function SponsorsPreview() {
  return (
    <SectionWrapper>
      <div className="text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Partner With Us
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Seeking Partners
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-storm-white/70 mx-auto mt-6 max-w-2xl text-lg"
        >
          We&apos;re looking for{" "}
          <span className="text-electric-cyan">event sponsors</span> to help
          make TyphoonHacks possible, and{" "}
          <span className="text-electric-cyan">industry partners</span> to
          contribute real-world problem statements that challenge our
          participants.
        </motion.p>

        {/* Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mt-12 grid gap-6 md:grid-cols-3"
        >
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 + index * 0.1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="glass group relative cursor-pointer overflow-hidden rounded-xl p-6 transition-all duration-300"
            >
              {/* Animated gradient border on hover */}
              <div className="from-electric-cyan via-vivid-purple to-electric-cyan absolute inset-0 rounded-xl bg-gradient-to-r opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <div className="from-deep-space to-deep-space absolute inset-[2px] rounded-[10px] bg-gradient-to-br transition-all duration-300" />

              {/* Glow effect */}
              <div className="bg-electric-cyan/20 absolute -inset-1 rounded-xl opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />

              <div className="relative z-10">
                <h3 className="text-storm-white group-hover:text-electric-cyan font-[family-name:var(--font-space-grotesk)] text-lg font-bold transition-colors duration-300">
                  {benefit.title}
                </h3>
                <p className="text-storm-white/60 group-hover:text-storm-white/80 mt-2 text-sm transition-colors duration-300">
                  {benefit.description}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>

        {/* Testimonial */}
        {/* Need their approval first */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mx-auto mt-12 max-w-2xl"
        >
          <div className="glass relative rounded-2xl p-6 text-left">
            <span className="text-electric-cyan/30 absolute -top-2 left-4 font-serif text-6xl">&ldquo;</span>
            <p className="text-storm-white/80 relative z-10 italic">
              I was genuinely blown away by how much these students could build—from game mechanics to narrative worldbuilding. At this rate, we might have to start hiring interns from secondary schools.
            </p>
            <div className="mt-4 flex items-center gap-3">
              <div className="bg-electric-cyan/20 flex h-10 w-10 items-center justify-center rounded-full">
                <span className="text-electric-cyan text-sm font-bold">CEO</span>
              </div>
              <div>
                <p className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-sm font-semibold">
                  [Name]]
                </p>
                <p className="text-storm-white/50 text-xs">
                  CodeQuestHK 2025 Judge
                </p>
              </div>
            </div>
          </div>
        </motion.div> */}

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-10"
        >
          <a
            href="/partners"
            className="border-electric-cyan/50 text-electric-cyan hover:bg-electric-cyan/10 inline-flex items-center gap-2 rounded-full border-2 px-6 py-3 font-semibold transition-all"
          >
            Become a Partner
          </a>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
