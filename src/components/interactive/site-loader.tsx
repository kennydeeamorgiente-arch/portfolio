"use client";

import { useEffect, useState } from "react";

export function SiteLoader() {
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    const timer = window.setTimeout(() => {
      setIsVisible(false);
    }, 1250);

    return () => window.clearTimeout(timer);
  }, []);

  if (!isVisible) {
    return null;
  }

  return (
    <div className="site-loader" role="status" aria-live="polite">
      <div className="loader-panel">
        <p>Loading portfolio</p>
        <div className="loader-name">Kenny Dee A. Amorgiente</div>
        <div className="loader-track" aria-hidden="true">
          <span />
        </div>
        <div className="loader-steps" aria-hidden="true">
          <span>UI</span>
          <span>API</span>
          <span>Data</span>
          <span>Proof</span>
        </div>
      </div>
    </div>
  );
}
