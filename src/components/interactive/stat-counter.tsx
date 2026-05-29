"use client";

import { useEffect, useRef, useState } from "react";

type StatCounterProps = {
  value: number;
};

export function StatCounter({ value }: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const [displayValue, setDisplayValue] = useState(0);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) {
          return;
        }

        let current = 0;
        const step = Math.ceil(value / 20);
        const interval = window.setInterval(() => {
          current = Math.min(value, current + step);
          setDisplayValue(current);

          if (current >= value) {
            window.clearInterval(interval);
          }
        }, 60);

        observer.disconnect();
      },
      { threshold: 0.5 },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, [value]);

  return <span ref={ref}>{displayValue}</span>;
}
