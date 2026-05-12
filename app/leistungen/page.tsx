import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Leistungen",
  description:
    "Full-Service Webentwicklung aus einer Hand – Web-Design, Full-Stack Development, E-Commerce, SEO & mehr.",
};

/* ── Leistungs-Icons ── */
const IconMonitor = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <path d="M8 21h8M12 17v4" />
  </svg>
);
const IconCode = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="16 18 22 12 16 6" />
    <polyline points="8 6 2 12 8 18" />
  </svg>
);
const IconCart = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="9" cy="21" r="1" />
    <circle cx="20" cy="21" r="1" />
    <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
  </svg>
);
const IconPhone = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <rect x="5" y="2" width="14" height="20" rx="2" />
    <line x1="12" y1="18" x2="12.01" y2="18" />
  </svg>
);
const IconChart = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <line x1="18" y1="20" x2="18" y2="10" />
    <line x1="12" y1="20" x2="12" y2="4" />
    <line x1="6" y1="20" x2="6" y2="14" />
  </svg>
);
const IconGear = () => (
  <svg
    width="28"
    height="28"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z" />
  </svg>
);

const leistungen = [
  {
    id: "webdesign",
    icon: <IconMonitor />,
    title: "Web-Design",
    desc: "Modernes, conversion-optimiertes Design das Ihre Marke perfekt repräsentiert – responsiv, barrierefrei und auf allen Geräten überzeugend.",
    features: [
      "Responsive Design für alle Geräte",
      "UX/UI-Optimierung",
      "Corporate Identity",
      "Barrierefreiheit (WCAG)",
    ],
  },
  {
    id: "fullstack",
    icon: <IconCode />,
    title: "Full-Stack Development",
    desc: "Skalierbare Web-Applikationen von Frontend bis Backend – mit modernsten Technologien, sauberem Code und maximaler Performance.",
    features: [
      "React, Vue, Next.js",
      "Node.js, Python, PHP",
      "API-Integration & GraphQL",
      "Performance-Optimierung",
    ],
  },
  {
    id: "ecommerce",
    icon: <IconCart />,
    title: "E-Commerce",
    desc: "Vollständige Online-Shop-Lösungen mit reibungsloser Zahlungsabwicklung, Lagerverwaltung und Analytics – bereit zum Verkaufen.",
    features: [
      "Shopify & WooCommerce",
      "Payment-Gateways Integration",
      "Inventory Management",
      "Analytics & Conversion-Tracking",
    ],
  },
  {
    id: "mobile",
    icon: <IconPhone />,
    title: "Progressive Web Apps",
    desc: "Moderne Web-Apps, die sich wie native Apps anfühlen – installierbar, offline-fähig und auf allen Plattformen performant mit hoher Qualität. Hier werden Unterschiede sichtbar.",
    features: [
      "iOS & Android kompatibel",
      "Offline-Funktionalität (PWA)",
      "App-Design & UX",
      "Push-Notifications",
    ],
  },
  {
    id: "seo",
    icon: <IconChart />,
    title: "SEO & Marketing",
    desc: "Ihre Website wird nur gefunden wenn sie ranking-optimiert ist. Wir sorgen für Sichtbarkeit – technisch und inhaltlich.",
    features: [
      "Google Rankings verbessern",
      "Keyword-Optimierung",
      "Technical SEO & Core Web Vitals",
      "Local SEO für regionale Betriebe",
    ],
  },
  {
    id: "cms",
    icon: <IconGear />,
    title: "CMS & Wartung",
    desc: "Mit modernen Content-Management-Systemen pflegen Sie Ihre Website selbst – einfach, intuitiv und ohne technisches Wissen.",
    features: [
      "WordPress & Strapi",
      "Einfache Content-Pflege",
      "Schulung & persönlicher Support",
      "Langfristige Wartung & Updates",
    ],
  },
];

const prozessSteps = [
  {
    number: "01",
    title: "Erstgespräch",
    text: "Wir hören zu, analysieren Ihre Anforderungen und entwickeln gemeinsam eine klare Vision.",
  },
  {
    number: "02",
    title: "Konzept & Design",
    text: "Auf Basis Ihrer Ziele erstellen wir ein maßgeschneidertes Konzept und erste Design-Entwürfe.",
  },
  {
    number: "03",
    title: "Entwicklung",
    text: "Wir setzen das Projekt mit modernsten Technologien um – transparent, iterativ und qualitätsorientiert.",
  },
  {
    number: "04",
    title: "Launch & Support",
    text: "Nach ausführlichem Testing geht Ihre Website live. Wir begleiten Sie auch danach langfristig.",
  },
];

export default function Leistungen() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Was wir bieten
          </div>
          <h1 className={styles.heroTitle}>
            Full-Service Webentwicklung <br />
            <span className={styles.heroTitleAccent}>aus einer Hand</span>
          </h1>
          <p className={styles.heroSubtext}>
            Von der ersten Idee bis zum fertigen Produkt – wir bieten alles was
            Ihre digitale Präsenz braucht, um wirklich zu überzeugen.
          </p>
        </div>
      </section>

      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {leistungen.map(({ id, icon, title, desc, features }) => (
            <div key={id} id={id} className={styles.card}>
              <div className={styles.cardHeader}>
                <span className={styles.cardIcon}>{icon}</span>
                <h2 className={styles.cardTitle}>{title}</h2>
                <p className={styles.cardDesc}>{desc}</p>
              </div>
              <ul className={styles.cardFeatures}>
                {features.map((f) => (
                  <li key={f} className={styles.cardFeature}>
                    <span className={styles.cardFeatureCheck}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className={styles.prozess}>
        <div className={styles.prozessInner}>
          <div className={styles.prozessHeader}>
            <span className={styles.sectionLabel}>Unser Prozess</span>
            <h2 className={styles.sectionTitle}>
              So arbeiten wir{" "}
              <span className={styles.sectionTitleAccent}>zusammen</span>
            </h2>
          </div>
          <div className={styles.prozessGrid}>
            {prozessSteps.map(({ number, title, text }) => (
              <div key={number} className={styles.prozessStep}>
                <div className={styles.prozessNumber}>{number}</div>
                <h3 className={styles.prozessTitle}>{title}</h3>
                <p className={styles.prozessText}>{text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Bereit für Ihr nächstes Projekt?</h2>
          <p className={styles.ctaText}>
            Lassen Sie uns in einem kostenlosen Erstgespräch herausfinden,
            welche Leistungen am besten zu Ihren Zielen passen.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/kontakt" className={styles.ctaBtnPrimary}>
              Kostenloses Erstgespräch →
            </Link>
            <Link href="/portfolio" className={styles.ctaBtnSecondary}>
              Referenzen ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
