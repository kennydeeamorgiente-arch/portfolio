"use client";

import { motion } from "framer-motion";
import { BadgeCheck } from "lucide-react";
import { certifications } from "@/content/certifications";

const ease = [0.76, 0, 0.24, 1] as const;

export function Certifications() {
  return (
    <section
      className="relative overflow-hidden bg-sand px-5 py-24 text-charcoal sm:px-8 md:py-28 lg:px-12"
      id="certifications"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#cebcab]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#e6ded0] to-[#cebcab]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-12 grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-end">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            transition={{ duration: 0.76, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-crimson">
              Certifications
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.94] tracking-[-0.055em] sm:text-7xl">
              Verified learning and technical baseline.
            </h2>
          </motion.div>
          <motion.p
            className="max-w-xl text-lg leading-8 text-charcoal/66"
            initial={{ opacity: 0, y: 28 }}
            transition={{ duration: 0.76, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            These support my practical project work across IT fundamentals,
            cybersecurity awareness, troubleshooting, and systems thinking.
          </motion.p>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {certifications.map((certification, index) => (
            <motion.article
              className="rounded-[1.35rem] border border-charcoal/10 bg-bone/62 p-5"
              initial={{ opacity: 0, y: 34 }}
              key={certification.credentialId}
              transition={{ delay: index * 0.08, duration: 0.72, ease }}
              viewport={{ once: true, margin: "-100px" }}
              whileInView={{ opacity: 1, y: 0 }}
            >
              <div className="mb-12 flex items-center justify-between">
                <span className="text-xs font-semibold uppercase tracking-[0.22em] text-charcoal/45">
                  {certification.issued}
                </span>
                <span className="grid h-11 w-11 place-items-center rounded-full bg-charcoal text-ochre">
                  <BadgeCheck aria-hidden="true" size={18} />
                </span>
              </div>
              <h3 className="text-2xl font-semibold leading-tight tracking-[-0.04em]">
                {certification.title}
              </h3>
              <p className="mt-3 text-sm text-charcoal/62">
                {certification.issuer}
              </p>
              <div className="mt-6 flex flex-wrap gap-2">
                {certification.skills.map((skill) => (
                  <span
                    className="rounded-full border border-charcoal/10 px-3 py-1 text-xs font-semibold text-charcoal/64"
                    key={skill}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
