"use client";

import React, { useRef, useEffect } from "react";
import { motion, useScroll } from "framer-motion";
import SectionWrapper from "../SectionWrapper";
import {
  Puzzle,
  Speaker,
  Microchip,
  BarChart,
  Handshake,
  Trophy,
  type LucideIcon,
} from "lucide-react";

const expectations = [
  {
    title: "Design Thinking Workshop",
    description:
      "Learn user-centered problem solving and creative approaches to real business challenges. Perfect for both designers and strategists.",
    icon: Puzzle,
  },
  {
    title: "Pitch Training",
    description:
      "Master professional presentation skills, client interviewing techniques, and the art of storytelling for your project.",
    icon: Speaker,
  },
  {
    title: "Tech Stack Sessions",
    description:
      "Get familiar with modern development tools and master full-stack development under extreme time pressure—skills that take years to acquire.",
    icon: Microchip,
  },
  {
    title: "Consulting Frameworks",
    description:
      "Understand professional business analysis methods and develop frameworks used by top-tier consulting firms.",
    icon: BarChart,
  },
  {
    title: "Mentorship",
    description:
      "Connect with industry mentors and tech professionals from leading companies who will guide your team through roadblocks.",
    icon: Handshake,
  },
  {
    title: "Judging Panel",
    description:
      "Present your prototype to a panel of corporate reps and tech experts. Win prizes ranging from cash to internship opportunities.",
    icon: Trophy,
  },
];

// Smooth easing functions
const easeInOutCubic = (t: number): number => {
  return t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;
};

const easeOutQuart = (t: number): number => {
  return 1 - Math.pow(1 - t, 4);
};

const easeInQuart = (t: number): number => {
  return t * t * t * t;
};

// Non-linear progress function with overlapping transitions
const createStepProgress = (progress: number, index: number, total: number) => {
  const segmentSize = 1 / total;
  const segmentStart = index * segmentSize;
  const segmentEnd = (index + 1) * segmentSize;

  // Extended transitions that overlap between segments
  const entryDuration = 0.2; // 20% of segment for entry
  const holdDuration = 0.5; // 50% of segment for holding at center

  const entryStart = segmentStart - segmentSize * 0.15; // Start entering before segment
  const entryEnd = segmentStart + segmentSize * entryDuration;
  const holdEnd = segmentStart + segmentSize * (entryDuration + holdDuration);
  const exitStart = holdEnd;
  const exitEnd = segmentEnd + segmentSize * 0.15; // Continue exiting into next segment

  // Before entry
  if (progress < entryStart) return -1;

  // Entry transition with smooth easing
  if (progress < entryEnd) {
    const t = (progress - entryStart) / (entryEnd - entryStart);
    return easeOutQuart(t) - 1; // -1 to 0
  }

  // Hold at center
  if (progress < holdEnd) {
    return 0;
  }

  // Exit transition with smooth easing
  if (progress < exitEnd) {
    const t = (progress - exitStart) / (exitEnd - exitStart);
    return easeInQuart(t); // 0 to 1
  }

  // After exit
  return 1;
};

