import Link from "next/link";
import { ArrowUpRight, CheckCircle2, Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { getCertifications } from "@/lib/portfolio-data";
import styles from "./certification-grid.module.css";

type CertificationGridProps = {
  limit?: number;
};

const achievementNotes = [
  "Cum Laude graduate, Batch 2026",
  "Dean's Lister from 2023 to 2026",
  "Special recognition for FUSOMS implementation",
];

const thumbBars = [
  ["default", "gold short", "dark", "short"],
  ["gold", "short", "default", "gold short"],
  ["short", "default", "gold short", "dark"],
];

function getThumbBarClassName(bar: string) {
  return [
    styles.thumbBar,
    bar.includes("gold") ? styles.gold : "",
    bar.includes("dark") ? styles.dark : "",
    bar.includes("short") ? styles.short : "",
  ]
    .filter(Boolean)
    .join(" ");
}

export async function CertificationGrid({ limit }: CertificationGridProps) {
  const certifications = await getCertifications();
  const visibleCertifications = limit
    ? certifications.slice(0, limit)
    : certifications;

  return (
    <section className={styles.certificationsSection} id="certifications">
      <div className="section-inner section-pad">
        <div className="section-header split">
          <Reveal>
            <div>
              <p className="eyebrow">Certificates</p>
              <h2 className="section-title">
                Certifications
                <br />
                & Proof
              </h2>
            </div>
          </Reveal>
          {limit ? (
            <Reveal delay={120} variant="slide-left">
              <Link className="btn-ghost" href="/certifications">
                <span>All proof</span>
                <ArrowUpRight aria-hidden="true" size={16} strokeWidth={2.2} />
              </Link>
            </Reveal>
          ) : null}
        </div>

        <div className={styles.certLayout}>
          <div className={styles.certList} aria-label="Certificate cards">
            {visibleCertifications.map((certification, index) => (
              <Reveal delay={index * 80} key={certification.credentialId}>
                <article className={styles.certCard}>
                  <div className={styles.certThumb} aria-hidden="true">
                    {thumbBars[index % thumbBars.length].map((bar, barIndex) => (
                      <span
                        className={getThumbBarClassName(bar)}
                        key={`${bar}-${barIndex}`}
                      />
                    ))}
                  </div>
                  <div className={styles.certCopy}>
                    <CheckCircle2 aria-hidden="true" size={14} />
                    <small>{certification.credentialId}</small>
                    <p>{certification.issuer}</p>
                    <h3>{certification.title}</h3>
                    <time>Issued {certification.issued}</time>
                    <div className="tag-row">
                      {certification.skills.map((skill) => (
                        <span className="tag" key={skill}>
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>

          <Reveal delay={160} variant="slide-left">
            <aside className={styles.winsCard} aria-label="Additional achievements">
              <div className={styles.winsHead}>
                <span aria-hidden="true">
                  <Trophy size={14} strokeWidth={1.8} />
                </span>
                <strong>Other Wins</strong>
              </div>
              <div className={styles.winsList}>
                {achievementNotes.map((achievement, index) => (
                  <div className={styles.winsItem} key={achievement}>
                    <span>{String(index + 1).padStart(2, "0")}</span>
                    <p>{achievement}</p>
                  </div>
                ))}
              </div>
            </aside>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
