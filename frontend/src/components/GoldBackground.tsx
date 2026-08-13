export default function GoldBackground() {
  return (
    <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden bg-ink-50 dark:bg-ink-950">
      {/* Soft ambient glows shared across every section */}
      <div className="absolute -top-24 right-[-10%] h-[32rem] w-[32rem] rounded-full bg-gold-400/25 blur-[130px] dark:bg-gold-500/15" />
      <div className="absolute top-[38%] left-[-12%] h-[26rem] w-[26rem] rounded-full bg-gold-300/15 blur-[120px] dark:bg-gold-400/8" />
      <div className="absolute bottom-[-10%] right-[8%] h-[30rem] w-[30rem] rounded-full bg-gold-500/15 blur-[130px] dark:bg-gold-500/10" />
      <div className="absolute bottom-[10%] left-[15%] h-[18rem] w-[18rem] rounded-full bg-gold-300/10 blur-[100px]" />

      {/* Flowing gold wave lines */}
      <svg
        className="absolute inset-0 h-full w-full opacity-70 dark:opacity-90"
        viewBox="0 0 1500 1000"
        preserveAspectRatio="xMidYMid slice"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <linearGradient id="waveGold1" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-gold-400)" stopOpacity="0" />
            <stop offset="45%" stopColor="var(--color-gold-400)" stopOpacity="0.5" />
            <stop offset="100%" stopColor="var(--color-gold-300)" stopOpacity="0" />
          </linearGradient>
          <linearGradient id="waveGold2" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="var(--color-gold-500)" stopOpacity="0" />
            <stop offset="55%" stopColor="var(--color-gold-500)" stopOpacity="0.4" />
            <stop offset="100%" stopColor="var(--color-gold-400)" stopOpacity="0" />
          </linearGradient>
        </defs>

        <g className="animate-wave-drift-slow">
          <path
            d="M-200 120 C 150 40, 350 200, 700 120 S 1250 20, 1700 140"
            fill="none"
            stroke="url(#waveGold1)"
            strokeWidth="2"
          />
          <path
            d="M-200 190 C 200 260, 400 90, 780 190 S 1300 300, 1700 210"
            fill="none"
            stroke="url(#waveGold2)"
            strokeWidth="1.5"
          />
        </g>

        <g className="animate-wave-drift">
          <path
            d="M-200 560 C 150 480, 380 660, 750 560 S 1300 460, 1700 580"
            fill="none"
            stroke="url(#waveGold1)"
            strokeWidth="2"
          />
          <path
            d="M-200 630 C 220 700, 420 520, 800 630 S 1320 740, 1700 650"
            fill="none"
            stroke="url(#waveGold2)"
            strokeWidth="1.5"
          />
        </g>

        <g className="animate-wave-drift-slow" style={{ animationDelay: "-6s" }}>
          <path
            d="M-200 900 C 180 830, 400 990, 760 900 S 1280 800, 1700 920"
            fill="none"
            stroke="url(#waveGold1)"
            strokeWidth="2.5"
          />
        </g>
      </svg>

      {/* Fine scattered gold dust */}
      <div className="absolute inset-0">
        <span className="absolute left-[10%] top-[12%] h-1 w-1 rounded-full bg-gold-300/70" />
        <span className="absolute left-[75%] top-[8%] h-1.5 w-1.5 rounded-full bg-gold-400/60" />
        <span className="absolute left-[88%] top-[45%] h-1 w-1 rounded-full bg-gold-300/50" />
        <span className="absolute left-[20%] top-[65%] h-1 w-1 rounded-full bg-gold-400/50" />
        <span className="absolute left-[55%] top-[80%] h-1.5 w-1.5 rounded-full bg-gold-300/60" />
        <span className="absolute left-[35%] top-[30%] h-1 w-1 rounded-full bg-gold-400/40" />
      </div>
    </div>
  );
}
