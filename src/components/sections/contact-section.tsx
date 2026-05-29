import { ArrowRight, Download, Mail, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { profile, socialLinks } from "@/content/site";

export function ContactSection() {
  const resumeLink = socialLinks.find((link) => link.label === "Resume");

  return (
    <section className="contact-section" id="contact">
      <div className="section-inner section-pad">
        <Reveal>
          <div className="contact-content">
            <p className="eyebrow">Contact</p>
            <h2 className="contact-title">
              Let&apos;s Work
              <br />
              Together
            </h2>
            <p>
              Open for opportunities and freelance work. Reach out and
              let&apos;s build something great.
            </p>
            <div className="contact-actions">
              <a className="btn-primary" href={`mailto:${profile.email}`}>
                <span>Send Message</span>
                <ArrowRight aria-hidden="true" size={17} strokeWidth={2.2} />
              </a>
              {resumeLink ? (
                <a className="btn-ghost" href={resumeLink.href}>
                  <Download aria-hidden="true" size={16} strokeWidth={2} />
                  <span>Download Resume</span>
                </a>
              ) : null}
            </div>
            <div className="contact-details">
              <span>
                <Mail aria-hidden="true" size={14} strokeWidth={1.7} />
                {profile.email}
              </span>
              <span>
                <MapPin aria-hidden="true" size={14} strokeWidth={1.7} />
                {profile.location}
              </span>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
