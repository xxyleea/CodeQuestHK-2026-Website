import React from 'react';
import { UserPlus, Mail } from 'lucide-react';
import { motion } from 'motion/react';

export function CallToAction() {
  return (
    <section id="cta" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-white mb-4">Get Involved</h2>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Registration for TyphoonHacks 2026 opens soon
          </p>
        </motion.div>

        {/* Main CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-br from-gray-900 via-blue-900 to-cyan-900 rounded-2xl p-12 md:p-16 text-center text-white max-w-4xl mx-auto mb-12"
        >
          <UserPlus className="w-16 h-16 mx-auto mb-6 text-cyan-400" />
          <h3 className="text-white mb-4">Registration Coming Soon</h3>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            We're finalising the details for TyphoonHacks 2026. Registration
            will open soon—stay tuned for updates!
          </p>

          <div className="inline-block bg-yellow-500/20 backdrop-blur-sm text-yellow-300 px-6 py-3 rounded-full mb-8 border border-yellow-500/30">
            Stay Tuned for Registration Announcements
          </div>

          <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto text-left">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Students (S1-S5)</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>No entry fee</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>All skill levels welcome</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Random team formation</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Workshops & mentorship</span>
                </li>
              </ul>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Target Scale</h4>
              <ul className="space-y-2 text-sm text-gray-300">
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>60-80 participants</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>30+ schools</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>2 age categories</span>
                </li>
                <li className="flex gap-2">
                  <span className="text-cyan-400">•</span>
                  <span>Industry mentors & judges</span>
                </li>
              </ul>
            </div>
          </div>
        </motion.div>

        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <div className="bg-white rounded-2xl p-8 max-w-2xl mx-auto shadow-md">
            <Mail className="w-12 h-12 text-cyan-600 mx-auto mb-4" />
            <h4 className="text-gray-900 mb-4">Questions? Get in Touch</h4>
            <p className="text-gray-600 mb-6">
              For any inquiries about participation, partnership, or the event,
              contact us at:
            </p>
            <a
              href="mailto:codequesthk@gmail.com"
              className="inline-block bg-gradient-to-r from-cyan-500 to-blue-600 text-white px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 mb-4"
            >
              codequesthk@gmail.com
            </a>
            <div className="mt-6">
              <a
                href="https://instagram.com/codequesthk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cyan-600 hover:text-cyan-700 transition-colors"
              >
                Follow us on Instagram @codequesthk
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
