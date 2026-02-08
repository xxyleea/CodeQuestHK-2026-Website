"use client";

import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import SectionWrapper from "@/app/components/SectionWrapper";

type TimelineEvent = {
  date: string;
  title: string;
  description: string;
  status: "upcoming" | "in progress" | "completed";
};

const events: TimelineEvent[] = [
  // Day 1
  {
    date: "Day 1 • 10:00-10:20",
    title: "Opening Ceremony",
    description: "Welcome address and official event kickoff",
    status: "upcoming",
  },
  {
    date: "Day 1 • 10:20-10:45",
    title: "Ice Breaking",
    description: "Get to know your fellow participants and team members",
    status: "upcoming",
  },
  {
    date: "Day 1 • 10:45-11:00",
    title: "Problem Statement Reveal",
    description: "The challenge is unveiled - let the hacking begin!",
    status: "upcoming",
  },
  {
    date: "Day 1 • 11:00-11:30",
    title: "Interview Session with Company Rep",
    description:
      "Opportunity for each group to ask questions about the problem statement (tentative)",
    status: "upcoming",
  },
  {
    date: "Day 1 • 11:30-12:30",
    title: "Dev Session 1",
    description: "Start building your solution and bringing ideas to life",
    status: "upcoming",
  },
  {
    date: "Day 1 • 12:30-14:00",
    title: "Lunch & Networking",
    description: "Refuel and connect with other teams",
    status: "upcoming",
  },
  {
    date: "Day 1 • 14:00-15:15",
    title: "Workshop 1",
    description: "Learn new skills and techniques to enhance your project",
    status: "upcoming",
  },
  {
    date: "Day 1 • 15:15-15:45",
    title: "Break",
    description: "Take a breather and recharge",
    status: "upcoming",
  },
  {
    date: "Day 1 • 15:45-18:00",
    title: "Dev Session 2",
    description: "Continue development and refine your solution",
    status: "upcoming",
  },
  {
    date: "Day 1 • 18:00-18:30",
    title: "Day 1 Debriefing",
    description: "Progress check-in and first day wrap-up",
    status: "upcoming",
  },
  // Day 2
  {
    date: "Day 2 • 10:00-11:00",
    title: "Dev Session 3",
    description: "Final sprint begins - polish and complete your project",
    status: "upcoming",
  },
  {
    date: "Day 2 • 11:00-12:30",
    title: "Workshop 2",
    description: "Take your project to the next level",
    status: "upcoming",
  },
  {
    date: "Day 2 • 12:45-14:00",
    title: "Lunch",
    description: "Last chance to fuel up before the final push",
    status: "upcoming",
  },
  {
    date: "Day 2 • 14:00-16:00",
    title: "Dev Session 4",
    description: "Final development session - finish strong!",
    status: "upcoming",
  },
  {
    date: "Day 2 • 16:00-16:30",
    title: "Final Preparation",
    description: "Rehearsal time - perfect your pitch and presentation",
    status: "upcoming",
  },
  {
    date: "Day 2 • 16:30-17:30",
    title: "Presentation & Judging",
    description: "Showcase your innovation to judges and compete for prizes",
    status: "upcoming",
  },
  {
    date: "Day 2 • 17:30-18:30",
    title: "Awards & Closing",
    description: "Results announcement, prize distribution, and celebration!",
    status: "upcoming",
  },
];

function EventCard({
  event,
  hoverDirection,
}: {
  event: TimelineEvent;
  hoverDirection?: "left" | "right";
}) {
  return (
    <motion.div
      whileHover={
        hoverDirection ? { x: hoverDirection === "left" ? -4 : 4 } : undefined
      }
      className={`glass inline-block max-w-sm rounded-xl p-4 md:p-5 ${
        hoverDirection === "left" ? "ml-auto" : ""
      }`}
    >
      <span className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-xs">
        {event.date}
      </span>
      <h3 className="text-storm-white mt-1 font-[family-name:var(--font-space-grotesk)] font-bold">
        {event.title}
      </h3>
      <p className="text-subtle-gray mt-1 text-sm">{event.description}</p>
    </motion.div>
  );
}

