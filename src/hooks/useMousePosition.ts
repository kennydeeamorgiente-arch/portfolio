"use client";

import { useEffect } from "react";
import { useMotionValue, useSpring } from "framer-motion";

export function useMousePosition(strength = 1) {
  const rawX = useMotionValue(0);
  const rawY = useMotionValue(0);
  const x = useSpring(rawX, { damping: 34, stiffness: 130, mass: 0.4 });
  const y = useSpring(rawY, { damping: 34, stiffness: 130, mass: 0.4 });

  useEffect(() => {
    function handlePointerMove(event: PointerEvent) {
      const normalizedX = (event.clientX / window.innerWidth - 0.5) * strength;
      const normalizedY = (event.clientY / window.innerHeight - 0.5) * strength;
      rawX.set(normalizedX);
      rawY.set(normalizedY);
    }

    window.addEventListener("pointermove", handlePointerMove);

    return () => window.removeEventListener("pointermove", handlePointerMove);
  }, [rawX, rawY, strength]);

  return { x, y };
}
