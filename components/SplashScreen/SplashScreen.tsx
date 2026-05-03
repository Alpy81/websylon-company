"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import styles from "./SplashScreen.module.css";

type SplashState = "visible" | "hiding" | "hidden";

function getInitialState(): SplashState {
  if (typeof window === "undefined") return "visible";
  if (
    process.env.NODE_ENV !== "development" &&
    sessionStorage.getItem("splashSeen")
  ) {
    return "hidden";
  }
  return "visible";
}

const topWords = ["Professionell", "auftreten", "mit", ".."];
const bottomWords = ["Webseiten,", "die", "beeindrucken", ".."];

export default function SplashScreen() {
  const [state, setState] = useState<SplashState>(getInitialState);
  const timerRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const dismiss = () => {
    if (process.env.NODE_ENV !== "development") {
      sessionStorage.setItem("splashSeen", "true");
    }
    setState("hiding");
  };

  useEffect(() => {
    // Gesamtdauer: letztes Wort unten erscheint bei 4.05s + 0.7s Animation = ~4.8s
    timerRef.current = setTimeout(() => {
      if (process.env.NODE_ENV !== "development") {
        sessionStorage.setItem("splashSeen", "true");
      }
      setState("hiding");
    }, 5200);

    return () => {
      if (timerRef.current) clearTimeout(timerRef.current);
    };
  }, []);

  const handleTransitionEnd = () => {
    if (state === "hiding") setState("hidden");
  };

  if (state === "hidden") return null;

  return (
    <div
      className={`${styles.splash} ${
        state === "hiding" ? styles["splash--hidden"] : ""
      }`}
      onTransitionEnd={handleTransitionEnd}>
      {/* Text oben – von links */}
      <div className={styles.textTop}>
        {topWords.map((word, i) => (
          <span key={i} className={styles.word}>
            {word}
          </span>
        ))}
      </div>

      {/* Logo mit 360° Animation */}
      <div className={styles.logoWrapper}>
        <Image
          src="/logos/home-logo.png"
          alt="Websylon"
          width={220}
          height={220}
          className={styles.logo}
          priority
        />
      </div>

      {/* Text unten – von rechts */}
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
