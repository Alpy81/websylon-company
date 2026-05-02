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

  // gelöscht – wird über onClick gelöst

  return (
    <header>
      <nav
        className={`${styles.nav} ${scrolled ? styles["nav--scrolled"] : ""}`}>
        <div className={styles.inner}>
          {/* Logo */}
          <Link href="/" aria-label="Websylon – Zur Startseite">
            <Image
              src="/logos/websylon-navbar.png"
              alt="Websylon Logo"
              width={140}
              height={32}
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
            <Link href="/kontakt" className={styles.cta}>
              Kontakt
            </Link>
          </div>

          {/* Hamburger (Mobile) */}
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

        {/* Mobile Menu */}
        <div
          className={`${styles.mobileMenu} ${
            menuOpen ? styles["mobileMenu--open"] : ""
          }`}>
          {navLinks.map(({ href, label }) => (
            <Link
              key={href}
              href={href}
              className={styles.mobileLink}
              onClick={() => setMenuOpen(false)}>
              {label}
            </Link>
          ))}
          <Link
            href="/kontakt"
            className={styles.mobileCta}
            onClick={() => setMenuOpen(false)}>
            Kontakt
          </Link>
        </div>
      </nav>
    </header>
  );
}
