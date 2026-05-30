"use client";

import { motion, useTransform, type Variants } from "framer-motion";
import {
  ArrowDown,
  ArrowUpRight,
  Database,
  Download,
  Mail,
  MapPin,
  Server,
  SquareCode,
} from "lucide-react";
import Image from "next/image";
import { MagneticLink } from "@/components/ui/MagneticLink";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/brand-icons";
import { certifications } from "@/content/certifications";
import { profile, socialLinks } from "@/content/site";
import { useMousePosition } from "@/hooks/useMousePosition";
import styles from "./Hero.module.css";

const ease = [0.76, 0, 0.24, 1] as const;

const container: Variants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const textReveal: Variants = {
  hidden: { y: "112%" },
  visible: {
    y: "0%",
    transition: { duration: 0.9, ease },
  },
};

const socialIcons = {
  Facebook: FacebookIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
};

export function Hero() {
  const { x, y } = useMousePosition(1);
  const accentX = useTransform(x, [-0.5, 0.5], [-28, 28]);
  const accentY = useTransform(y, [-0.5, 0.5], [-18, 18]);
  const ringX = useTransform(x, [-0.5, 0.5], [18, -18]);
  const ringY = useTransform(y, [-0.5, 0.5], [22, -22]);
  const socialProfiles = socialLinks.filter((link) => link.label !== "Resume");
  const resumeLink = socialLinks.find((link) => link.label === "Resume");

  return (
    <section
      className="relative flex min-h-screen overflow-hidden bg-charcoal px-5 pt-28 text-bone sm:px-8 lg:px-12"
      id="hero"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 bg-[radial-gradient(circle_at_16%_24%,rgba(203,133,48,0.2),transparent_32%),radial-gradient(circle_at_74%_16%,rgba(151,44,31,0.26),transparent_30%),linear-gradient(135deg,#38292b_0%,#241b1d_55%,#151112_100%)]"
      />
      <div
        aria-hidden="true"
        className="absolute inset-x-0 bottom-0 h-40 bg-gradient-to-b from-transparent to-[#241b1d]"
      />
      <div className={styles.grain} aria-hidden="true" />
      <motion.div
        aria-hidden="true"
        className="absolute left-[7vw] top-[24vh] h-40 w-40 rounded-full bg-ochre/18 blur-2xl"
        animate={{ opacity: [0.34, 0.62, 0.34], scale: [1, 1.08, 1] }}
        style={{ x: accentX, y: accentY }}
        transition={{ duration: 6.5, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute right-[7vw] top-[18vh] h-[21rem] w-[21rem] rounded-full border border-bone/10"
        animate={{ rotate: [0, 8, -5, 0], scale: [1, 1.03, 1] }}
        style={{ x: ringX, y: ringY }}
        transition={{ duration: 11, ease: "easeInOut", repeat: Infinity }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute bottom-[13vh] right-[18vw] h-28 w-28 rounded-full bg-crimson/30 blur-xl"
        animate={{ opacity: [0.3, 0.56, 0.3], scale: [1, 1.12, 1] }}
        style={{ x: accentX, y: ringY }}
        transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
      />

      <div className="relative z-10 mx-auto grid w-full max-w-7xl items-center gap-12 py-20 lg:grid-cols-[1fr_0.72fr]">
        <motion.div
          animate="visible"
          initial="hidden"
          variants={container}
        >
          <div className="mb-8 overflow-hidden">
            <motion.p
              className="text-xs font-semibold uppercase tracking-[0.32em] text-ochre"
              variants={textReveal}
            >
              {profile.availableFor} / {profile.title}
            </motion.p>
          </div>

          <h1 className="max-w-5xl [font-family:Geist,Inter,system-ui,sans-serif] text-6xl font-semibold uppercase leading-[0.88] tracking-[-0.055em] text-bone sm:text-8xl md:text-[7.2rem] lg:text-[8.8rem]">
            {["Kenny Dee", "Amorgiente"].map((line) => (
              <span className="block overflow-hidden pb-2" key={line}>
                <motion.span className="block" variants={textReveal}>
                  {line}
                </motion.span>
              </span>
            ))}
          </h1>

          <div className="mt-10 grid max-w-4xl gap-6 border-t border-bone/14 pt-8 md:grid-cols-[0.76fr_1.24fr]">
            <motion.p
              className="text-2xl font-semibold leading-tight tracking-[-0.03em] text-ochre sm:text-3xl"
              initial={{ opacity: 0, y: 24 }}
              transition={{ delay: 0.55, duration: 0.75, ease }}
              animate={{ opacity: 1, y: 0 }}
            >
              Web Developer focused on scalable backends and highly interactive frontends.
            </motion.p>
            <motion.p
              className="text-base leading-8 text-bone/68 sm:text-lg"
              initial={{ opacity: 0, y: 24 }}
              transition={{ delay: 0.65, duration: 0.75, ease }}
              animate={{ opacity: 1, y: 0 }}
            >
              I build web systems that solve workflow problems: support
              ticket routing, payroll and attendance tracking, parking
              visibility, and university event approvals.
            </motion.p>
          </div>

          <motion.div
            className="mt-8 flex flex-wrap items-center gap-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.72, duration: 0.7, ease }}
            animate={{ opacity: 1, y: 0 }}
          >
            {socialProfiles.map((link) => {
              const Icon =
                socialIcons[link.label as keyof typeof socialIcons] ??
                GitHubIcon;
              const isExternal = link.href.startsWith("http");

              return (
                <MagneticLink
                  aria-label={link.label}
                  className="grid h-11 w-11 place-items-center rounded-full border border-bone/15 bg-bone/[0.06] text-bone transition-colors duration-300 hover:border-ochre/60 hover:bg-ochre hover:text-charcoal"
                  href={link.href}
                  key={link.label}
                  rel={isExternal ? "noreferrer noopener" : undefined}
                  target={isExternal ? "_blank" : undefined}
                  title={link.label}
                >
                  <Icon height={18} width={18} />
                </MagneticLink>
              );
            })}
            <MagneticLink
              aria-label="Email Kenny"
              className="grid h-11 w-11 place-items-center rounded-full border border-bone/15 bg-bone/[0.06] text-bone transition-colors duration-300 hover:border-ochre/60 hover:bg-ochre hover:text-charcoal"
              href={`mailto:${profile.email}`}
              title="Email"
            >
              <Mail aria-hidden="true" size={18} />
            </MagneticLink>
          </motion.div>

          <motion.div
            className="mt-9 flex flex-wrap gap-3"
            initial={{ opacity: 0, y: 20 }}
            transition={{ delay: 0.78, duration: 0.7, ease }}
            animate={{ opacity: 1, y: 0 }}
          >
            <MagneticLink
              className="inline-flex h-12 items-center gap-2 rounded-full bg-crimson px-6 text-sm font-semibold uppercase tracking-[0.14em] text-bone"
              href="#projects"
            >
              View Case Studies
              <ArrowUpRight aria-hidden="true" size={16} />
            </MagneticLink>
            {resumeLink ? (
              <MagneticLink
                className="inline-flex h-12 items-center gap-2 rounded-full border border-bone/18 px-6 text-sm font-semibold uppercase tracking-[0.14em] text-bone"
                href={resumeLink.href}
                target="_blank"
              >
                <Download aria-hidden="true" size={16} />
                Resume
              </MagneticLink>
            ) : null}
          </motion.div>
        </motion.div>

        <motion.aside
          className="relative mx-auto w-full max-w-[31rem] lg:max-w-none"
          initial={{ opacity: 0, scale: 0.96 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.9, ease }}
        >
          <motion.div
            aria-hidden="true"
            className="absolute -left-8 top-8 h-44 w-44 rounded-full border border-ochre/45"
            animate={{ rotate: [0, 14, -6, 0], x: [0, 12, -8, 0], y: [0, -10, 6, 0] }}
            transition={{ duration: 10, ease: "easeInOut", repeat: Infinity }}
          />
          <motion.div
            aria-hidden="true"
            className="absolute -right-7 top-0 h-72 w-72 rounded-full border border-bone/10"
            animate={{ rotate: [0, -10, 6, 0], x: [0, -12, 10, 0], y: [0, 14, -8, 0] }}
            transition={{ duration: 13, ease: "easeInOut", repeat: Infinity }}
          />
          <div className="relative z-10 mx-auto overflow-hidden rounded-[2rem] border border-bone/10 bg-sand/15 p-3 shadow-[0_30px_90px_rgba(0,0,0,0.22)] backdrop-blur">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-bone/10">
              <Image
                alt={`${profile.name} profile image`}
                className="object-cover"
                fill
                priority
                sizes="(min-width: 1024px) 420px, 88vw"
                src={profile.avatar}
              />
            </div>
            <div className="grid gap-2 p-4 text-sm text-bone/70">
              <strong className="text-xl text-bone">{profile.name}</strong>
              <span className="inline-flex items-center gap-2">
                <MapPin aria-hidden="true" size={14} />
                {profile.location}
              </span>
              <a
                className="inline-flex items-center gap-2 break-all transition-colors hover:text-ochre"
                href={`mailto:${profile.email}`}
              >
                <Mail aria-hidden="true" size={14} />
                {profile.email}
              </a>
            </div>
          </div>
          <div className="relative z-20 mt-4 rounded-[1.4rem] border border-bone/10 bg-bone/[0.085] p-5 backdrop-blur">
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ochre">
              Snapshot
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-3">
              {[
                [SquareCode, "4 focused case studies"],
                [Server, "Node.js and CodeIgniter backends"],
                [Database, `${certifications.length} certifications listed`],
              ].map(([Icon, label]) => (
                <div
                  className="flex items-center gap-3 text-sm font-medium text-bone/78 sm:block"
                  key={label as string}
                >
                  <span className="grid h-9 w-9 place-items-center rounded-full bg-bone/[0.08] text-ochre sm:mb-3">
                    <Icon aria-hidden="true" size={16} />
                  </span>
                  {label as string}
                </div>
              ))}
            </div>
          </div>
          <motion.div
            aria-hidden="true"
            className="absolute right-10 top-0 h-32 w-32 rounded-full bg-crimson/20 blur-xl"
            animate={{ opacity: [0.22, 0.45, 0.22], scale: [1, 1.12, 1] }}
            transition={{ duration: 8, ease: "easeInOut", repeat: Infinity }}
          />
        </motion.aside>
      </div>

      <a
        className={`${styles.scrollIndicator} absolute bottom-7 left-1/2 z-20 -translate-x-1/2 text-center text-[0.65rem] font-semibold uppercase tracking-[0.28em] text-ochre`}
        href="#tech-stack"
      >
        <ArrowDown aria-hidden="true" className="mx-auto mb-1" size={15} />
        Scroll
      </a>
    </section>
  );
}
