import type { Metadata } from "next";
import styles from "../legal.module.css";

export const metadata: Metadata = {
  title: "AGB – WEBSYLON",
  description:
    "Allgemeine Geschäftsbedingungen von WEBSYLON, Alperen Ertas, Frankfurt am Main.",
  robots: { index: false, follow: false },
};

export default function AGB() {
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
            Allg. Geschäfts-
            <br />
            <span className={styles.heroAccent}>bedingungen</span>
          </h1>
          <p className={styles.heroMeta}>
            Für Webentwicklung &amp; Webdesign
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
                <span className={styles.infoBoxLabel}>Anbieter</span>
                <span className={styles.infoBoxValue}>
                  Alperen Ertas
                  <br />
                  WEBSYLON
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
                  <path d="M20 10c0 6-8 12-8 12S4 16 4 10a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
              </span>
              <div>
                <span className={styles.infoBoxLabel}>Gerichtsstand</span>
                <span className={styles.infoBoxValue}>
                  Frankfurt am Main
                  <br />
                  Deutsches Recht
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
                <span className={styles.infoBoxLabel}>Geltungsbereich</span>
                <span className={styles.infoBoxValue}>
                  Webentwicklung
                  <br />
                  Webdesign &amp; SEO
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
                <span className={styles.infoBoxLabel}>Rechtsform</span>
                <span className={styles.infoBoxValue}>
                  Einzelunternehmen
                  <br />§ 19 UStG
                </span>
              </div>
            </div>
          </div>

          {/* AGB Sections */}
          <div className={styles.legalCard}>
            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 1 – Geltungsbereich</h2>
              <p className={styles.sectionText}>
                Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle
                Verträge zwischen{" "}
                <span className={styles.highlight}>
                  Alperen Ertas, WEBSYLON
                </span>
                , Meersburger Str. 15, 60386 Frankfurt am Main (nachfolgend
                &ldquo;Auftragnehmer&rdquo;) und seinen Auftraggebern über
                Leistungen im Bereich Webentwicklung, Webdesign, E-Commerce und
                Suchmaschinenoptimierung.
              </p>
              <p className={styles.sectionText}>
                Abweichende Bedingungen des Auftraggebers werden nicht
                anerkannt, es sei denn, der Auftragnehmer stimmt ihrer Geltung
                ausdrücklich schriftlich zu.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 2 – Vertragsschluss</h2>
              <p className={styles.sectionText}>
                Angebote des Auftragnehmers sind freibleibend und unverbindlich.
                Ein Vertrag kommt erst durch die schriftliche
                Auftragsbestätigung des Auftragnehmers oder durch Beginn der
                Leistungserbringung zustande. Mündliche Nebenabreden bedürfen zu
                ihrer Wirksamkeit der schriftlichen Bestätigung.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 3 – Leistungsumfang</h2>
              <p className={styles.sectionText}>
                Der konkrete Leistungsumfang ergibt sich aus dem jeweiligen
                Angebot bzw. der Auftragsbestätigung. Änderungen oder
                Erweiterungen des vereinbarten Leistungsumfangs (Change
                Requests) bedürfen einer gesonderten schriftlichen Vereinbarung
                und können zu einer Anpassung von Preis und Liefertermin führen.
              </p>
              <p className={styles.sectionText}>
                Der Auftragnehmer ist berechtigt, Teilleistungen durch
                qualifizierte Dritte (Subunternehmer) erbringen zu lassen,
                sofern dies dem Auftraggeber zumutbar ist und die Qualität der
                Leistung nicht beeinträchtigt wird.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                § 4 – Mitwirkungspflichten
              </h2>
              <p className={styles.sectionText}>
                Der Auftraggeber ist verpflichtet, alle für die
                Leistungserbringung erforderlichen Informationen, Materialien
                und Zugänge rechtzeitig bereitzustellen, insbesondere:
              </p>
              <ul className={styles.sectionList}>
                <li className={styles.sectionListItem}>
                  Texte, Bilder und sonstige Inhalte in digitaler Form
                </li>
                <li className={styles.sectionListItem}>
                  Zugangsdaten für bestehende Systeme (Hosting, CMS, Domain)
                </li>
                <li className={styles.sectionListItem}>
                  Zeitnahe Rückmeldung auf Entwürfe und Freigaben
                </li>
                <li className={styles.sectionListItem}>
                  Benennung eines festen Ansprechpartners
                </li>
              </ul>
              <p className={styles.sectionText}>
                Verzögerungen, die auf unzureichende Mitwirkung des
                Auftraggebers zurückzuführen sind, gehen nicht zu Lasten des
                Auftragnehmers und können zu einer entsprechenden Anpassung des
                Liefertermins und zusätzlichen Kosten führen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                § 5 – Preise &amp; Zahlung
              </h2>
              <p className={styles.sectionText}>
                Es gelten die im Angebot ausgewiesenen Preise. Da der
                Auftragnehmer der{" "}
                <span className={styles.highlight}>
                  Kleinunternehmerregelung gemäß § 19 UStG
                </span>{" "}
                unterliegt, wird keine Umsatzsteuer berechnet und ausgewiesen.
              </p>
              <p className={styles.sectionText}>
                Rechnungen sind innerhalb von{" "}
                <span className={styles.highlight}>
                  14 Tagen nach Rechnungsstellung
                </span>{" "}
                ohne Abzug zur Zahlung fällig. Bei Projekten ab 500 € wird in
                der Regel eine Anzahlung von 50 % bei Auftragserteilung
                vereinbart; der Restbetrag ist bei Projektabschluss fällig.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 6 – Zahlungsverzug</h2>
              <p className={styles.sectionText}>
                Bei Zahlungsverzug ist der Auftragnehmer berechtigt,
                Verzugszinsen in gesetzlicher Höhe (§ 288 BGB) zu berechnen.
                Darüber hinaus ist der Auftragnehmer berechtigt, alle laufenden
                Arbeiten bis zum vollständigen Ausgleich offener Forderungen zu
                unterbrechen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 7 – Abnahme</h2>
              <p className={styles.sectionText}>
                Nach Fertigstellung der vereinbarten Leistung wird dem
                Auftraggeber eine Abnahmefrist von{" "}
                <span className={styles.highlight}>10 Werktagen</span>{" "}
                eingeräumt. Werden innerhalb dieser Frist keine wesentlichen
                Mängel schriftlich gemeldet, gilt die Leistung als abgenommen.
                Unwesentliche Mängel berechtigen nicht zur Verweigerung der
                Abnahme.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                § 8 – Nutzungsrechte &amp; Urheberrecht
              </h2>
              <p className={styles.sectionText}>
                Mit vollständiger Zahlung der vereinbarten Vergütung überträgt
                der Auftragnehmer dem Auftraggeber das einfache, zeitlich und
                räumlich unbeschränkte Nutzungsrecht an den erstellten Werken
                für den vertraglich vereinbarten Zweck.
              </p>
              <p className={styles.sectionText}>
                Der Auftragnehmer behält das Recht, die erbrachten Arbeiten in
                seinem Portfolio zu Referenzzwecken zu verwenden, sofern der
                Auftraggeber nicht ausdrücklich widerspricht. Verwendete
                Open-Source-Komponenten und Drittanbieter-Bibliotheken
                unterliegen ihren jeweiligen Lizenzen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 9 – Gewährleistung</h2>
              <p className={styles.sectionText}>
                Der Auftragnehmer gewährleistet, dass die erbrachten Leistungen
                den vereinbarten Spezifikationen entsprechen. Die
                Gewährleistungsfrist beträgt{" "}
                <span className={styles.highlight}>12 Monate</span> ab Abnahme.
                Der Auftraggeber hat Mängel unverzüglich, spätestens innerhalb
                von 14 Tagen nach Entdeckung, schriftlich zu melden.
              </p>
              <p className={styles.sectionText}>
                Bei berechtigten Mängelrügen ist der Auftragnehmer zunächst zur
                Nacherfüllung berechtigt. Schlägt die Nacherfüllung zweimal
                fehl, kann der Auftraggeber Minderung oder Rücktritt verlangen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                § 10 – Haftungsbeschränkung
              </h2>
              <p className={styles.sectionText}>
                Der Auftragnehmer haftet unbeschränkt für Vorsatz und grobe
                Fahrlässigkeit sowie für Schäden aus der Verletzung des Lebens,
                des Körpers oder der Gesundheit.
              </p>
              <p className={styles.sectionText}>
                Bei leichter Fahrlässigkeit haftet der Auftragnehmer nur bei
                Verletzung wesentlicher Vertragspflichten (Kardinalpflichten)
                und nur bis zur Höhe des vorhersehbaren, vertragstypischen
                Schadens. Eine weitergehende Haftung ist ausgeschlossen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 11 – Vertraulichkeit</h2>
              <p className={styles.sectionText}>
                Beide Parteien verpflichten sich, alle im Rahmen der
                Zusammenarbeit erlangten vertraulichen Informationen –
                insbesondere Geschäftsgeheimnisse, Zugangsdaten und interne
                Prozesse – vertraulich zu behandeln und nicht an Dritte
                weiterzugeben. Diese Verpflichtung gilt auch nach Beendigung des
                Vertragsverhältnisses fort.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>§ 12 – Kündigung</h2>
              <p className={styles.sectionText}>
                Projektverträge können von beiden Parteien aus wichtigem Grund
                außerordentlich gekündigt werden. Bei Kündigung durch den
                Auftraggeber ohne wichtigen Grund sind die bis zum
                Kündigungszeitpunkt erbrachten Leistungen vollständig zu
                vergüten; darüber hinaus kann der Auftragnehmer eine
                Aufwandspauschale von 20 % des vereinbarten Restbetrags
                berechnen.
              </p>
            </div>

            <div className={styles.section}>
              <h2 className={styles.sectionTitle}>
                § 13 – Schlussbestimmungen
              </h2>
              <p className={styles.sectionText}>
                Es gilt das Recht der Bundesrepublik Deutschland unter
                Ausschluss des UN-Kaufrechts (CISG). Gerichtsstand für alle
                Streitigkeiten aus diesem Vertragsverhältnis ist, soweit
                gesetzlich zulässig,{" "}
                <span className={styles.highlight}>Frankfurt am Main</span>.
              </p>
              <p className={styles.sectionText}>
                Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder
                werden, bleibt die Wirksamkeit der übrigen Bestimmungen davon
                unberührt. Die unwirksame Bestimmung ist durch eine wirksame zu
                ersetzen, die dem wirtschaftlichen Zweck der unwirksamen am
                nächsten kommt (salvatorische Klausel).
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
