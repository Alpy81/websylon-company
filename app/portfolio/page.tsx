import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

export const metadata: Metadata = {
  title: "Portfolio",
  description:
    "Unsere realisierten Projekte – moderne, performante Websites für verschiedene Branchen.",
};

const projekte = [
  {
    type: "fertig",
    image: "/images/demo-fitness.png",
    tag: "Fitness & Sport",
    title: "Fitness Club",
    text: "Energiegeladenes Design mit Kursplan, Mitglieder-Login und modernem Buchungssystem.",
    href: "https://fitness-club-demo.vercel.app",
  },
  {
    type: "fertig",
    image: "/images/demo-steuerkanzlei.jpg",
    tag: "Recht & Finanzen",
    title: "Steuerkanzlei",
    text: "Seriöser Auftritt für Steuerberater mit moderner Terminbuchungs-Funktion und Kontaktformular.",
    href: "https://tax-office-demo.vercel.app",
  },
  {
    type: "fertig",
    image: "/images/demo-sperrzone24.png",
    tag: "Dienstleistungen",
    title: "Sperrzone24",
    text: "Professioneller Auftritt für die Branche in der Verkehrssicherheit mit modernem Design und Terminbuchung.",
    href: "https://sperrzone24.de",
  },
  {
    type: "fertig",
    image: "/images/demo-thai-massage.jpg",
    tag: "Beauty & Wellness",
    title: "Thai Massage Salon",
    text: "Elegantes Design mit Galerie und Online-Buchung für Premium-Massagesalon.",
    href: "https://thai-massage-salon-demo.vercel.app",
  },
  {
    type: "fertig",
    image: "/images/demo-personalvermittler.png",
    tag: "Start-up",
    title: "Personalvermittler",
    text: "Zeitgemäße Website mit Bewerbungsformular und Terminbuchungs-Funktion.",
    href: "https://hr-recruiting-demo.vercel.app",
  },
  {
    type: "soon",
    icon: "🛍️",
    tag: "E-Commerce",
    title: "Online-Shop",
    text: "Vollständiger E-Commerce Shop mit Payment-Integration.",
  },
  {
    type: "soon",
    icon: "🍽️",
    tag: "Gastronomie",
    title: "Restaurant",
    text: "Moderne Website mit Online-Reservierung und Menü-Management.",
  },
  {
    type: "soon",
    icon: "🏢",
    tag: "Immobilien",
    title: "Immobilienmakler",
    text: "Professionelle Präsentation mit Objekt-Showcases und Kontaktformularen.",
  },
  {
    type: "soon",
    icon: "⚕️",
    tag: "Gesundheitswesen",
    title: "Arztpraxis",
    text: "DSGVO-konforme Website mit Online-Terminbuchung.",
  },
  {
    type: "soon",
    icon: "🎓",
    tag: "Bildung",
    title: "Bildungseinrichtung",
    text: "Interaktive Website mit Stundenplan und Eltern-Portal.",
  },
  {
    type: "soon",
    icon: "🔨",
    tag: "Handwerk",
    title: "Handwerksbetrieb",
    text: "Professioneller Auftritt mit Leistungsübersicht und Kontaktformular.",
  },
  {
    type: "soon",
    icon: "🎨",
    tag: "Grafikdesign & Kunst",
    title: "Kreativagentur",
    text: "Portfolio-Site mit Galerie und Auftragsformular.",
  },
];

export default function Portfolio() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Unsere Arbeiten
          </div>
          <h1 className={styles.heroTitle}>
            Projekte, die{" "}
            <span className={styles.heroTitleAccent}>überzeugen</span>
          </h1>
          <p className={styles.heroSubtext}>
            Ein Überblick über unsere realisierten Projekte – modern, performant
            und individuell auf die jeweilige Branche zugeschnitten.
          </p>
        </div>
      </section>

      {/* ── Grid ── */}
      <section className={styles.grid}>
        <div className={styles.gridInner}>
          {projekte.map((p, i) => {
            if (p.type === "fertig") {
              return (
                <a
                  key={i}
                  href={p.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.card}>
                  <div className={styles.imageWrapper}>
                    <Image
                      src={p.image!}
                      alt={p.title}
                      fill
                      className={styles.image}
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    />
                  </div>
                  <div className={styles.cardContent}>
                    <span className={styles.tag}>{p.tag}</span>
                    <h2 className={styles.cardTitle}>{p.title}</h2>
                    <p className={styles.cardText}>{p.text}</p>
                    <span className={styles.cardBtn}>Demo ansehen →</span>
                  </div>
                </a>
              );
            }
            return (
              <div key={i} className={styles.cardSoon}>
                <div className={styles.soonImageWrapper}>
                  <span>{p.icon}</span>
                </div>
                <div className={styles.soonContent}>
                  <span className={styles.soonBadge}>Demnächst</span>
                  <h2 className={styles.soonTitle}>{p.title}</h2>
                  <p className={styles.soonText}>{p.text}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>
            Ihr Projekt könnte das nächste sein
          </h2>
          <p className={styles.ctaText}>
            Lassen Sie uns gemeinsam Ihren digitalen Auftritt auf das nächste
            Level bringen.
          </p>
          <Link href="/kontakt" className={styles.ctaBtn}>
            Jetzt Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </main>
  );
}
