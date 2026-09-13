import type { CSSProperties, ReactNode } from 'react';

/**
 * Section Primitives · Paper Crane Dev v2.0
 * 统一章节节奏：mono kicker → display 标题 → text 副文
 */

export const EASE = [0.4, 0, 0.2, 1] as const;

/** 入场动画：位移上限 8px */
export const rise = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: EASE } },
};

export const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

export const CHROME_URL =
  'https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj';
export const FIREFOX_URL =
  'https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio';
export const GITHUB_URL =
  'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio';
export const DISCORD_URL = 'https://discord.gg/FRzesxaGAx';

/* ─── Section shell ────────────────────────────────────────────────── */

/** 折痕照片铺满整段时的上下渐隐，避免段落交界处出现硬图片边 */
const CREASE_FADE =
  'linear-gradient(to bottom, transparent 0%, black 14%, black 86%, transparent 100%)';

export function Section({
  id,
  children,
  tone = 'paper-1',
  tight,
  /** 整段铺折痕照片。每段用不同的 objectPosition，避免读成重复的墙纸 */
  crease,
  creasePosition = 'center',
  creaseOpacity = 0.55,
  style,
}: {
  id?: string;
  children: ReactNode;
  tone?: 'paper-1' | 'paper-2';
  tight?: boolean;
  crease?: boolean;
  creasePosition?: string;
  creaseOpacity?: number;
  style?: CSSProperties;
}) {
  return (
    <section
      id={id}
      style={{
        position: 'relative',
        overflow: 'hidden',
        background: `var(--${tone})`,
        padding: tight ? 'var(--space-lg) 24px' : 'var(--space-xl) 24px',
        ...style,
      }}
    >
      {crease && (
        <img
          src="/better-sidebar/images/paper-crease.webp"
          alt=""
          aria-hidden="true"
          loading="lazy"
          decoding="async"
          style={{
            position: 'absolute',
            inset: 0,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            objectPosition: creasePosition,
            opacity: creaseOpacity,
            maskImage: CREASE_FADE,
            WebkitMaskImage: CREASE_FADE,
            pointerEvents: 'none',
          }}
        />
      )}
      <div
        style={{
          position: 'relative',
          zIndex: 1,
          maxWidth: 'var(--content-max)',
          margin: '0 auto',
        }}
      >
        {children}
      </div>
    </section>
  );
}

/** mono 章节编号 + 名称，如 `02 / DEMO` */
export function Kicker({ index, children }: { index?: string; children: ReactNode }) {
  return (
    <div
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.66rem',
        fontWeight: 500,
        letterSpacing: '0.2em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)',
        marginBottom: 'var(--space-sm)',
      }}
    >
      {index && <span>{index}&nbsp;&nbsp;/&nbsp;&nbsp;</span>}
      {children}
    </div>
  );
}

export function SectionTitle({
  children,
  size = 'md',
  style,
}: {
  children: ReactNode;
  size?: 'md' | 'lg';
  style?: CSSProperties;
}) {
  return (
    <h2
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 700,
        fontSize: size === 'lg' ? 'clamp(2rem, 4.4vw, 3.2rem)' : 'clamp(1.7rem, 3vw, 2.4rem)',
        lineHeight: 1.14,
        letterSpacing: '-0.02em',
        color: 'var(--ink-1)',
        margin: 0,
        ...style,
      }}
    >
      {children}
    </h2>
  );
}

export function Lede({
  children,
  style,
}: {
  children: ReactNode;
  style?: CSSProperties;
}) {
  return (
    <p
      style={{
        fontFamily: 'var(--font-text)',
        fontSize: '1rem',
        lineHeight: 1.75,
        color: 'var(--ink-2)',
        maxWidth: '58ch',
        margin: 'var(--space-sm) 0 0',
        ...style,
      }}
    >
      {children}
    </p>
  );
}

/* ─── Controls · CLI 化文本 ────────────────────────────────────────── */

/**
 * CLI 化按钮。
 *
 * variant:
 *  - seal      朱红印章。**只允许用于"安装插件"这一个动作**，全站的色彩爆点
 *  - primary   墨色实底
 *  - secondary 纸色
 */
export function MonoButton({
  href,
  children,
  variant = 'primary',
  newTab = true,
  large,
}: {
  href: string;
  children: string;
  variant?: 'seal' | 'primary' | 'secondary';
  newTab?: boolean;
  large?: boolean;
}) {
  const seal = variant === 'seal';
  const inkFace = seal || variant === 'primary';

  const face = (
    <a
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      className={seal ? 'seal-cta__face' : 'glow-on-hover'}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        padding: large ? '16px 28px' : '13px 22px',
        background: inkFace ? 'var(--ink-1)' : 'var(--paper-2)',
        color: inkFace ? 'var(--paper-0)' : 'var(--ink-1)',
        borderRadius: 'var(--radius)',
        fontFamily: 'var(--font-mono)',
        fontSize: large ? '0.78rem' : '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.16em',
        textTransform: 'uppercase',
        textDecoration: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      [&nbsp;{children}&nbsp;]
    </a>
  );

  return seal ? <span className="seal-cta">{face}</span> : face;
}

/** `> TEXT` 形式的链接 */
export function MonoLink({
  href,
  children,
  newTab = true,
}: {
  href: string;
  children: string;
  newTab?: boolean;
}) {
  return (
    <a
      href={href}
      {...(newTab ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: '0.72rem',
        fontWeight: 500,
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-1)',
        textDecoration: 'none',
        transition: 'color var(--duration) var(--ease)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.color = 'var(--glow-b)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.color = 'var(--ink-1)';
      }}
    >
      &gt;&nbsp;{children}
    </a>
  );
}

/** mono 元数据行，元素之间用 · 分隔 */
export function MetaRow({ items, style }: { items: string[]; style?: CSSProperties }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '12px',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.62rem',
        fontWeight: 500,
        letterSpacing: '0.18em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)',
        ...style,
      }}
    >
      {items.map((item, i) => (
        <span key={item} style={{ display: 'inline-flex', gap: '12px' }}>
          {i > 0 && <span aria-hidden="true">·</span>}
          <span>{item}</span>
        </span>
      ))}
    </div>
  );
}

/** 刻度尺 — 取代满屏网格的编辑式装饰 */
export function TickRule({ tall, style }: { tall?: boolean; style?: CSSProperties }) {
  return (
    <div
      aria-hidden="true"
      className={tall ? 'tick-rule-tall' : 'tick-rule'}
      style={style}
    />
  );
}
