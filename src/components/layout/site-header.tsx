"use client";

import Link from "next/link";
import { X } from "lucide-react";
import { useState } from "react";
import { navigation, profile } from "@/content/site";
import styles from "./site-header.module.css";

export function SiteHeader() {
  const [isOpen, setIsOpen] = useState(false);

  function closeMenu() {
    setIsOpen(false);
  }

  return (
    <header className={styles.siteHeader}>
      <nav className={styles.siteNav} aria-label="Primary navigation">
        <Link className={styles.brandMark} href="/#hero" onClick={closeMenu}>
          <span aria-hidden="true" />
          <strong>{profile.name}</strong>
        </Link>

        <div className={styles.navCluster} data-open={isOpen}>
          <button
            aria-label="Close navigation menu"
            className={styles.mobileMenuClose}
            onClick={closeMenu}
            type="button"
          >
            <X aria-hidden="true" size={28} strokeWidth={1.7} />
          </button>
          {navigation.map((item) => (
            <Link
              className={styles.navLink}
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
          className={styles.mobileMenuButton}
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
