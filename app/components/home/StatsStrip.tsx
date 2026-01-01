"use client";

import { useEffect, useRef, useState, useCallback } from "react";
import { motion, useInView } from "framer-motion";
import { Sparkles } from "lucide-react";

interface StatItem {
  value: number;
  suffix: string;
  label: string;
}

const stats: StatItem[] = [
  { value: 35, suffix: "+", label: "Participants" },
  { value: 5, suffix: "", label: "Prototypes Built" },
  { value: 10, suffix: "+", label: "Schools Represented" },
  { value: 83, suffix: "%", label: "Rated 4-5 Stars" },
];

function AnimatedCounter({
  value,
  suffix,
  isInView,
  onComplete,
}: {
  value: number;
  suffix: string;
  isInView: boolean;
  onComplete: () => void;
}) {
  const [count, setCount] = useState(0);
  const hasAnimated = useRef(false);

  useEffect(() => {
    if (!isInView || hasAnimated.current) return;

    hasAnimated.current = true;
    const duration = 1500;
    const steps = 60;
    const increment = value / steps;
    const stepDuration = duration / steps;

    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
        onComplete();
      } else {
        setCount(Math.floor(current));
      }
    }, stepDuration);

    return () => clearInterval(timer);
  }, [isInView, value, onComplete]);

  return (
    <span className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

function StatCard({
  stat,
  index,
  isInView,
}: {
  stat: StatItem;
  index: number;
  isInView: boolean;
}) {
  const [showSparkle, setShowSparkle] = useState(false);

  const handleComplete = useCallback(() => {
    setShowSparkle(true);
    setTimeout(() => setShowSparkle(false), 1000);
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.1, duration: 0.5 }}
      className="relative flex flex-1 flex-col items-center justify-center px-6 py-6 md:px-8 md:py-8"
    >
      {/* Sparkle animation on counter complete */}
      {showSparkle && (
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: [0, 1, 0], scale: [0.5, 1.2, 1] }}
          transition={{ duration: 0.6 }}
          className="absolute -top-1 right-1/4"
        >
          <Sparkles className="text-warning-amber h-4 w-4" />
        </motion.div>
      )}

      {/* Stat value */}
      <div className="text-electric-cyan font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl lg:text-6xl">
        <AnimatedCounter
          value={stat.value}
          suffix={stat.suffix}
          isInView={isInView}
          onComplete={handleComplete}
        />
      </div>

      {/* Stat label */}
      <div className="text-storm-white/80 mt-2 text-center text-sm font-medium md:text-base">
        {stat.label}
      </div>
    </motion.div>
  );
}

export default function StatsStrip() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: "-50px" });

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-storm-white/70 mt-10 text-center text-base md:text-lg"
      >
        Here&apos;s what we achieved ...
      </motion.p>

      {/* Stats grid */}
      <div ref={containerRef} className="relative mx-auto max-w-5xl">
        {/* Stats container with glowing dividers */}
        <div className="flex flex-col md:flex-row">
          {stats.map((stat, index) => (
            <div key={stat.label} className="relative flex-1">
              {/* Vertical divider (desktop) */}
              {index > 0 && (
                <div className="from-electric-cyan/0 via-electric-cyan/40 to-electric-cyan/0 absolute top-4 bottom-4 left-0 hidden w-px bg-gradient-to-b md:block" />
              )}
              {/* Horizontal divider (mobile) */}
              {index > 0 && (
                <div className="from-electric-cyan/0 via-electric-cyan/40 to-electric-cyan/0 absolute top-0 right-4 left-4 h-px bg-gradient-to-r md:hidden" />
              )}
              <StatCard stat={stat} index={index} isInView={isInView} />
            </div>
          ))}
        </div>
      </div>

      {/* Scale up message */}
      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ delay: 0.6 }}
        className="text-storm-white/70 mt-10 text-center text-base md:text-lg"
      >
        ... This year, we&apos;re scaling up to bigger challenges ...
      </motion.p>
    </div>
  );
}