function TimelineSkeleton() {
  const skeletonItems = [0, 1, 2, 3, 4];

  return (
    <div className="relative">
      {/* Central line - desktop */}
      <div className="from-electric-cyan/30 via-electric-cyan/20 to-electric-cyan/10 absolute top-0 bottom-0 left-1/2 hidden w-px bg-gradient-to-b md:block" />

      {/* Central line - mobile */}
      <div className="from-electric-cyan/30 via-electric-cyan/20 to-electric-cyan/10 absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b md:hidden" />

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
            Timeline Details
          </h3>
          <p className="text-subtle-gray mt-2 max-w-xs text-sm">
            Stay tuned! Event schedule will be announced shortly.
          </p>
        </motion.div>
      </div>

      {/* Skeleton items */}
      <div className="space-y-8 opacity-30 md:space-y-0">
        {skeletonItems.map((index) => (
          <div
            key={index}
            className="relative flex items-start gap-4 md:flex-row md:items-center md:gap-0"
          >
            {/* Node */}
            <div className="bg-electric-cyan/50 absolute left-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2" />

            {/* Mobile: Skeleton Content */}
            <div className="flex-1 pl-12 md:hidden">
              <div className="glass rounded-xl p-4">
                <div className="bg-electric-cyan/20 h-3 w-20 rounded" />
                <div className="bg-storm-white/20 mt-2 h-4 w-32 rounded" />
                <div className="bg-subtle-gray/20 mt-2 h-3 w-full rounded" />
              </div>
            </div>

            {/* Desktop: Left side skeleton */}
            <div className="hidden w-5/12 pr-8 text-right md:block">
              {index % 2 === 0 && (
                <div className="glass ml-auto inline-block max-w-sm rounded-xl p-5">
                  <div className="bg-electric-cyan/20 ml-auto h-3 w-20 rounded" />
                  <div className="bg-storm-white/20 mt-2 ml-auto h-4 w-32 rounded" />
                  <div className="bg-subtle-gray/20 mt-2 h-3 w-full rounded" />
                </div>
              )}
            </div>

            {/* Desktop: Spacer for center line */}
            <div className="hidden w-2/12 md:block" />

            {/* Desktop: Right side skeleton */}
            <div className="hidden w-5/12 pl-8 md:block">
              {index % 2 !== 0 && (
                <div className="glass inline-block max-w-sm rounded-xl p-5">
                  <div className="bg-electric-cyan/20 h-3 w-20 rounded" />
                  <div className="bg-storm-white/20 mt-2 h-4 w-32 rounded" />
                  <div className="bg-subtle-gray/20 mt-2 h-3 w-full rounded" />
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function TimelineSection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  const isEmpty = events.length === 0;

  return (
    <SectionWrapper id="timeline">
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Mark Your Calendar
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Event Timeline
        </motion.h2>
      </div>

      {isEmpty ? (
        <TimelineSkeleton />
      ) : (
        <div ref={ref} className="relative">
          {/* Central line - desktop */}
          <div className="from-electric-cyan via-electric-cyan/50 to-electric-cyan/20 absolute top-0 bottom-0 left-1/2 hidden w-px bg-gradient-to-b md:block" />

          {/* Central line - mobile */}
          <div className="from-electric-cyan via-electric-cyan/50 to-electric-cyan/20 absolute top-0 bottom-0 left-6 w-px bg-gradient-to-b md:hidden" />

          <div className="space-y-8 md:space-y-0">
            {events.map((event, index) => (
              <motion.div
                key={`${event.title}-${index}`}
                initial={{ opacity: 0, y: 20 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ delay: index * 0.1 }}
                className="relative flex items-start gap-4 md:flex-row md:items-center md:gap-0"
              >
                {/* Node */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={isInView ? { scale: 1 } : {}}
                  transition={{ delay: index * 0.1 + 0.2 }}
                  className="bg-electric-cyan absolute left-6 z-10 h-3 w-3 -translate-x-1/2 rounded-full md:left-1/2"
                >
                  <motion.div
                    animate={{ scale: [1, 1.5, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.2,
                    }}
                    className="bg-electric-cyan/30 absolute inset-0 rounded-full"
                  />
                </motion.div>

                {/* Mobile: Content */}
                <div className="flex-1 pl-12 md:hidden">
                  <EventCard event={event} />
                </div>

                {/* Desktop: Left side content */}
                <div className="hidden w-5/12 pr-8 text-right md:block">
                  {index % 2 === 0 && (
                    <EventCard event={event} hoverDirection="left" />
                  )}
                </div>

                {/* Desktop: Spacer for center line */}
                <div className="hidden w-2/12 md:block" />

                {/* Desktop: Right side content */}
                <div className="hidden w-5/12 pl-8 md:block">
                  {index % 2 !== 0 && (
                    <EventCard event={event} hoverDirection="right" />
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      )}
    </SectionWrapper>
  );
}
