# WEBSYLON – Projekt-Referenz für neuen Chat

## WICHTIG: Lies diese Referenz vollständig, bevor du mit dem Projekt fortfährst.

---

## 1. PROJEKT-ÜBERBLICK

**Projekt:** Redesign der eigenen Agentur-Website (Webentwicklung für Unternehmen)
**Inhaber:** Alperen Ertas, Frankfurt am Main
**Status:** In aktiver Entwicklung, noch nicht live
**Projektpfad:** `/Users/alpy/Desktop/websylon-new`

---

## 2. TECH-STACK

- **Framework:** Next.js 15 (App Router) + TypeScript
- **Styling:** CSS Modules + modernes CSS3 (KEIN Tailwind!)
- **Animationen:** CSS Keyframes (Framer Motion verfügbar aber nicht aktiv genutzt)
- **Fonts:** next/font (Geist Sans + Geist Mono)
- **Bilder:** next/image (AVIF/WebP)
- **Forms:** Native React (useState)
- **Icons:** Inline SVG Komponenten (kein lucide-react, hatte Kompatibilitätsprobleme)
- **Hosting geplant:** Vercel
- **Node:** v25.4.0, npm 11.7.0, macOS

---

## 3. FARBPALETTE (aus Logo abgeleitet)

```css
--color-primary:        #8CEFB9;   /* Mint – Brand, Akzente, CTAs */
--color-primary-hover:  #5FB894;   /* Hover-States */
--color-secondary:      #2C424F;   /* Teal – Strukturen */
--color-secondary-dark: #1A2A33;   /* Slate dunkel */
--color-bg-base:        #101D25;   /* Haupt-Hintergrund */
--color-bg-surface:     #152028;   /* Erhöhte Flächen */
--color-bg-elevated:    #1C2E38;   /* Karten, Cards */
--color-text-primary:   #F0FFF8;   /* Haupttext */
--color-text-secondary: #8AABB8;   /* Sekundärtext */
--color-text-muted:     #4A6572;   /* Dezenter Text */
--gradient-brand: linear-gradient(90deg, #8CEFB9, #2C424F);
```

---

## 4. DESIGN-REGELN (KRITISCH – IMMER EINHALTEN!)

### Hintergrundfarben:
- **KEINE radikalen Gradient-Übergänge** zwischen Sections. Das war das größte Problem im bisherigen Projekt.
- Sections verwenden entweder `--color-bg-base` oder `--color-bg-surface` – nie abwechselnd ohne sauberen Übergang.
- **KEINE `::before` Pseudo-Elemente mit radial-gradient** die am Ende einer Section einen Farbfleck erzeugen.
- Footer hat `background: var(--color-bg-surface)` mit `border-top: 1px solid var(--color-border)`.

### Trennlinien:
- **KEINE `border-block` oder `border-bottom` zwischen Sections!** In `globals.css` steht: `section { border: none !important; }`.
- Einzige Ausnahme: Footer hat `border-top`.

### Buttons:
- Buttons brauchen **immer ausreichend Padding** (`padding: var(--space-4) var(--space-12)` minimum).
- Nie zu eng am Rand.

### Cards/Kacheln:
- Ausreichend inneres Padding (`var(--space-8)` minimum, besser `var(--space-10)`).
- Inhalte dürfen nie am Rand kleben.

### Responsive:
- Breakpoints: 320–480 / 481–768 / 769–1024 / 1025–1440 / 1441–1920 / 1921+
- Besonderer Fokus: iPhone 17 Pro Max, iPad, Desktop
- Safari-konform (iOS ≈ Android visuell)
- Mobile-First Ansatz

---

## 5. ORDNERSTRUKTUR

