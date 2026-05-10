"use client";

import { useState } from "react";
import styles from "./page.module.css";

export default function Kontakt() {
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setLoading(true);
    await new Promise((r) => setTimeout(r, 1000));
    setLoading(false);
    setSubmitted(true);
  };

  return (
    <main>
      <div className={styles.page}>
        <div className={styles.inner}>
          {/* ── Header ── */}
          <div className={styles.header}>
            <div className={styles.badge}>
              <span className={styles.badgeDot} />
              Kontakt
            </div>
            <h1 className={styles.title}>
              Lassen Sie uns{" "}
              <span className={styles.titleAccent}>zusammenarbeiten.</span>
            </h1>
            <p className={styles.subtitle}>
              Kostenloses Erstgespräch – wir analysieren Ihre Anforderungen und
              zeigen Ihnen, was möglich ist. Antwort innerhalb von 24h.
            </p>
          </div>

          {/* ── Pills ── */}
          <div className={styles.pills}>
            <a href="mailto:info@web-sylon.de" className={styles.pill}>
              <span className={styles.pillIconWrapper}>✉️</span>
              <span className={styles.pillLabel}>E-Mail</span>
              <span className={styles.pillValue}>info@web-sylon.de</span>
            </a>
            <a href="tel:+491718317348" className={styles.pill}>
              <span className={styles.pillIconWrapper}>📱</span>
              <span className={styles.pillLabel}>Telefon</span>
              <span className={styles.pillValue}>+49 171 831 73 48</span>
            </a>
            <a
              href="https://wa.me/491718317348"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.pill}>
              <span className={styles.pillIconWrapper}>💬</span>
              <span className={styles.pillLabel}>WhatsApp</span>
              <span className={styles.pillValue}>Jetzt schreiben</span>
            </a>
          </div>

          {/* ── Divider ── */}
          <div className={styles.divider}>
            <span className={styles.dividerLine} />
            <span className={styles.dividerText}>oder Formular nutzen</span>
            <span className={styles.dividerLine} />
          </div>

          {/* ── Formular ── */}
          <div className={styles.formCard}>
            {submitted ? (
              <div className={styles.success}>
                <span className={styles.successIcon}>✅</span>
                <h2 className={styles.successTitle}>Nachricht erhalten!</h2>
                <p className={styles.successText}>
                  Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von 24
                  Stunden bei Ihnen zurück.
                </p>
              </div>
            ) : (
              <form className={styles.form} onSubmit={handleSubmit}>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="name">
                      Name *
                    </label>
                    <input
                      className={styles.input}
                      type="text"
                      id="name"
                      name="name"
                      placeholder="Ihr vollständiger Name"
                      required
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="email">
                      E-Mail *
                    </label>
                    <input
                      className={styles.input}
                      type="email"
                      id="email"
                      name="email"
                      placeholder="ihre@email.de"
                      required
                    />
                  </div>
                </div>
                <div className={styles.formRow}>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="telefon">
                      Telefon
                    </label>
                    <input
                      className={styles.input}
                      type="tel"
                      id="telefon"
                      name="telefon"
                      placeholder="+49 123 456789"
                    />
                  </div>
                  <div className={styles.formGroup}>
                    <label className={styles.label} htmlFor="betreff">
                      Betreff *
                    </label>
                    <select
                      className={styles.select}
                      id="betreff"
                      name="betreff"
                      required>
                      <option value="">Bitte wählen</option>
                      <option value="projektanfrage">Projektanfrage</option>
                      <option value="terminanfrage">Terminanfrage</option>
                      <option value="support">Support</option>
                      <option value="sonstiges">Sonstiges</option>
                    </select>
                  </div>
                </div>
                <div className={styles.formGroup}>
                  <label className={styles.label} htmlFor="nachricht">
                    Nachricht *
                  </label>
                  <textarea
                    className={styles.textarea}
                    id="nachricht"
                    name="nachricht"
                    placeholder="Erzählen Sie uns von Ihrem Projekt..."
                    required
                  />
                </div>
                <button
                  type="submit"
                  className={styles.submitBtn}
                  disabled={loading}>
                  {loading ? "Wird gesendet..." : "Nachricht senden →"}
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </main>
  );
}
