import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';

export * from '@rspress/core/theme-original';

/**
 * Custom Layout — Kouthoofd / Teenage Engineering System
 *
 * Level 3 Layout Slots:
 * - beforeNavTitle: Industrial monospace brand mark
 * - bottom: Technical spec footer strip
 *
 * Minimal. Functional. Every pixel has a reason to exist.
 */
export function Layout() {
  return (
    <OriginalLayout
      beforeNavTitle={<NavBrand />}
      bottom={<TechFooter />}
    />
  );
}

/** Brand — monospace, uppercase, precise */
function NavBrand() {
  return (
    <span
      style={{
        fontFamily: 'var(--font-mono)',
        fontWeight: 600,
        fontSize: '0.7rem',
        color: 'var(--text-primary)',
        letterSpacing: '0.08em',
        textTransform: 'uppercase' as const,
        marginLeft: '6px',
      }}
    >
      Better_Sidebar
    </span>
  );
}

/** Footer — technical, minimal, datasheet feel */
function TechFooter() {
  return (
    <div
      style={{
        padding: '16px 0',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        fontWeight: 500,
        color: 'var(--text-tertiary)',
        textTransform: 'uppercase' as const,
        letterSpacing: '0.1em',
        borderTop: '1px solid var(--surface-muted)',
      }}
    >
      PAPER CRANE DEV · GPL-3.0 · 2024–{new Date().getFullYear()}
    </div>
  );
}
