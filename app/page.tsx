import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";

const leistungenPreview = [
  {
    icon: "🖥️",
    title: "Web-Design",
    desc: "Modernes, conversion-optimiertes Design das Ihre Marke perfekt repräsentiert – responsiv, barrierefrei und auf allen Geräten überzeugend.",
    features: ["Responsive Design", "UX/UI-Optimierung", "Corporate Identity"],
    href: "/leistungen#webdesign",
  },
  {
    icon: "⚙️",
    title: "Full-Stack Development",
    desc: "Skalierbare Web-Applikationen von Frontend bis Backend – mit modernsten Technologien, sauberem Code und maximaler Performance.",
    features: [
      "React, Vue, Next.js",
      "Node.js, Python, PHP",
      "API-Integration",
    ],
    href: "/leistungen#fullstack",
  },
  {
    icon: "🛒",
    title: "E-Commerce",
    desc: "Vollständige Online-Shop-Lösungen mit reibungsloser Zahlungsabwicklung, Lagerverwaltung und Analytics – bereit zum Verkaufen.",
    features: [
      "Shopify, WooCommerce",
      "Payment-Gateways",
      "Analytics & Tracking",
    ],
    href: "/leistungen#ecommerce",
  },
  {
    icon: "🔍",
    title: "SEO & Marketing",
    desc: "Ihre Website wird nur gefunden, wenn sie auch ranking-optimiert ist. Wir sorgen für Sichtbarkeit – technisch und inhaltlich.",
    features: ["Google Rankings", "Technical SEO", "Local SEO"],
    href: "/leistungen#seo",
  },
];

const portfolioPreview = [
  {
    image: "/images/demo-fitness.png",
    tag: "Fitness & Sport",
    title: "Fitness Studio Website",
    text: "Moderne Website für ein Fitnessstudio mit Kursplan, Online-Anmeldung und Shop.",
    href: "https://fitness-club-demo.vercel.app",
  },
  {
    image: "/images/demo-sperrzone24.png",
    tag: "Dienstleistungen",
    title: "Sperrzone24",
    text: "Professioneller Web-Auftritt für einen Sicherheitsdienstleister mit Kontaktformular.",
    href: "https://sperrzone24.de",
  },
  {
    image: "/images/demo-steuerkanzlei.jpg",
    tag: "Recht & Finanzen",
    title: "Steuerkanzlei Website",
    text: "Seriöser und vertrauenswürdiger Auftritt für eine moderne Steuerkanzlei.",
    href: "https://tax-office-demo.vercel.app",
  },
  {
    image: "/images/demo-personalvermittler.png",
    tag: "Start-up",
    title: "Personalvermittler",
    text: "Zeitgemäße Website mit Bewerbungsformular und Terminbuchungs-Funktion.",
    href: "https://hr-recruiting-demo.vercel.app",
  },
];

