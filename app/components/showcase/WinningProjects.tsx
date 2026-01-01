"use client";

import { motion } from "framer-motion";
import { Trophy, ExternalLink, Github } from "lucide-react";
import SectionWrapper from "@/app/components/SectionWrapper";

const topProjects = [
  {
    rank: 1,
    team: "Pixel Pioneers",
    project: "EcoQuest",
    description:
      "An environmental education game where players solve puzzles to restore ecosystems. Features procedurally generated levels and a compelling narrative about climate action.",
    techStack: ["Unity", "C#", "Photoshop"],
    color: "from-yellow-400 to-amber-500",
    medal: "🥇",
  },
  {
    rank: 2,
    team: "Code Crusaders",
    project: "Neural Maze",
    description:
      "A puzzle platformer that teaches basic AI concepts through gameplay. Players train virtual agents to navigate increasingly complex mazes.",
    techStack: ["Godot", "GDScript", "Aseprite"],
    color: "from-gray-300 to-gray-400",
    medal: "🥈",
  },
  {
    rank: 3,
    team: "Binary Beats",
    project: "Rhythm Rescue",
    description:
      "A rhythm game combined with tower defense mechanics. Defend your base by hitting notes in time with the beat.",
    techStack: ["Phaser.js", "TypeScript", "FL Studio"],
    color: "from-amber-600 to-amber-700",
    medal: "🥉",
  },
];

const otherProjects = [
  {
    team: "Game Gurus",
    project: "Starlight Express",
    techStack: ["Unity", "C#"],
  },
  {
    team: "Bit Builders",
    project: "Dungeon Dash",
    techStack: ["Godot", "GDScript"],
  },
  {
    team: "Logic Lords",
    project: "Mind Merge",
    techStack: ["JavaScript", "Canvas"],
  },
  {
    team: "Syntax Squad",
    project: "Cyber Chase",
    techStack: ["Pygame", "Python"],
  },
  {
    team: "Debug Dynasty",
    project: "Pixel Patrol",
    techStack: ["Love2D", "Lua"],
  },
];

export default function WinningProjects() {
  return (
    <SectionWrapper dark>
      <div className="mb-16 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-electric-cyan font-[family-name:var(--font-jetbrains-mono)] text-sm tracking-wider uppercase"
        >
          The Winners
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-storm-white mt-4 font-[family-name:var(--font-space-grotesk)] text-4xl font-bold md:text-5xl"
        >
          Winning Projects
        </motion.h2>
      </div>

      {/* Top 3 Projects */}
      <div className="mb-12 grid grid-cols-1 gap-6 lg:grid-cols-3">
        {topProjects.map((project, index) => (
          <motion.div
            key={project.team}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.15 }}
            className={`glass relative rounded-2xl p-6 ${
              project.rank === 1
                ? "border-warning-amber/30 border-2 lg:-mt-4 lg:mb-4"
                : ""
            }`}
          >
            {/* Rank badge */}
            <div className="absolute -top-3 left-6 text-3xl">
              {project.medal}
            </div>

            {/* Trophy icon for 1st place */}
            {project.rank === 1 && (
              <div className="absolute -top-3 right-6">
                <Trophy className="text-warning-amber h-6 w-6" />
              </div>
            )}

            <div className="mt-4">
              <p className="text-subtle-gray mb-1 text-sm">{project.team}</p>
              <h3
                className={`bg-gradient-to-r font-[family-name:var(--font-space-grotesk)] text-2xl font-bold ${project.color} mb-3 bg-clip-text text-transparent`}
              >
                {project.project}
              </h3>
              <p className="text-subtle-gray mb-4 text-sm leading-relaxed">
                {project.description}
              </p>

              {/* Tech stack */}
              <div className="mb-4 flex flex-wrap gap-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="bg-ocean-depth text-electric-cyan rounded-md px-2 py-1 text-xs"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              {/* Links */}
              <div className="flex gap-3">
                <button className="text-subtle-gray hover:text-electric-cyan flex items-center gap-1 text-sm transition-colors">
                  <ExternalLink className="h-4 w-4" /> View Project
                </button>
                <button className="text-subtle-gray hover:text-electric-cyan flex items-center gap-1 text-sm transition-colors">
                  <Github className="h-4 w-4" /> Source
                </button>
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Other projects grid */}
      <div className="mt-12">
        <h3 className="text-storm-white mb-6 text-center font-[family-name:var(--font-space-grotesk)] text-xl font-semibold">
          Honorable Mentions
        </h3>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-5">
          {otherProjects.map((project, index) => (
            <motion.div
              key={project.team}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 + index * 0.05 }}
              className="glass hover:border-electric-cyan/30 rounded-xl p-4 transition-colors"
            >
              <p className="text-subtle-gray mb-1 text-xs">{project.team}</p>
              <h4 className="text-storm-white mb-2 font-[family-name:var(--font-space-grotesk)] font-semibold">
                {project.project}
              </h4>
              <div className="flex flex-wrap gap-1">
                {project.techStack.map((tech) => (
                  <span key={tech} className="text-electric-cyan text-xs">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
