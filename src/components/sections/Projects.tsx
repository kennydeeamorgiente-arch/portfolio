"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  BadgeCheck,
  ChevronDown,
  Cloud,
  Database,
  ImageIcon,
  Layers3,
  Lightbulb,
  Server,
  SquareCode,
  Wrench,
} from "lucide-react";
import Image from "next/image";
import { useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

type StackGroup = {
  backend: string[];
  database: string[];
  frontend: string[];
  framework: string[];
  integrations?: string[];
  platform?: string[];
};

type CaseStudy = {
  details: string[];
  image: string;
  name: string;
  outcome: string;
  problem: string;
  proofImages: string[];
  role: string;
  solution: string;
  stack: StackGroup;
  type: string;
};

const caseStudies: CaseStudy[] = [
  {
    name: "PacBiz Ticketing System",
    type: "Relevant Experience",
    role: "IT Intern Web Developer - Admin Dashboard",
    image: "/images/projects/campus-event-system.svg",
    proofImages: [
      "/images/projects/campus-event-system-proof.svg",
      "/images/projects/campus-event-system.svg",
    ],
    problem:
      "Manual handling and triaging of support requests caused bottlenecks and delayed response times.",
    solution:
      "Worked on the admin/dashboard side of the ticketing system, including ticket visibility, triage surfaces, and Gmail OAuth email intake support.",
    outcome:
      "Helped the IT support team review incoming requests with clearer status, queue, and workload context.",
    details: [
      "Built admin-facing dashboard views for ticket status, queues, workload tracking, and support visibility.",
      "Supported Gmail OAuth/email intake so incoming requests could enter the admin workflow cleanly.",
      "Structured dashboard data and ticket records for faster triage and clearer monitoring.",
    ],
    stack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js Backend", "API Routes", "WebSocket-ready workflows"],
      framework: ["Next.js App Router", "Node.js"],
      database: ["MySQL"],
      integrations: ["Gmail OAuth", "Email automation"],
    },
  },
  {
    name: "Pasok-Pay",
    type: "Relevant Experience",
    role: "Part-Time Web Developer",
    image: "/images/projects/inventory-dashboard.svg",
    proofImages: [
      "/images/projects/inventory-dashboard-proof.svg",
      "/images/projects/certificate-vault-proof.svg",
    ],
    problem:
      "The client, a product distributor, struggled with manual payroll calculations and inaccurate clock-in/out tracking.",
    solution:
      "Built a comprehensive dashboard and timekeeping system to automate attendance tracking and compute payroll instantly.",
    outcome:
      "Turned payroll review into a faster, more traceable workflow for admins and employees.",
    details: [
      "Created admin and employee-facing views for attendance and payroll records.",
      "Automated clock-in/out, break tracking, overtime computation, deductions, and payroll summaries.",
      "Designed dashboard surfaces for reviewing payroll data before payout processing.",
    ],
    stack: {
      frontend: ["Next.js", "React", "Tailwind CSS"],
      backend: ["Node.js Backend", "Payroll computation logic", "API endpoints"],
      framework: ["Next.js App Router", "Node.js"],
      database: ["PostgreSQL"],
      platform: ["Supabase Platform"],
      integrations: ["CSV export", "Payout workflow support"],
    },
  },
  {
    name: "TapPark",
    type: "Capstone Project",
    role: "Web Developer - Admin Dashboard",
    image: "/images/projects/certificate-vault.svg",
    proofImages: [
      "/images/projects/certificate-vault-proof.svg",
      "/images/projects/certificate-vault.svg",
    ],
    problem:
      "Inefficient campus parking management led to congestion and a lack of visibility into available spaces.",
    solution:
      "Developed the admin-side dashboard for managing parking areas, sections, attendants, reports, logs, subscriptions, and feedback.",
    outcome:
      "Created a practical admin system for monitoring parking operations, parking-area capacity, attendants, records, and reports.",
    details: [
      "Focused on the TapPark admin web app, not the full mobile/user-facing side.",
      "Built dashboard and management screens for parking areas, attendants, users, reports, logs, subscriptions, and feedback.",
      "Implemented parking overview pages and capacity/occupancy data for admin monitoring.",
      "Structured CodeIgniter controllers/models around parking operations and reporting.",
    ],
    stack: {
      frontend: ["PHP Views", "JavaScript", "Bootstrap-style admin UI"],
      backend: ["PHP", "CodeIgniter Controllers", "CodeIgniter Models"],
      framework: ["CodeIgniter 4"],
      database: ["MySQL"],
      integrations: ["Geoapify Proxy", "Activity logs"],
    },
  },
  {
    name: "FUSOMS",
    type: "University Project",
    role: "Web Developer",
    image: "/images/projects/inventory-dashboard.svg",
    proofImages: [
      "/images/projects/inventory-dashboard-proof.svg",
      "/images/projects/inventory-dashboard.svg",
    ],
    problem:
      "Student organizations lacked a unified platform to propose, approve, and track campus events.",
    solution:
      "Created a role-based management system to digitize event approvals and streamline university activities.",
    outcome:
      "Received recognition for the design and implementation of the student organization event workflow.",
    details: [
      "Built organization and admin workflows for event proposals, approvals, renewals, reports, and users.",
      "Implemented role-based access logic for university event and organization management.",
      "Used CodeIgniter migrations/models for events, organizations, access levels, approvals, reports, and notifications.",
    ],
    stack: {
      frontend: ["PHP Views", "JavaScript", "AJAX"],
      backend: ["PHP", "CodeIgniter Controllers", "Services"],
      framework: ["CodeIgniter 4"],
      database: ["MySQL"],
      integrations: ["Google Calendar service", "Notifications"],
    },
  },
];

