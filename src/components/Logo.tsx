interface LogoProps {
  size?: number;
  className?: string;
}

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
      {/* Browser window frame */}
      <rect
        x="4"
        y="8"
        width="56"
        height="48"
        rx="6"
        fill="#fafafa"
        stroke="#d4d4d8"
        strokeWidth="2"
      />

      {/* Top bar */}
      <rect x="4" y="8" width="56" height="10" rx="6" fill="#f4f4f5" />
      <rect x="4" y="14" width="56" height="4" fill="#f4f4f5" />

      {/* Top bar dots */}
      <circle cx="13" cy="13" r="2" fill="#d4d4d8" />
      <circle cx="20" cy="13" r="2" fill="#d4d4d8" />
      <circle cx="27" cy="13" r="2" fill="#d4d4d8" />

      {/* Sidebar panel */}
      <rect x="4" y="18" width="22" height="38" fill="#18181b" rx="0" />
      <rect
        x="4"
        y="50"
        width="22"
        height="6"
        rx="6"
        fill="#18181b"
      />

      {/* Sidebar folder item 1 — active with accent */}
      <rect x="8" y="23" width="14" height="3" rx="1.5" fill="#4f7fc0" />

      {/* Sidebar items — organized content lines */}
      <rect x="10" y="29" width="10" height="2" rx="1" fill="#52525b" />
      <rect x="10" y="33" width="8" height="2" rx="1" fill="#52525b" />

      {/* Sidebar folder item 2 */}
      <rect x="8" y="39" width="14" height="3" rx="1.5" fill="#3f3f46" />

      {/* Sidebar sub-items */}
      <rect x="10" y="45" width="10" height="2" rx="1" fill="#52525b" />

      {/* Main content area — faint lines representing chat/content */}
      <rect x="30" y="22" width="24" height="2.5" rx="1.25" fill="#e4e4e7" />
      <rect x="30" y="28" width="20" height="2.5" rx="1.25" fill="#e4e4e7" />
      <rect x="30" y="34" width="22" height="2.5" rx="1.25" fill="#e4e4e7" />
      <rect x="30" y="40" width="18" height="2.5" rx="1.25" fill="#e4e4e7" />
      <rect x="30" y="46" width="24" height="2.5" rx="1.25" fill="#e4e4e7" />

      {/* Accent tag indicator on sidebar */}
      <circle cx="22" cy="40.5" r="1.5" fill="#4f7fc0" />
    </svg>
  );
}
