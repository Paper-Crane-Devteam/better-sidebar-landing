interface LogoProps {
  size?: number;
  className?: string;
  /** 单色墨迹，默认取主墨色 */
  color?: string;
}

/**
 * Logo · Paper Crane Dev v2.0
 *
 * 折纸方块：一张纸，右上角被折起，内部两道折痕。
 * 单色、直角、无渐变、无阴影 —— 形状简单到可以手写 SVG 而不显粗糙。
 * 左侧竖列的三段短线暗示 sidebar 的列表结构。
 */
export default function Logo({ size = 28, className, color = 'var(--ink-1)' }: LogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-label="Better Sidebar"
      role="img"
    >
      {/* 纸张轮廓 —— 右上角折角缺口 */}
      <path
        d="M3 3 H22 L29 10 V29 H3 Z"
        stroke={color}
        strokeWidth="1.25"
        strokeLinejoin="miter"
      />
      {/* 折起的角 */}
      <path d="M22 3 V10 H29" stroke={color} strokeWidth="1.25" strokeLinejoin="miter" />

      {/* 折痕：分出 sidebar 的那一折 */}
      <path d="M12 3 V29" stroke={color} strokeWidth="1.25" opacity="0.5" />

      {/* sidebar 列表结构 */}
      <path d="M6 12 H9" stroke={color} strokeWidth="1.25" />
      <path d="M6 16 H9" stroke={color} strokeWidth="1.25" opacity="0.55" />
      <path d="M6 20 H9" stroke={color} strokeWidth="1.25" opacity="0.3" />
    </svg>
  );
}
