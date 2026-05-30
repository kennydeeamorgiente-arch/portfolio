"use client";

import { motion } from "framer-motion";
import { ArrowUpRight, BriefcaseBusiness, GitBranch, Mail } from "lucide-react";
import { MagneticLink } from "@/components/ui/MagneticLink";
import { profile, socialLinks } from "@/content/site";

const ease = [0.76, 0, 0.24, 1] as const;

function getSocial(label: string) {
  return socialLinks.find((link) => link.label === label)?.href ?? "#";
}

export function Contact() {
  return (
    <section
      className="relative overflow-hidden bg-charcoal px-5 py-16 text-bone sm:px-8 md:py-20 lg:px-12"
      id="contact"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#241b1d]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#cebcab] to-[#241b1d]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <motion.div
          className="grid gap-8 rounded-[1.5rem] border border-bone/10 bg-crimson p-6 sm:p-8 md:grid-cols-[1fr_auto] md:items-end"
          initial={{ opacity: 0, y: 42 }}
          transition={{ duration: 0.78, ease }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="mb-5 text-xs font-semibold uppercase tracking-[0.32em] text-bone/70">
              Contact
            </p>
            <h2 className="max-w-4xl text-4xl font-semibold uppercase leading-[0.96] tracking-[-0.055em] text-bone sm:text-5xl md:text-6xl">
              Hire a web developer who can think through the workflow.
            </h2>
            <p className="mt-5 max-w-2xl text-base leading-7 text-bone/78">
              I&apos;m open to web developer roles, internships, part-time work,
              and projects that need frontend screens, backend logic, and
              database-backed workflows.
            </p>
          </div>

          <MagneticLink
            className="inline-flex min-h-12 w-max items-center gap-3 rounded-full bg-bone px-5 text-sm font-semibold uppercase tracking-[0.14em] text-crimson"
            href={`mailto:${profile.email}`}
          >
            {profile.email}
            <Mail aria-hidden="true" size={18} />
          </MagneticLink>
        </motion.div>

        <motion.footer
          className="mt-10 flex flex-col gap-8 border-t border-bone/10 pt-8 md:flex-row md:items-end md:justify-between"
          initial={{ opacity: 0, y: 26 }}
          transition={{ duration: 0.72, ease }}
          viewport={{ once: true, margin: "-100px" }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <div>
            <p className="text-2xl font-semibold uppercase tracking-[-0.03em]">
              Kenny Dee Amorgiente
            </p>
            <p className="mt-2 text-sm leading-6 text-bone/56">
              {profile.location} / {profile.title}
            </p>
          </div>

          <div className="flex flex-wrap gap-3">
            <MagneticLink
              className="inline-flex h-12 items-center gap-2 rounded-full border border-bone/12 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:bg-bone hover:text-charcoal"
              href={getSocial("GitHub")}
              rel="noreferrer"
              target="_blank"
            >
              <GitBranch aria-hidden="true" size={17} />
              GitHub
            </MagneticLink>
            <MagneticLink
              className="inline-flex h-12 items-center gap-2 rounded-full border border-bone/12 px-5 text-sm font-semibold uppercase tracking-[0.14em] text-bone transition-colors duration-300 hover:bg-bone hover:text-charcoal"
              href={getSocial("LinkedIn")}
              rel="noreferrer"
              target="_blank"
            >
              <BriefcaseBusiness aria-hidden="true" size={17} />
              LinkedIn
            </MagneticLink>
            <MagneticLink
              className="inline-flex h-12 items-center gap-2 rounded-full bg-ochre px-5 text-sm font-semibold uppercase tracking-[0.14em] text-charcoal"
              href={`mailto:${profile.email}`}
            >
              Email
              <ArrowUpRight aria-hidden="true" size={17} />
            </MagneticLink>
          </div>
        </motion.footer>
      </div>
    </section>
  );
}
