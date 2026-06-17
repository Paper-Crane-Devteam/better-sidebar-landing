interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo · Zaha Hadid System
 * 流体有机形态 — 曲线边框、渐变发光、无直线
 */
export default function Logo({ size = 32, className }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Better Sidebar logo"
      role="img"
    >
      <defs>
        <linearGradient id="logoGrad" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" stopColor="#06b6d4" />
          <stop offset="50%" stopColor="#8b5cf6" />
          <stop offset="100%" stopColor="#ec4899" />
        </linearGradient>
        <linearGradient id="sideGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#1a1e28" />
          <stop offset="100%" stopColor="#0b0d11" />
        </linearGradient>
      </defs>
      {/* Outer organic shape */}
      <rect
        x="4"
        y="6"
        width="56"
        height="52"
        rx="16"
        fill="#12151c"
        stroke="url(#logoGrad)"
        strokeWidth="1.5"
        strokeOpacity="0.5"
      />
      {/* Sidebar fluid edge */}
      <path
        d="M4 22 L4 6 Q4 6 20 6 L20 6 Q22 32 20 58 L4 58 Q4 58 4 42 Z"
        fill="url(#sideGrad)"
      />
      {/* Sidebar glow line */}
      <path
        d="M20 6 Q22 32 20 58"
        stroke="url(#logoGrad)"
        strokeWidth="1"
        opacity="0.6"
      />
      {/* Active item */}
      <rect x="8" y="18" width="10" height="4" rx="2" fill="#8b5cf6" opacity="0.8" />
      {/* List items */}
      <rect x="9" y="26" width="8" height="2" rx="1" fill="white" opacity="0.15" />
      <rect x="9" y="31" width="6" height="2" rx="1" fill="white" opacity="0.1" />
      <rect x="9" y="36" width="9" height="2" rx="1" fill="white" opacity="0.1" />
      {/* Content lines */}
      <rect x="26" y="14" width="28" height="3" rx="1.5" fill="white" opacity="0.06" />
      <rect x="26" y="21" width="22" height="3" rx="1.5" fill="white" opacity="0.06" />
      <rect x="26" y="28" width="26" height="3" rx="1.5" fill="white" opacity="0.06" />
      <rect x="26" y="35" width="18" height="3" rx="1.5" fill="white" opacity="0.06" />
      <rect x="26" y="42" width="24" height="3" rx="1.5" fill="white" opacity="0.06" />
      <rect x="26" y="49" width="20" height="3" rx="1.5" fill="white" opacity="0.06" />
    </svg>
  );
}
