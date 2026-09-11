export default function HeroArt() {
  return (
    <svg
      className="hero-art"
      viewBox="0 0 520 560"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label="Decorative illustration of swirling night sky lines around a glowing crescent and a coffee cup, representing late-night study and the Java language"
    >
      <defs>
        <radialGradient id="glow" cx="50%" cy="42%" r="60%">
          <stop offset="0%" stopColor="#6d3fb8" stopOpacity="0.55" />
          <stop offset="100%" stopColor="#6d3fb8" stopOpacity="0" />
        </radialGradient>
        <linearGradient id="moonGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#f6d98a" />
          <stop offset="100%" stopColor="#e8ad3c" />
        </linearGradient>
        <linearGradient id="swirlGrad" x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#a98fe0" stopOpacity="0.7" />
          <stop offset="100%" stopColor="#5b8def" stopOpacity="0.25" />
        </linearGradient>
      </defs>

      <circle cx="260" cy="230" r="210" fill="url(#glow)" />

      {/* swirl lines, echoing the poster's wave motif */}
      <g stroke="url(#swirlGrad)" strokeWidth="1.4" fill="none" opacity="0.8">
        <path d="M20 120 C 140 60, 220 140, 180 240 S 320 380, 480 320" />
        <path d="M40 200 C 150 160, 200 240, 160 320 S 300 440, 470 400" />
        <path d="M0 320 C 120 300, 190 360, 150 420 S 280 500, 440 470" />
      </g>

      {/* crescent moon */}
      <g transform="translate(150,90)">
        <circle cx="60" cy="60" r="52" fill="url(#moonGrad)" />
        <circle cx="82" cy="46" r="52" fill="#0a0817" />
      </g>

      {/* stars */}
      {[
        [60, 60], [430, 90], [470, 240], [60, 340], [110, 430],
        [380, 430], [250, 40], [340, 150], [30, 220], [420, 340],
      ].map(([cx, cy], i) => (
        <circle key={i} cx={cx} cy={cy} r={i % 3 === 0 ? 2.6 : 1.6} fill="#f4f1fb" opacity={0.8} />
      ))}

      {/* small four-point sparkles like the poster */}
      {[[350, 70], [90, 260], [420, 400]].map(([x, y], i) => (
        <path
          key={i}
          d={`M${x} ${y - 9} L${x + 2.6} ${y - 2.6} L${x + 9} ${y} L${x + 2.6} ${y + 2.6} L${x} ${y + 9} L${x - 2.6} ${y + 2.6} L${x - 9} ${y} L${x - 2.6} ${y - 2.6} Z`}
          fill="#f0c15c"
        />
      ))}

      {/* coffee cup silhouette, nodding to Java */}
      <g transform="translate(205,290)" opacity="0.95">
        <path
          d="M10 40 h100 v55 a35 35 0 0 1-35 35 H45 a35 35 0 0 1-35-35 Z"
          stroke="#f4f1fb"
          strokeWidth="3"
        />
        <path
          d="M108 55 h18 a20 20 0 0 1 0 40 h-14"
          stroke="#f4f1fb"
          strokeWidth="3"
          fill="none"
        />
        <path
          d="M35 30 C 30 15, 45 15, 42 2 M55 30 C 50 12, 66 14, 62 -2 M75 30 C 70 15, 85 15, 82 2"
          stroke="#a98fe0"
          strokeWidth="2.4"
          strokeLinecap="round"
        />
      </g>
    </svg>
  );
}
