"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

type SplashState = "visible" | "hiding" | "hidden";

const topWords = ["Professionell", "auftreten", "mit", ".."];
const bottomWords = ["Webseiten,", "die", "beindrucken", ".."];

const particles = [
  { size: 6, top: "15%", left: "10%", duration: 8, delay: 0.5 },
  { size: 4, top: "25%", left: "80%", duration: 10, delay: 1.2 },
  { size: 8, top: "60%", left: "15%", duration: 9, delay: 0.8 },
  { size: 5, top: "70%", left: "75%", duration: 7, delay: 1.5 },
  { size: 4, top: "40%", left: "90%", duration: 11, delay: 0.3 },
  { size: 6, top: "80%", left: "50%", duration: 8, delay: 2.0 },
  { size: 3, top: "20%", left: "45%", duration: 12, delay: 1.0 },
  { size: 7, top: "50%", left: "30%", duration: 9, delay: 0.6 },
  { size: 4, top: "85%", left: "85%", duration: 10, delay: 1.8 },
  { size: 5, top: "35%", left: "60%", duration: 8, delay: 2.5 },
];

export default function SplashScreen() {
  const [state, setState] = useState<SplashState>("hidden");
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = () => {
    document.documentElement.removeAttribute("data-splash");
    sessionStorage.setItem("splashSeen", "true");
    setState("hiding");
    setTimeout(() => setState("hidden"), 700);
  };

  useEffect(() => {
    const seen = sessionStorage.getItem("splashSeen");
    if (seen) return;

    const raf = requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        // ← doppeltes RAF
        setState("visible");
      });
    });

    timerRef.current = setTimeout(dismiss, 7500);

    return () => {
      cancelAnimationFrame(raf);
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  if (state === "hidden") return null;

  return (
    <div
      className={`${styles.splash} ${
        state === "hiding" ? styles["splash--hidden"] : ""
      }`}>
      {particles.map((p, i) => (
        <span
          key={i}
          className={styles.particle}
          style={{
            width: p.size,
            height: p.size,
            top: p.top,
            left: p.left,
            animationDuration: `${p.duration}s`,
            animationDelay: `${p.delay}s`,
          }}
        />
      ))}

      <Image
        src="/images/symbol-transparent.png"
        alt=""
        width={120}
        height={120}
        className={styles.dotsTopRight}
        loading="eager"
      />

      <Image
        src="/images/symbol-transparent.png"
        alt=""
        width={120}
        height={120}
        className={styles.dotsBottomLeft}
        loading="eager"
      />

      <div className={styles.textTop}>
        {topWords.map((word, i) => (
          <span key={i} className={styles.word}>
            {word}
          </span>
        ))}
      </div>

      <div className={styles.logoWrapper}>
        <Image
          src="/logos/home-logo.png"
          alt="Websylon"
          width={300}
          height={300}
          className={styles.logo}
          priority
        />
      </div>

      <div className={styles.textBottom}>
        {bottomWords.map((word, i) => (
          <span key={i} className={styles.word}>
            {word}
          </span>
        ))}
      </div>

      <button
        className={styles.skip}
        onClick={dismiss}
        aria-label="Intro überspringen">
        Überspringen
      </button>
    </div>
  );
}