```
websylon-new/
├── app/
│   ├── layout.tsx              ← Root Layout (Navigation + Footer)
│   ├── page.tsx                ← Home (Hero, Leistungen, Warum, Branchen, Portfolio, Testimonials, CTA)
│   ├── page.module.css
│   ├── globals.css             ← Imports: reset, variables, animations + Body Styles
│   ├── ueber-uns/
│   │   ├── page.tsx            ← Komplett fertig
│   │   └── page.module.css
│   ├── branchen/
│   │   ├── page.tsx            ← Komplett fertig (12 Branchen)
│   │   └── page.module.css
│   ├── leistungen/
│   │   ├── page.tsx            ← Komplett fertig (6 Leistungen + Prozess)
│   │   └── page.module.css
│   ├── portfolio/
│   │   ├── page.tsx            ← Komplett fertig (5 fertig + 7 Coming Soon)
│   │   └── page.module.css
│   ├── faq/
│   │   ├── page.tsx            ← Komplett fertig (6 Fragen, Akkordeon)
│   │   └── page.module.css
│   ├── kontakt/
│   │   ├── page.tsx            ← Design noch in Arbeit
│   │   └── page.module.css
│   ├── impressum/              ← Noch leer
│   ├── datenschutz/            ← Noch leer
│   └── agb/                    ← Noch leer (Ordner existiert nicht, muss erstellt werden)
├── components/
│   ├── Navigation/
│   │   ├── Navigation.tsx      ← Desktop + Mobile, Grid-Layout
│   │   └── Navigation.module.css
│   ├── Footer/
│   │   ├── Footer.tsx          ← Logo, Kontakt, Social, Nav-Links, Legal
│   │   └── Footer.module.css
│   ├── SplashScreen/
│   │   ├── SplashScreen.tsx    ← Intro-Animation beim ersten Besuch
│   │   └── SplashScreen.module.css
│   └── ui/                     ← Leer, für zukünftige shared Components
├── styles/
│   ├── variables.css           ← CSS Custom Properties
│   ├── reset.css               ← CSS Reset
│   └── animations.css          ← Globale Keyframes
└── public/
    ├── images/
    │   ├── symbol.png          ← Logo-Symbol (Raute)
    │   ├── demo-fitness.png
    │   ├── demo-sperrzone24.png
    │   ├── demo-steuerkanzlei.jpg
    │   ├── demo-thai-massage.jpg
    │   └── demo-personalvermittler.png
    └── logos/
        ├── websylon-navbar.png ← Navbar Logo (transparent)
        └── home-logo.png      ← Splash Screen Logo (quadratisch)
```

---

## 6. FERTIGE SEITEN

### ✅ Navigation
- Grid-Layout: Logo links, Links zentriert, CTA rechts
- Mobile: Hamburger-Menü
- Scroll-Effekt: Backdrop-blur bei Scroll

### ✅ Footer
- 4-Spalten Grid: Brand | Navigation | Mehr | Rechtliches
- Social Media: Instagram, GitHub, WhatsApp (inline SVG)
- Kontaktdaten: info@web-sylon.de, 0171-831 73 48
- Bottom Bar mit Logo-Symbol + Copyright + Legal Links

### ✅ SplashScreen
- Nur beim ersten Besuch (sessionStorage)
- Texte: "Professionell auftreten mit .." (von rechts) + "Webseiten, die beindrucken .." (von links)
- Logo mit 360° Rotation
- Schwebende Partikel + Punkt-Symbole (symbol.png)
- 7.5 Sekunden Dauer, Skip-Button
- Hydration-safe: startet als 'hidden', requestAnimationFrame für setState

### ✅ Home (app/page.tsx)
Sections in Reihenfolge:
1. Hero – Split: Content links, animiertes Symbol rechts
2. Leistungen Preview – 4 Kacheln (Web-Design, Full-Stack, E-Commerce, SEO)
3. Warum Websylon – Split: Stats + CTA links, Feature-Liste rechts
4. Branchen Preview – 6 Kacheln im Grid
5. Portfolio Preview – 3 Projekte mit externen Links + "Demo ansehen" Button
6. Testimonials – 3 Kundenstimmen (Platzhalter)
7. CTA Banner – "Kostenloses Erstgespräch"

### ✅ Über uns (app/ueber-uns/)
- Hero
- Wer wir sind (2-Spalten: Text + Highlight-Boxes)
- Mission (mit Logo-Symbol)
- Tech-Stack (4 Cards: Frontend, Backend, DB, Tools)
- Warum Websylon (6 Cards mit Icons)
- CTA

### ✅ Branchen (app/branchen/)
- Hero
- 12 Branchen im 4er-Grid
- CTA

### ✅ Leistungen (app/leistungen/)
- Hero
- 6 Leistungskarten (Header + Features mit Häkchen)
- Prozess (4 Schritte mit Nummern-Kreisen)
- CTA

### ✅ Portfolio (app/portfolio/)
- Hero
- 12 Kacheln: 5 fertige Projekte mit Screenshots + 7 "Demnächst"
- Fertige Projekte mit externen Links (target="_blank")
- CTA

