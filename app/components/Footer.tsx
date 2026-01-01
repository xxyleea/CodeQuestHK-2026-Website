"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Mail, Instagram } from "lucide-react";
import TyphoonLogo from "./TyphoonLogo";
import { linksConfig } from "@/app/config/links";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/2025", label: "2025" },
  { href: "/partners", label: "Partners" },
  { href: "/#faq", label: "FAQ" },
];

const socialLinks = [
  {
    href: linksConfig.social.instagram,
    icon: Instagram,
    label: "Instagram",
  },
  { href: linksConfig.contact.general, icon: Mail, label: "Email" },
];

export default function Footer() {
  return (
    <footer className="bg-deep-space border-ocean-depth relative overflow-hidden border-t">
      {/* Background typhoon watermark */}
      <div className="pointer-events-none absolute inset-0 flex items-center justify-center opacity-5">
        <TyphoonLogo size={600} className="animate-spin-slow" />
      </div>

      <div className="relative mx-auto max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 lg:grid-cols-3">
          {/* Logo & Mission */}
          <div className="lg:col-span-1">
            <Link href="/" className="mb-4 flex items-center gap-3">
              <TyphoonLogo size={36} />
              <span className="text-storm-white font-[family-name:var(--font-space-grotesk)] text-lg font-bold">
                TyphoonHacks
              </span>
            </Link>
            <p className="text-subtle-gray text-sm leading-relaxed">
              Hong Kong&apos;s first true 48-hour high school hackathon.
              Building the next generation of innovators, one prototype at a
              time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] font-semibold">
              Quick Links
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-subtle-gray hover:text-electric-cyan flex items-center gap-2 text-sm transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] font-semibold">
              Connect With Us
            </h3>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <motion.a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="border-electric-cyan/30 text-storm-white hover:bg-electric-cyan hover:text-deep-space flex h-10 w-10 items-center justify-center rounded-full border transition-all"
                  aria-label={social.label}
                >
                  <social.icon size={18} />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Newsletter */}
          {/* <div>
            <h3 className="text-storm-white mb-4 font-[family-name:var(--font-space-grotesk)] font-semibold">
              Stay Updated
            </h3>
            <form className="space-y-3">
              <input
                type="email"
                placeholder="Enter your email"
                className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-lg border px-4 py-2 text-sm transition-colors focus:outline-none"
              />
              <button
                type="submit"
                className="bg-electric-cyan text-deep-space hover:bg-opacity-90 flex w-full items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-semibold transition-all"
              >
                Subscribe <ExternalLink size={14} />
              </button>
            </form>
          </div> */}
        </div>

        {/* Do we really need a copyright? */}
        <div className="border-ocean-depth mt-12 border-t pt-8">
          <div className="flex flex-col items-center justify-center gap-4 md:flex-row">
            <p className="text-subtle-gray font-[family-name:var(--font-jetbrains-mono)] text-xs">
              Made with ❤️ by the TyphoonHacks Team.
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
