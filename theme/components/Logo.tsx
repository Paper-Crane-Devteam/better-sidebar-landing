interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo · Kouthoofd System
 * 工业制图风格 — 纯线描、无填充、硬边缘
 * 信号橙作为唯一彩色元素
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
      {/* Outer frame — hard rect */}
      <rect x="4" y="8" width="56" height="48" stroke="currentColor" strokeWidth="1.5" fill="none" />
      {/* Title bar line */}
      <line x1="4" y1="16" x2="60" y2="16" stroke="currentColor" strokeWidth="1" />
      {/* Window controls */}
      <circle cx="10" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="16" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
      <circle cx="22" cy="12" r="1.5" fill="none" stroke="currentColor" strokeWidth="1" />
      {/* Sidebar divider */}
      <line x1="24" y1="16" x2="24" y2="56" stroke="currentColor" strokeWidth="1" />
      {/* Sidebar active item — signal orange */}
      <rect x="6" y="20" width="16" height="4" fill="#ff4400" />
      {/* Sidebar items */}
      <rect x="6" y="28" width="12" height="2" fill="currentColor" opacity="0.3" />
      <rect x="6" y="34" width="10" height="2" fill="currentColor" opacity="0.3" />
      <rect x="6" y="40" width="14" height="2" fill="currentColor" opacity="0.3" />
      {/* Content lines */}
      <rect x="28" y="20" width="28" height="2" fill="currentColor" opacity="0.15" />
      <rect x="28" y="26" width="22" height="2" fill="currentColor" opacity="0.15" />
      <rect x="28" y="32" width="26" height="2" fill="currentColor" opacity="0.15" />
      <rect x="28" y="38" width="18" height="2" fill="currentColor" opacity="0.15" />
      <rect x="28" y="44" width="24" height="2" fill="currentColor" opacity="0.15" />
      <rect x="28" y="50" width="20" height="2" fill="currentColor" opacity="0.15" />
    </svg>
  );
}
