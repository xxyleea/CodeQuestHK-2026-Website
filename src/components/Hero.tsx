import React from 'react';
import { Calendar, Users, Trophy, ArrowDown } from 'lucide-react';
import { motion } from 'motion/react';

export function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900"
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

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="inline-block bg-cyan-500/20 backdrop-blur-sm text-cyan-300 px-4 py-2 rounded-full mb-6 border border-cyan-500/30">
            14–15 February 2026 • Hong Kong
          </div>

          <h1 className="text-white mb-6 mx-auto">
            <div
              className="mb-4 leading-none whitespace-nowrap"
              style={{
                fontFamily: 'Montserrat, sans-serif',
                fontWeight: 900,
                letterSpacing: '-0.04em',
                fontSize: 'clamp(2.5rem, 10vw, 12rem)',
              }}
            >
              TyphoonHacks 2026
            </div>
            <div
              className="text-xl md:text-2xl font-semibold text-cyan-300 text-center"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Hong Kong Inter-School 48-Hour Hackathon
            </div>
          </h1>

          <p className="text-xl text-gray-300 max-w-3xl mx-auto mb-4">
            Hong Kong's first true 48-hour hackathon where students build from
            scratch—no pre-prepared projects allowed.
          </p>
          <p className="text-lg text-cyan-300 max-w-3xl mx-auto mb-8">
            This year's theme:{' '}
            <span className="font-semibold">
              "Technology Consulting for the Future"
            </span>
          </p>

          <div className="inline-block bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full mb-12 border border-yellow-500/30">
            Registration Opening Soon - Stay Tuned!
          </div>

          {/* Quick Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto"
          >
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30">
              <Users className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl text-white mb-2">60-80</div>
              <div className="text-gray-300">Students from 30+ Schools</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30">
              <Calendar className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl text-white mb-2">48 Hours</div>
              <div className="text-gray-300">Build from Scratch</div>
            </div>
            <div className="bg-white/5 backdrop-blur-md rounded-2xl p-6 border border-cyan-500/30">
              <Trophy className="w-12 h-12 text-cyan-400 mx-auto mb-3" />
              <div className="text-3xl text-white mb-2">Real Problems</div>
              <div className="text-gray-300">From Industry Partners</div>
            </div>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.button
          onClick={() => scrollToSection('about')}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-cyan-400"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="w-8 h-8" />
          </motion.div>
        </motion.button>
      </div>
    </div>
  );
}
