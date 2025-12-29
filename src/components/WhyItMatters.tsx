import React from 'react';
import { Rocket, Brain, Network, Award } from 'lucide-react';
import { motion } from 'motion/react';

export function WhyItMatters() {
  const skills = [
    {
      icon: Brain,
      title: 'System Design & Development',
      description:
        'Master full-stack development under extreme time pressure—skills that normally take years to acquire.',
      color: 'blue',
    },
    {
      icon: Lightbulb,
      title: 'Design Thinking',
      description:
        'Learn user-centered problem solving and creative approaches to real business challenges.',
      color: 'purple',
    },
    {
      icon: Network,
      title: 'Real-World Collaboration',
      description:
        'Experience cross-school teaming with strangers, just like in professional environments.',
      color: 'pink',
    },
    {
      icon: Award,
      title: 'Professional Skills',
      description:
        'Develop client interviewing, presentation, and consulting framework skills.',
      color: 'green',
    },
  ];

  const colorClasses = {
    blue: 'from-cyan-500 to-blue-600',
    purple: 'from-blue-500 to-purple-600',
    pink: 'from-purple-500 to-pink-600',
    green: 'from-cyan-500 to-cyan-600',
  };

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4">Why TyphoonHacks Matters</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            In one weekend, students gain skills that normally take years to
            acquire
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skills.map((skill, index) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div
                className={`bg-gradient-to-r ${colorClasses[skill.color as keyof typeof colorClasses]} w-14 h-14 rounded-xl flex items-center justify-center mb-6`}
              >
                <skill.icon className="w-7 h-7 text-white" />
              </div>
              <h3 className="text-gray-900 mb-3">{skill.title}</h3>
              <p className="text-gray-600">{skill.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Additional Benefits */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 text-white"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <Rocket className="w-12 h-12 mb-4" />
              <h3 className="text-white mb-4">Launch Your Tech Career</h3>
              <p className="text-white/90 mb-6">
                Connect with industry mentors, tech professionals, and
                like-minded peers. Build your portfolio with real projects. Win
                prizes including cash awards, internship opportunities, and
                professional certificates.
              </p>
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Exposure to industry leaders</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Networking with 30+ schools</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 bg-white rounded-full" />
                  <span>Real portfolio projects</span>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-2">35+</div>
                <div className="text-white/80">Participants in 2025</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-2">5</div>
                <div className="text-white/80">Prototypes Built</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-2">10+</div>
                <div className="text-white/80">Schools Represented</div>
              </div>
              <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 border border-white/20">
                <div className="text-4xl mb-2">83%</div>
                <div className="text-white/80">Rated 4-5 Stars</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Lightbulb(props: any) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      {...props}
    >
      <path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5" />
      <path d="M9 18h6" />
      <path d="M10 22h4" />
    </svg>
  );
}
