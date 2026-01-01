"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import { Users, Clock, Code, Trophy, Camera } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const stats = [
  { value: 72, label: "Participants", icon: Users },
  { value: 18, label: "Teams", icon: Trophy },
  { value: 12, label: "Hours", icon: Clock },
  { value: 8, label: "Projects Completed", icon: Code },
];

const photos = [
  { id: 1, caption: "Opening ceremony kick-off" },
  { id: 2, caption: "Teams collaborating" },
  { id: 3, caption: "Late night coding session" },
  { id: 4, caption: "Mentor guidance" },
  { id: 5, caption: "Final presentations" },
  { id: 6, caption: "Award ceremony" },
];

function Counter({ value, delay = 0 }: { value: number; delay?: number }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <motion.span
      ref={ref}
      initial={{ opacity: 0 }}
      animate={isInView ? { opacity: 1 } : {}}
      transition={{ delay }}
      className="text-electric-cyan font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
    >
      {isInView ? value : 0}
    </motion.span>
  );
}

export default function EventRecap() {
  return (
    <SectionWrapper>
      {/* Stats Bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="glass mb-16 rounded-2xl p-8"
      >
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          {stats.map((stat, index) => (
            <div key={stat.label} className="text-center">
              <div className="mb-2 flex justify-center">
                <stat.icon className="text-subtle-gray h-6 w-6" />
              </div>
              <Counter value={stat.value} delay={index * 0.1} />
              <p className="text-subtle-gray mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Photo Gallery */}
      <div className="mb-12 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl"
        >
          Event Highlights
        </motion.h2>
      </div>

      <div className="grid grid-cols-2 gap-4 md:grid-cols-3">
        {photos.map((photo, index) => (
          <motion.div
            key={photo.id}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            whileHover={{ scale: 1.05 }}
            className={`group relative cursor-pointer overflow-hidden rounded-xl ${
              index === 0 || index === 5
                ? "aspect-video md:col-span-2"
                : "aspect-square"
            }`}
          >
            {/* Placeholder for photo */}
            <div className="from-ocean-depth to-deep-space absolute inset-0 flex items-center justify-center bg-gradient-to-br">
              <Camera className="text-subtle-gray/50 h-12 w-12" />
            </div>

            {/* Overlay */}
            <div className="from-deep-space/80 absolute inset-0 flex items-end bg-gradient-to-t to-transparent p-4 opacity-0 transition-opacity group-hover:opacity-100">
              <p className="text-storm-white text-sm font-medium">
                {photo.caption}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
