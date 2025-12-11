import React from 'react';
import { Users, Lightbulb, Code, Presentation, Zap, RefreshCw } from 'lucide-react';
import { motion } from 'motion/react';

export function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-gray-900 mb-4 text-4xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>What is CodeQuest HK?</h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Hong Kong's only student-run, high-school-only, 48-hour hackathon with a different theme every year.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 items-center mb-16">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <img
              src="/pictures/picture2.jpg"
              alt="Students coding at hackathon"
              className="rounded-2xl shadow-xl w-full"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-gray-900 mb-4 text-2xl font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 700 }}>A True Hackathon Experience</h3>
            <div className="space-y-4 text-gray-600">
              <p>
                CodeQuest HK is Hong Kong's first genuine 48-hour hackathon where students 
                must build everything from scratch during the event. Unlike other competitions 
                where participants pre-prepare their projects, CodeQuest requires all development 
                to happen within the limited time frame—creating real-world pressure and authentic innovation.
              </p>
              <p>
                <strong>Each year brings a new challenge theme.</strong> In 2025, we ran a game development jam 
                where students created original games celebrating Hong Kong culture and sustainability. 
                In 2026, participants become junior tech consultants, solving real business problems 
                from industry partners.
              </p>
              <p>
                Students are randomly assigned to cross-school teams of 3–5, fostering new 
                connections and collaboration across Hong Kong's education landscape.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Key Features */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8"
        >
          <div className="text-center">
            <div className="bg-cyan-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Zap className="w-8 h-8 text-cyan-600" />
            </div>
            <h4 className="text-gray-900 mb-2 font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>48-Hour Sprint</h4>
            <p className="text-gray-600">
              Build from scratch—no pre-prepared work allowed
            </p>
          </div>

          <div className="text-center">
            <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Users className="w-8 h-8 text-blue-600" />
            </div>
            <h4 className="text-gray-900 mb-2 font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Cross-School Teams</h4>
            <p className="text-gray-600">
              Random team formation across 30+ Hong Kong schools
            </p>
          </div>

          <div className="text-center">
            <div className="bg-purple-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <RefreshCw className="w-8 h-8 text-purple-600" />
            </div>
            <h4 className="text-gray-900 mb-2 font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>New Theme Yearly</h4>
            <p className="text-gray-600">
              2025: Game Development<br />2026: Tech Consulting
            </p>
          </div>

          <div className="text-center">
            <div className="bg-green-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-4">
              <Presentation className="w-8 h-8 text-green-600" />
            </div>
            <h4 className="text-gray-900 mb-2 font-bold" style={{ fontFamily: 'Montserrat, sans-serif', fontWeight: 600 }}>Student-Run</h4>
            <p className="text-gray-600">
              Organized by HKJSTU and student leaders
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
