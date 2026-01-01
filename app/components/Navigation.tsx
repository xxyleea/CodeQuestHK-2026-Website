"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import TyphoonLogo from "./TyphoonLogo";
import clsx from "clsx";
import { linksConfig } from "@/app/config/links";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/2025", label: "2025" },
  { href: "/partners", label: "Partners" },
  { href: "/contact", label: "Contact" },
];

export default function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <motion.nav
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
        className={clsx(
          "fixed top-0 right-0 left-0 z-50 transition-all duration-300",
          isScrolled ? "glass shadow-lg" : "bg-transparent"
        )}
      >
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between md:h-20">
            {/* Logo */}
            <Link href="/" className="group flex items-center gap-3">
              <TyphoonLogo size={40} animated />
              <span className="text-storm-white group-hover:text-electric-cyan font-[family-name:var(--font-space-grotesk)] text-xl font-bold transition-colors">
                TyphoonHacks
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden items-center gap-8 md:flex">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "relative font-medium transition-colors duration-300",
                    pathname === link.href
                      ? "text-electric-cyan"
                      : "text-storm-white hover:text-electric-cyan"
                  )}
                >
                  {link.label}
                  {pathname === link.href && (
                    <motion.div
                      layoutId="activeLink"
                      className="bg-electric-cyan absolute right-0 -bottom-1 left-0 h-0.5"
                      initial={{ scaleX: 0 }}
                      animate={{ scaleX: 1 }}
                      transition={{ duration: 0.3 }}
                    />
                  )}
                </Link>
              ))}
              <Link
                href={linksConfig.registration.participant.link}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-electric-cyan text-deep-space hover:bg-opacity-90 hover:shadow-electric-cyan/30 rounded-full px-5 py-2 font-semibold transition-all hover:shadow-lg"
              >
                {linksConfig.registration.participant.label}
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="text-storm-white hover:text-electric-cyan p-2 transition-colors md:hidden"
              aria-label="Toggle menu"
            >
              <motion.div
                animate={{ rotate: isMobileMenuOpen ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
              </motion.div>
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="bg-deep-space/95 fixed inset-0 z-40 backdrop-blur-lg md:hidden"
          >
            <div className="flex h-full flex-col items-center justify-center gap-8">
              {navLinks.map((link, index) => (
                <motion.div
                  key={link.href}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: 20 }}
                  transition={{ delay: index * 0.1 }}
                >
                  <Link
                    href={link.href}
                    onClick={() => setIsMobileMenuOpen(false)}
                    className={clsx(
                      "font-[family-name:var(--font-space-grotesk)] text-2xl font-bold",
                      pathname === link.href
                        ? "text-electric-cyan"
                        : "text-storm-white hover:text-electric-cyan"
                    )}
                  >
                    {link.label}
                  </Link>
                </motion.div>
              ))}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 20 }}
                transition={{ delay: 0.3 }}
              >
                <Link
                  href={linksConfig.registration.participant.link}
                  onClick={() => setIsMobileMenuOpen(false)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-electric-cyan text-deep-space rounded-full px-8 py-3 text-lg font-semibold"
                >
                  {linksConfig.registration.participant.label}
                </Link>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
