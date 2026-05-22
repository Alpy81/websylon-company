"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import styles from "./CookieBanner.module.css";

type ConsentState = {
  analytics: boolean;
  marketing: boolean;
};

const STORAGE_KEY = "websylon_cookie_consent";

export default function CookieBanner() {
  const [visible, setVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [consent, setConsent] = useState<ConsentState>({
    analytics: false,
    marketing: false,
  });

  useEffect(() => {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (!stored) {
      const splashSeen = sessionStorage.getItem("splashSeen");
      const delay = splashSeen ? 800 : 8200;
      setTimeout(() => {
        requestAnimationFrame(() => setVisible(true));
      }, delay);
    }
  }, []);

  const save = (state: ConsentState) => {
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ ...state, necessary: true, timestamp: Date.now() })
    );
    setVisible(false);
  };

  const acceptAll = () => save({ analytics: true, marketing: true });
  const acceptNecessary = () => save({ analytics: false, marketing: false });
  const saveCustom = () => save(consent);

  const toggle = (key: keyof ConsentState) => {
    setConsent((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  if (!visible) return null;

  return (
    <div
      className={styles.overlay}
      role="dialog"
      aria-modal="true"
      aria-label="Cookie-Einstellungen">
      <div className={styles.banner}>
        <div className={styles.topLine} aria-hidden="true" />

        {/* ── Header ── */}
        <div className={styles.header}>
          <div className={styles.headerLeft}>
            <div className={styles.statusDot} aria-hidden="true" />
            <span className={styles.headerLabel}>
              Datenschutz-Einstellungen
            </span>
          </div>
          <span className={styles.headerTag}>DSGVO-konform</span>
        </div>

        {/* ── Main Content ── */}
        {!showSettings ? (
          <div className={styles.main}>
            <h2 className={styles.title}>
              Wir respektieren Ihre{" "}
              <span className={styles.titleAccent}>Privatsphäre.</span>
            </h2>
            <p className={styles.text}>
              Wir verwenden Cookies und ähnliche Technologien, um unsere Website
              zu verbessern und Ihnen das beste Erlebnis zu bieten. Technisch
              notwendige Cookies sind stets aktiv. Weitere Informationen finden
              Sie in unserer{" "}
              <Link href="/datenschutz" className={styles.link}>
                Datenschutzerklärung
              </Link>
              .
            </p>
          </div>
        ) : (
          <div className={styles.settings}>
            <h2 className={styles.settingsTitle}>Cookie-Einstellungen</h2>

            {/* Notwendig */}
            <div className={styles.category}>
              <div className={styles.categoryInfo}>
                <span className={styles.categoryName}>Notwendig</span>
                <span className={styles.categoryDesc}>
                  Technisch erforderlich für den Betrieb der Website. Können
                  nicht deaktiviert werden.
                </span>
              </div>
              <div
                className={`${styles.toggle} ${styles.toggleFixed}`}
                aria-label="Immer aktiv">
                <div className={styles.toggleTrack}>
                  <div className={styles.toggleThumb} />
                </div>
                <span className={styles.toggleLabel}>Immer aktiv</span>
              </div>
            </div>

            <div className={styles.categoryDivider} />

            {/* Analytik */}
            <div className={styles.category}>
              <div className={styles.categoryInfo}>
                <span className={styles.categoryName}>Analytik</span>
                <span className={styles.categoryDesc}>
                  Vercel Analytics – Anonymisierte Nutzungsstatistiken zur
                  Verbesserung der Website. Keine persönlichen Daten.
                </span>
              </div>
              <button
                className={styles.toggle}
                onClick={() => toggle("analytics")}
                aria-pressed={consent.analytics}
                aria-label="Analytik-Cookies">
                <div
                  className={`${styles.toggleTrack} ${
                    consent.analytics ? styles.toggleTrackOn : ""
                  }`}>
                  <div
                    className={`${styles.toggleThumb} ${
                      consent.analytics ? styles.toggleThumbOn : ""
                    }`}
                  />
                </div>
              </button>
            </div>

            <div className={styles.categoryDivider} />

            {/* Marketing */}
            <div className={styles.category}>
              <div className={styles.categoryInfo}>
                <span className={styles.categoryName}>Marketing</span>
                <span className={styles.categoryDesc}>
                  Wird für personalisierte Werbung und Retargeting eingesetzt.
                  Aktuell nicht aktiv.
                </span>
              </div>
              <button
                className={styles.toggle}
                onClick={() => toggle("marketing")}
                aria-pressed={consent.marketing}
                aria-label="Marketing-Cookies">
                <div
                  className={`${styles.toggleTrack} ${
                    consent.marketing ? styles.toggleTrackOn : ""
                  }`}>
                  <div
                    className={`${styles.toggleThumb} ${
                      consent.marketing ? styles.toggleThumbOn : ""
                    }`}
                  />
                </div>
              </button>
            </div>
          </div>
        )}

        {/* ── Actions ── */}
        <div className={styles.actions}>
          {!showSettings ? (
            <>
              <button
                className={styles.btnSettings}
                onClick={() => setShowSettings(true)}>
                Einstellungen
              </button>
              <div className={styles.actionsPrimary}>
                <button
                  className={styles.btnNecessary}
                  onClick={acceptNecessary}>
                  Nur notwendige
                </button>
                <button className={styles.btnAccept} onClick={acceptAll}>
                  Alle akzeptieren
                </button>
              </div>
            </>
          ) : (
            <>
              <button
                className={styles.btnSettings}
                onClick={() => setShowSettings(false)}>
                ← Zurück
              </button>
              <div className={styles.actionsPrimary}>
                <button
                  className={styles.btnNecessary}
                  onClick={acceptNecessary}>
                  Nur notwendige
                </button>
                <button className={styles.btnAccept} onClick={saveCustom}>
                  Auswahl speichern
                </button>
              </div>
            </>
          )}
        </div>
      </div>
    </div>
  );
}
