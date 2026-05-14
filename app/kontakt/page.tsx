"use client";

import { useState } from "react";
import styles from "./page.module.css";

/* ── Inline SVG Icons (kein lucide-react) ── */
const EmailIcon = () => (
  <svg
    width="20"
    height="20"
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
    width="20"
    height="20"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.62 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsAppIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z" />
  </svg>
);

const ClockIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);

const MapPinIcon = () => (
  <svg
    width="18"
    height="18"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const CheckIcon = () => (
  <svg
    width="14"
    height="14"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ArrowIcon = () => (
  <svg
    width="16"
    height="16"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round">
    <path d="M5 12h14M12 5l7 7-7 7" />
  </svg>
);

/* ── Kontakt-Daten ── */
const contactMethods = [
  {
    icon: <EmailIcon />,
    label: "E-Mail",
    value: "info@web-sylon.de",
    href: "mailto:info@web-sylon.de",
    external: false,
  },
  {
    icon: <PhoneIcon />,
    label: "Telefon",
    value: "+49 171 831 73 48",
    href: "tel:+491718317348",
    external: false,
  },
  {
    icon: <WhatsAppIcon />,
    label: "WhatsApp",
    value: "Jetzt schreiben",
    href: "https://wa.me/491718317348",
    external: true,
  },
];

const trustPoints = [
  "Antwort innerhalb von 24 Stunden",
  "Kostenloses Erstgespräch",
  "Individuelle Beratung",
];

/* ── Page Component ── */
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
        <div className={styles.blobTop} aria-hidden="true" />
        <div className={styles.blobRight} aria-hidden="true" />

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

          {/* ── Split Layout ── */}
          <div className={styles.split}>
            {/* ── Links: Info-Panel ── */}
            <aside className={styles.infoPanel}>
              <div className={styles.infoPanelTopBar} aria-hidden="true" />

              <div className={styles.infoPanelContent}>
                <div className={styles.infoPanelHead}>
                  <h2 className={styles.infoPanelTitle}>Direkt erreichbar</h2>
                  <p className={styles.infoPanelSubtitle}>
                    Wählen Sie den Kanal, der am besten zu Ihnen passt.
                  </p>
                </div>

                <div className={styles.contactList}>
                  {contactMethods.map((method) => (
                    <a
                      key={method.label}
                      href={method.href}
                      className={styles.contactItem}
                      {...(method.external
                        ? { target: "_blank", rel: "noopener noreferrer" }
                        : {})}>
                      <span className={styles.contactIcon}>{method.icon}</span>
                      <div className={styles.contactInfo}>
                        <span className={styles.contactLabel}>
                          {method.label}
                        </span>
                        <span className={styles.contactValue}>
                          {method.value}
                        </span>
                      </div>
                      <span className={styles.contactArrow}>
                        <ArrowIcon />
                      </span>
                    </a>
                  ))}
                </div>

                <div className={styles.infoDivider} />

                <div className={styles.metaList}>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>
                      <ClockIcon />
                    </span>
                    <div>
                      <span className={styles.metaLabel}>Erreichbarkeit</span>
                      <span className={styles.metaValue}>
                        Mo – Fr: 09:00 – 18:00 Uhr
                      </span>
                    </div>
                  </div>
                  <div className={styles.metaItem}>
                    <span className={styles.metaIcon}>
                      <MapPinIcon />
                    </span>
                    <div>
                      <span className={styles.metaLabel}>Standort</span>
                      <span className={styles.metaValue}>
                        Frankfurt am Main
                      </span>
                    </div>
                  </div>
                </div>

                <div className={styles.infoDivider} />

                <div className={styles.trustList}>
                  {trustPoints.map((point) => (
                    <div key={point} className={styles.trustItem}>
                      <span className={styles.trustCheck}>
                        <CheckIcon />
                      </span>
                      <span className={styles.trustText}>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </aside>

            {/* ── Rechts: Formular ── */}
            <div className={styles.formCard}>
              {submitted ? (
                <div className={styles.success}>
                  <div className={styles.successIconWrap}>
                    <span className={styles.successEmoji}>✅</span>
                  </div>
                  <h2 className={styles.successTitle}>Nachricht erhalten!</h2>
                  <p className={styles.successText}>
                    Vielen Dank für Ihre Anfrage. Wir melden uns innerhalb von
                    24 Stunden bei Ihnen zurück.
                  </p>
                </div>
              ) : (
                <>
                  <div className={styles.formHeader}>
                    <h2 className={styles.formTitle}>Nachricht senden</h2>
                    <p className={styles.formSubtitle}>
                      Alle Felder mit * sind Pflichtfelder.
                    </p>
                  </div>

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
                      {loading ? "Wird gesendet..." : "Nachricht senden "}
                    </button>
                    {/* NEU: Datenschutzhinweis ↓ */}
                    <p className={styles.privacyNote}>
                      Mit dem Absenden stimmen Sie unserer{" "}
                      <a href="/datenschutz" className={styles.privacyLink}>
                        Datenschutzerklärung
                      </a>{" "}
                      zu.
                    </p>
                  </form>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
