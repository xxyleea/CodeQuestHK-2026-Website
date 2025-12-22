import React from 'react';
import { Handshake, Users, Megaphone, Award, Building, ArrowLeft } from 'lucide-react';
import { motion } from 'motion/react';

interface PartnersProps {
  onBack: () => void;
}

export function Partners({ onBack }: PartnersProps) {
  const benefits = [
    {
      icon: Users,
      title: 'Talent Pipeline',
      description: 'Direct access to 60-80 of Hong Kong\'s brightest high school tech talents.',
    },
    {
      icon: Megaphone,
      title: 'Brand Visibility',
      description: 'Your brand showcased across event materials, social media, and 30+ schools.',
    },
    {
      icon: Award,
      title: 'Problem Solving',
      description: 'Present real business challenges and get innovative solutions from fresh perspectives.',
    },
    {
      icon: Building,
      title: 'CSR Impact',
      description: 'Invest in Hong Kong\'s future tech leaders and demonstrate corporate social responsibility.',
    },
  ];

  const past2025 = [
    {
      name: 'City University of Hong Kong',
      contribution: 'Venue & Mentorship',
      impact: 'Provided university facilities and student mentors',
    },
    {
      name: 'BSD Education',
      contribution: 'Workshop & Prizes',
      impact: 'Hosted presentation skills workshop, internships & courses',
    },
    {
      name: 'DTSL Group Ltd.',
      contribution: 'Prizes & Judging',
      impact: 'Internship opportunities and hardware components',
    },
  ];

  return (
    <section id="partners-page" className="py-20 bg-gray-50 min-h-screen">
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
            <span>Back to TyphoonHacks 2026</span>
          </button>
          <h2 className="text-gray-900 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '2.25rem', fontWeight: 700 }}>Partner with TyphoonHacks</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Join us in shaping the next generation of Hong Kong's tech leaders
          </p>
        </motion.div>

        {/* Why Partner */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="text-center"
            >
              <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <benefit.icon className="w-8 h-8 text-cyan-600" />
              </div>
              <h4 className="text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                {benefit.title}
              </h4>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </motion.div>
          ))}
        </div>

        {/* Partnership Opportunities */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-gray-900 to-blue-900 rounded-2xl p-8 md:p-12 mb-16 text-white"
        >
          <h3 className="text-white text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
            Partnership Opportunities
          </h3>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div>
              <h4 className="text-cyan-300 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                What We Offer
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Present your real business problems to teams</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Company representatives on judging panel</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Logo placement on event materials and website</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Social media features and recognition</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Networking opportunities with participants</span>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="text-cyan-300 mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                Ways to Contribute
              </h4>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Venue sponsorship</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Workshop hosting</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Prize contributions (internships, hardware, courses)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>Mentorship and judging</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="w-1.5 h-1.5 bg-cyan-400 rounded-full mt-2 flex-shrink-0" />
                  <span>In-kind contributions</span>
                </li>
              </ul>
            </div>
          </div>
          <p className="text-center text-cyan-200 text-sm">
            We offer flexible partnership packages tailored to your organization's goals and budget.
          </p>
        </motion.div>

        {/* Past Partners */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="text-gray-900 text-center mb-8" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
            TyphoonHacks 2026 Partners
          </h3>
          <div className="grid md:grid-cols-3 gap-6 mb-16">
            {past2025.map((partner, index) => (
              <motion.div
                key={partner.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white rounded-2xl p-8 shadow-md hover:shadow-lg transition-shadow"
              >
                <h4 className="text-gray-900 mb-2" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>
                  {partner.name}
                </h4>
                <div className="text-cyan-600 text-sm font-semibold mb-3">{partner.contribution}</div>
                <p className="text-gray-600 text-sm">{partner.impact}</p>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl p-8 md:p-12 text-center text-white"
        >
          <Handshake className="w-16 h-16 mx-auto mb-6" />
          <h3 className="text-white mb-4" style={{ fontFamily: 'Montserrat, sans-serif', fontSize: '1.5rem', fontWeight: 700 }}>
            Ready to Partner?
          </h3>
          <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            Contact us to discuss partnership opportunities for TyphoonHacks 2026
          </p>
          <a
            href="mailto:codequesthk@gmail.com"
            className="inline-block bg-white text-cyan-600 px-8 py-3 rounded-full hover:shadow-lg transition-all transform hover:scale-105 font-semibold"
          >
            Get in Touch
          </a>
        </motion.div>
      </div>
    </section>
  );
}
