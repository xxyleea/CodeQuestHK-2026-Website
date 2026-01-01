"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import ParticleBackground from "@/app/components/ParticleBackground";
import { linksConfig } from "@/app/config/links";

export default function FinalCTA() {
  // const [timeLeft, setTimeLeft] = useState({
  //   days: 0,
  //   hours: 0,
  //   minutes: 0,
  //   seconds: 0,
  // });

  // useEffect(() => {
  //   // Registration deadline: Feb 28, 2026
  //   const deadline = new Date("2026-02-28T23:59:59").getTime();

  //   const updateTimer = () => {
  //     const now = new Date().getTime();
  //     const difference = deadline - now;

  //     if (difference > 0) {
  //       setTimeLeft({
  //         days: Math.floor(difference / (1000 * 60 * 60 * 24)),
  //         hours: Math.floor(
  //           (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
  //         ),
  //         minutes: Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60)),
  //         seconds: Math.floor((difference % (1000 * 60)) / 1000),
  //       });
  //     }
  //   };

  //   updateTimer();
  //   const interval = setInterval(updateTimer, 1000);
  //   return () => clearInterval(interval);
  // }, []);

  return (
    <section className="relative overflow-hidden py-24">
      {/* Enhanced background */}
      <div
        className="absolute inset-0"
        style={{
          background:
            "linear-gradient(135deg, #0d2847 0%, #1a3a5c 50%, #0d2847 100%)",
        }}
      />
      <ParticleBackground />

      {/* Glow effect */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
        <div
          className="h-[600px] w-[600px] rounded-full opacity-20"
          style={{
            background:
              "radial-gradient(circle, rgba(0,212,255,0.4) 0%, transparent 70%)",
          }}
        />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl px-4 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mb-8 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl lg:text-6xl"
        >
          Registration Opening Soon!
        </motion.h2>

        {/* Countdown timer */}
        {/* <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="mb-10"
        >
          <div className="flex justify-center gap-4 md:gap-6">
            {[
              { value: timeLeft.days, label: "Days" },
              { value: timeLeft.hours, label: "Hours" },
              { value: timeLeft.minutes, label: "Minutes" },
              { value: timeLeft.seconds, label: "Seconds" },
            ].map((unit) => (
              <div
                key={unit.label}
                className="glass min-w-[70px] rounded-xl p-4 md:min-w-[90px]"
              >
                <div className="text-electric-cyan font-[family-name:var(--font-space-grotesk)] text-3xl font-bold md:text-4xl">
                  {String(unit.value).padStart(2, "0")}
                </div>
                <div className="text-subtle-gray mt-1 text-xs md:text-sm">
                  {unit.label}
                </div>
              </div>
            ))}
          </div>
        </motion.div> */}

        {/* CTA buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 flex flex-col items-center justify-center gap-4"
        >
          <Link
            href={linksConfig.registration.participant.link}
            target="_blank"
            rel="noopener noreferrer"
            className="group bg-electric-cyan text-deep-space relative overflow-hidden rounded-full px-10 py-4 text-lg font-bold"
          >
            <span className="relative z-10">
              {linksConfig.registration.participant.label}
            </span>
            <motion.div
              className="absolute inset-0 bg-white"
              initial={{ scale: 0, opacity: 0 }}
              whileHover={{ scale: 2, opacity: 0.2 }}
              transition={{ duration: 0.4 }}
              style={{ borderRadius: "50%", transformOrigin: "center" }}
            />
          </Link>
          <Link
            href="/contact"
            className="hover:text-electric-cyan text-white transition-colors"
          >
            Have questions? Contact us
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