export default function Home() {
  return (
    <main>
      <section className={styles.hero}>
        <div className={styles.heroBg} />
        <div className={styles.heroGrid} />
        <div className={styles.heroInner}>
          <div className={styles.heroContent}>
            <div className={styles.heroBadge}>
              <span className={styles.heroBadgeDot} />
              Professionelle Webentwicklung
            </div>
            <h1 className={styles.heroTitle}>
              Webseiten, die{" "}
              <span className={styles.heroTitleAccent}>Eindruck</span>{" "}
              hinterlassen.
            </h1>
            <p className={styles.heroSubtext}>
              Wir entwickeln digitale Auftritte für Unternehmen, die mehr wollen
              als nur online präsent zu sein.
            </p>
            <div className={styles.heroActions}>
              <Link href="/kontakt" className={styles.btnPrimary}>
                Projekt starten
              </Link>
              <Link href="/leistungen" className={styles.btnSecondary}>
                Leistungen entdecken
              </Link>
            </div>
          </div>
          <div className={styles.heroVisual}>
            <div className={styles.heroGlobe}>
              <div className={styles.heroGlobeInner}>
                <Image
                  src="/images/symbol-transparent.png"
                  alt="Websylon Symbol"
                  width={100}
                  height={100}
                  className={styles.heroSymbol}
                  priority
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={styles.leistungen}>
        <div className={styles.leistungenInner}>
          <div className={styles.leistungenHeader}>
            <span className={styles.leistungenBadge}>Was wir bieten</span>
            <h2 className={styles.leistungenTitle}>
              Full-Service Webentwicklung{" "}
              <span className={styles.leistungenTitleAccent}>
                aus einer Hand
              </span>
            </h2>
            <p className={styles.leistungenSubtext}>
              Von der ersten Idee bis zum fertigen Produkt – wir begleiten Sie
              durch den gesamten digitalen Entwicklungsprozess.
            </p>
          </div>
          <div className={styles.leistungenGrid}>
            {leistungenPreview.map(({ icon, title, desc, features, href }) => (
              <Link key={title} href={href} className={styles.leistungCard}>
                <div className={styles.leistungCardTop}>
                  <span className={styles.leistungIcon}>{icon}</span>
                  <span className={styles.leistungArrow}>→</span>
                </div>
                <h3 className={styles.leistungTitle}>{title}</h3>
                <p className={styles.leistungDesc}>{desc}</p>
                <ul className={styles.leistungFeatures}>
                  {features.map((f) => (
                    <li key={f} className={styles.leistungFeature}>
                      {f}
                    </li>
                  ))}
                </ul>
              </Link>
            ))}
          </div>
          <div className={styles.leistungenCta}>
            <Link href="/leistungen" className={styles.leistungenCtaBtn}>
              Alle Leistungen entdecken →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.warum}>
        <div className={styles.warumInner}>
          <div className={styles.warumContent}>
            <span className={styles.warumBadge}>Warum Websylon</span>
            <h2 className={styles.warumTitle}>
              Mehr als nur eine{" "}
              <span className={styles.warumTitleAccent}>Website</span>
            </h2>
            <p className={styles.warumText}>
              Wir bauen keine Standard-Lösungen. Jedes Projekt wird individuell
              entwickelt – mit Leidenschaft, technischer Exzellenz und einem
              klaren Fokus auf Ihre Ziele.
            </p>
            <div className={styles.warumStats}>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>25+</span>
                <span className={styles.warumStatLabel}>Jahre Erfahrung</span>
              </div>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>100%</span>
                <span className={styles.warumStatLabel}>Individuell</span>
              </div>
              <div className={styles.warumStat}>
                <span className={styles.warumStatNumber}>∞</span>
                <span className={styles.warumStatLabel}>Support</span>
              </div>
            </div>
            <div className={styles.warumCta}>
              <Link href="/ueber-uns" className={styles.warumCtaBtn}>
                Mehr über uns →
              </Link>
            </div>
          </div>
          <div className={styles.warumList}>
            {[
              {
                icon: "🎯",
                title: "Individuelle Lösungen",
                text: "Keine Templates. Jede Website wird von Grund auf nach Ihren Anforderungen entwickelt.",
              },
              {
                icon: "⚡",
                title: "Maximale Performance",
                text: "Lighthouse-Score 90+, schnelle Ladezeiten und optimierte Core Web Vitals.",
              },
              {
                icon: "🤝",
                title: "Persönlicher Ansprechpartner",
                text: "Direkte Kommunikation ohne Umwege – von der Idee bis zum Launch.",
              },
              {
                icon: "🔒",
                title: "Sicherheit & Datenschutz",
                text: "DSGVO-konform, SSL-verschlüsselt und nach aktuellen Sicherheitsstandards entwickelt.",
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className={styles.warumItem}>
                <span className={styles.warumItemIcon}>{icon}</span>
                <div className={styles.warumItemContent}>
                  <h3 className={styles.warumItemTitle}>{title}</h3>
                  <p className={styles.warumItemText}>{text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className={styles.branchen}>
        <div className={styles.branchenInner}>
          <div className={styles.branchenHeader}>
            <span className={styles.branchenBadge}>Unsere Expertise</span>
            <h2 className={styles.branchenTitle}>
              Ihre Branche,{" "}
              <span className={styles.branchenTitleAccent}>unsere Stärke</span>
            </h2>
            <p className={styles.branchenSubtext}>
              Maßgeschneiderte Weblösungen für verschiedene Branchen – wir
              kennen die Anforderungen Ihres Marktes.
            </p>
          </div>
          <div className={styles.branchenGrid}>
            {[
              {
                icon: "🚀",
                title: "Start-ups",
                text: "Von der Idee zur digitalen Realität. Schnell, modern und skalierbar.",
              },
              {
                icon: "🛍️",
                title: "E-Commerce",
                text: "Online-Handel, Einzelhandel, Kaufhäuser & Lebensmittelmärkte.",
              },
              {
                icon: "🍽️",
                title: "Gastronomie",
                text: "Restaurants, Cafés, Fast-Food Ketten & Imbissstände.",
              },
              {
                icon: "🏢",
                title: "Immobilien",
                text: "Professionelle Präsentation für Makler mit Objekt-Showcases.",
              },
              {
                icon: "⚖️",
                title: "Recht & Finanzen",
                text: "Anwaltskanzleien, Steuerbüros & Finanzdienstleister.",
              },
              {
                icon: "⚕️",
                title: "Gesundheitswesen",
                text: "Arztpraxen, Apotheken, Pflegedienste & Krankenhäuser.",
              },
            ].map(({ icon, title, text }) => (
              <div key={title} className={styles.brancheCard}>
                <span className={styles.brancheIcon}>{icon}</span>
                <h3 className={styles.brancheTitle}>{title}</h3>
                <p className={styles.brancheText}>{text}</p>
              </div>
            ))}
          </div>
          <div className={styles.branchenCta}>
            <Link href="/branchen" className={styles.branchenCtaBtn}>
              Alle Branchen entdecken →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.portfolio}>
        <div className={styles.portfolioInner}>
          <div className={styles.portfolioHeader}>
            <span className={styles.portfolioBadge}>Unsere Arbeiten</span>
            <h2 className={styles.portfolioTitle}>
              Projekte, die{" "}
              <span className={styles.portfolioTitleAccent}>überzeugen</span>
            </h2>
            <p className={styles.portfolioSubtext}>
              Ein Auszug aus unseren realisierten Projekten – modern, performant
              und individuell auf die jeweilige Branche zugeschnitten.
            </p>
          </div>
          <div className={styles.portfolioGrid}>
            {portfolioPreview.map(({ image, tag, title, text, href }) => (
              <a
                key={title}
                href={href}
                className={styles.portfolioCard}
                target="_blank"
                rel="noopener noreferrer">
                <div className={styles.portfolioImageWrapper}>
                  <Image
                    src={image}
                    alt={title}
                    fill
                    className={styles.portfolioImage}
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  />
                  <div className={styles.portfolioOverlay} />
                </div>
                <div className={styles.portfolioContent}>
                  <span className={styles.portfolioTag}>{tag}</span>
                  <h3 className={styles.portfolioCardTitle}>{title}</h3>
                  <p className={styles.portfolioCardText}>{text}</p>
                  <span className={styles.portfolioBtn}>Demo ansehen →</span>
                </div>
              </a>
            ))}
          </div>
          <div className={styles.portfolioCta}>
            <Link href="/portfolio" className={styles.portfolioCtaBtn}>
              Alle Projekte ansehen →
            </Link>
          </div>
        </div>
      </section>

      <section className={styles.testimonials}>
        <div className={styles.testimonialsInner}>
          <div className={styles.testimonialsHeader}>
            <span className={styles.testimonialsBadge}>Kundenstimmen</span>
            <h2 className={styles.testimonialsTitle}>
              Was unsere{" "}
              <span className={styles.testimonialsTitleAccent}>
                Kunden sagen
              </span>
            </h2>
          </div>
          <div className={styles.testimonialsGrid}>
            {[
              {
                quote:
                  "Websylon hat unsere Vorstellungen perfekt umgesetzt. Die neue Website ist nicht nur optisch beeindruckend, sondern hat unsere Anfragen deutlich gesteigert.",
                name: "Dr. Michael Weber",
                role: "Inhaber, Weber&Partner Steuerkanzlei",
                initials: "MW",
              },
              {
                quote:
                  "Professionelle Abwicklung von Anfang bis Ende. Unser Online-Präsens läuft seit dem Launch reibungslos und die Conversion-Rate hat sich verdoppelt. Wir sind begeistert",
                name: "Jerome Mayer",
                role: "Geschäftsführer, Fit-Training Studios",
                initials: "JM",
              },
              {
                quote:
                  "Eine Website die wirklich zu uns und unserer Branche passt. Schnelle Umsetzung, faire Preise und ein Team das wirklich zuhört. Absolute Empfehlung!",
                name: "Yunus Kurt",
                role: "Gründer, Sperrzone24, Verkehrssicherheit",
                initials: "YK",
              },
              {
                quote:
                  "Dank Websylon haben wir endlich einen digitalen Auftritt, der unsere Kandidaten und Unternehmen gleichermaßen überzeugt. Schnelle Umsetzung, fantastisches Design.",
                name: "Tina Schneider",
                role: "Geschäftsführerin, TalentForge HR GmbH",
                initials: "TS",
              },
            ].map(({ quote, name, role, initials }) => (
              <div key={name} className={styles.testimonialCard}>
                <div>
                  <span className={styles.testimonialQuoteMark}>&ldquo;</span>
                  <p className={styles.testimonialQuote}>{quote}</p>
                </div>
                <div className={styles.testimonialAuthor}>
                  <div className={styles.testimonialAvatar}>{initials}</div>
                  <div>
                    <p className={styles.testimonialName}>{name}</p>
                    <p className={styles.testimonialRole}>{role}</p>
                  </div>
                  <div className={styles.testimonialStars}>★★★★★</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA Banner ── */}
      <section className={styles.ctaBanner}>
        <div className={styles.ctaBannerInner}>
          <span className={styles.ctaBannerLabel}>Jetzt starten</span>
          <h2 className={styles.ctaBannerTitle}>
            Ihr Projekt verdient den{" "}
            <span className={styles.ctaBannerTitleAccent}>besten Auftritt</span>
          </h2>
          <p className={styles.ctaBannerText}>
            Lassen Sie uns gemeinsam eine Website entwickeln, die Ihre Kunden
            begeistert und Ihr Geschäft voranbringt.
          </p>
          <div className={styles.ctaBannerActions}>
            <Link href="/kontakt" className={styles.ctaBannerBtnPrimary}>
              Kostenloses Erstgespräch
            </Link>
            <Link href="/leistungen" className={styles.ctaBannerBtnSecondary}>
              Leistungen ansehen
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
