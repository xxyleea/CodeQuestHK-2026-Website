"use client";

import { motion } from "framer-motion";

interface TyphoonLogoProps {
  size?: number;
  className?: string;
  animated?: boolean;
}

export default function TyphoonLogo({
  size = 40,
  className = "",
  animated = false,
}: TyphoonLogoProps) {
  return (
    <motion.svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      whileHover={animated ? { scale: 1.05 } : undefined}
      style={
        animated
          ? { filter: "drop-shadow(0 0 10px rgba(0, 212, 255, 0.5))" }
          : undefined
      }
    >
      {/* Typhoon spiral line art */}
      <motion.path
        d="M50 10 
           C 70 10, 85 25, 85 45 
           C 85 55, 80 65, 70 70 
           C 60 75, 50 75, 45 70
           C 40 65, 38 58, 42 52
           C 46 46, 52 45, 56 48
           C 60 51, 60 56, 56 58
           C 52 60, 48 58, 50 54"
        stroke="white"
        strokeWidth="2.5"
        strokeLinecap="round"
        fill="none"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2, ease: "easeInOut" }}
      />
      {/* Outer spiral arm */}
      <motion.path
        d="M50 5
           C 75 5, 95 25, 95 50
           C 95 75, 75 95, 50 95
           C 30 95, 15 82, 12 65"
        stroke="white"
        strokeWidth="1.5"
        strokeLinecap="round"
        fill="none"
        opacity="0.6"
        initial={animated ? { pathLength: 0 } : { pathLength: 1 }}
        animate={{ pathLength: 1 }}
        transition={{ duration: 2.5, ease: "easeInOut", delay: 0.3 }}
      />
    </motion.svg>
  );
}
