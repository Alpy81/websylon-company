import type { CSSProperties } from "react";
import styles from "./HeroSymbol.module.css";

/* ── Daten: 25 Punkte der Raute (|i| + |j| ≤ 3) ── */
const OPACITY = [1.0, 0.82, 0.66, 0.52, 0.39, 0.27, 0.15]; // je Spalte, links → rechts
const RADIUS = [0.4, 0.41, 0.43, 0.44, 0.46, 0.47, 0.47]; // Radius in Rastereinheiten

const dots: { i: number; j: number; col: number; layer: number }[] = [];
for (let i = -3; i <= 3; i++) {
  for (let j = -3; j <= 3; j++) {
    if (Math.abs(i) + Math.abs(j) <= 3) {
      // Schachbrett-Tiefe: abwechselnd leicht vor / hinter der Mittelebene
      const layer = (((i + j) % 2) + 2) % 2 === 0 ? 1 : -1;
      dots.push({ i, j, col: i + 3, layer });
    }
  }
}

/* ── Funkel-Sterne rund um das x (Position in %) ── */
const sparkles = [
  { x: 4, y: 6, s: 14, d: "0s" },
  { x: 92, y: 20, s: 10, d: "0.9s" },
  { x: 88, y: 88, s: 13, d: "1.7s" },
  { x: 6, y: 80, s: 9, d: "2.4s" },
  { x: 50, y: -4, s: 8, d: "1.3s" },
];

const X_PATH =
  "M50.2 49.1 77.5 87.5Q78.6 89.1 78.6 91.1Q78.6 94.5 73.7 97.9Q70.7 100 67.9 100Q66.3 100 64.6 98.9Q62.9 97.7 61.4 95.9L39.2 64.7Q36.8 68.1 34 72.1Q31.1 76.2 28.2 80.3Q25.3 84.4 22.4 88.5Q19.6 92.5 17.2 95.9Q14.1 100 10.5 100Q7.5 100 4.7 97.9Q2.4 96.3 1.2 94.7Q0 93.2 0 91.2Q0 89.3 1.3 87.5L28.2 49.1Q22.2 40.5 15.6 31.1Q8.9 21.7 2.9 13Q2.3 11.8 1.7 10.5Q1.1 9.1 1.1 8.3Q1.1 4.9 5.7 1.9H5.5Q7.1 1.1 8.5 0.6Q9.9 0 11.2 0Q15.6 0 18.8 4.7L39.2 33.7L59.6 4.7Q63 0 67.3 0Q68.7 0 70 0.6Q71.3 1.1 72.9 1.9H72.8Q77.5 4.9 77.5 8.3Q77.5 10.2 75.5 13Z";

function XFace({ back = false }: { back?: boolean }) {
  const id = back ? "b" : "f";
  return (
    <div
      className={`${styles.face} ${back ? styles.faceBack : styles.faceFront}`}
      aria-hidden="true"
    >
      <svg viewBox="0 0 78.6 100" className={styles.x} focusable="false">
        <defs>
          {/* Eis-Kristall-Verlauf */}
          <linearGradient id={`hs-g-${id}`} x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" stopColor="#e0fff2" />
            <stop offset="0.35" stopColor="#a6f5cb" />
            <stop offset="0.7" stopColor="#5ccf9f" />
            <stop offset="1" stopColor="#9ff2c8" />
          </linearGradient>
          {/* Glanz oben */}
          <linearGradient id={`hs-gl-${id}`} x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#c2ffe4" stopOpacity="0.6" />
            <stop offset="0.5" stopColor="#c2ffe4" stopOpacity="0" />
          </linearGradient>
          {/* wandernder Lichtreflex */}
          <linearGradient id={`hs-sh-${id}`} x1="0" y1="0" x2="1" y2="0">
            <stop offset="0" stopColor="#d2ffee" stopOpacity="0" />
            <stop offset="0.5" stopColor="#d2ffee" stopOpacity="0.85" />
            <stop offset="1" stopColor="#d2ffee" stopOpacity="0" />
          </linearGradient>
          <clipPath id={`hs-c-${id}`}>
            <path d={X_PATH} />
          </clipPath>
        </defs>

        <path className={styles.xPath} fill={`url(#hs-g-${id})`} d={X_PATH} />

        <g clipPath={`url(#hs-c-${id})`}>
          <rect
            x="0"
            y="0"
            width="78.6"
            height="50"
            fill={`url(#hs-gl-${id})`}
          />
          {/* Kristall-Kanten entlang der beiden Arme */}
          <line
            x1="7"
            y1="3"
            x2="72"
            y2="97"
            stroke="#d2ffee"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          <line
            x1="9.6"
            y1="3"
            x2="74.6"
            y2="97"
            stroke="#04583a"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          <line
            x1="72"
            y1="3"
            x2="7"
            y2="97"
            stroke="#d2ffee"
            strokeOpacity="0.55"
            strokeWidth="1.2"
          />
          <line
            x1="74.6"
            y1="3"
            x2="9.6"
            y2="97"
            stroke="#04583a"
            strokeOpacity="0.45"
            strokeWidth="1.2"
          />
          <g transform="rotate(25 39.3 50)">
            <rect
              className={styles.shine}
              x="-30"
              y="-30"
              width="26"
              height="160"
              fill={`url(#hs-sh-${id})`}
            />
          </g>
        </g>
      </svg>
      {sparkles.map((sp, k) => (
        <svg
          key={k}
          viewBox="-1 -1 2 2"
          className={styles.sparkle}
          style={
            {
              left: `${sp.x}%`,
              top: `${sp.y}%`,
              width: sp.s,
              height: sp.s,
              animationDelay: sp.d,
            } as CSSProperties
          }
          focusable="false"
        >
          <path d="M0 -1C.1 -.1 .1 -.1 1 0C.1 .1 .1 .1 0 1C-.1 .1 -.1 .1 -1 0C-.1 -.1 -.1 -.1 0 -1Z" />
        </svg>
      ))}
    </div>
  );
}

export default function HeroSymbol() {
  return (
    <div
      className={styles.scene}
      role="img"
      aria-label="xeluvia Symbol – rotierende Punkte-Raute mit funkelndem x"
    >
      <div className={styles.object}>
        {dots.map(({ i, j, col, layer }) => (
          <span
            key={`${i}_${j}`}
            className={styles.dot}
            style={
              {
                "--i": i,
                "--j": j,
                "--d": RADIUS[col] * 2,
                "--o": OPACITY[col],
                "--z": layer,
              } as CSSProperties
            }
          />
        ))}
        <XFace />
        <XFace back />
      </div>
    </div>
  );
}