### ✅ FAQ (app/faq/)
- Hero
- 6 Fragen als Akkordeon (useState, Client Component)
- CTA

---

## 7. OFFENE AUFGABEN

### 🔧 Kontaktseite (app/kontakt/)
- Grundgerüst steht: Header, Pills (E-Mail/Telefon/WhatsApp), Divider, Formular
- **Design muss noch finalisiert werden** – Formularfelder zu eng, Padding-Optimierung nötig
- Formular ist funktional (Client Component mit useState für Submit-Simulation)
- Kein echtes Backend – handleSubmit simuliert nur mit setTimeout

### ⬜ Impressum (app/impressum/)
- Ordner existiert, aber keine Dateien
- Inhalt: Standard-Impressum nach deutschem Recht
- Inhaber: Alperen Ertas, Frankfurt am Main

### ⬜ Datenschutz (app/datenschutz/)
- Ordner existiert, aber keine Dateien
- DSGVO-konforme Datenschutzerklärung

### ⬜ AGB (app/agb/)
- Ordner muss erstellt werden
- Allgemeine Geschäftsbedingungen

### ⬜ Responsive Testing
- Noch nicht durchgeführt
- Alle Seiten müssen auf Mobile/Tablet/Desktop getestet werden

### ⬜ DSGVO
- Cookie-Banner fehlt noch
- Cookie-freie Analytics (Plausible oder Vercel Analytics)

---

## 8. PORTFOLIO-PROJEKTE

### Fertige Projekte (5):
| Projekt | Screenshot | URL |
|---|---|---|
| Fitness Club | demo-fitness.png | https://fitness-club-demo.vercel.app |
| Steuerkanzlei | demo-steuerkanzlei.jpg | https://tax-office-demo.vercel.app |
| Sperrzone24 | demo-sperrzone24.png | https://sperrzone24.de |
| Thai Massage | demo-thai-massage.jpg | https://thai-massage-salon-demo.vercel.app |
| Personalvermittler | demo-personalvermittler.png | https://hr-recruiting-demo.vercel.app |

### Coming Soon (7):
E-Commerce, Gastronomie, Immobilien, Arztpraxis, Bildung, Handwerk, Kreativagentur

---

## 9. KONTAKTDATEN

- **E-Mail:** info@web-sylon.de
- **Telefon:** 0171-831 73 48
- **WhatsApp:** wa.me/491718317348
- **Standort:** Frankfurt am Main
- **Erreichbarkeit:** Mo-Fr 9:00-18:00 Uhr
- **Social Media:** Instagram, GitHub, WhatsApp

---

## 10. ARBEITSREGELN

1. **Sequenziell, Schritt für Schritt** – kein Vorpreschen
2. **Kleine Code-Häppchen** – nicht alles auf einmal
3. **Nach jedem Schritt fragen**, ob fertig
4. **Beim Debuggen:** erst analysieren, dann fragen, dann lösen
5. **Beim Fixen:** nur die exakte Stelle zeigen
6. **Komplette Dateien nur als Download** liefern, NICHT als Code-Block zum Copy-Paste
7. **Vor CSS-Änderungen** prüfen ob konkurrierende Styles existieren
8. **Keine border-block/border-bottom** zwischen Sections
9. **Keine radikalen Gradient-Übergänge** bei Hintergrundfarben

---

## 11. BEKANNTE PROBLEME & LÖSUNGEN

### Hydration Mismatch (SplashScreen):
- Lösung: Initial state = 'hidden', dann requestAnimationFrame im useEffect

### ESLint "setState in useEffect":
- Lösung: requestAnimationFrame als Callback nutzen, nicht direkt setState

### CSS Module nicht gefunden:
- Ursache: Dateiname stimmt nicht (Groß/Kleinschreibung)
- Lösung: Exakte Schreibweise prüfen, ggf. `rm -rf .next && npm run dev`

### Image Warnung (width/height):
- Lösung: `style={{ width: 'auto', height: '32px' }}` oder CSS `width: auto !important`

---

## 12. NÄCHSTE SCHRITTE (PRIORITÄT)

1. Kontaktseite Design finalisieren
2. Impressum erstellen
3. Datenschutz erstellen
4. AGB erstellen
5. Responsive Testing aller Seiten
6. DSGVO Cookie-Banner
7. Feinschliff & Performance-Optimierung