const ExpectationCard = ({
  item,
  index,
  scrollProgress,
}: {
  item: {
    title: string;
    description: string;
    icon: LucideIcon;
  };
  index: number;
  scrollProgress: number;
}) => {
  const cardProgress = createStepProgress(
    scrollProgress,
    index,
    expectations.length
  );

  // Transform values based on card progress
  // -1 = off screen right, 0 = centered, 1 = off screen left
  const x = cardProgress * -100; // Percentage based positioning

  // Smoother opacity transitions with overlap
  const opacity = (() => {
    if (cardProgress <= -0.5) return 0;
    if (cardProgress >= 0.5) return 0;
    if (cardProgress < -0.2) {
      // Fading in
      return easeInOutCubic((cardProgress + 0.5) / 0.3);
    }
    if (cardProgress > 0.2) {
      // Fading out
      return easeInOutCubic((0.5 - cardProgress) / 0.3);
    }
    return 1; // Fully visible
  })();

  const scale = (() => {
    const absProgress = Math.abs(cardProgress);
    if (absProgress > 0.3) return 0.85;
    if (cardProgress === 0) return 1;
    return 1 - absProgress * 0.5;
  })();

  const blur = Math.abs(cardProgress) > 0.4 ? Math.abs(cardProgress) * 10 : 0;

  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-full max-w-[90%] -translate-x-1/2 -translate-y-1/2 px-4 md:max-w-2xl"
      style={{
        x: `${x}%`,
        opacity,
        scale,
        filter: `blur(${blur}px)`,
        zIndex: Math.abs(cardProgress) < 0.3 ? 10 : 5,
      }}
      transition={{
        type: "spring",
        stiffness: 50,
        damping: 20,
      }}
    >
      <div className="relative">
        {/* Glow effect for centered card */}
        {Math.abs(cardProgress) < 0.2 && (
          <motion.div
            className="from-electric-cyan/20 via-electric-cyan/10 to-electric-cyan/20 absolute -inset-4 rounded-2xl bg-gradient-to-r blur-xl"
            animate={{ opacity: 1 - Math.abs(cardProgress) * 5 }}
          />
        )}

        <div className="bg-deep-space/95 hover:border-electric-cyan/30 relative rounded-xl border-2 border-slate-700 p-6 shadow-2xl backdrop-blur-sm transition-colors duration-300 md:p-8">
          {/* Icon */}
          <div className="mb-4 flex items-center justify-center">
            <div className="flex h-16 w-16 items-center justify-center text-4xl transition-transform duration-300 hover:scale-125 md:h-20 md:w-20 md:text-5xl">
              <item.icon />
            </div>
          </div>

          {/* Content */}
          <div className="text-center">
            <h3 className="text-storm-white mb-3 font-[family-name:var(--font-space-grotesk)] text-xl font-bold md:mb-4 md:text-3xl">
              {item.title}
            </h3>
            <p className="text-subtle-gray font-[family-name:var(--font-inter)] text-sm leading-relaxed md:text-lg md:leading-relaxed">
              {item.description}
            </p>
          </div>

          {/* Progress indicator dot */}
          <div className="mt-6 flex justify-center gap-2">
            {expectations.map((_, i) => (
              <div
                key={i}
                className={`h-2 w-2 rounded-full transition-all duration-300 ${
                  i === index ? "bg-electric-cyan w-8" : "bg-subtle-gray/40"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default function ExpectationsSection() {
  const containerRef = useRef<null | HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  // Track scroll progress for all cards
  const [scrollValue, setScrollValue] = React.useState(0);

  useEffect(() => {
    return scrollYProgress.onChange((v) => {
      // Remap scroll progress to start animation only when section is properly in view
      // This prevents title from scrolling out of view on mobile
      const remapped = Math.max(0, Math.min(1, (v - 0.1) / 0.8));
      setScrollValue(remapped);
    });
  }, [scrollYProgress]);

  return (
    <SectionWrapper id="expectations">
      <div ref={containerRef} className="relative h-[600vh]">
        <div className="sticky top-18 mb-[-30vh] flex h-screen w-full flex-col items-center justify-center overflow-hidden md:top-22">
          {/* Header */}
          <div className="absolute top-0 right-0 left-0 z-20 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-xs tracking-wider uppercase md:text-sm"
            >
              Exciting activities await
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-storm-white mt-2 font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:mt-4 md:text-5xl"
            >
              What to Expect
            </motion.h2>
          </div>

          {/* Scroll hint */}
          <motion.div
            className="text-subtle-gray absolute bottom-8 left-1/2 -translate-x-1/2 text-center text-sm md:bottom-12"
            initial={{ opacity: 0 }}
            animate={{ opacity: scrollValue < 0.05 ? 1 : 0 }}
          >
            <div className="mb-2">Scroll to explore</div>
            <motion.div
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 1.5, repeat: Infinity }}
              className="text-electric-cyan text-2xl"
            >
              ↓
            </motion.div>
          </motion.div>

          {/* Cards container */}
          <div className="relative h-full w-full">
            {expectations.map((item, index) => (
              <ExpectationCard
                key={index}
                item={item}
                index={index}
                scrollProgress={scrollValue}
              />
            ))}
          </div>

          {/* Background decorative elements */}
          <div className="pointer-events-none absolute inset-0 opacity-30">
            <div className="bg-electric-cyan/10 absolute top-1/4 left-1/4 h-64 w-64 rounded-full blur-3xl" />
            <div className="bg-electric-cyan/10 absolute right-1/4 bottom-1/4 h-64 w-64 rounded-full blur-3xl" />
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
