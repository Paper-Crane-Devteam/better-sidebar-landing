import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';

export * from '@rspress/core/theme-original';

/**
 * Custom Layout — Zaha Hadid / Parametric Fluidity
 *
 * Level 3 Layout Slots:
 * - beforeNavTitle: Gradient brand glow
 * - bottom: Ethereal footer strip
 */
export function Layout() {
  return (
    <OriginalLayout
      beforeNavTitle={<NavBrand />}
      bottom={<FluidFooter />}
    />
  );
}

/** Brand — logo + gradient text, clickable */
function NavBrand() {
  return (
    <a
      href="/better-sidebar/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '8px',
        textDecoration: 'none',
      }}
    >
      <img
        src="/better-sidebar/fav.png"
        alt=""
        style={{ width: '24px', height: '24px', borderRadius: '6px' }}
      />
      <span
        style={{
          fontFamily: 'var(--font-display)',
          fontWeight: 700,
          fontSize: '1rem',
          letterSpacing: '-0.03em',
          background: 'var(--gradient-aurora)',
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text',
        }}
      >
        Better Sidebar
      </span>
    </a>
  );
}

/** Footer — minimal, ethereal */
function FluidFooter() {
  return (
    <div
      style={{
        padding: '20px 0',
        textAlign: 'center',
        fontFamily: 'var(--font-body)',
        fontSize: '0.7rem',
        fontWeight: 400,
        color: 'var(--text-tertiary)',
        borderTop: '1px solid var(--glass-border)',
      }}
    >
      Paper Crane · Flowing into the future
    </div>
  );
}
