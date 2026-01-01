"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus, Search } from "lucide-react";
import Script from "next/script";
import SectionWrapper from "@/app/components/SectionWrapper";

const categories = [
  "All",
  "General",
  "Eligibility",
  "Teams",
  "Technical",
] as const;

interface FAQItem {
  category: Exclude<(typeof categories)[number], "All">;
  question: string;
  answer: string;
}

const faqs: FAQItem[] = [
  {
    category: "General",
    question: "What is a hackathon?",
    answer:
      "A hackathon is an event where individuals come together to collaboratively build projects over a short period, typically 24-48 hours. Participants brainstorm ideas, form teams, and create working prototypes to solve real-world problems. At TyphoonHacks, you'll be learning and building in an energetic environment with people as passionate as you are!",
  },
  {
    category: "General",
    question: "What is TyphoonHacks?",
    answer:
      "TyphoonHacks is Hong Kong's first true 48-hour high school hackathon, organized by builders, for builders. Unlike traditional competitions focused on presentations and slides, we emphasize building working prototypes from scratch during the event.",
  },
  {
    category: "General",
    question: "When and where will it take place?",
    answer:
      "TyphoonHacks 2026 will be held from February 14-15, 2026 (during CNY holidays). The venue will be announced shortly. Follow our social media for updates!",
  },
  {
    category: "General",
    question: "How much does it cost",
    answer:
      "TyphoonHacks is completely free to participate! We believe in making tech opportunities accessible to all high school students in Hong Kong.",
  },
  {
    category: "Eligibility",
    question: "Who can come?",
    answer:
      "TyphoonHacks is open to all Forms 1-5 or equivalent high school students currently enrolled in any Hong Kong school. Both local and international school students are welcome!",
  },
  {
    category: "Eligibility",
    question: "What if I don't know how to code?",
    answer:
      "TyphoonHacks is the perfect place to start! While some programming experience is helpful, we welcome students of all skill levels. We'll have mentors available to help beginners, and you can contribute to your team in many ways—design, research, presentation, and more.",
  },
  {
    category: "Teams",
    question: "How big should my team be?",
    answer:
      "Teams should have 3-5 members. You can register with a pre-formed team or join our team matching session before the event if you're looking for teammates.",
  },
  {
    category: "Teams",
    question: "Can team members be from different schools?",
    answer: "Absolutely! We encourage cross-school collaboration.",
  },
  {
    category: "Teams",
    question: "What if I don't have a team?",
    answer:
      "No worries! We'll host a team formation event before the hackathon where you can meet other participants and form teams. Many great friendships start at hackathons!",
  },
  {
    category: "Technical",
    question: "What can we build?",
    answer:
      "It's up to you! You can build web apps, mobile apps, hardware projects, AI/ML solutions, or any other technical project that addresses the problem statement.",
  },
  {
    category: "Technical",
    question: "Are previously started projects allowed?",
    answer:
      "You must start from scratch at the hackathon. All work should be done during the event to ensure a level playing field. However, feel free to use any publically-available resources.",
  },
  // {
  //   category: "Technical",
  //   question: "Will there be mentors available?",
  //   answer:
  //     "Yes! We'll have industry mentors available throughout the 48 hours to help with technical challenges, provide guidance, and review your progress.",
  // },
];

export default function FAQSection() {
  const [activeCategory, setActiveCategory] =
    useState<(typeof categories)[number]>("General");
  const [searchQuery, setSearchQuery] = useState("");
  const [openItems, setOpenItems] = useState<string[]>([]);

  const filteredFaqs = faqs.filter((faq) => {
    const matchesCategory =
      activeCategory === "All" || faq.category === activeCategory;
    const matchesSearch =
      searchQuery === "" ||
      faq.question.toLowerCase().includes(searchQuery.toLowerCase()) ||
      faq.answer.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  // FAQ Schema.org structured data for SEO
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const toggleItem = (question: string) => {
    setOpenItems((prev) =>
      prev.includes(question)
        ? prev.filter((q) => q !== question)
        : [...prev, question]
    );
  };

  return (
    <SectionWrapper id="faq" dark>
      {/* JSON-LD structured data for SEO */}
      <Script
        id="faq-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />

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
            aria-pressed={activeCategory === category}
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
                aria-expanded={openItems.includes(faq.question)}
              >
                <h3 className="text-storm-white pr-4 font-[family-name:var(--font-space-grotesk)] text-base font-semibold">
                  {faq.question}
                </h3>
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
