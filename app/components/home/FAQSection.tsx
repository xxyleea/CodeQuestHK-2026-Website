"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

interface FAQItem {
  category: string;
  question: string;
  answer: string;
}

const categories = ["General", "Eligibility", "Teams", "Technical", "Prizes"];

const faqs: FAQItem[] = [
  // General
  {
    category: "General",
    question: "What is TyphoonHacks?",
    answer:
      "TyphoonHacks is Hong Kong's first true 48-hour high school hackathon. Unlike traditional competitions focused on presentations and slides, we emphasize building working prototypes from scratch during the event.",
  },
  {
    category: "General",
    question: "When and where will TyphoonHacks 2026 take place?",
    answer:
      "TyphoonHacks 2026 will be held from March 14-16, 2026. The venue will be announced closer to the event date. Follow our social media for updates!",
  },
  {
    category: "General",
    question: "How much does it cost to participate?",
    answer:
      "TyphoonHacks is completely free to participate! We provide meals, snacks, and swag to all participants. Our sponsors make this possible.",
  },
  // Eligibility
  {
    category: "Eligibility",
    question: "Who can participate in TyphoonHacks?",
    answer:
      "TyphoonHacks is open to all high school students (Forms 1-6 or equivalent) currently enrolled in any Hong Kong school. International school students are welcome!",
  },
  {
    category: "Eligibility",
    question: "Do I need prior coding experience?",
    answer:
      "While some programming experience is helpful, we welcome students of all skill levels. We'll have mentors available to help beginners, and you can contribute to your team in many ways—design, research, presentation, and more.",
  },
  // Teams
  {
    category: "Teams",
    question: "How big should my team be?",
    answer:
      "Teams should have 2-4 members. You can register with a pre-formed team or join our team matching session before the event if you're looking for teammates.",
  },
  {
    category: "Teams",
    question: "Can team members be from different schools?",
    answer:
      "Absolutely! We encourage cross-school collaboration. Some of the best teams are formed by students from different backgrounds and schools.",
  },
  {
    category: "Teams",
    question: "What if I don't have a team?",
    answer:
      "No worries! We'll host a team formation event before the hackathon where you can meet other participants and form teams. Many great friendships start at hackathons!",
  },
  // Technical
  {
    category: "Technical",
    question: "What can we build?",
    answer:
      "You can build web apps, mobile apps, hardware projects, AI/ML solutions, games, or any other technical project that addresses the problem statement. The sky's the limit!",
  },
  {
    category: "Technical",
    question: "Can we use pre-written code or templates?",
    answer:
      "You must start from scratch at the hackathon. You cannot use pre-written code specific to your project idea. However, you can use open-source libraries, frameworks, and publicly available APIs.",
  },
  {
    category: "Technical",
    question: "Will there be mentors available?",
    answer:
      "Yes! We'll have industry mentors available throughout the 48 hours to help with technical challenges, provide guidance, and review your progress.",
  },
  // Prizes
  {
    category: "Prizes",
    question: "How are projects judged?",
    answer:
      "Projects are judged on: Innovation (25%), Technical Implementation (25%), Design & UX (20%), Relevance to Problem Statement (20%), and Presentation (10%). Judges include industry professionals and tech leaders.",
  },
  {
    category: "Prizes",
    question: "What prizes can we win?",
    answer:
      "We have cash prizes for the top 3 teams, plus category awards for Best Technical Implementation, Most Innovative Solution, Best UI/UX Design, and People's Choice. Total prize pool exceeds HK$35,000!",
  },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] = useState("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory = faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <SectionWrapper id="faq" dark>
      <div className="mb-12 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          Got Questions?
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Frequently Asked Questions
        </motion.h2>
      </div>

      {/* Search bar */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mx-auto mb-8 max-w-xl"
      >
        <div className="relative">
          <Search className="text-subtle-gray absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
          <input
            type="text"
            placeholder="Type to filter questions..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="bg-ocean-depth border-subtle-gray/30 text-storm-white placeholder:text-subtle-gray focus:border-electric-cyan w-full rounded-xl border py-3 pr-4 pl-12 transition-colors focus:outline-none"
          />
        </div>
      </motion.div>

      {/* Category tabs */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="mb-8 flex flex-wrap justify-center gap-2"
      >
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => setActiveCategory(category)}
            className={`rounded-full px-4 py-2 text-sm font-medium transition-all ${
              activeCategory === category
                ? "bg-electric-cyan text-deep-space"
                : "text-subtle-gray hover:text-storm-white hover:bg-ocean-depth"
            }`}
          >
            {category}
          </button>
        ))}
      </motion.div>

      {/* FAQ items */}
      <div className="mx-auto grid max-w-3xl gap-3">
        <AnimatePresence>
          {filteredFaqs.map((faq, index) => (
            <motion.div
              key={faq.question}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
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
                  animate={{
                    rotate: openItems.includes(faq.question) ? 45 : 0,
                  }}
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
        </AnimatePresence>
      </div>
    </SectionWrapper>
  );
}
