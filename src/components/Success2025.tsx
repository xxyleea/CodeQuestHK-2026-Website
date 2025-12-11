import React from 'react';
import { Trophy, Star, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface Success2025Props {
  onBack: () => void;
}

export function Success2025({ onBack }: Success2025Props) {

  const winners = [
    {
      place: 'Champion',
      team: 'Group 3',
      project: '天下太平 (World Peace)',
      description: 'An innovative game blending Hong Kong folklore with traditional playground games. Features the local ritual of "打小人" and classic grid-based gameplay.',
      highlight: 'Cultural Connect',
    },
    {
      place: '1st Runner-Up',
      team: 'Group 5',
      project: 'Greenshooter',
      description: 'A strategic tower-defense game where players build eco-friendly facilities to stop waves of waste from polluting a forest.',
      highlight: 'Green Gaming',
    },
    {
      place: '2nd Runner-Up',
      team: 'Group 1',
      project: 'Hong Kong Culture Minigames',
      description: 'A charming collection of five casual mini-games celebrating vibrant Hong Kong culture, including Cha Chaan Teng Simulator.',
      highlight: 'Cultural Connect',
    },
  ];

  return (
    <section id="success" className="py-20 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <button
            onClick={onBack}
            className="inline-flex items-center gap-2 text-cyan-600 hover:text-cyan-700 mb-4"
          >
            <ArrowLeft className="w-5 h-5" />
            <span>Back to CodeQuestHK 2026</span>
          </button>
          <h2 className="text-gray-900 mb-4">CodeQuest HK 2025 Recap</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Our inaugural year saw 35+ students create 5 working game prototypes in 48 hours
          </p>
        </motion.div>

        {/* Key Stats */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl text-cyan-600 mb-2">35+</div>
            <div className="text-gray-600">Talented Students</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl text-purple-600 mb-2">10+</div>
            <div className="text-gray-600">Leading Schools</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl text-pink-600 mb-2">5</div>
            <div className="text-gray-600">Working Prototypes</div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="bg-white rounded-xl p-6 text-center shadow-md"
          >
            <div className="text-4xl text-green-600 mb-2">100%</div>
            <div className="text-gray-600">Completion Rate</div>
          </motion.div>
        </div>

        {/* Winning Projects */}
        <div className="mb-16">
          <h3 className="text-gray-900 text-center mb-8">Award-Winning Projects</h3>
          <div className="grid md:grid-cols-3 gap-8">
            {winners.map((winner, index) => (
              <motion.div
                key={winner.team}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
              >
                <div className="flex items-center gap-2 mb-4">
                  <Trophy className={`w-6 h-6 ${index === 0 ? 'text-yellow-500' : index === 1 ? 'text-gray-400' : 'text-orange-600'}`} />
                  <span className={`${index === 0 ? 'text-yellow-600' : index === 1 ? 'text-gray-600' : 'text-orange-600'}`}>
                    {winner.place}
                  </span>
                </div>
                <h4 className="text-gray-900 mb-2">{winner.project}</h4>
                <div className="text-sm text-gray-500 mb-3">{winner.team}</div>
                <p className="text-gray-600 text-sm mb-4">{winner.description}</p>
                <div className="inline-block bg-cyan-50 text-cyan-600 px-3 py-1 rounded-full text-sm">
                  {winner.highlight}
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Event Highlights */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <h3 className="text-white text-center mb-8">Event Highlights</h3>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Theme: Game Development</h4>
              <p className="text-gray-300 text-sm">
                Teams explored two creative themes: "Cultural Connect" celebrating Hong Kong's heritage, 
                and "Green Gaming" promoting environmental conservation.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Venue & Support</h4>
              <p className="text-gray-300 text-sm">
                Hosted at City University of Hong Kong with mentorship from university students 
                and workshops from industry professionals.
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Judging Panel</h4>
              <p className="text-gray-300 text-sm">
                Distinguished panel including Mr. Jack Wu (DTSL Group), Mr. Peter Cheung (HK Programming Society), 
                and Mr. Louis Cheung (Decisions Lab).
              </p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
              <h4 className="text-cyan-300 mb-3">Participant Feedback</h4>
              <p className="text-gray-300 text-sm">
                83% rated the event 4-5 stars. Students praised the hands-on development time, 
                networking opportunities, and professional workshops.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Satisfaction Stats */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 text-center"
        >
          <div className="inline-flex items-center gap-2 bg-white rounded-full px-6 py-3 shadow-md">
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <Star className="w-5 h-5 text-yellow-500 fill-yellow-500" />
            <span className="ml-2 text-gray-700">83% rated 4-5 stars for overall satisfaction</span>
          </div>
        </motion.div>

        {/* Image */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 pb-8"
        >
          <img
            src="/pictures/pic1.jpg"
            alt="Team collaboration"
            className="rounded-2xl shadow-xl w-full"
          />
        </motion.div>
      </div>
    </section>
  );
}
