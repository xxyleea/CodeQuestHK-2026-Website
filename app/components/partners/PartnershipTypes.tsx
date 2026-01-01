"use client";

import { motion } from "framer-motion";
import {
  Building2,
  Lightbulb,
  Gift,
  Users,
  MapPin,
  Award,
  Briefcase,
  Code,
  Presentation,
} from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const eventSponsorExamples = [
  { icon: MapPin, text: "Venue space for the 48-hour event" },
  { icon: Users, text: "Mentorship from industry professionals" },
  { icon: Gift, text: "Prizes (monetary, in-kind, or internships)" },
  { icon: Award, text: "Swag, food, and refreshments" },
  { icon: Building2, text: "Technology and equipment" },
];

const industryPartnerSteps = [
  {
    icon: Lightbulb,
    title: "Share a Challenge",
    description:
      "Present a real business problem your company faces that could benefit from fresh perspectives.",
  },
  {
    icon: Code,
    title: "Students Build Solutions",
    description:
      "Teams choose your challenge and develop working prototypes over 48 hours.",
  },
  {
    icon: Presentation,
    title: "Review & Connect",
    description:
      "See the solutions, provide feedback, and potentially pursue promising ideas further.",
  },
];

export default function PartnershipTypes() {
  return (
    <SectionWrapper id="partnership-types">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Ways to Partner
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Two Types of Partnership
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          We believe in flexible partnerships. Let&apos;s have a conversation to
          figure out what works best for both of us.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 gap-8 lg:grid-cols-2">
        {/* Event Sponsors Card */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass hover:border-electric-cyan/30 flex flex-col rounded-2xl border border-transparent p-8 transition-all"
        >
          <div className="bg-electric-cyan/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
            <Gift className="text-electric-cyan h-8 w-8" />
          </div>

          <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
            Event Sponsors
          </h3>

          <p className="text-subtle-gray mb-6 leading-relaxed">
            Help us make TyphoonHacks 2026 happen by providing resources to
            support the event. Every contribution—big or small—helps create an
            unforgettable experience for Hong Kong&apos;s young innovators.
          </p>

          <div className="mb-6 flex-grow">
            <h4 className="text-storm-white mb-4 text-sm font-semibold tracking-wide uppercase">
              Ways to Support
            </h4>
            <ul className="space-y-3">
              {eventSponsorExamples.map((item, index) => (
                <motion.li
                  key={item.text}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.05 }}
                  className="flex items-center gap-3"
                >
                  <div className="bg-electric-cyan/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg">
                    <item.icon className="text-electric-cyan h-4 w-4" />
                  </div>
                  <span className="text-storm-white/90 text-sm">
                    {item.text}
                  </span>
                </motion.li>
              ))}
            </ul>
          </div>

          <div className="border-electric-cyan/20 mt-auto border-t pt-6">
            <p className="text-subtle-gray text-sm italic">
              &ldquo;We don&apos;t have fixed tiers or packages. Tell us what
              you can offer, and we&apos;ll work together to make it
              happen.&rdquo;
            </p>
          </div>
        </motion.div>

        {/* Industry Partners Card */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="glass hover:border-warning-amber/30 flex flex-col rounded-2xl border border-transparent p-8 transition-all"
        >
          <div className="bg-warning-amber/10 mb-6 flex h-16 w-16 items-center justify-center rounded-2xl">
            <Briefcase className="text-warning-amber h-8 w-8" />
          </div>

          <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-2xl font-bold">
            Industry Partners
          </h3>

          <p className="text-subtle-gray mb-6 leading-relaxed">
            Bring real-world challenges for participants to solve. This
            year&apos;s theme is &ldquo;Technology Consulting for the
            Future&rdquo;—students will work on actual problems faced by partner
            companies.
          </p>

          <div className="mb-6 flex-grow">
            <h4 className="text-storm-white mb-4 text-sm font-semibold tracking-wide uppercase">
              How It Works
            </h4>
            <div className="space-y-4">
              {industryPartnerSteps.map((step, index) => (
                <motion.div
                  key={step.title}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-start gap-3"
                >
                  <div className="bg-warning-amber/10 border-warning-amber/30 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg border">
                    <span className="text-warning-amber font-[family-name:var(--font-jetbrains-mono)] text-xs font-bold">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <div>
                    <h5 className="text-storm-white text-sm font-semibold">
                      {step.title}
                    </h5>
                    <p className="text-subtle-gray text-sm">
                      {step.description}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="border-warning-amber/20 mt-auto border-t pt-6">
            <p className="text-subtle-gray text-sm italic">
              &ldquo;Get fresh perspectives on your business challenges from
              creative young minds with no preconceptions.&rdquo;
            </p>
          </div>
        </motion.div>
      </div>
    </SectionWrapper>
  );
}
