"use client";

import { motion } from "framer-motion";
import { useEffect, useState, type MouseEvent } from "react";
import { cn } from "@/lib/utils";

const navItems = [
  { id: "hero", label: "Intro" },
  { id: "tech-stack", label: "Stack" },
  { id: "projects", label: "Cases" },
  { id: "education", label: "Education" },
  { id: "certifications", label: "Certs" },
  { id: "contact", label: "Contact" },
];

export function FloatingNav() {
  const [activeId, setActiveId] = useState("hero");

  useEffect(() => {
    const sections = navItems
      .map((item) => document.getElementById(item.id))
      .filter(Boolean) as HTMLElement[];

    const observer = new IntersectionObserver(
      (entries) => {
        const activeEntry = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (activeEntry?.target.id) {
          setActiveId(activeEntry.target.id);
        }
      },
      {
        rootMargin: "-38% 0px -44% 0px",
        threshold: [0.18, 0.4, 0.65],
      },
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  function handleClick(event: MouseEvent<HTMLAnchorElement>, id: string) {
    event.preventDefault();
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    window.history.replaceState(null, "", `#${id}`);
    setActiveId(id);
  }

  return (
    <header className="fixed inset-x-0 top-4 z-50 flex justify-center px-4">
      <nav
        aria-label="Portfolio sections"
        className="flex w-full max-w-[48rem] items-center justify-between gap-1 rounded-full border border-charcoal/10 bg-bone/78 p-1.5 shadow-[0_18px_70px_rgba(56,41,43,0.10)] backdrop-blur-2xl"
      >
        {navItems.map((item) => {
          const isActive = activeId === item.id;

          return (
            <motion.a
              aria-current={isActive ? "page" : undefined}
              className={cn(
                "group relative isolate flex h-10 flex-1 items-center justify-center overflow-hidden rounded-full px-2 text-[0.62rem] font-semibold uppercase tracking-[0.12em] text-charcoal/62 transition-colors duration-300 hover:text-charcoal sm:px-3 sm:text-[0.72rem] sm:tracking-[0.16em]",
                isActive && "text-bone",
              )}
              href={`#${item.id}`}
              key={item.id}
              onClick={(event) => handleClick(event, item.id)}
              whileHover={{ y: -1 }}
              whileTap={{ scale: 0.97 }}
            >
              {!isActive ? (
                <span className="absolute inset-0 rounded-full bg-charcoal/[0.065] opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              ) : null}
              {isActive ? (
                <motion.span
                  className="absolute inset-0 rounded-full bg-crimson shadow-[0_10px_34px_rgba(151,44,31,0.28)]"
                  layoutId="active-nav-indicator"
                  transition={{ type: "spring", stiffness: 360, damping: 32 }}
                />
              ) : null}
              <span className="absolute bottom-1.5 h-1 w-1 rounded-full bg-ochre opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
              <span className="relative z-10">{item.label}</span>
            </motion.a>
          );
        })}
      </nav>
    </header>
  );
}
