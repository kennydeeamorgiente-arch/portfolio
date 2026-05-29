import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { StatCounter } from "@/components/interactive/stat-counter";
import { Reveal } from "@/components/ui/reveal";
import {
  FacebookIcon,
  GitHubIcon,
  InstagramIcon,
  LinkedInIcon,
} from "@/components/ui/brand-icons";
import { certifications } from "@/content/certifications";
import { projects } from "@/content/projects";
import { profile, socialLinks } from "@/content/site";
import styles from "./hero-section.module.css";

const socialIcons = {
  Facebook: FacebookIcon,
  GitHub: GitHubIcon,
  Instagram: InstagramIcon,
  LinkedIn: LinkedInIcon,
};

export function HeroSection() {
  const resumeLink = socialLinks.find((link) => link.label === "Resume");
  const socialProfiles = socialLinks.filter((link) => link.label !== "Resume");

  return (
    <section className={styles.heroSection} id="hero">
      <div className={styles.gridBg} aria-hidden="true" />
      <div className={styles.glow} aria-hidden="true" />

      <div className={`section-inner ${styles.heroInner}`}>
        <div className={styles.heroGrid}>
          <div className={styles.heroCopy}>
            <Reveal>
              <p className={styles.availabilityBadge}>
                <span aria-hidden="true" />
                {profile.availableFor}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className={styles.roleTag}>
                <span aria-hidden="true" />
                {profile.title}
              </p>
              <h1 className={styles.heroName}>
                <span>Kenny Dee</span>
                <span>Amorgiente</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className={styles.heroBio}>{profile.summary}</p>
            </Reveal>

            <Reveal className={styles.socialRow} delay={220}>
              {socialProfiles.map((link) => {
                const Icon =
                  socialIcons[link.label as keyof typeof socialIcons] ??
                  GitHubIcon;
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    aria-label={link.label}
                    className={styles.socialIcon}
                    href={link.href}
                    key={link.label}
                    rel={isExternal ? "noreferrer noopener" : undefined}
                    target={isExternal ? "_blank" : undefined}
                    title={link.label}
                  >
                    <Icon width={18} height={18} />
                  </a>
                );
              })}
            </Reveal>

            <Reveal className={styles.ctaRow} delay={280}>
              <Link className="btn-primary" href="#projects">
                <span>Projects</span>
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2.2} />
              </Link>
              <Link className="btn-ghost" href="#contact">
                Contact
              </Link>
              {resumeLink ? (
                <a className="btn-ghost btn-sm" href={resumeLink.href}>
                  <Download aria-hidden="true" size={15} strokeWidth={2} />
                  <span>Resume</span>
                </a>
              ) : null}
            </Reveal>
          </div>

          <Reveal className={styles.cardWrap} delay={180} variant="slide-left">
            <aside className={styles.profileCard} aria-label="Profile card">
              <div className={styles.cardAccent} aria-hidden="true" />
              <div className={styles.photoArea}>
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile image`}
                  width={760}
                  height={900}
                  className={styles.profileImage}
                  priority
                />
              </div>
              <div className={styles.cardInfo}>
                <p>Portfolio</p>
                <strong>{profile.name}</strong>
                <span>
                  <MapPin aria-hidden="true" size={12} />
                  {profile.location}
                </span>
                <a href={`mailto:${profile.email}`}>
                  <Mail aria-hidden="true" size={12} />
                  {profile.email}
                </a>
              </div>
            </aside>
          </Reveal>
        </div>

        <div className={styles.statsRow} aria-label="Portfolio statistics">
          <Reveal variant="scale">
            <div className={styles.statItem}>
              <strong>
                <StatCounter value={projects.length} />
              </strong>
              <span>Projects</span>
            </div>
          </Reveal>
          <Reveal delay={80} variant="scale">
            <div className={styles.statItem}>
              <strong>
                <StatCounter value={certifications.length} />
              </strong>
              <span>Certificates</span>
            </div>
          </Reveal>
          <Reveal delay={160} variant="scale">
            <div className={styles.statItem}>
              <b>React / Node</b>
              <span>Primary Stack</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
