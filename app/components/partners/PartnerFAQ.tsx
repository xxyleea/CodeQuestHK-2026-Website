"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const faqs = [
  {
    question: "What is TyphoonHacks?",
    answer:
      "TyphoonHacks is Hong Kong's only true student-run, high-school-only, 48-hour hackathon. Unlike typical competitions where students prepare projects in advance, participants must build everything from scratch during the event. This creates authentic innovation under real-world pressure.",
  },
  {
    question: "When and where is the event?",
    answer:
      "TyphoonHacks 2026 will take place February 14-15, 2026 (during CNY holidays) at the City University of Hong Kong.",
  },
  {
    question: "What's the 2026 theme?",
    answer:
      "This year's theme is 'Technology Consulting for the Future.' Partner companies present real business challenges, and student teams develop technological solutions over 48 hours. It's like having a consulting team work on your problem, but with the freedom to build creative, unconventional solutions.",
  },
  {
    question: "What kind of support are you looking for?",
    answer:
      "We're looking for two types of partners: Event Sponsors who can provide resources like venue space, mentorship, prizes (monetary or in-kind like internships), food, or technology equipment. And Industry Partners who can submit real business challenges for students to solve during the hackathon.",
  },
  {
    question: "Do you have fixed sponsorship tiers?",
    answer:
      "No, we don't have rigid tiers or packages. We believe every partnership is unique. Let's have a conversation about what you can offer and what would be valuable for you.",
  },
  {
    question: "What do partners get in return?",
    answer:
      "All partners receive visibility on our website, social media, and at the event. You may also get access to talented students, the opportunity to see fresh solutions to your challenges, and the satisfaction of supporting STEM education in Hong Kong. We'll discuss specific benefits based on your contribution.",
  },
  {
    question: "How many students will participate?",
    answer:
      "We're targeting 60-80 high school students from schools across Hong Kong. Participants range from beginners to experienced coders, designers, and business-minded students, all working in teams of 3-5.",
  },
  {
    question: "Can we send representatives to the event?",
    answer:
      "Absolutely! We encourage partners to attend. Depending on your involvement, you might serve as judges, provide mentorship during the 48 hours, or simply observe and network with participants. We'll coordinate the details closer to the event.",
  },
  {
    question: "What if we want to provide a problem statement?",
    answer:
      "Great! As an Industry Partner, you'd present a real challenge your company faces. Students choose which problems to tackle and build working prototypes. You'll see the solutions at the end and can provide feedback.",
  },
  {
    question: "Is there a deadline to become a partner?",
    answer:
      "We accept partners on a rolling basis, but earlier commitment means more visibility and planning time. If you're interested, reach out soon so we can include you in our materials and planning.",
  },
];

export default function PartnerFAQ() {
  const [openItems, setOpenItems] = useState<string[]>([]);

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <SectionWrapper dark>
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Common Questions
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Partner FAQ
        </motion.h2>
      </div>

      <div className="mx-auto max-w-3xl space-y-3">
        {faqs.map((faq, index) => (
          <motion.div
            key={faq.question}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.05 }}
            className={`glass overflow-hidden rounded-xl transition-all ${
              openItems.includes(faq.question)
                ? "border-electric-cyan border-l-4"
                : ""
            }`}
          >
            <button
              onClick={() => toggleItem(faq.question)}
              className="flex w-full items-center justify-between px-6 py-4 text-left"
            >
              <span className="text-storm-white pr-4 font-[family-name:var(--font-space-grotesk)] font-semibold">
                {faq.question}
              </span>
              <motion.div
                animate={{ rotate: openItems.includes(faq.question) ? 45 : 0 }}
                transition={{ duration: 0.2 }}
                className="flex-shrink-0"
              >
                {openItems.includes(faq.question) ? (
                  <Minus className="text-electric-cyan h-5 w-5" />
                ) : (
                  <Plus className="text-subtle-gray h-5 w-5" />
                )}
              </motion.div>
            </button>

            <AnimatePresence>
              {openItems.includes(faq.question) && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.2 }}
                >
                  <p className="text-subtle-gray px-6 pb-4 leading-relaxed">
                    {faq.answer}
                  </p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </SectionWrapper>
  );
}
