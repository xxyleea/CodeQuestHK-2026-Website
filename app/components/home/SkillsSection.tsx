"use client";

import { motion } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

interface Skill {
  title: string;
  description: string;
}

const skills: Skill[] = [
  {
    title: "System Design & Development",
    description:
      "Master full-stack development under extreme time pressure—skills that normally take years to acquire.",
  },
  {
    title: "Design Thinking",
    description:
      "Learn user-centered problem solving and creative approaches to real business challenges.",
  },
  {
    title: "Real-World Collaboration",
    description:
      "Experience cross-school teaming with strangers, just like in professional environments.",
  },
  {
    title: "Professional Skills",
    description:
      "Develop client interviewing, presentation, and consulting framework skills.",
  },
];

export default function SkillsSection() {
  return (
    <SectionWrapper id="skills" dark>
      {/* Header */}
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Skills That Last
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Why TyphoonHacks?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl text-lg leading-relaxed"
        >
          In one weekend, you gain skills that normally take years to acquire
        </motion.p>
      </div>

      {/* 2x2 Grid */}
      <div className="mx-auto grid max-w-5xl grid-cols-1 gap-6 md:grid-cols-2">
        {skills.map((skill, index) => (
          <motion.div
            key={skill.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="glass rounded-xl p-6 md:p-8"
          >
            <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold md:text-2xl">
              {skill.title}
            </h3>
            <p className="text-subtle-gray leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
