"use client";

import { motion, type Variants } from "framer-motion";
import {
  Braces,
  Code2,
  Database,
  FileCode2,
  GitBranch,
  Layers,
  Palette,
  PencilRuler,
  Server,
  Sparkles,
  Smartphone,
} from "lucide-react";
import styles from "./TechStack.module.css";

const ease = [0.76, 0, 0.24, 1] as const;

const reveal: Variants = {
  hidden: { opacity: 0, y: 36 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.78, ease },
  },
};

const categories = [
  {
    title: "Frontend",
    summary:
      "Interfaces, dashboards, responsive layouts, component systems, and interaction-heavy screens.",
    icon: Code2,
    skills: ["Next.js", "React", "React Native", "TypeScript", "Tailwind CSS"],
  },
  {
    title: "Backend",
    summary:
      "Application logic, authentication, API routes, role-based workflows, and system integrations.",
    icon: Server,
    skills: ["Node.js", "CodeIgniter", "PHP", "REST APIs", "Gmail OAuth"],
  },
  {
    title: "Database",
    summary:
      "Relational records, reporting data, attendance logs, event approvals, and operational tables.",
    icon: Database,
    skills: ["MySQL", "PostgreSQL", "SQL", "Migrations", "Data Modeling"],
  },
  {
    title: "Tools",
    summary:
      "Version control, UI planning, content/design tools, CMS basics, and AI-assisted development workflows.",
    icon: PencilRuler,
    skills: ["Git", "Figma", "Canva", "WordPress basics", "AI Proficiency"],
  },
];

const highlights = [
  { label: "Next.js", icon: Layers },
  { label: "Node.js", icon: Server },
  { label: "CodeIgniter", icon: FileCode2 },
  { label: "MySQL", icon: Database },
  { label: "React Native", icon: Smartphone },
  { label: "REST / AJAX", icon: Braces },
  { label: "Git", icon: GitBranch },
  { label: "Figma / Canva", icon: Palette },
  { label: "AI Proficiency", icon: Sparkles },
];

const marqueeItems = [...highlights, ...highlights];

export function TechStack() {
  return (
    <section
      className="relative overflow-hidden bg-bone px-5 py-24 text-charcoal sm:px-8 md:py-32 lg:px-12"
      id="tech-stack"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#e7e0d2]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#241b1d] to-[#e7e0d2]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 border-b border-charcoal/10 pb-14 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
          <motion.div
            initial="hidden"
            variants={reveal}
            viewport={{ once: true, margin: "-100px" }}
            whileInView="visible"
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-crimson">
              Technical Skills
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.05em] sm:text-7xl md:text-8xl">
              The stack I actually build with.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-lg leading-8 text-charcoal/68"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.78, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            My work sits between backend logic and frontend execution: user
            roles, forms, dashboards, databases, API flows, and interfaces that
            make business or school processes easier to manage.
          </motion.p>
        </div>

        <div className={`${styles.marquee} overflow-hidden py-6`}>
          <div className={`${styles.marqueeTrack} gap-3`}>
            {marqueeItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <div
                  className="flex h-14 min-w-[13rem] items-center gap-3 rounded-full border border-charcoal/10 bg-sand/35 px-4"
                  key={`${item.label}-${index}`}
                >
                  <Icon aria-hidden="true" className="text-ochre" size={18} />
                  <span className="text-sm font-semibold uppercase tracking-[0.14em]">
                    {item.label}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-4">
          {categories.map((category, index) => {
            const Icon = category.icon;

            return (
              <motion.article
                className="group rounded-[1.4rem] border border-charcoal/10 bg-sand/30 p-6 transition-colors duration-300 hover:border-ochre/70 hover:bg-sand/50"
                initial={{ opacity: 0, y: 36 }}
                key={category.title}
                transition={{ delay: index * 0.08, duration: 0.7, ease }}
                viewport={{ once: true, margin: "-100px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="mb-12 flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-[0.18em] text-charcoal/45">
                    0{index + 1}
                  </span>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-bone text-crimson transition-transform duration-300 group-hover:scale-110">
                    <Icon aria-hidden="true" size={20} />
                  </span>
                </div>
                <h3 className="text-3xl font-semibold tracking-[-0.045em]">
                  {category.title}
                </h3>
                <p className="mt-4 min-h-[6rem] text-sm leading-6 text-charcoal/62">
                  {category.summary}
                </p>
                <div className="mt-7 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <span
                      className="rounded-full border border-charcoal/10 bg-bone/70 px-3 py-1 text-xs font-semibold text-charcoal/70"
                      key={skill}
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
