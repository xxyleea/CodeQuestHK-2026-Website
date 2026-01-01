"use client";

import { motion } from "framer-motion";
import { CheckCircle, TrendingUp, Lightbulb } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const lessons = [
  {
    icon: CheckCircle,
    title: "What Worked Well",
    color: "text-success-teal",
    points: [
      "Strong mentorship program with industry professionals",
      "Clear communication channels via Discord",
      "Well-structured timeline with buffer time",
      "Diverse judging panel with transparent criteria",
      "Community building activities before and after the event",
    ],
  },
  {
    icon: TrendingUp,
    title: "What We Improved",
    color: "text-warning-amber",
    points: [
      "Enhanced team matching algorithm for solo participants",
      "Better technical support and debugging resources",
      "More diverse food options for dietary restrictions",
      "Improved venue navigation and signage",
      "Streamlined submission process",
    ],
  },
  {
    icon: Lightbulb,
    title: "How This Shaped TyphoonHacks 2026",
    color: "text-electric-cyan",
    points: [
      "Extended to 48 hours for more ambitious projects",
      "Partnering with real companies for problem statements",
      "Expanded mentor network across industries",
      "Focus on prototypes over presentations",
      "Larger venue to accommodate more participants",
    ],
  },
];

export default function LessonsLearned() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Our Journey
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Lessons Learned
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          Transparency matters. Here&apos;s what we learned from our 2025 event
          and how we&apos;re applying those lessons.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
        {lessons.map((lesson, index) => (
          <motion.div
            key={lesson.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className="glass rounded-2xl p-8"
          >
            <div
              className={`bg-ocean-depth mb-4 flex h-12 w-12 items-center justify-center rounded-full`}
            >
              <lesson.icon className={`h-6 w-6 ${lesson.color}`} />
            </div>

            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
              {lesson.title}
            </h3>

            <ul className="space-y-3">
              {lesson.points.map((point, pointIndex) => (
                <motion.li
                  key={pointIndex}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + pointIndex * 0.05 }}
                  className="text-subtle-gray flex items-start gap-2 text-sm"
                >
                  <span
                    className={`mt-1.5 h-1.5 w-1.5 rounded-full ${lesson.color.replace("text-", "bg-")} flex-shrink-0`}
                  />
                  {point}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
