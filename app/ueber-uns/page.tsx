import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Über uns",
  description:
    "Erfahren Sie mehr über Websylon – Ihr Partner für professionelle Webentwicklung mit über 25 Jahren kombinierter Erfahrung.",
};

const techStack = [
  {
    title: "Frontend",
    items: [
      "React.js & Next.js",
      "Vue.js & Nuxt.js",
      "HTML, CSS3, JavaScript",
      "Tailwind CSS, Bootstrap",
    ],
  },
  {
    title: "Backend",
    items: [
      "Node.js, Express & Nest",
      "Python & Django/Flask",
      "PHP & Laravel",
      "REST APIs & GraphQL",
    ],
  },
  {
    title: "Datenbanken",
    items: ["MongoDB", "PostgreSQL & MySQL", "Firebase", "Redis"],
  },
  {
    title: "Tools & Deployment",
    items: [
      "Git & GitHub",
      "Docker",
      "AWS, Netlify, Vercel",
      "CI/CD Pipelines",
    ],
  },
];

const whyItems = [
  {
    icon: "🎯",
    title: "Individuelle Lösungen",
    text: "Keine Standard-Templates. Jede Website wird von Grund auf nach Ihren Anforderungen entwickelt – einzigartig wie Ihr Unternehmen.",
  },
  {
    icon: "⚡",
    title: "Modernste Technologien",
    text: "Wir setzen auf zukunftssichere Tech-Stacks und Best Practices – für maximale Performance, Sicherheit und Wartbarkeit.",
  },
  {
    icon: "🤝",
    title: "Persönliche Betreuung",
    text: "Von der ersten Idee bis zum Launch und darüber hinaus – Sie haben immer einen direkten Ansprechpartner an Ihrer Seite.",
  },
  {
    icon: "💬",
    title: "Transparente Kommunikation",
    text: "Keine versteckten Kosten, keine Überraschungen. Faire Preise und klare Absprachen von Anfang an.",
  },
  {
    icon: "🔧",
    title: "Langfristiger Support",
    text: "Unsere Zusammenarbeit endet nicht beim Launch. Wir begleiten Sie mit Wartung, Updates und Support dauerhaft.",
  },
  {
    icon: "🚀",
    title: "Schnelle Umsetzung",
    text: "Effiziente Prozesse und klare Strukturen ermöglichen es uns, Ihr Projekt termingerecht und ohne Qualitätsverlust zu liefern.",
  },
];

