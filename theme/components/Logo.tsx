interface LogoProps {
  size?: number;
  className?: string;
}

/**
 * Logo · Celine Design System
 * 暖色调 — 使用 surface-deep (#2c2a27) 替代纯黑，
 * 使用莫兰迪蓝替代冷蓝，整体温度感提升
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
      {/* Main container — warm pearl */}
      <rect
        x="4"
        y="8"
        width="56"
        height="48"
        rx="8"
        fill="#faf8f5"
        stroke="#eae6e0"
        strokeWidth="1.5"
      />
      {/* Title bar */}
      <rect x="4" y="8" width="56" height="10" rx="8" fill="#f5f2ed" />
      <rect x="4" y="14" width="56" height="4" fill="#f5f2ed" />
      {/* Window dots — warm */}
      <circle cx="13" cy="13" r="2" fill="#e4b49e" opacity="0.7" />
      <circle cx="20" cy="13" r="2" fill="#c9d4e2" opacity="0.7" />
      <circle cx="27" cy="13" r="2" fill="#eae6e0" opacity="0.7" />
      {/* Sidebar panel — warm charcoal */}
      <rect x="4" y="18" width="22" height="38" fill="#2c2a27" rx="0" />
      <rect x="4" y="50" width="22" height="6" rx="8" fill="#2c2a27" />
      {/* Sidebar active item — accent */}
      <rect x="8" y="23" width="14" height="3" rx="1.5" fill="#7b8ea8" />
      {/* Sidebar items */}
      <rect x="10" y="29" width="10" height="2" rx="1" fill="#6b6560" opacity="0.5" />
      <rect x="10" y="33" width="8" height="2" rx="1" fill="#6b6560" opacity="0.5" />
      {/* Sidebar folder */}
      <rect x="8" y="39" width="14" height="3" rx="1.5" fill="#3d3b37" />
      <rect x="10" y="45" width="10" height="2" rx="1" fill="#6b6560" opacity="0.5" />
      {/* Content lines */}
      <rect x="30" y="22" width="24" height="2.5" rx="1.25" fill="#eae6e0" />
      <rect x="30" y="28" width="20" height="2.5" rx="1.25" fill="#eae6e0" />
      <rect x="30" y="34" width="22" height="2.5" rx="1.25" fill="#eae6e0" />
      <rect x="30" y="40" width="18" height="2.5" rx="1.25" fill="#eae6e0" />
      <rect x="30" y="46" width="24" height="2.5" rx="1.25" fill="#eae6e0" />
      {/* Accent dot */}
      <circle cx="22" cy="40.5" r="1.5" fill="#627d9a" />
    </svg>
  );
}
