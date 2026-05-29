import type { Metadata } from "next";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/ui/reveal";
import { profile, socialLinks } from "@/content/site";
import styles from "./contact-page.module.css";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${profile.name} for web development projects and collaborations.`,
};

export default function ContactPage() {
  return (
    <main className={styles.contactDesk}>
      <div className={`section-inner section-pad ${styles.contactPageGrid}`}>
        <Reveal>
          <section className={styles.contactBrief}>
            <p className="eyebrow">Contact</p>
            <h1>Let&apos;s Work Together</h1>
            <span>
              Open for opportunities and freelance work. Reach out and
              let&apos;s build something great.
            </span>
          </section>
        </Reveal>

        <Reveal delay={140} variant="slide-left">
          <section className={styles.contactPanel}>
            <ContactForm />

            <div className={styles.contactMetaGrid}>
              <div>
                <p>Email</p>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </div>

              <div>
                <p>Location</p>
                <strong>{profile.location}</strong>
              </div>
            </div>

            <div className={styles.contactLinks}>
              <p>Links</p>
              <div>
                {socialLinks.map((link) => (
                  <a
                    className={styles.actionButton}
                    href={link.href}
                    key={link.label}
                    rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                    target={link.href.startsWith("http") ? "_blank" : undefined}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </section>
        </Reveal>
      </div>
    </main>
  );
}
