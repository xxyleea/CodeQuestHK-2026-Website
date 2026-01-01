"use client";

import { motion } from "framer-motion";
import { Mail } from "lucide-react";
import Link from "next/link";

export default function PartnerCTA() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="glass rounded-2xl p-12 text-center"
    >
      <div className="flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
        <Link
          href="/contact"
          className="bg-electric-cyan text-deep-space hover:bg-electric-cyan/90 flex items-center gap-2 rounded-lg px-8 py-4 font-bold transition-all"
        >
          <Mail className="h-5 w-5" />
          Contact Us
        </Link>
      </div>
    </motion.div>
  );
}
