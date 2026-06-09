import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';

export * from '@rspress/core/theme-original';

/**
 * Custom Layout — Celine Design System
 *
 * Uses Level 3 (Layout Slots) to inject:
 * - beforeNavTitle: Custom branded logo with display font
 * - bottom: Warm footer strip for doc pages
 *
 * We keep it minimal — slot injection only, no full ejection.
 */
export function Layout() {
  return (
    <OriginalLayout
      beforeNavTitle={<NavBrand />}
      bottom={<DocFooterStrip />}
    />
  );
}

/** Branded nav title — Playfair Display serif for the brand name */
function NavBrand() {
  return (
    <span
      style={{
        fontFamily: 'var(--font-display)',
        fontWeight: 500,
        fontSize: '1.05rem',
        color: 'var(--text-primary)',
        letterSpacing: '-0.02em',
        marginLeft: '4px',
      }}
    >
      Better Sidebar
    </span>
  );
}

/** Minimal doc footer strip — warm, subtle */
function DocFooterStrip() {
  return (
    <div
      style={{
        padding: '24px 0',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: '0.75rem',
        color: 'var(--text-tertiary)',
        borderTop: '1px solid var(--surface-muted)',
      }}
    >
      Made with care by Paper Crane · Open Source
    </div>
  );
}
