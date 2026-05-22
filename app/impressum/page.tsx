import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "Impressum – WEBSYLON",
  description:
    "Impressum und rechtliche Angaben von WEBSYLON, Alperen Ertas, Frankfurt am Main.",
  robots: { index: false, follow: false },
};

export default function Impressum() {
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
            Impres<span className={styles.heroAccent}>sum.</span>
          </h1>
          <p className={styles.heroMeta}>
            Angaben gemäß § 5 DDG
            <span className={styles.heroMetaDot} />
            Stand: Mai 2026
          </p>
        </div>
      </section>

      {/* ── Content ── */}
      <section className={styles.contentSection}>
        <div className={styles.contentInner}>
          {/* Info-Box */}
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
                <span className={styles.infoBoxLabel}>Inhaber</span>
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
                  <br />
                  Deutschland
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
                  <rect x="2" y="7" width="20" height="14" rx="2" />
                  <path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Tätigkeit</span>
                <span className={styles.infoBoxValue}>
                  Webentwicklung &amp;
                  <br />
                  Webdesign
                </span>
              </div>
            </div>
          </div>

          {/* Legal Sections */}
          <div className={styles.legalCard}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Umsatzsteuer</h2>
              <p className={styles.sectionText}>
                Gemäß <span className={styles.highlight}>§ 19 UStG</span>{" "}
                (Kleinunternehmerregelung) wird keine Umsatzsteuer ausgewiesen.
                Alperen Ertas ist als Einzelunternehmer tätig und von der
                Umsatzsteuerpflicht befreit.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Haftung für Inhalte</h2>
              <p className={styles.sectionText}>
                Als Diensteanbieter sind wir gemäß § 7 Abs. 1 DDG für eigene
                Inhalte auf diesen Seiten nach den allgemeinen Gesetzen
                verantwortlich. Nach §§ 8 bis 10 DDG sind wir als
                Diensteanbieter jedoch nicht verpflichtet, übermittelte oder
                gespeicherte fremde Informationen zu überwachen oder nach
                Umständen zu forschen, die auf eine rechtswidrige Tätigkeit
                hinweisen.
              </p>
              <p className={styles.sectionText}>
                Verpflichtungen zur Entfernung oder Sperrung der Nutzung von
                Informationen nach den allgemeinen Gesetzen bleiben hiervon
                unberührt. Eine diesbezügliche Haftung ist jedoch erst ab dem
                Zeitpunkt der Kenntnis einer konkreten Rechtsverletzung möglich.
                Bei Bekanntwerden von entsprechenden Rechtsverletzungen werden
                wir diese Inhalte umgehend entfernen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Haftung für Links</h2>
              <p className={styles.sectionText}>
                Unser Angebot enthält Links zu externen Websites Dritter, auf
                deren Inhalte wir keinen Einfluss haben. Für die Inhalte der
                verlinkten Seiten ist stets der jeweilige Anbieter oder
                Betreiber verantwortlich. Die verlinkten Seiten wurden zum
                Zeitpunkt der Verlinkung auf mögliche Rechtsverstöße überprüft –
                rechtswidrige Inhalte waren zum damaligen Zeitpunkt nicht
                erkennbar.
              </p>
              <p className={styles.sectionText}>
                Eine permanente inhaltliche Kontrolle der verlinkten Seiten ist
                ohne konkrete Anhaltspunkte einer Rechtsverletzung nicht
                zumutbar. Bei Bekanntwerden von Rechtsverletzungen werden wir
                derartige Links umgehend entfernen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Urheberrecht</h2>
              <p className={styles.sectionText}>
                Die durch den Seitenbetreiber erstellten Inhalte und Werke auf
                diesen Seiten unterliegen dem deutschen Urheberrecht.
                Vervielfältigung, Bearbeitung, Verbreitung und jede Art der
                Verwertung außerhalb der Grenzen des Urheberrechts bedürfen der
                schriftlichen Zustimmung des Autors.
              </p>
              <p className={styles.sectionText}>
                Downloads und Kopien dieser Seite sind ausschließlich für den
                privaten, nicht kommerziellen Gebrauch gestattet. Soweit Inhalte
                nicht vom Betreiber erstellt wurden, werden die Urheberrechte
                Dritter beachtet und entsprechend gekennzeichnet. Bei
                Bekanntwerden einer Urheberrechtsverletzung werden entsprechende
                Inhalte umgehend entfernt.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>Streitschlichtung</h2>
              <p className={styles.sectionText}>
                Die Europäische Kommission stellt eine Plattform zur
                Online-Streitbeilegung (OS) bereit:{" "}
                <a
                  href="https://ec.europa.eu/consumers/odr/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.link}>
                  ec.europa.eu/consumers/odr
                </a>
                . Unsere E-Mail-Adresse lautet:{" "}
                <a href="mailto:info@web-sylon.de" className={styles.link}>
                  info@web-sylon.de
                </a>
              </p>
              <p className={styles.sectionText}>
                Wir sind nicht bereit und nicht verpflichtet, an
                Streitbeilegungsverfahren vor einer
                Verbraucherschlichtungsstelle teilzunehmen.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
