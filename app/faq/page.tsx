"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import styles from "./page.module.css";

const faqs = [
  {
    question: "Was kostet eine professionelle Website?",
    answer:
      "Die Investition hängt stark von Ihren individuellen Anforderungen ab: Umfang, gewünschte Funktionen, Design-Komplexität und technische Features spielen eine Rolle. Nach einem kostenlosen Erstgespräch analysieren wir Ihre Bedürfnisse und erstellen ein transparentes, maßgeschneidertes Angebot – ohne versteckte Kosten.",
  },
  {
    question: "Wie lange dauert die Entwicklung einer Website?",
    answer:
      "Standard-Projekte dauern in der Regel 2-3 Wochen von Konzept bis Launch. Kleinere Websites können in 1-2 Wochen fertig sein, während komplexe E-Commerce-Plattformen oder individuelle Web-Apps 1-3 Monate benötigen können. Nach dem Erstgespräch geben wir Ihnen eine genaue Zeitplanung.",
  },
  {
    question: "Bieten Sie auch Wartung und Support an?",
    answer:
      "Ja! Wir bieten flexible Wartungspakete mit indivudueller Absprache gemäß Projektgröße an. Diese beinhalten regelmäßige Updates, Backups, Sicherheitsüberwachung, technischen Support und kleinere Anpassungen. Für größere Updates erstellen wir individuelle Angebote.",
  },
  {
    question: "Kann ich meine Website später selbst bearbeiten?",
    answer:
      "Absolut! Wir setzen auf benutzerfreundliche Content-Management-Systeme wie WordPress oder Headless-CMS. Sie können Texte, Bilder und Inhalte jederzeit selbst ändern – ohne Programmierkenntnisse. Wir schulen Sie im Umgang mit dem System.",
  },
  {
    question: "Was ist mit SEO und Google-Rankings?",
    answer:
      "Alle unsere Websites sind SEO-optimiert aufgebaut: schnelle Ladezeiten, mobile-freundlich, sauberer Code und strukturierte Daten. Für gezieltes SEO-Marketing bieten wir separate Pakete an mit Keyword-Recherche, Content-Optimierung und lokalem SEO.",
  },
  {
    question: "Arbeiten Sie auch mit bestehenden Websites?",
    answer:
      "Ja! Wir können Ihre bestehende Website modernisieren, erweitern oder komplett neu aufsetzen. Nach einer Analyse zeigen wir Ihnen, ob eine Überarbeitung oder ein Neustart sinnvoller ist. Inhalte und Daten können wir in der Regel übernehmen.",
  },
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex((prev) => (prev === i ? null : i));
  };

  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Häufige Fragen
          </div>
          <h1 className={styles.heroTitle}>
            Fragen & <span className={styles.heroTitleAccent}>Antworten</span>
          </h1>
          <p className={styles.heroSubtext}>
            Alles was Sie über unsere Dienstleistungen wissen müssen –
            transparent und ehrlich beantwortet.
          </p>
        </div>
      </section>

      {/* ── FAQ Liste ── */}
      <section className={styles.faqSection}>
        <div className={styles.faqInner}>
          {faqs.map((faq, i) => (
            <div key={i} className={styles.item}>
              <div className={styles.question} onClick={() => toggle(i)}>
                <span className={styles.questionText}>{faq.question}</span>
                <span
                  className={`${styles.icon} ${
                    openIndex === i ? styles["icon--open"] : ""
                  }`}>
                  +
                </span>
              </div>
              <div
                className={`${styles.answer} ${
                  openIndex === i ? styles["answer--open"] : ""
                }`}>
                <p className={styles.answerText}>{faq.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className={styles.cta}>
        <div className={styles.ctaInner}>
          <h2 className={styles.ctaTitle}>Noch weitere Fragen?</h2>
          <p className={styles.ctaText}>
            Kontaktieren Sie uns direkt – wir antworten innerhalb von 24 Stunden
            und beraten Sie kostenlos und unverbindlich.
          </p>
          <Link href="/kontakt" className={styles.ctaBtn}>
            Jetzt Kontakt aufnehmen →
          </Link>
        </div>
      </section>
    </main>
  );
}
