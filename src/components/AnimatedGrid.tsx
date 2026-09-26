export default function AnimatedGrid() {
  return (
    <div
      className="absolute inset-0 overflow-hidden pointer-events-none"
      aria-hidden="true"
    >
      {/* Main Grid */}
      <div className="absolute inset-0 animated-grid" />

      {/* Soft ambient glow */}
      <div className="absolute inset-0 animated-grid-glow" />

      {/* Moving circuit paths */}
      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 800"
        preserveAspectRatio="none"
      >
        {/* Horizontal paths */}
        <path
          className="grid-path"
          d="M0 180 H280 V300 H520"
        />

        <path
          className="grid-path"
          d="M1440 250 H1120 V390 H900"
        />

        <path
          className="grid-path"
          d="M0 620 H220 V500 H460"
        />

        <path
          className="grid-path"
          d="M1440 600 H1180 V480 H980"
        />

        {/* Vertical / connected paths */}
        <path
          className="grid-path"
          d="M360 0 V180 H280"
        />

        <path
          className="grid-path"
          d="M1080 0 V250 H1120"
        />

        <path
          className="grid-path"
          d="M720 800 V620 H900 V390"
        />

        {/* Moving light particles */}
        <circle r="3" className="grid-particle">
          <animateMotion
            dur="7s"
            repeatCount="indefinite"
            path="M0 180 H280 V300 H520"
          />
        </circle>

        <circle r="2.5" className="grid-particle">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            begin="2s"
            path="M1440 250 H1120 V390 H900"
          />
        </circle>

        <circle r="3" className="grid-particle">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            begin="1s"
            path="M0 620 H220 V500 H460"
          />
        </circle>

        <circle r="2.5" className="grid-particle">
          <animateMotion
            dur="10s"
            repeatCount="indefinite"
            begin="3s"
            path="M1440 600 H1180 V480 H980"
          />
        </circle>

        <circle r="3" className="grid-particle">
          <animateMotion
            dur="8s"
            repeatCount="indefinite"
            begin="1.5s"
            path="M360 0 V180 H280"
          />
        </circle>

        <circle r="2.5" className="grid-particle">
          <animateMotion
            dur="9s"
            repeatCount="indefinite"
            begin="4s"
            path="M1080 0 V250 H1120"
          />
        </circle>

        <circle r="3" className="grid-particle">
          <animateMotion
            dur="11s"
            repeatCount="indefinite"
            begin="2s"
            path="M720 800 V620 H900 V390"
          />
        </circle>
      </svg>

      {/* Grid intersections */}
      <div className="grid-dot grid-dot-1" />
      <div className="grid-dot grid-dot-2" />
      <div className="grid-dot grid-dot-3" />
      <div className="grid-dot grid-dot-4" />
      <div className="grid-dot grid-dot-5" />
      <div className="grid-dot grid-dot-6" />
    </div>
  );
}