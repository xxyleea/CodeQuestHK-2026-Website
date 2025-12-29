import React from 'react';
import {
  Calendar,
  MapPin,
  Users,
  Target,
  Trophy,
  BookOpen,
} from 'lucide-react';
import { motion } from 'motion/react';

export function EventDetails() {
  return (
    <section id="event-details" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2
            className="text-gray-900 mb-4 text-4xl font-bold"
            style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}
          >
            TyphoonHacks 2026: Event Details
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Everything you need to know about this year's competition
          </p>
        </motion.div>

        {/* Main Details Grid */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-gradient-to-br from-cyan-50 to-blue-100 rounded-2xl p-8"
          >
            <Calendar className="w-10 h-10 text-cyan-600 mb-4" />
            <h3
              className="text-gray-900 mb-3 font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Dates
            </h3>
            <div className="space-y-2 text-gray-700">
              <div>Day 1: 14 Feb 2026 (Sat)</div>
              <div className="text-sm text-gray-600">09:00 - 18:00</div>
              <div className="mt-3">Day 2: 15 Feb 2026 (Sun)</div>
              <div className="text-sm text-gray-600">09:00 - 17:00</div>
              <div className="mt-3 text-sm text-cyan-600">
                During CNY holidays
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-gradient-to-br from-purple-50 to-purple-100 rounded-2xl p-8"
          >
            <Users className="w-10 h-10 text-purple-600 mb-4" />
            <h3
              className="text-gray-900 mb-3 font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Participants
            </h3>
            <div className="space-y-2 text-gray-700">
              <div>60-80 Secondary Students</div>
              <div className="text-sm text-gray-600">
                S1-S5 from 30+ schools
              </div>
              <div className="mt-3">Both local and</div>
              <div className="text-sm text-gray-600">international schools</div>
              <div className="mt-3">Teams of 3-5</div>
              <div className="text-sm text-gray-600">
                Randomized cross-school
              </div>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-gradient-to-br from-pink-50 to-pink-100 rounded-2xl p-8"
          >
            <MapPin className="w-10 h-10 text-pink-600 mb-4" />
            <h3
              className="text-gray-900 mb-3 font-bold"
              style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}
            >
              Venue
            </h3>
            <div className="space-y-2 text-gray-700">
              <div>To Be Confirmed</div>
              <div className="text-sm text-gray-600 mt-3">
                We're working with leading universities and venues in Hong Kong
                to provide the best possible experience for TyphoonHacks 2026
              </div>
              <div className="mt-3 text-sm text-pink-600">
                Announcement coming soon
              </div>
            </div>
          </motion.div>
        </div>

        {/* Theme & Format */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 mb-16"
        >
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-white">
              <Target className="w-10 h-10 mb-4" />
              <h3 className="text-white mb-4">
                2026 Theme: Technology Consulting for the Future
              </h3>
              <p className="text-white/90 mb-4">
                This year, students act as junior tech consultants, receiving
                real business pain points from sponsoring companies. Examples
                could include retail customer experience optimization, smart
                logistics solutions, or other industry challenges.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">
                    Interview company representatives
                  </span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">Design innovative solutions</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">Build working prototypes</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-1.5 h-1.5 bg-white rounded-full" />
                  <span className="text-sm">Pitch to expert panel</span>
                </div>
              </div>
            </div>

            <div className="text-white">
              <Trophy className="w-10 h-10 mb-4" />
              <h3 className="text-white mb-4">Competition Categories</h3>
              <div className="space-y-4">
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="mb-2">Junior Category</div>
                  <div className="text-sm text-white/80">
                    For students in S1-S3
                  </div>
                </div>
                <div className="bg-white/10 backdrop-blur-sm rounded-xl p-4 border border-white/20">
                  <div className="mb-2">Senior Category</div>
                  <div className="text-sm text-white/80">
                    For students in S3-S5
                  </div>
                </div>
              </div>
              <p className="text-sm text-white/80 mt-4">
                All development must happen within the 48-hour window—exactly
                like a real consulting sprint
              </p>
            </div>
          </div>
        </motion.div>

        {/* What to Expect */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="flex items-center gap-3 mb-8">
            <BookOpen className="w-8 h-8 text-cyan-600" />
            <h3 className="text-gray-900">What to Expect</h3>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                title: 'Design Thinking Workshop',
                desc: 'Learn user-centered problem solving',
              },
              {
                title: 'Pitch Training',
                desc: 'Master professional presentation skills',
              },
              {
                title: 'Tech Stack Sessions',
                desc: 'Get familiar with development tools',
              },
              {
                title: 'Consulting Frameworks',
                desc: 'Understand business analysis methods',
              },
              { title: 'Mentorship', desc: 'Industry mentors guide your team' },
              {
                title: 'Judging Panel',
                desc: 'Corporate reps & tech professionals',
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-gray-50 rounded-xl p-6 border border-gray-200 hover:border-cyan-400 transition-colors"
              >
                <div className="text-cyan-600 mb-2">{item.title}</div>
                <div className="text-sm text-gray-600">{item.desc}</div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
