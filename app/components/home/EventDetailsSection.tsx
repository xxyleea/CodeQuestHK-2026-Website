"use client";

import { motion } from "framer-motion";
import { Clock, School, UsersRound } from "lucide-react";
import Image from "next/image";
import SectionWrapper from "@/app/components/SectionWrapper";

const eventDetails = {
  dates: {
    day1: { date: "14 Feb 2026", day: "Saturday", time: "10:00 - 18:30" },
    day2: { date: "15 Feb 2026", day: "Sunday", time: "10:00 - 18:30" },
    note: "During CNY holidays",
  },
  participants: {
    count: "60-80",
    level: "S1-S5",
    schools: "All students from HK",
    teamSize: "3-5",
  },
  venue: {
    name: "City University of Hong Kong",
    location: "LT15, 4/F, Yeung Kin Man Academic Building",
  },
};

function DateCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.1, type: "spring", stiffness: 100 }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
        Event Dates
      </h3>

      {/* Day 1 */}
      <div className="mb-4">
        <div className="flex items-center gap-3">
          <div className="bg-electric-cyan text-deep-space flex h-10 w-10 items-center justify-center rounded-lg font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold">
            D1
          </div>
          <div>
            <p className="text-storm-white font-semibold">
              {eventDetails.dates.day1.date}
            </p>
            <p className="text-subtle-gray text-sm">
              {eventDetails.dates.day1.day}
            </p>
          </div>
        </div>
        <div className="text-subtle-gray mt-2 ml-[52px] flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          {eventDetails.dates.day1.time}
        </div>
      </div>

      {/* Day 2 */}
      <div className="mb-6">
        <div className="flex items-center gap-3">
          <div className="bg-electric-cyan text-deep-space flex h-10 w-10 items-center justify-center rounded-lg font-[family-name:var(--font-jetbrains-mono)] text-sm font-bold">
            D2
          </div>
          <div>
            <p className="text-storm-white font-semibold">
              {eventDetails.dates.day2.date}
            </p>
            <p className="text-subtle-gray text-sm">
              {eventDetails.dates.day2.day}
            </p>
          </div>
        </div>
        <div className="text-subtle-gray mt-2 ml-[52px] flex items-center gap-2 text-sm">
          <Clock className="h-4 w-4" />
          {eventDetails.dates.day2.time}
        </div>
      </div>

      {/* Note badge */}
      <div className="bg-vivid-purple/10 border-vivid-purple/20 mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
        <span className="text-vivid-purple text-xs font-medium">
          {eventDetails.dates.note}
        </span>
      </div>
    </motion.div>
  );
}

function ParticipantsCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.2, type: "spring", stiffness: 100 }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
        Participants
      </h3>

      {/* Main stat */}
      <div className="mb-6">
        <motion.span
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4, type: "spring" }}
          className="text-vivid-purple font-[family-name:var(--font-space-grotesk)] text-5xl font-bold"
        >
          {eventDetails.participants.count}
        </motion.span>
        <p className="text-storm-white mt-1 text-lg">Secondary Students</p>
      </div>

      {/* Details grid */}
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-deep-space/50 flex items-center gap-2 rounded-lg p-3">
          <School className="text-vivid-purple h-5 w-5 flex-shrink-0" />
          <div>
            <p className="text-storm-white text-sm font-medium">
              {eventDetails.participants.level}
            </p>
            <p className="text-subtle-gray text-xs">Grade Level</p>
          </div>
        </div>

        <div className="bg-deep-space/50 flex items-center gap-2 rounded-lg p-3">
          <UsersRound className="text-vivid-purple h-5 w-5 flex-shrink-0" />
          <div>
            <p className="text-storm-white text-sm font-medium">
              {eventDetails.participants.teamSize}
            </p>
            <p className="text-subtle-gray text-xs">Team Size</p>
          </div>
        </div>
      </div>

      {/* Schools badge */}
      <div className="bg-vivid-purple/10 border-vivid-purple/20 mt-4 inline-flex items-center gap-2 rounded-full border px-3 py-1.5">
        <span className="text-vivid-purple text-xs font-medium">
          {eventDetails.participants.schools}
        </span>
      </div>
    </motion.div>
  );
}

function VenueCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: 0.3, type: "spring", stiffness: 100 }}
      className="glass group relative h-full overflow-hidden rounded-2xl p-6 md:p-8"
    >
      <h3 className="text-storm-white mb-6 font-[family-name:var(--font-space-grotesk)] text-xl font-bold">
        Venue
      </h3>

      {/* CityU Logo and Name */}
      <div className="mb-6 flex items-center gap-4">
        <div className="bg-storm-white flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg p-2">
          <Image
            src="/cityu-logo.svg"
            alt="City University of Hong Kong"
            width={64}
            height={64}
            className="h-full w-full object-contain"
          />
        </div>
        <div>
          <p className="text-storm-white text-lg leading-tight font-bold">
            {eventDetails.venue.name}
          </p>
        </div>
      </div>

      {/* Location Details */}
      <div className="bg-deep-space/50 rounded-lg">
        <p className="text-storm-white text-sm font-medium">
          {eventDetails.venue.location}
        </p>
      </div>
    </motion.div>
  );
}

export default function EventDetailsSection() {
  return (
    <SectionWrapper id="details" dark>
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          TyphoonHacks 2026
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Event Details
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-subtle-gray mx-auto mt-4 max-w-2xl"
        >
          Everything you need to know about this year&apos;s competition
        </motion.p>
      </div>

      {/* Asymmetric grid layout */}
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
        {/* Dates - standard height */}
        <div className="md:col-span-1 lg:h-full">
          <DateCard />
        </div>

        {/* Participants - standard height */}
        <div className="md:col-span-1 lg:h-full">
          <ParticipantsCard />
        </div>

        {/* Venue - spans full width on medium, single on large */}
        <div className="md:col-span-2 lg:col-span-1 lg:h-full">
          <VenueCard />
        </div>
      </div>

      {/* Mini CTA */}
      {/* <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.5 }}
        className="mt-12 text-center"
      >
        <p className="text-subtle-gray text-sm">
          📧 Want updates when details are confirmed?{" "}
          <a
            href="#"
            className="text-electric-cyan hover:text-electric-cyan/80 underline underline-offset-2 transition-colors"
          >
            Join our mailing list
          </a>
        </p>
      </motion.div> */}
    </SectionWrapper>
  );
}
