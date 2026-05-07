import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const leistungenPreview = [
  {
    icon: "🖥️",
    title: "Web-Design",
    desc: "Modernes, conversion-optimiertes Design das Ihre Marke perfekt repräsentiert – responsiv, barrierefrei und auf allen Geräten überzeugend.",
    features: ["Responsive Design", "UX/UI-Optimierung", "Corporate Identity"],
    href: "/leistungen#webdesign",
  },
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    desc: "Skalierbare Web-Applikationen von Frontend bis Backend – mit modernsten Technologien, sauberem Code und maximaler Performance.",
    features: [
      "React, Vue, Next.js",
      "Node.js, Python, PHP",
      "API-Integration",
    ],
    href: "/leistungen#fullstack",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Vollständige Online-Shop-Lösungen mit reibungsloser Zahlungsabwicklung, Lagerverwaltung und Analytics – bereit zum Verkaufen.",
    features: [
      "Shopify, WooCommerce",
      "Payment-Gateways",
      "Analytics & Tracking",
    ],
    href: "/leistungen#ecommerce",
  },
  {
    icon: "🔍",
    title: "SEO & Marketing",
    desc: "Ihre Website wird nur gefunden, wenn sie auch ranking-optimiert ist. Wir sorgen für Sichtbarkeit – technisch und inhaltlich.",
    features: ["Google Rankings", "Technical SEO", "Local SEO"],
    href: "/leistungen#seo",
  },
];

export default function Home() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />

        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Professionelle Webentwicklung
            </div>

            <h1 className={styles.heroTitle}>
              Webseiten, die{" "}
              <span className={styles.heroTitleAccent}>Eindruck</span>{" "}
              hinterlassen.
            </h1>

            <p className={styles.heroSubtext}>
              Wir entwickeln digitale Auftritte für Unternehmen, die mehr wollen
              als nur online präsent zu sein.
            </p>

            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.btnPrimary}>
                Projekt starten
              </Link>
              <Link href="/leistungen" className={styles.btnSecondary}>
                Leistungen entdecken
              </Link>
            </div>
          </div>

          <div className={styles.heroVisual}>
            <div className={styles.heroGlobe}>
              <div className={styles.heroGlobeInner}>
                <Image
                  src="/images/symbol-transparent.png"
                  alt="Websylon Symbol"
                  width={100}
                  height={100}
                  className={styles.heroSymbol}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── Leistungen Preview ── */}
      <section className={styles.leistungen}>
        <div className={styles.leistungenInner}>
          <div className={styles.leistungenHeader}>
            <span className={styles.leistungenBadge}>Was wir bieten</span>
            <h2 className={styles.leistungenTitle}>
              Full-Service Webentwicklung{" "}
              <span className={styles.leistungenTitleAccent}>
                aus einer Hand
              </span>
            </h2>
            <p className={styles.leistungenSubtext}>
              Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie
              durch den gesamten digitalen Entwicklungsprozess.
            </p>
          </div>

          <div className={styles.leistungenGrid}>
            {leistungenPreview.map(({ icon, title, desc, features, href }) => (
              <Link key={title} href={href} className={styles.leistungCard}>
                <div className={styles.leistungCardTop}>
                  <span className={styles.leistungIcon}>{icon}</span>
                  <span className={styles.leistungArrow}>→</span>
                </div>
                <h3 className={styles.leistungTitle}>{title}</h3>
                <p className={styles.leistungDesc}>{desc}</p>
                <ul className={styles.leistungFeatures}>
                  {features.map((f) => (
                    <li key={f} className={styles.leistungFeature}>
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>

          <div className={styles.leistungenCta}>
            <Link href="/leistungen" className={styles.leistungenCtaBtn}>
              Alle Leistungen entdecken →
            </Link>
          </div>
        </div>
      </section>
      {/* ── Warum Websylon ── */}
      <section className={styles.warum}>
        <div className={styles.warumInner}>
          {/* Linke Seite – Content */}
          <div className={styles.warumContent}>
            <span className={styles.warumBadge}>Warum Websylon</span>
            <h2 className={styles.warumTitle}>
              Mehr als nur eine{" "}
              <span className={styles.warumTitleAccent}>Website</span>
            </h2>
            <p className={styles.warumText}>
              Wir bauen keine Standard-Lösungen. Jedes Projekt wird individuell
              entwickelt – mit Leidenschaft, technischer Exzellenz und einem
              klaren Fokus auf Ihre Ziele.
            </p>

            <div className={styles.warumStats}>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>25+</span>
                <span className={styles.warumStatLabel}>Jahre Erfahrung</span>
              </div>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>100%</span>
                <span className={styles.warumStatLabel}>Individuell</span>
              </div>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>∞</span>
                <span className={styles.warumStatLabel}>Support</span>
              </div>
            </div>

            <div className={styles.warumCta}>
              <Link href="/ueber-uns" className={styles.warumCtaBtn}>
                Mehr über uns →
              </Link>
            </div>
          </div>

          {/* Rechte Seite – Liste */}
          <div className={styles.warumList}>
            {[
              {
                icon: "🎯",
                title: "Individuelle Lösungen",
                text: "Keine Templates. Jede Website wird von Grund auf nach Ihren Anforderungen entwickelt.",
              },
              {
                icon: "⚡",
                title: "Maximale Performance",
                text: "Lighthouse-Score 90+, schnelle Ladezeiten und optimierte Core Web Vitals.",
              },
              {
                icon: "🤝",
                title: "Persönlicher Ansprechpartner",
                text: "Direkte Kommunikation ohne Umwege – von der Idee bis zum Launch.",
              },
              {
                icon: "🔒",
                title: "Sicherheit & Datenschutz",
                text: "DSGVO-konform, SSL-verschlüsselt und nach aktuellen Sicherheitsstandards entwickelt.",
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className={styles.warumItem}>
                <span className={styles.warumItemIcon}>{icon}</span>
                <div className={styles.warumItemContent}>
                  <h3 className={styles.warumItemTitle}>{title}</h3>
                  <p className={styles.warumItemText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
