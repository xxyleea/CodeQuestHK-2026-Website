"use client";

import { motion } from "framer-motion";
import {
  Users,
  Lightbulb,
  GraduationCap,
  Heart,
  Eye,
  Rocket,
} from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const benefits = [
  {
    icon: Users,
    title: "Connect with Emerging Talent",
    description:
      "Meet Hong Kong's most motivated high school students—future engineers, designers, and entrepreneurs.",
  },
  {
    icon: Lightbulb,
    title: "Fresh Perspectives",
    description:
      "See your industry challenges through new eyes. Young minds often find solutions that experience overlooks.",
  },
  {
    icon: GraduationCap,
    title: "Support STEM Education",
    description:
      "Help cultivate the next generation of tech talent in Hong Kong through hands-on learning experiences.",
  },
  {
    icon: Heart,
    title: "Meaningful Community Impact",
    description:
      "Your support enables students who might not otherwise have access to such opportunities.",
  },
  {
    icon: Eye,
    title: "Brand Visibility",
    description:
      "Reach students, parents, and educators through our event, website, and social media channels.",
  },
  {
    icon: Rocket,
    title: "Early Innovation Access",
    description:
      "Be first to see working prototypes built by creative students tackling real-world problems.",
  },
];

export default function WhyPartner() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          The Opportunity
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Why Partner With TyphoonHacks?
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          Benefits of partnering with a true hackathon where ideas spark and
          everything is built from scratch in 48 hours.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {benefits.map((benefit, index) => (
          <motion.div
            key={benefit.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ y: -4 }}
            className="glass hover:border-electric-cyan/30 rounded-xl p-6 text-center transition-all"
          >
            <div className="mx-auto mb-4 flex h-14 w-14 items-center justify-center rounded-full">
              <benefit.icon className="text-electric-cyan h-7 w-7" />
            </div>
            <h3 className="text-storm-white mb-2 font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
              {benefit.title}
            </h3>
            <p className="text-subtle-gray text-sm leading-relaxed">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
