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
    <section className="hero-section" id="hero">
      <div className="hero-grid-bg" aria-hidden="true" />
      <div className="hero-glow" aria-hidden="true" />

      <div className="section-inner hero-inner">
        <div className="hero-grid">
          <div className="hero-copy">
            <Reveal>
              <p className="availability-badge">
                <span aria-hidden="true" />
                {profile.availableFor}
              </p>
            </Reveal>

            <Reveal delay={80}>
              <p className="role-tag">
                <span aria-hidden="true" />
                {profile.title}
              </p>
              <h1 className="hero-name">
                <span>Kenny Dee</span>
                <span>Amorgiente</span>
              </h1>
            </Reveal>

            <Reveal delay={160}>
              <p className="hero-bio">{profile.summary}</p>
            </Reveal>

            <Reveal className="social-row" delay={220}>
              {socialProfiles.map((link) => {
                const Icon =
                  socialIcons[link.label as keyof typeof socialIcons] ??
                  GitHubIcon;
                const isExternal = link.href.startsWith("http");

                return (
                  <a
                    aria-label={link.label}
                    className="social-icon"
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

            <Reveal className="cta-row" delay={280}>
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

          <Reveal className="hero-card-wrap" delay={180} variant="slide-left">
            <aside className="hero-profile-card" aria-label="Profile card">
              <div className="hero-card-accent" aria-hidden="true" />
              <div className="hero-photo-area">
                <Image
                  src={profile.avatar}
                  alt={`${profile.name} profile image`}
                  width={760}
                  height={900}
                  className="hero-profile-image"
                  priority
                />
              </div>
              <div className="hero-card-info">
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

        <div className="stats-row" aria-label="Portfolio statistics">
          <Reveal variant="scale">
            <div className="stat-item">
              <strong>
                <StatCounter value={projects.length} />
              </strong>
              <span>Projects</span>
            </div>
          </Reveal>
          <Reveal delay={80} variant="scale">
            <div className="stat-item">
              <strong>
                <StatCounter value={certifications.length} />
              </strong>
              <span>Certificates</span>
            </div>
          </Reveal>
          <Reveal delay={160} variant="scale">
            <div className="stat-item">
              <b>React / Node</b>
              <span>Primary Stack</span>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
