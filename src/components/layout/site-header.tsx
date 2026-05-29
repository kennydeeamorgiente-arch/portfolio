"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/content/site";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className="site-header">
      <nav className="site-nav" aria-label="Primary navigation">
        <Link className="brand-mark" href="/#hero" onClick={closeMenu}>
          <span aria-hidden="true" />
          <strong>{profile.name}</strong>
        </Link>

        <div className="nav-cluster" data-open={isOpen}>
          <button
            aria-label="Close navigation menu"
            className="mobile-menu-close"
            onClick={closeMenu}
            type="button"
          >
            <X aria-hidden="true" size={28} strokeWidth={1.7} />
          </button>
          {navigation.map((item) => (
            <Link
              className="nav-link"
              href={item.href}
              key={item.href}
              onClick={closeMenu}
            >
              {item.label}
            </Link>
          ))}
        </div>

        <button
          aria-expanded={isOpen}
          aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
          className="mobile-menu-button"
          onClick={() => setIsOpen((current) => !current)}
          type="button"
        >
          <span aria-hidden="true" />
          <span aria-hidden="true" />
          <span aria-hidden="true" />
        </button>
      </nav>
    </header>
  );
}
