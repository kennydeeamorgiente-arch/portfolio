"use client";

import { ReactLenis } from "@studio-freight/react-lenis";
import type { ComponentType, ReactNode } from "react";

type ReactLenisProps = {
  children: ReactNode;
  options?: {
    duration?: number;
    easing?: (time: number) => number;
    smoothWheel?: boolean;
    wheelMultiplier?: number;
  };
  root?: boolean;
};

const TypedReactLenis = ReactLenis as unknown as ComponentType<ReactLenisProps>;

export function LenisProvider({ children }: { children: ReactNode }) {
  return (
    <TypedReactLenis
      root
      options={{
        duration: 1.15,
        easing: (time: number) => Math.min(1, 1.001 - 2 ** (-10 * time)),
        smoothWheel: true,
        wheelMultiplier: 0.92,
      }}
    >
      {children}
    </TypedReactLenis>
  );
}