export default function UeberUns() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Wer wir sind
          </div>
          <h1 className={styles.heroTitle}>
            Ihr Partner für digitale{" "}
            <span className={styles.heroTitleAccent}>Exzellenz</span>
          </h1>
          <p className={styles.heroSubtext}>
            Websylon steht für professionelle Webentwicklung mit einem klaren
            Fokus: Ihre Vision zum Leben erwecken.
          </p>
        </div>
      </section>

      {/* ── Wer wir sind ── */}
      <section className={styles.intro}>
        <div className={styles.introInner}>
          <div className={styles.introText}>
            <span className={styles.sectionLabel}>Wer wir sind</span>
            <h2 className={styles.sectionTitle}>
              Technologie trifft Leidenschaft
            </h2>
            <p className={styles.sectionText}>
              <strong>WEBSYLON</strong> steht für professionelle Webentwicklung
              mit einem klaren Fokus: Ihre Vision zum Leben erwecken. Unser Team
              vereint eine Gesamterfahrung von über 25 Jahren in der
              Softwareentwicklung. Wir gestalten digitale Lösungen, die nicht
              nur technisch überzeugen, sondern echte Mehrwerte schaffen – mit
              maßgeschneiderten Ergebnissen, die sich nach Ihren individuellen
              Vorstellungen richten.
            </p>
          </div>

          <div className={styles.highlights}>
            <div className={styles.highlightBox}>
              <span className={styles.highlightIcon}>🏆</span>
              <h3 className={styles.highlightTitle}>25+ Jahre Erfahrung</h3>
              <p className={styles.highlightText}>
                Unser Team verfügt über eine kombinierte Expertise seit 1999 –
                von klassischer Webentwicklung bis zu modernsten Technologien.
              </p>
            </div>
            <div className={styles.highlightBox}>
              <span className={styles.highlightIcon}>💡</span>
              <h3 className={styles.highlightTitle}>
                Innovation mit Präzision
              </h3>
              <p className={styles.highlightText}>
                Webentwicklung ist nicht nur unser Beruf – es ist unsere
                Passion. Wir setzen Ihre Wünsche mit Hingabe und technischer
                Exzellenz um.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── Mission ── */}
      <section className={styles.mission}>
        <div className={styles.missionInner}>
          <span className={styles.sectionLabel}>Unsere Mission</span>

          <h2 className={styles.missionQuote}>
            Jedes Unternehmen verdient eine{" "}
            <span className={styles.missionQuoteAccent}>einzigartige</span>{" "}
            Online-Präsenz
          </h2>
          <p className={styles.missionText}>
            Wir glauben, dass jedes Unternehmen – vom Start-up über den
            Mittelstand bis hin zum Großunternehmen – eine einzigartige
            Online-Präsenz verdient. Unsere Mission ist es, individuelle
            Weblösungen zu entwickeln, die Ihre Marke stärken und Ihr Geschäft
            voranbringen.
          </p>
        </div>
      </section>

      {/* ── Tech Stack ── */}
      <section className={styles.tech}>
        <div className={styles.techInner}>
          <div className={styles.techHeader}>
            <span className={styles.sectionLabel}>Technologie-Stack</span>
            <h2 className={styles.sectionTitle}>
              Die Technologien hinter Ihrem Erfolg
            </h2>
            <p className={styles.techIntro}>
              Als Kunde müssen Sie kein Entwickler sein – aber Sie sollten
              wissen, dass wir ausschließlich auf bewährte, zukunftssichere
              Technologien setzen. Das bedeutet für Sie: schnelle Ladezeiten,
              sichere Systeme, wartbare Lösungen und keine Abhängigkeit von
              veralteten Tools.
            </p>
          </div>
          <div className={styles.techGrid}>
            {techStack.map(({ title, items }) => (
              <div key={title} className={styles.techCard}>
                <span className={styles.techCardTitle}>{title}</span>
                <ul className={styles.techList}>
                  {items.map((item) => (
                    <li key={item} className={styles.techItem}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Warum Websylon ── */}
      <section className={styles.why}>
        <div className={styles.whyInner}>
          <div className={styles.whyHeader}>
            <span className={styles.sectionLabel}>Warum Websylon</span>
            <h2 className={styles.sectionTitle}>Was uns unterscheidet</h2>
          </div>
          <div className={styles.whyGrid}>
            {whyItems.map((item, i) => (
              <div key={item.title} className={styles.whyCard}>
                <span className={styles.whyNumber}>0{i + 1}</span>
                <span className={styles.whyIcon}>{item.icon}</span>
                <h3 className={styles.whyCardTitle}>{item.title}</h3>
                <p className={styles.whyCardText}>{item.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <span className={styles.ctaLabel}>Jetzt starten</span>
          <h2 className={styles.ctaTitle}>
            Bereit für Ihr{" "}
            <span className={styles.ctaTitleAccent}>nächstes Projekt?</span>
          </h2>
          <p className={styles.ctaText}>
            Lassen Sie uns gemeinsam Ihre digitale Vision verwirklichen –
            persönlich, transparent und mit technischer Exzellenz.
          </p>
          <div className={styles.ctaActions}>
            <Link href="/kontakt" className={styles.ctaBtn}>
              Jetzt Kontakt aufnehmen
            </Link>
            <Link href="/leistungen" className={styles.ctaBtnSecondary}>
              Leistungen entdecken
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
