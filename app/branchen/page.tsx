import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Branchen",
  description:
    "Maßgeschneiderte Weblösungen für verschiedene Branchen – von Start-ups bis Gesundheitswesen.",
};

const branchen = [
  {
    icon: "🚀",
    title: "Start-ups",
    text: "Von der Idee zur digitalen Realität. Wir entwickeln schnelle, moderne und skalierbare Web-Lösungen die mit Ihrem Unternehmen wachsen.",
  },
  {
    icon: "🛍️",
    title: "E-Commerce",
    text: "Online-Handel, Einzelhandel, Kaufhäuser, Drogerien & Lebensmittelmärkte – wir bauen Shops die verkaufen.",
  },
  {
    icon: "🍽️",
    title: "Gastronomie",
    text: "Restaurants, Cafés, Fast-Food Ketten & Imbissstände – mit Online-Reservierung, Speisekarte und mehr.",
  },
  {
    icon: "🏢",
    title: "Immobilien",
    text: "Professionelle Präsentation für Makler mit Objekt-Showcases, virtuellen Touren und Kontaktformularen.",
  },
  {
    icon: "⚖️",
    title: "Recht & Finanzen",
    text: "Seriöse und vertrauenswürdige Web-Auftritte für Anwaltskanzleien, Steuerbüros & Finanzdienstleister.",
  },
  {
    icon: "🎓",
    title: "Bildung & Sport",
    text: "Schulen, Kitas, Universitäten, Sportvereine & Fitnessstudios – informativ, modern und nutzerfreundlich.",
  },
  {
    icon: "💇",
    title: "Beauty & Wellness",
    text: "Friseure, Kosmetikstudios, Massagesalons & Solarien – mit Online-Buchung und professionellem Auftritt.",
  },
  {
    icon: "⚕️",
    title: "Gesundheitswesen",
    text: "Apotheken, Arztpraxen, Pflegedienste, Krankenhäuser & Rehazentren – DSGVO-konform und barrierefrei.",
  },
  {
    icon: "🏛️",
    title: "Öffentliche Einrichtungen",
    text: "Stadtämter, Polizei, Feuerwehr & Museen – zugänglich, informativ und bürgerfreundlich gestaltet.",
  },
  {
    icon: "🔨",
    title: "Handwerksberufe",
    text: "Elektriker, Klempner, Schreiner, Maler & alle handwerklichen Betriebe – professionell und regional sichtbar.",
  },
  {
    icon: "🎨",
    title: "Grafikdesign & Kunst",
    text: "Designer, Künstler, Fotografen, Agenturen & kreative Studios – Portfolio-Sites die beeindrucken.",
  },
  {
    icon: "🤝",
    title: "Dienstleistungen",
    text: "Reinigungsfirmen, Sicherheitsdienste, Logistik & persönliche Dienstleister – klar, überzeugend, modern.",
  },
];

export default function Branchen() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Unsere Expertise
          </div>
          <h1 className={styles.heroTitle}>
            Ihre Branche,{" "}
            <span className={styles.heroTitleAccent}>unsere Stärke</span>
          </h1>
          <p className={styles.heroSubtext}>
            Maßgeschneiderte Weblösungen für verschiedene Branchen – wir kennen
            die Anforderungen Ihres Marktes und entwickeln digitale Auftritte
            die wirklich überzeugen.
          </p>
        </div>
      </section>

      {/* ── Branchen Grid ── */}
      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {branchen.map(({ icon, title, text }) => (
            <div key={title} className={styles.card}>
              <span className={styles.cardIcon}>{icon}</span>
              <h2 className={styles.cardTitle}>{title}</h2>
              <p className={styles.cardText}>{text}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Ihre Branche ist nicht dabei?</h2>
          <p className={styles.ctaText}>
            Kein Problem – wir entwickeln für jede Branche individuelle
            Lösungen. Sprechen Sie uns einfach an.
          </p>
          <Link href="/kontakt" className={styles.ctaBtn}>
            Jetzt Kontakt aufnehmen
          </Link>
        </div>
      </section>
    </main>
  );
}
