"use client";

import {
  motion,
  useMotionValue,
  useSpring,
  type HTMLMotionProps,
} from "framer-motion";
import type { MouseEvent, ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticLinkProps = Omit<
  HTMLMotionProps<"a">,
  "onMouseLeave" | "onMouseMove" | "style"
> & {
  children: ReactNode;
  intensity?: number;
  onMouseLeave?: (event: MouseEvent<HTMLAnchorElement>) => void;
  onMouseMove?: (event: MouseEvent<HTMLAnchorElement>) => void;
};

export function MagneticLink({
  children,
  className,
  intensity = 0.24,
  onMouseLeave,
  onMouseMove,
  ...props
}: MagneticLinkProps) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 22, stiffness: 180, mass: 0.35 });
  const y = useSpring(rawY, { damping: 22, stiffness: 180, mass: 0.35 });

  function handleMouseMove(event: MouseEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    rawX.set((event.clientX - rect.left - rect.width / 2) * intensity);
    rawY.set((event.clientY - rect.top - rect.height / 2) * intensity);
    onMouseMove?.(event);
  }

  function handleMouseLeave(event: MouseEvent<HTMLAnchorElement>) {
    rawX.set(0);
    rawY.set(0);
    onMouseLeave?.(event);
  }

  return (
    <motion.a
      className={cn(className)}
      onMouseLeave={handleMouseLeave}
      onMouseMove={handleMouseMove}
      style={{ x, y }}
      {...props}
    >
      {children}
    </motion.a>
  );
}
