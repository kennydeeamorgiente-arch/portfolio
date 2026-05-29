import { profile } from "@/content/site";

export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span aria-hidden="true" />
          <strong>{profile.name}</strong>
        </div>
        <p>&copy; 2026 - Web Developer</p>
        <p>React / Node - Portfolio</p>
      </div>
    </footer>
  );
}
