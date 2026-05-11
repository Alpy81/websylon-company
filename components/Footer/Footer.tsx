import Link from "next/link";
import Image from "next/image";
import styles from "./Footer.module.css";

/* ── Icons ── */
const InstagramIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.8"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
  </svg>
);

const GithubIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.166 6.839 9.489.5.092.682-.217.682-.482 0-.237-.009-.868-.013-1.703-2.782.604-3.369-1.34-3.369-1.34-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.087 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.11-4.555-4.943 0-1.091.39-1.984 1.029-2.683-.103-.253-.446-1.27.098-2.647 0 0 .84-.269 2.75 1.025A9.578 9.578 0 0 1 12 6.836a9.59 9.59 0 0 1 2.504.337c1.909-1.294 2.747-1.025 2.747-1.025.546 1.377.203 2.394.1 2.647.64.699 1.028 1.592 1.028 2.683 0 3.842-2.339 4.687-4.566 4.935.359.309.678.919.678 1.852 0 1.336-.012 2.415-.012 2.743 0 .267.18.578.688.48C19.138 20.163 22 16.418 22 12c0-5.523-4.477-10-10-10z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const MailIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
  </svg>
);

const PhoneIcon = () => (
  <svg
    width="15"
    height="15"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="12"
    height="12"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Data ── */
const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/branchen", label: "Branchen" },
  { href: "/leistungen", label: "Leistungen" },
];

const moreLinks = [
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
  { href: "/kontakt", label: "Kontakt" },
];

const legalLinks = [
  { href: "/impressum", label: "Impressum" },
  { href: "/datenschutz", label: "Datenschutz" },
  { href: "/agb", label: "AGB" },
];

/* ── Component ── */
export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <div className={styles.footerWrapper}>
      {/* Gradient Topline */}
      <div className={styles.topLine} aria-hidden="true" />
      {/* Glow */}
      <div className={styles.footerGlow} aria-hidden="true" />

      <footer className={styles.footer}>
        <div className={styles.top}>
          {/* ── Brand ── */}
          <div className={styles.brand}>
            <div className={styles.brandHead}>
              <Link href="/" aria-label="Websylon – Zur Startseite">
                <Image
                  src="/logos/websylon-navbar.png"
                  alt="Websylon Logo"
                  width={140}
                  height={40}
                  style={{ width: "200px", height: "auto" }}
                  className={styles.logo}
                />
              </Link>
            </div>

            <p className={styles.brandText}>
              Professionelle Webentwicklung für Unternehmen, die mehr wollen als
              nur online präsent zu sein. Modern, schnell, individuell.
            </p>

            <div className={styles.contact}>
              <a href="mailto:info@web-sylon.de" className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <MailIcon />
                </span>
                info@web-sylon.de
              </a>
              <a href="tel:+491718317348" className={styles.contactLink}>
                <span className={styles.contactIcon}>
                  <PhoneIcon />
                </span>
                0171 – 831 73 48
              </a>
            </div>

            <div className={styles.social}>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="Instagram">
                <InstagramIcon />
              </a>
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="GitHub">
                <GithubIcon />
              </a>
              <a
                href="https://wa.me/491718317348"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.socialLink}
                aria-label="WhatsApp">
                <WhatsAppIcon />
              </a>
            </div>
          </div>

          {/* ── Navigation ── */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Navigation</span>
            {navLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.colLink}>
                <span className={styles.colLinkArrow}>
                  <ArrowIcon />
                </span>
                {label}
              </Link>
            ))}
          </div>

          {/* ── Mehr ── */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Mehr</span>
            {moreLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.colLink}>
                <span className={styles.colLinkArrow}>
                  <ArrowIcon />
                </span>
                {label}
              </Link>
            ))}
          </div>

          {/* ── Rechtliches ── */}
          <div className={styles.col}>
            <span className={styles.colTitle}>Rechtliches</span>
            {legalLinks.map(({ href, label }) => (
              <Link key={href} href={href} className={styles.colLink}>
                <span className={styles.colLinkArrow}>
                  <ArrowIcon />
                </span>
                {label}
              </Link>
            ))}
          </div>
        </div>

        {/* ── Bottom Bar ── */}
        <div className={styles.bottomWrapper}>
          <div className={styles.bottomDivider} />
          <div className={styles.bottom}>
            <div className={styles.bottomLeft}>
              <p className={styles.copyright}>
                {year} Websylon – Alperen Ertas. Alle Rechte vorbehalten.
              </p>
            </div>
            <div className={styles.bottomRight}>
              <span className={styles.bottomCode}>FFM/DE</span>
              <div className={styles.legal}>
                {legalLinks.map(({ href, label }) => (
                  <Link key={href} href={href} className={styles.legalLink}>
                    {label}
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
