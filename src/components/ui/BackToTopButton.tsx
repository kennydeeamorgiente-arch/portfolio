"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUp } from "lucide-react";
import { useEffect, useRef, useState } from "react";

const ease = [0.76, 0, 0.24, 1] as const;

export function BackToTopButton() {
  const [isVisible, setIsVisible] = useState(false);
  const lastTrigger = useRef(0);

  useEffect(() => {
    function handleScroll() {
      setIsVisible(window.scrollY > 720);
    }

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  function scrollToTop() {
    const now = window.performance.now();

    if (now - lastTrigger.current < 240) {
      return;
    }

    lastTrigger.current = now;
    setIsVisible(false);
    window.history.replaceState(null, "", "#hero");
    window.scrollTo({ behavior: "smooth", left: 0, top: 0 });
  }

  return (
    <AnimatePresence>
      {isVisible ? (
        <motion.button
          aria-label="Back to top"
          className="fixed bottom-5 right-5 z-50 grid h-12 w-12 place-items-center rounded-full border border-charcoal/15 bg-charcoal text-bone shadow-[0_18px_50px_rgba(56,41,43,0.18)] outline-none transition-colors duration-300 hover:bg-crimson focus-visible:ring-2 focus-visible:ring-ochre focus-visible:ring-offset-2 focus-visible:ring-offset-bone"
          initial={{ opacity: 0, scale: 0.86, y: 18 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.86, y: 18 }}
          onClick={scrollToTop}
          onPointerDown={scrollToTop}
          transition={{ duration: 0.35, ease }}
          type="button"
          whileHover={{ y: -3 }}
          whileTap={{ scale: 0.94 }}
        >
          <ArrowUp aria-hidden="true" size={19} strokeWidth={2.4} />
        </motion.button>
      ) : null}
    </AnimatePresence>
  );
}
