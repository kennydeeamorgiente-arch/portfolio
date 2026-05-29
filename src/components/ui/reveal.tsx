"use client";

import {
  type CSSProperties,
  type ReactNode,
  useEffect,
  useRef,
  useState,
} from "react";
import styles from "./reveal.module.css";

type RevealProps = {
  children: ReactNode;
  className?: string;
  delay?: number;
  variant?: "rise" | "slide-left" | "slide-right" | "scale";
};

export function Reveal({
  children,
  className = "",
  delay = 0,
  variant = "rise",
}: RevealProps) {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const element = ref.current;

    if (!element) {
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      {
        rootMargin: "0px 0px -12% 0px",
        threshold: 0.16,
      },
    );

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  const variantClassName =
    variant === "slide-left"
      ? styles.slideLeft
      : variant === "slide-right"
        ? styles.slideRight
        : variant === "scale"
          ? styles.scale
          : "";

  return (
    <div
      className={[
        styles.reveal,
        variantClassName,
        isVisible ? styles.visible : "",
        className,
      ]
        .filter(Boolean)
        .join(" ")}
      data-visible={isVisible ? "true" : "false"}
      ref={ref}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </div>
  );
}
