import { profile } from "@/content/site";
import styles from "./site-footer.module.css";

export function SiteFooter() {
  return (
    <footer className={styles.siteFooter}>
      <div className={styles.footerInner}>
        <div className={styles.footerBrand}>
          <span aria-hidden="true" />
          <strong>{profile.name}</strong>
        </div>
        <p>&copy; 2026 - Web Developer</p>
        <p>React / Node - Portfolio</p>
      </div>
    </footer>
  );
}
