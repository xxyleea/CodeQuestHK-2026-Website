"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const comparisons = [
  {
    aspect: "Duration",
    others: "Weeks or Months",
    typhoonhacks: "48 Hours",
  },
  {
    aspect: "Focus",
    others: "Business Slides",
    typhoonhacks: "Working Prototypes + Pitches",
  },
  {
    aspect: "Work",
    others: "Pre-prepared Projects",
    typhoonhacks: "Built from Scratch",
  },
  {
    aspect: "Judging",
    others: "Presentation Skills",
    typhoonhacks: "Live Demos",
  },
  {
    aspect: "Problems",
    others: "Hypothetical Scenarios",
    typhoonhacks: "Real Industry Challenges",
  },
];

export default function ComparisonSection() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Not Your{" "}
          <span className="relative">
            <span className="relative z-10">Typical</span>
            <motion.span
              initial={{ scaleX: 0 }}
              whileInView={{ scaleX: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.4 }}
              className="bg-electric-cyan absolute top-1/2 left-0 h-0.5 w-full origin-left"
            />
          </span>{" "}
          Competition
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          We&apos;re redefining what a student tech competition looks like in
          Hong Kong.
        </motion.p>
      </div>

      <div className="mx-auto max-w-4xl overflow-x-auto">
        <table className="w-full border-collapse">
          <thead>
            <tr>
              <th className="text-subtle-gray pb-4 text-left font-semibold">
                Aspect
              </th>
              <th className="text-subtle-gray/60 pb-4 text-left font-semibold">
                Others
              </th>
              <th className="text-electric-cyan pb-4 text-left font-semibold">
                TyphoonHacks
              </th>
            </tr>
          </thead>
          <tbody>
            {comparisons.map((row, index) => (
              <motion.tr
                key={row.aspect}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="border-ocean-depth border-t"
              >
                <th
                  scope="row"
                  className="text-storm-white py-4 text-left font-[family-name:var(--font-space-grotesk)] font-semibold"
                >
                  {row.aspect}
                </th>
                <td className="text-subtle-gray/60 py-4 text-left">
                  <span className="flex items-center gap-2">
                    <X className="h-4 w-4 text-red-400/60" />
                    <span className="text-sm">{row.others}</span>
                  </span>
                </td>
                <td className="text-storm-white py-4 text-left">
                  <span className="flex items-center gap-2">
                    <Check className="text-success-teal h-4 w-4" />
                    <span className="text-sm font-medium">
                      {row.typhoonhacks}
                    </span>
                  </span>
                </td>
              </motion.tr>
            ))}
          </tbody>
        </table>
      </div>
    </SectionWrapper>
  );
}
