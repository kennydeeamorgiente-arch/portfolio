"use client";

import { type CSSProperties, type PointerEvent, useState } from "react";
import { Download } from "lucide-react";

type ResumeSplashButtonProps = {
  href: string;
};

export function ResumeSplashButton({ href }: ResumeSplashButtonProps) {
  const [splashStyle, setSplashStyle] = useState<CSSProperties>({
    "--splash-x": "50%",
    "--splash-y": "50%",
  } as CSSProperties);
  const [isSplashing, setIsSplashing] = useState(false);

  function handlePointerDown(event: PointerEvent<HTMLAnchorElement>) {
    const rect = event.currentTarget.getBoundingClientRect();
    setSplashStyle({
      "--splash-x": `${event.clientX - rect.left}px`,
      "--splash-y": `${event.clientY - rect.top}px`,
    } as CSSProperties);
    setIsSplashing(false);
    window.requestAnimationFrame(() => setIsSplashing(true));
  }

  return (
    <a
      aria-label="Download Kenny Dee Amorgiente resume"
      className={`splash-resume-button ${isSplashing ? "is-splashing" : ""}`}
      download
      href={href}
      onAnimationEnd={() => setIsSplashing(false)}
      onPointerDown={handlePointerDown}
      style={splashStyle}
    >
      <Download aria-hidden="true" size={18} strokeWidth={2.4} />
      <span>Resume</span>
    </a>
  );
}
