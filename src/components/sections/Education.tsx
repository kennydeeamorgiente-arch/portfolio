"use client";

import { motion } from "framer-motion";
import { GraduationCap, Trophy } from "lucide-react";
import { education } from "@/content/education";

const ease = [0.76, 0, 0.24, 1] as const;

export function Education() {
  return (
    <section
      className="relative overflow-hidden bg-bone px-5 py-24 text-charcoal sm:px-8 md:py-28 lg:px-12"
      id="education"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[#e6ded0]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 top-0 h-16 bg-gradient-to-b from-[#2a2022] to-[#e6ded0]"
      />
      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid gap-10 lg:grid-cols-[0.85fr_1.15fr]">
          <motion.div
            initial={{ opacity: 0, y: 34 }}
            transition={{ duration: 0.76, ease }}
            viewport={{ once: true, margin: "-100px" }}
            whileInView={{ opacity: 1, y: 0 }}
          >
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.32em] text-crimson">
              Education
            </p>
            <h2 className="max-w-3xl text-5xl font-semibold uppercase leading-[0.94] tracking-[-0.055em] sm:text-7xl">
              Academic foundation behind the work.
            </h2>
          </motion.div>

          <div className="grid gap-4">
            {education.map((item, index) => (
              <motion.article
                className="rounded-[1.4rem] border border-charcoal/10 bg-sand/34 p-5 md:p-7"
                initial={{ opacity: 0, y: 34 }}
                key={item.program}
                transition={{ delay: index * 0.08, duration: 0.72, ease }}
                viewport={{ once: true, margin: "-100px" }}
                whileInView={{ opacity: 1, y: 0 }}
              >
                <div className="flex flex-wrap items-start justify-between gap-5">
                  <div>
                    <p className="text-xs font-semibold uppercase tracking-[0.24em] text-crimson">
                      {item.period}
                    </p>
                    <h3 className="mt-3 text-3xl font-semibold tracking-[-0.045em]">
                      {item.program}
                    </h3>
                    <p className="mt-2 text-base text-charcoal/62">
                      {item.institution}
                    </p>
                  </div>
                  <span className="grid h-12 w-12 place-items-center rounded-full bg-bone text-crimson">
                    <GraduationCap aria-hidden="true" size={20} />
                  </span>
                </div>

                <div className="mt-7 rounded-[1rem] bg-bone/72 p-4">
                  <div className="mb-4 flex items-center gap-2 text-ochre">
                    <Trophy aria-hidden="true" size={17} />
                    <p className="text-xs font-semibold uppercase tracking-[0.2em]">
                      {item.focus}
                    </p>
                  </div>
                  <ul className="grid gap-2 text-sm leading-6 text-charcoal/66">
                    {item.highlights.map((highlight) => (
                      <li key={highlight}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              </motion.article>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
