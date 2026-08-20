/**
 * 折痕带 (Crease Band)
 *
 * 全站唯一的摄影素材：一张米色纸上的柔和折痕。
 * 给"折叠的物理阴影"这个核心概念一个字面上的瞬间 —— 这是 CSS 做不出来的东西。
 *
 * 源图 3:2 (1536×1024)，这里裁成扁横带；上下用 mask 渐隐，
 * 避免与纸色背景之间出现硬接缝。
 */
export default function CreaseBand({
  height = 200,
  label,
}: {
  height?: number;
  /** 可选的 mono 旁注，压在折痕上 */
  label?: string;
}) {
  const fade =
    'linear-gradient(to bottom, transparent 0%, black 22%, black 78%, transparent 100%)';

  return (
    <div
      aria-hidden="true"
      style={{
        position: 'relative',
        width: '100%',
        height: `${height}px`,
        overflow: 'hidden',
        background: 'var(--paper-1)',
      }}
    >
      <img
        src="/better-sidebar/images/paper-crease.png"
        alt=""
        loading="lazy"
        decoding="async"
        style={{
          position: 'absolute',
          inset: 0,
          width: '100%',
          height: '100%',
          objectFit: 'cover',
          objectPosition: 'center 40%',
          maskImage: fade,
          WebkitMaskImage: fade,
        }}
      />
      {label && (
        <span
          style={{
            position: 'absolute',
            left: '50%',
            top: '50%',
            transform: 'translate(-50%, -50%)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.6rem',
            fontWeight: 500,
            letterSpacing: '0.32em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
            whiteSpace: 'nowrap',
          }}
        >
          {label}
        </span>
      )}
    </div>
  );
}
