"use client";

import { motion } from "framer-motion";
import { Trophy, Award, Medal } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

function PrizesSkeleton() {
  const mainPrizesPlaceholder = [
    { icon: Medal, featured: false },
    { icon: Trophy, featured: true },
    { icon: Award, featured: false },
  ];
  const categoryPrizesCount = [0, 1, 2, 3];

  return (
    <div className="relative">
      {/* Coming Soon overlay */}
      <div className="absolute inset-0 z-10 flex items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="glass rounded-2xl px-8 py-6 text-center"
        >
          <motion.div
            animate={{ opacity: [0.5, 1, 0.5] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="text-electric-cyan mb-2 font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
          >
            Coming Soon
          </motion.div>
          <h3 className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-xl font-bold md:text-2xl">
            Prize Details
          </h3>
          <p className="text-subtle-gray mt-2 max-w-xs text-sm">
            Exciting prizes await! Details will be announced shortly.
          </p>
        </motion.div>
      </div>

      {/* Skeleton main prizes - podium style */}
      <div className="mb-16 flex flex-col items-end justify-center gap-6 opacity-30 md:flex-row">
        {mainPrizesPlaceholder.map((prize, index) => (
          <div
            key={index}
            className={`relative w-full md:w-72 ${
              prize.featured
                ? "md:-order-0"
                : index === 0
                  ? "md:order-first"
                  : "md:order-last"
            }`}
          >
            <div
              className={`glass rounded-2xl p-8 text-center ${
                prize.featured
                  ? "border-warning-amber/30 border-2 md:pb-12"
                  : ""
              }`}
            >
              {prize.featured && (
                <div className="bg-warning-amber/50 absolute -top-3 left-1/2 h-6 w-24 -translate-x-1/2 rounded-full" />
              )}

              <div className="mb-4">
                <prize.icon
                  className={`mx-auto h-12 w-12 ${
                    prize.featured
                      ? "text-warning-amber/50"
                      : "text-subtle-gray/50"
                  }`}
                />
              </div>

              {/* Skeleton place */}
              <div className="bg-storm-white/20 mx-auto mb-2 h-5 w-24 rounded" />

              {/* Skeleton amount */}
              <div
                className={`mx-auto mb-4 h-8 w-28 rounded ${
                  prize.featured ? "bg-warning-amber/30" : "bg-subtle-gray/30"
                }`}
              />

              {/* Skeleton items */}
              <div className="space-y-2">
                {[0, 1, 2].map((item) => (
                  <div
                    key={item}
                    className="bg-subtle-gray/20 mx-auto h-4 w-32 rounded"
                  />
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Skeleton category prizes */}
      <div className="grid grid-cols-2 gap-4 opacity-30 md:grid-cols-4">
        {categoryPrizesCount.map((index) => (
          <div key={index} className="glass rounded-xl p-4 text-center">
            {/* Skeleton category name */}
            <div className="bg-storm-white/20 mx-auto mb-2 h-4 w-28 rounded" />
            <div className="bg-storm-white/20 mx-auto mb-2 h-4 w-20 rounded" />
            {/* Skeleton prize amount */}
            <div className="bg-electric-cyan/30 mx-auto h-5 w-20 rounded" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default function PrizesSection() {
  return (
    <SectionWrapper id="prizes">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          What&apos;s at Stake
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Prizes & Recognition
        </motion.h2>
      </div>

      <PrizesSkeleton />
    </SectionWrapper>
  );
}
