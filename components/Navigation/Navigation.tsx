"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import styles from "./Navigation.module.css";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/ueber-uns", label: "Über uns" },
  { href: "/branchen", label: "Branchen" },
  { href: "/leistungen", label: "Leistungen" },
  { href: "/portfolio", label: "Portfolio" },
  { href: "/faq", label: "FAQ" },
];

export default function Navigation() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  return (
    <header>
      <nav
        className={`${styles.nav} ${scrolled ? styles["nav--scrolled"] : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link
            href="/"
            aria-label="Websylon – Zur Startseite"
            className={menuOpen ? styles.logoHidden : ""}
            onClick={() => setMenuOpen(false)}>
            <Image
              src="/logos/websylon-navbar.png"
              alt="Websylon Logo"
              width={200}
              height={40}
              className={styles.logo}
              priority
            />
          </Link>

          {/* Desktop Links */}
          <div className={styles.links}>
            {navLinks.map(({ href, label }) => (
              <Link
                key={href}
                href={href}
                className={`${styles.link} ${
                  pathname === href ? styles.linkActive : ""
                }`}>
                {label}
              </Link>
            ))}
          </div>

          {/* Desktop CTA */}
          <div className={styles.ctaWrapper}>
            <Link href="/kontakt" className={styles.cta}>
              Kontakt
            </Link>
          </div>

          {/* Hamburger */}
          <button
            className={`${styles.hamburger} ${
              menuOpen ? styles["hamburger--open"] : ""
            }`}
            onClick={() => setMenuOpen((prev) => !prev)}
            aria-label={menuOpen ? "Menü schließen" : "Menü öffnen"}
            aria-expanded={menuOpen}>
            <span />
            <span />
            <span />
          </button>
        </div>
      </nav>

      {/* Mobile Fullscreen Menu */}
      <div
        className={`${styles.mobileMenu} ${
          menuOpen ? styles["mobileMenu--open"] : ""
        }`}>
        <div className={styles.menuTopLine} aria-hidden="true" />
        <div className={styles.menuBg} aria-hidden="true" />

        <div className={styles.menuInner}>
          {/* Links */}
          <nav className={styles.menuNav}>
            {navLinks.map(({ href, label }, i) => (
              <Link
                key={href}
                href={href}
                className={`${styles.menuLink} ${
                  pathname === href ? styles.menuLinkActive : ""
                }`}
                onClick={() => setMenuOpen(false)}
                style={{ animationDelay: `${0.05 + i * 0.06}s` }}>
                <span className={styles.menuLinkNum}>
                  {String(i + 1).padStart(2, "0")}
                </span>
                <span className={styles.menuLinkLabel}>{label}</span>
              </Link>
            ))}
          </nav>

          {/* Bottom */}
          <div className={styles.menuBottom}>
            <div className={styles.menuBottomInfo}>
              <span className={styles.menuBottomSep} />
            </div>
            <Link
              href="/kontakt"
              className={styles.menuCta}
              onClick={() => setMenuOpen(false)}>
              Kostenloses Erstgespräch →
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