const stackRows = [
  { key: "frontend", label: "Frontend", icon: SquareCode },
  { key: "backend", label: "Backend", icon: Server },
  { key: "framework", label: "Framework", icon: Layers3 },
  { key: "database", label: "Database", icon: Database },
  { key: "platform", label: "Platform", icon: Cloud },
  { key: "integrations", label: "Integrations", icon: BadgeCheck },
] as const;

export function Projects() {
  const [expandedProject, setExpandedProject] = useState(caseStudies[0].name);

  return (
    <section
      className="relative overflow-hidden bg-charcoal px-5 py-24 text-bone sm:px-8 md:py-32 lg:px-12"
      id="projects"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#2a2022]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#cebcab] to-[#2a2022]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-16 bg-gradient-to-b from-transparent to-[#38292b]/45"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 36 }}
            transition={{ duration: 0.78, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-ochre">
              Case Studies
            </p>
            <h2 className="max-w-4xl text-5xl font-semibold uppercase leading-[0.92] tracking-[-0.055em] sm:text-7xl md:text-8xl">
              Real work, school systems, and proof.
            </h2>
          </motion.div>

          <motion.p
            className="max-w-xl text-lg leading-8 text-bone/66"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.78, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            Every case study shows my role, the problem, the solution, proof
            images, details, and the exact frontend/backend/framework/database
            stack used.
          </motion.p>
        </div>

        <div className="mt-16 grid gap-5">
          {caseStudies.map((project, index) => {
            const isExpanded = expandedProject === project.name;

            return (
              <motion.article
                className="overflow-hidden rounded-[1.5rem] border border-bone/10 bg-bone/[0.035] transition-colors duration-300 hover:border-ochre/50 hover:bg-bone/[0.055]"
                initial={{ opacity: 0, y: 42 }}
                key={project.name}
                transition={{ delay: index * 0.08, duration: 0.72, ease }}
                viewport={{ once: true, margin: "-100px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="grid gap-7 p-5 md:p-7 lg:grid-cols-[0.62fr_1.38fr]">
                  <div className="flex min-h-[20rem] flex-col justify-between gap-10 rounded-[1.1rem] bg-bone p-5 text-charcoal">
                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.24em] text-crimson">
                        {project.type}
                      </p>
                      <h3 className="mt-4 text-4xl font-semibold uppercase leading-[0.92] tracking-[-0.055em] md:text-6xl">
                        {project.name}
                      </h3>
                    </div>

                    <div>
                      <p className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                        Role
                      </p>
                      <p className="mt-2 text-lg font-semibold tracking-[-0.02em]">
                        {project.role}
                      </p>
                    </div>
                  </div>

                  <div className="grid gap-4 lg:grid-cols-[1fr_0.82fr]">
                    <div className="grid gap-4">
                      <div className="rounded-[1.1rem] border border-bone/10 p-5">
                        <div className="mb-5 flex items-center gap-3 text-ochre">
                          <Lightbulb aria-hidden="true" size={20} />
                          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                            Problem
                          </p>
                        </div>
                        <p className="text-base leading-7 text-bone/72">
                          {project.problem}
                        </p>
                      </div>

                      <div className="rounded-[1.1rem] border border-bone/10 p-5">
                        <div className="mb-5 flex items-center gap-3 text-ochre">
                          <Wrench aria-hidden="true" size={20} />
                          <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                            Solution
                          </p>
                        </div>
                        <p className="text-base leading-7 text-bone/72">
                          {project.solution}
                        </p>
                      </div>
                    </div>

                    <div className="relative min-h-[18rem] overflow-hidden rounded-[1.1rem] border border-bone/10 bg-bone/[0.04]">
                      <Image
                        alt={`${project.name} project preview`}
                        className="object-cover"
                        fill
                        sizes="(min-width: 1024px) 36vw, 100vw"
                        src={project.image}
                      />
                    </div>
                  </div>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4 border-t border-bone/10 px-5 py-4 md:px-7">
                  <div className="flex flex-wrap gap-2">
                    {[
                      ...project.stack.frontend.slice(0, 1),
                      ...project.stack.backend.slice(0, 1),
                      ...project.stack.framework.slice(0, 1),
                      ...project.stack.database.slice(0, 1),
                    ].map((tech) => (
                      <span
                        className="rounded-full border border-bone/10 bg-bone/[0.06] px-3 py-1 text-xs font-semibold text-bone/72"
                        key={tech}
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    className="inline-flex h-11 items-center gap-2 rounded-full bg-ochre px-4 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal transition-transform duration-200 hover:scale-[1.02]"
                    onClick={() =>
                      setExpandedProject(isExpanded ? "" : project.name)
                    }
                    type="button"
                  >
                    {isExpanded ? "Hide Details" : "View More"}
                    <motion.span
                      animate={{ rotate: isExpanded ? 180 : 0 }}
                      transition={{ duration: 0.3, ease }}
                    >
                      <ChevronDown aria-hidden="true" size={17} />
                    </motion.span>
                  </button>
                </div>

                <AnimatePresence initial={false}>
                  {isExpanded ? (
                    <motion.div
                      animate={{ height: "auto", opacity: 1 }}
                      className="overflow-hidden"
                      exit={{ height: 0, opacity: 0 }}
                      initial={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.48, ease }}
                    >
                      <div className="grid gap-5 border-t border-bone/10 p-5 md:p-7 lg:grid-cols-[1.05fr_0.95fr]">
                        <div className="grid gap-5">
                          <section className="rounded-[1.1rem] border border-bone/10 p-5">
                            <div className="mb-5 flex items-center gap-3 text-ochre">
                              <BadgeCheck aria-hidden="true" size={20} />
                              <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                                Outcome
                              </p>
                            </div>
                            <p className="text-base leading-7 text-bone/72">
                              {project.outcome}
                            </p>
                          </section>

                          <section className="rounded-[1.1rem] border border-bone/10 p-5">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-ochre">
                              Details
                            </p>
                            <ul className="grid gap-3 text-sm leading-6 text-bone/66">
                              {project.details.map((detail) => (
                                <li className="flex gap-3" key={detail}>
                                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-ochre" />
                                  {detail}
                                </li>
                              ))}
                            </ul>
                          </section>

                          <section className="rounded-[1.1rem] border border-bone/10 p-5">
                            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.24em] text-ochre">
                              Full Tech Stack
                            </p>
                            <div className="grid gap-3">
                              {stackRows.map((row) => {
                                const values = project.stack[row.key];
                                const Icon = row.icon;

                                if (!values?.length) {
                                  return null;
                                }

                                return (
                                  <div
                                    className="grid gap-3 rounded-[0.9rem] bg-bone/[0.045] p-4 md:grid-cols-[9rem_1fr] md:items-start"
                                    key={row.key}
                                  >
                                    <div className="flex items-center gap-2 text-sm font-semibold text-ochre">
                                      <Icon aria-hidden="true" size={17} />
                                      {row.label}
                                    </div>
                                    <div className="flex flex-wrap gap-2">
                                      {values.map((value) => (
                                        <span
                                          className="rounded-full border border-bone/10 px-3 py-1 text-xs font-semibold text-bone/70"
                                          key={value}
                                        >
                                          {value}
                                        </span>
                                      ))}
                                    </div>
                                  </div>
                                );
                              })}
                            </div>
                          </section>
                        </div>

                        <section className="rounded-[1.1rem] border border-bone/10 p-5">
                          <div className="mb-5 flex items-center gap-3 text-ochre">
                            <ImageIcon aria-hidden="true" size={20} />
                            <p className="text-xs font-semibold uppercase tracking-[0.24em]">
                              Proof Images
                            </p>
                          </div>
                          <div className="grid gap-4">
                            {project.proofImages.map((image, proofIndex) => (
                              <div
                                className="relative aspect-[16/10] overflow-hidden rounded-[1rem] border border-bone/10 bg-bone/[0.04]"
                                key={image}
                              >
                                <Image
                                  alt={`${project.name} proof image ${proofIndex + 1}`}
                                  className="object-cover"
                                  fill
                                  sizes="(min-width: 1024px) 38vw, 100vw"
                                  src={image}
                                />
                              </div>
                            ))}
                          </div>
                        </section>
                      </div>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
