import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Datenschutz – WEBSYLON",
  description:
    "Datenschutzerklärung von WEBSYLON gemäß DSGVO, Alperen Ertas, Frankfurt am Main.",
  robots: { index: false, follow: false },
};

export default function Datenschutz() {
  return (
    <main>
      {/* ── Hero ── */}
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroInner}>
          <div className={styles.badge}>
            <span className={styles.badgeDot} />
            Rechtliches
          </div>
          <h1 className={styles.heroTitle}>
            Daten<span className={styles.heroAccent}>schutz.</span>
          </h1>
          <p className={styles.heroMeta}>
            Gemäß DSGVO &amp; BDSG
            <span className={styles.heroMetaDot} />
            Stand: Mai 2026
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Verantwortlicher */}
          <div className={styles.infoBox}>
            <div className={styles.infoBoxItem}>
              <span className={styles.infoBoxIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <circle cx="12" cy="8" r="4" />
                  <path d="M4 20c0-4 3.6-7 8-7s8 3 8 7" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Verantwortlicher</span>
                <span className={styles.infoBoxValue}>Alperen Ertas</span>
              </div>
            </div>

            <div className={styles.infoBoxItem}>
              <span className={styles.infoBoxIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Anschrift</span>
                <span className={styles.infoBoxValue}>
                  Meersburger Str. 15
                  <br />
                  60386 Frankfurt am Main
                </span>
              </div>
            </div>

            <div className={styles.infoBoxItem}>
              <span className={styles.infoBoxIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <rect x="2" y="4" width="20" height="16" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Kontakt</span>
                <span className={styles.infoBoxValue}>
                  Tel: 0171 831 73 48
                  <br />
                  <a href="mailto:info@web-sylon.de" className={styles.link}>
                    info@web-sylon.de
                  </a>
                </span>
              </div>
            </div>

            <div className={styles.infoBoxItem}>
              <span className={styles.infoBoxIcon}>
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round">
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Rechtsgrundlage</span>
                <span className={styles.infoBoxValue}>
                  DSGVO &amp; BDSG
                  <br />
                  Art. 13 DSGVO
                </span>
              </div>
            </div>
          </div>

          {/* Legal Sections */}
          <div className={styles.legalCard}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Grundsätzliches</h2>
              <p className={styles.sectionText}>
                Der Schutz Ihrer personenbezogenen Daten ist uns ein wichtiges
                Anliegen. Wir verarbeiten Ihre Daten ausschließlich auf
                Grundlage der gesetzlichen Bestimmungen der DSGVO und des BDSG.
                In dieser Datenschutzerklärung informieren wir Sie über die
                wichtigsten Aspekte der Datenverarbeitung im Rahmen unserer
                Website.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Hosting – Vercel</h2>
              <p className={styles.sectionText}>
                Diese Website wird bei{" "}
                <span className={styles.highlight}>Vercel Inc.</span>, 440 N
                Barranca Ave #4133, Covina, CA 91723, USA gehostet. Beim Aufruf
                dieser Website werden automatisch Server-Logfiles erhoben, die
                Ihr Browser übermittelt. Diese enthalten:
              </p>
              <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>
                  IP-Adresse des anfragenden Geräts
                </li>
                <li className={styles.sectionListItem}>
                  Datum und Uhrzeit der Anfrage
                </li>
                <li className={styles.sectionListItem}>
                  Aufgerufene URL und übertragene Datenmenge
                </li>
                <li className={styles.sectionListItem}>
                  Browsertyp und Betriebssystem
                </li>
                <li className={styles.sectionListItem}>
                  Referrer-URL (zuvor besuchte Seite)
                </li>
              </ul>
              <p className={styles.sectionText}>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f
                DSGVO (berechtigtes Interesse an der sicheren und stabilen
                Bereitstellung der Website). Mit Vercel besteht ein
                Auftragsverarbeitungsvertrag gemäß Art. 28 DSGVO. Vercel ist
                nach dem EU-US Data Privacy Framework zertifiziert.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Kontaktformular</h2>
              <p className={styles.sectionText}>
                Wenn Sie uns über das Kontaktformular eine Nachricht senden,
                werden folgende Daten erhoben und verarbeitet:
              </p>
              <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>Name (Pflichtfeld)</li>
                <li className={styles.sectionListItem}>
                  E-Mail-Adresse (Pflichtfeld)
                </li>
                <li className={styles.sectionListItem}>
                  Telefonnummer (freiwillig)
                </li>
                <li className={styles.sectionListItem}>
                  Betreff und Nachrichteninhalt
                </li>
              </ul>
              <p className={styles.sectionText}>
                Die Verarbeitung erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b
                DSGVO (Vertragsanbahnung) sowie Art. 6 Abs. 1 lit. f DSGVO
                (berechtigtes Interesse an der Bearbeitung Ihrer Anfrage). Die
                Daten werden ausschließlich zur Bearbeitung Ihrer Kontaktanfrage
                verwendet und nicht an Dritte weitergegeben. Die Speicherdauer
                beträgt maximal 3 Jahre, sofern keine gesetzlichen
                Aufbewahrungspflichten bestehen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Cookies &amp; Tracking</h2>
              <p className={styles.sectionText}>
                Diese Website verwendet derzeit{" "}
                <span className={styles.highlight}>keine Tracking-Cookies</span>{" "}
                und keine Analyse-Tools wie Google Analytics. Es werden
                ausschließlich technisch notwendige Cookies eingesetzt, die für
                den Betrieb der Website erforderlich sind (z. B. Session-Cookies
                für das Kontaktformular). Diese Cookies erfordern keine
                Einwilligung gemäß § 25 Abs. 2 TTDSG.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                Externe Links &amp; Dienste
              </h2>
              <p className={styles.sectionText}>
                Unsere Website enthält Links zu externen Diensten. Beim Klick
                auf folgende Links verlassen Sie unsere Website und es gelten
                die jeweiligen Datenschutzbestimmungen des Anbieters:
              </p>
              <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>WhatsApp</span> (Meta
                  Platforms Ireland Ltd.) – beim Klick auf unseren WhatsApp-Link
                  werden Daten an Meta übertragen
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Instagram</span> (Meta
                  Platforms Ireland Ltd.)
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>GitHub</span> (GitHub Inc.,
                  Microsoft)
                </li>
              </ul>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Ihre Rechte</h2>
              <p className={styles.sectionText}>
                Gemäß DSGVO stehen Ihnen folgende Rechte gegenüber uns als
                Verantwortlichem zu:
              </p>
              <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Auskunft</span> – Art. 15
                  DSGVO: Recht auf Auskunft über gespeicherte Daten
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Berichtigung</span> – Art.
                  16 DSGVO: Recht auf Korrektur unrichtiger Daten
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Löschung</span> – Art. 17
                  DSGVO: Recht auf Löschung (&ldquo;Recht auf
                  Vergessenwerden&rdquo;)
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Einschränkung</span> – Art.
                  18 DSGVO: Recht auf Einschränkung der Verarbeitung
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Datenübertragbarkeit</span>{" "}
                  – Art. 20 DSGVO: Recht auf Datenübertragung
                </li>
                <li className={styles.sectionListItem}>
                  <span className={styles.highlight}>Widerspruch</span> – Art.
                  21 DSGVO: Recht auf Widerspruch gegen die Verarbeitung
                </li>
              </ul>
              <p className={styles.sectionText}>
                Zur Ausübung Ihrer Rechte wenden Sie sich bitte an:{" "}
                <a href="mailto:info@web-sylon.de" className={styles.link}>
                  info@web-sylon.de
                </a>
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Beschwerderecht</h2>
              <p className={styles.sectionText}>
                Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde
                über die Verarbeitung Ihrer Daten zu beschweren. Die zuständige
                Aufsichtsbehörde für Hessen ist der{" "}
                <span className={styles.highlight}>
                  Hessische Beauftragte für Datenschutz und Informationsfreiheit
                  (HBDI)
                </span>
                , Postfach 3163, 65021 Wiesbaden.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Aktualität</h2>
              <p className={styles.sectionText}>
                Diese Datenschutzerklärung hat den Stand Mai 2026. Wir behalten
                uns vor, sie bei Bedarf anzupassen, um stets den aktuellen
                rechtlichen Anforderungen zu entsprechen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
