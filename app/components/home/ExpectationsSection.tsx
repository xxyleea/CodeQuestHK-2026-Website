"use client";

import React, { useRef, useState, useEffect } from "react";
import {
  AnimatePresence,
  motion,
  useScroll,
  useTransform,
  useSpring,
  type MotionValue,
} from "framer-motion";
import SectionWrapper from "../SectionWrapper";

const expectations = [
  {
    title: "Design Thinking Workshop",
    description:
      "Learn user-centered problem solving and creative approaches to real business challenges. Perfect for both designers and strategists.",
  },
  {
    title: "Pitch Training",
    description:
      "Master professional presentation skills, client interviewing techniques, and the art of storytelling for your project.",
  },
  {
    title: "Tech Stack Sessions",
    description:
      "Get familiar with modern development tools and master full-stack development under extreme time pressure—skills that take years to acquire.",
  },
  {
    title: "Consulting Frameworks",
    description:
      "Understand professional business analysis methods and develop frameworks used by top-tier consulting firms.",
  },
  {
    title: "Mentorship",
    description:
      "Connect with industry mentors and tech professionals from leading companies who will guide your team through roadblocks.",
  },
  {
    title: "Judging Panel",
    description:
      "Present your prototype to a panel of corporate reps and tech experts. Win prizes ranging from cash to internship opportunities.",
  },
];

const ExpectationCard = ({
  item,
  index,
  angle,
  radius,
  rotation,
  activeIndex,
}: {
  item: { title: string; description: string };
  index: number;
  angle: number;
  radius: number;
  isMobile: boolean;
  windowSize: { width: number; height: number };
  rotation: MotionValue<number>;
  activeIndex: number;
}) => {
  const isActive = activeIndex === index;

  return (
    <motion.div
      key={index}
      className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"
      style={{ rotate: angle }}
    >
      <motion.div
        animate={{
          backgroundColor: isActive ? "rgba(0, 212, 255, 0.06)" : undefined,
          boxShadow: isActive
            ? "0 10px 30px rgba(2,6,23,0.6)"
            : "0 4px 8px rgba(2,6,23,0.2)",
          borderColor: isActive ? "rgba(0,212,255,0.15)" : undefined,
        }}
        style={{
          rotate: useTransform(rotation, (r) => -(r + angle)),
          translateY: -radius,
        }}
        className="transition-colors duration-200"
      >
        <div className="bg-deep-space flex w-44 max-w-[220px] flex-col items-center justify-center rounded-lg border-2 border-slate-700 p-4 text-center md:w-56">
          <p className="text-storm-white mb-1 font-[family-name:var(--font-space-grotesk)] text-sm font-semibold md:text-base">
            {item.title}
          </p>
          <AnimatePresence>
            {isActive && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.18 }}
                className="text-subtle-gray px-2 pt-1 text-xs md:text-sm"
              >
                {item.description}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </motion.div>
    </motion.div>
  );
};

export default function ExpectationsSection() {
  const containerRef = useRef<null | HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [windowSize, setWindowSize] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
      setWindowSize({ width: window.innerWidth, height: window.innerHeight });
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"],
  });

  const rotationRange = isMobile
    ? [0, -360 + 360 / expectations.length]
    : [0, 144 - 144 / expectations.length];
  const rawRotation = useTransform(scrollYProgress, [0, 0.8], rotationRange);
  const rotation = useSpring(rawRotation, {
    stiffness: 80,
    damping: 25,
    restDelta: 0.001,
  });

  useEffect(() => {
    return rotation.onChange((latest) => {
      const normalizedRotation = ((latest % 360) + 360) % 360;
      const targetAngle = isMobile ? 90 : 0;

      let closestIdx = 0;
      let minDiff = Infinity;

      const workingExpectations = isMobile
        ? expectations
        : Array(2).fill(expectations).flat();

      for (let i = 0; i < workingExpectations.length; i++) {
        const initialAngle =
          ((isMobile ? 1 : -1) * i * (360 / workingExpectations.length) + 360) %
          360;
        const currentAngle = (initialAngle + normalizedRotation) % 360;
        const diff = Math.min(
          Math.abs(currentAngle - targetAngle),
          360 - Math.abs(currentAngle - targetAngle)
        );
        if (diff < minDiff) {
          minDiff = diff;
          closestIdx = i;
        }
      }
      setActiveIndex(closestIdx);
    });
  }, [rotation, isMobile]);

  const workingExpectations = isMobile
    ? expectations
    : Array(2).fill(expectations).flat();

  return (
    <SectionWrapper id="expectations">
      <div ref={containerRef} className="relative h-[280vh]">
        <div className="sticky top-0 h-[80vh] w-full overflow-hidden">
          <div className="mt-24 mb-16 text-center">
            <motion.span
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
            >
              Exciting activities await
            </motion.span>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
            >
              What to Expect
            </motion.h2>
          </div>

          <div
            className={`absolute inset-0 flex items-center justify-center ${
              isMobile
                ? "top-1/2 left-0 ml-[-300px] -translate-y-1/2"
                : "-bottom-120 left-1/2 mb-[-900px] -translate-x-1/2"
            }`}
          >
            {/* The Rotating Dial */}
            <motion.div
              style={{ rotate: rotation }}
              className="relative flex h-[320px] w-[320px] items-center justify-center rounded-full md:h-[600px] md:w-[600px]"
            >
              {workingExpectations.map((item, index) => {
                const angle =
                  ((isMobile ? 1 : -1) *
                    index *
                    (360 / workingExpectations.length) +
                    360) %
                  360;
                const radius = isMobile
                  ? Math.max(120, windowSize.width / 2 - 80)
                  : Math.max(200, windowSize.height / 2 + 200);
                return (
                  <ExpectationCard
                    key={index}
                    item={item}
                    index={index}
                    angle={angle}
                    radius={radius}
                    isMobile={isMobile}
                    windowSize={windowSize}
                    rotation={rotation}
                    activeIndex={activeIndex}
                  />
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
}
