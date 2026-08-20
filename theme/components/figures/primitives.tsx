import type { CSSProperties, ReactNode } from 'react';

/**
 * Figure Primitives · Paper Crane Dev v2.0
 *
 * 产品界面用 HTML 复刻，不用光栅截图。
 * 硬性约束：图版必须结构忠实 —— 只呈现产品中真实存在的界面与数据流。
 *
 * 共用原语保证六个图版看起来出自同一套图纸。
 */

/* ─── Figure shell · 带 mono 标题条的卡纸 ──────────────────────────── */

export interface FigureFrameProps {
  /** mono 标题条左侧的图版编号，如 "FIG.01" */
  index?: string;
  /** mono 标题条文案 */
  label: string;
  /** 右上角元数据 */
  meta?: string;
  children: ReactNode;
  style?: CSSProperties;
  className?: string;
}

export function FigureFrame({
  index,
  label,
  meta,
  children,
  style,
  className,
}: FigureFrameProps) {
  return (
    <figure
      className={className}
      style={{
        margin: 0,
        background: 'var(--paper-2)',
        borderRadius: 'var(--radius)',
        overflow: 'hidden',
        ...style,
      }}
    >
      {/* 标题条 — 深一级纸色，取代边框 */}
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: 'var(--space-sm)',
          padding: '10px var(--space-sm)',
          background: 'var(--paper-3)',
          fontFamily: 'var(--font-mono)',
          fontSize: '0.62rem',
          fontWeight: 500,
          letterSpacing: '0.16em',
          textTransform: 'uppercase',
          color: 'var(--ink-2)',
        }}
      >
        <span style={{ display: 'inline-flex', gap: '10px' }}>
          {index && <span style={{ color: 'var(--ink-3)' }}>{index}</span>}
          <span>{label}</span>
        </span>
        {meta && <span style={{ color: 'var(--ink-3)' }}>{meta}</span>}
      </div>

      <div style={{ padding: 'var(--space-sm)' }}>{children}</div>
    </figure>
  );
}

/* ─── mono 文本原语 ────────────────────────────────────────────────── */

export function Mono({
  children,
  size = 0.72,
  color = 'var(--ink-1)',
  dim,
  upper,
  track,
  weight = 400,
  style,
}: {
  children: ReactNode;
  size?: number;
  color?: string;
  dim?: boolean;
  upper?: boolean;
  track?: number;
  weight?: number;
  style?: CSSProperties;
}) {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontSize: `${size}rem`,
        fontWeight: weight,
        color: dim ? 'var(--ink-3)' : color,
        letterSpacing: track !== undefined ? `${track}em` : upper ? '0.12em' : '0.01em',
        textTransform: upper ? 'uppercase' : 'none',
        ...style,
      }}
    >
      {children}
    </span>
  );
}

/** 图版内的行 — hover 时进入 paper-0，模拟"浮起的纸片" */
export function FigureRow({
  children,
  active,
  indent = 0,
  style,
}: {
  children: ReactNode;
  active?: boolean;
  indent?: number;
  style?: CSSProperties;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        padding: `5px var(--space-xs)`,
        paddingLeft: `calc(var(--space-xs) + ${indent * 16}px)`,
        background: active ? 'var(--paper-0)' : 'transparent',
        borderLeft: active ? '2px solid var(--ink-1)' : '2px solid transparent',
        borderRadius: 'var(--radius)',
        ...style,
      }}
    >
      {children}
    </div>
  );
}

/** 色点 — 用于如实呈现文件夹/标签的自定义颜色 */
export function Dot({ color, size = 7 }: { color: string; size?: number }) {
  return (
    <span
      aria-hidden="true"
      style={{
        flex: '0 0 auto',
        width: `${size}px`,
        height: `${size}px`,
        background: color,
        borderRadius: '1px',
      }}
    />
  );
}

/** 标签胶片 — 直角，不是胶囊 */
export function Chip({
  children,
  color,
  deep,
}: {
  children: ReactNode;
  color?: string;
  deep?: boolean;
}) {
  return (
    <span
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '6px',
        padding: '3px 8px',
        background: deep ? 'var(--paper-3)' : 'var(--paper-0)',
        borderRadius: 'var(--radius)',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.64rem',
        letterSpacing: '0.06em',
        color: 'var(--ink-2)',
        whiteSpace: 'nowrap',
      }}
    >
      {color && <Dot color={color} size={6} />}
      {children}
    </span>
  );
}

/** 图版内的输入槽 */
export function FigureInput({
  value,
  placeholder,
  glow,
}: {
  value?: string;
  placeholder?: string;
  glow?: boolean;
}) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        gap: 'var(--space-xs)',
        padding: '7px var(--space-xs)',
        background: 'var(--paper-0)',
        borderRadius: 'var(--radius)',
        boxShadow: glow ? 'var(--shadow-ai-glow-sm)' : 'none',
      }}
    >
      <Mono size={0.68} dim>
        &gt;
      </Mono>
      <Mono size={0.7} color={value ? 'var(--ink-1)' : 'var(--ink-3)'}>
        {value ?? placeholder}
      </Mono>
      {value && (
        <span
          aria-hidden="true"
          style={{
            width: '1px',
            height: '11px',
            background: 'var(--ink-2)',
            marginLeft: '1px',
          }}
        />
      )}
    </div>
  );
}

/** 图版底部的统计条 */
export function FigureFooter({ items }: { items: string[] }) {
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        gap: '10px',
        marginTop: 'var(--space-sm)',
        paddingTop: 'var(--space-xs)',
      }}
    >
      {items.map((item, i) => (
        <span key={item} style={{ display: 'inline-flex', gap: '10px' }}>
          {i > 0 && (
            <Mono size={0.6} dim>
              ·
            </Mono>
          )}
          <Mono size={0.6} dim upper>
            {item}
          </Mono>
        </span>
      ))}
    </div>
  );
}

/** 关键词命中高亮 — 哑光纸片，不发光 */
export function Hit({ children }: { children: ReactNode }) {
  return (
    <span
      style={{
        background: 'var(--paper-3)',
        color: 'var(--ink-1)',
        borderRadius: '1px',
        padding: '0 2px',
      }}
    >
      {children}
    </span>
  );
}
