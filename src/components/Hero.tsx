import { Instagram, ChevronDown } from 'lucide-react';
import { motion } from 'motion/react';
import logo from '../assets/logo.png';

export function Hero() {
  const scrollToAbout = () => {
    const element = document.getElementById('about');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero"
      className="relative min-h-[calc(100vh-4rem)] flex items-start md:items-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage:
              'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="1"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
          }}
        />
      </div>

      {/* Large Background Logo - Right Side */}
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 0.25, x: 0 }}
        transition={{ duration: 1.2, ease: 'easeOut' }}
        className="absolute right-[-10%] top-1/2 -translate-y-1/2 pointer-events-none z-0"
      >
        <img
          src={logo}
          alt=""
          className="w-[70vw] h-[70vw] max-w-[700px] max-h-[700px] object-contain"
        />
      </motion.div>

      {/* Main Content */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col justify-between h-full py-8">
        <div className="flex-1 flex flex-col justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-left max-w-4xl"
          >
            {/* Event Name */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-cyan-400 text-2xl md:text-3xl font-semibold mb-3 tracking-wide"
              style={{ fontFamily: 'Montserrat, sans-serif' }}
            >
              TyphoonHacks 2026
            </motion.p>

            {/* Main Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="text-white leading-tight mb-5"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 800,
                letterSpacing: '-0.02em',
                fontSize: 'clamp(1.5rem, 4.5vw, 4rem)',
              }}
            >
              Hong Kong's first true 48-hour high school hackathon
            </motion.h1>

            {/* Theme with Fancy Hover Effect */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mb-6"
            >
              <div className="group inline-block relative px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500/10 to-blue-500/10 border border-cyan-500/30 cursor-pointer overflow-hidden transition-all duration-300 hover:border-cyan-400 hover:shadow-2xl hover:shadow-cyan-500/40 hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/0 via-cyan-400/40 to-cyan-500/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700" />
                <span className="relative text-cyan-300 text-sm md:text-base group-hover:text-cyan-200 transition-colors duration-300">
                  This year's theme:{' '}
                  <span className="font-semibold text-white group-hover:text-cyan-50 transition-colors duration-300">
                    Technology Consulting for the Future
                  </span>
                </span>
              </div>
            </motion.div>

            {/* Feature List */}
            <motion.ul
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="space-y-2 text-gray-300 text-sm md:text-base"
            >
              {[
                'Work with hackers from across HK',
                'Get real problems from industry partners',
                'Build from scratch in 48 hours',
                'No pre-prepared projects allowed',
              ].map((item, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                  className="flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 flex-shrink-0" />
                  {item}
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>

      {/* Bottom Right Section - Registration & CTA */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.9 }}
        className="absolute bottom-24 right-8 sm:right-12 lg:right-16 z-20 flex flex-col items-end gap-4"
      >
        <div className="group relative px-5 py-2.5 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-400/40 backdrop-blur-sm overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/0 via-yellow-300/30 to-yellow-400/0 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000" />
          <span className="relative text-yellow-300 text-base md:text-lg font-semibold tracking-wide">
            Registration opens soon...
          </span>
        </div>
        <a
          href="https://instagram.com/typhoonhackshk"
          target="_blank"
          rel="noopener noreferrer"
          className="group inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-600 hover:from-pink-600 hover:to-purple-700 text-white font-semibold rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-purple-500/30"
        >
          <Instagram className="w-5 h-5" />
          <span className="text-base">Follow for Updates</span>
        </a>
      </motion.div>

      {/* Scroll Down Indicator */}
      <motion.button
        onClick={scrollToAbout}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.1 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex flex-col items-center gap-1 text-cyan-400 hover:text-cyan-300 transition-colors cursor-pointer"
        aria-label="Scroll to learn more"
      >
        <span className="text-xs font-medium tracking-wider uppercase">
          Discover More
        </span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </motion.button>
    </div>
  );
}
