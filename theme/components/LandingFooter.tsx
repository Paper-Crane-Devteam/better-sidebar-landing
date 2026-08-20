import Logo from './Logo';
import { CHROME_URL, DISCORD_URL, GITHUB_URL, TickRule } from './sections/shared';

export interface FooterContent {
  brand: string;
  /** colophon 正文 —— 书籍版权页的字体说明 */
  colophon: string;
  links: { label: string; href: string }[];
  privacy: string;
  privacyLink: string;
  license: string;
  disclaimer: string;
  copyright: string;
}

/**
 * 10 · Footer —— 书籍版权页 (colophon) 风格
 * 全 mono 小字，无社交图标墙。
 */
export default function LandingFooter({ content }: { content: FooterContent }) {
  const mono = (size: number, color = 'var(--ink-3)') => ({
    fontFamily: 'var(--font-mono)',
    fontSize: `${size}rem`,
    letterSpacing: '0.14em',
    textTransform: 'uppercase' as const,
    color,
  });

  return (
    <footer style={{ background: 'var(--paper-2)', padding: 'var(--space-lg) 24px' }}>
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
        <TickRule style={{ width: '100%', marginBottom: 'var(--space-md)' }} />

        <div
          className="footer-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.2fr) repeat(2, minmax(0, 0.9fr))',
            gap: 'var(--space-md)',
          }}
        >
          {/* 品牌 + colophon */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Logo size={22} />
              <span style={{ ...mono(0.74, 'var(--ink-1)'), fontWeight: 500 }}>
                {content.brand}
              </span>
            </div>
            <p
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.62rem',
                lineHeight: 1.9,
                letterSpacing: '0.04em',
                color: 'var(--ink-3)',
                maxWidth: '34ch',
                margin: 'var(--space-sm) 0 0',
              }}
            >
              {content.colophon}
            </p>
          </div>

          {/* 链接 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            {[
              ...content.links,
              { label: content.privacy, href: content.privacyLink },
            ].map((l) => (
              <a
                key={l.label}
                href={l.href}
                {...(l.href.startsWith('http')
                  ? { target: '_blank', rel: 'noopener noreferrer' }
                  : {})}
                style={{ ...mono(0.64, 'var(--ink-2)'), textDecoration: 'none' }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.color = 'var(--ink-1)';
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.color = 'var(--ink-2)';
                }}
              >
                &gt;&nbsp;{l.label}
              </a>
            ))}
          </div>

          {/* 法务 —— 折纸鹤是工作室落款，上方的方块 mark 是产品标 */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
            <img
              src="/better-sidebar/images/crane-mark.png"
              alt=""
              aria-hidden="true"
              loading="lazy"
              decoding="async"
              style={{ width: '26px', height: '26px', opacity: 0.35, marginBottom: '2px' }}
            />
            <span style={mono(0.6)}>{content.license}</span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                lineHeight: 1.85,
                letterSpacing: '0.04em',
                color: 'var(--ink-3)',
              }}
            >
              {content.disclaimer}
            </span>
            <span style={mono(0.6)}>{content.copyright}</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 780px) {
          .footer-grid { grid-template-columns: minmax(0, 1fr) !important; }
        }
      `}</style>
    </footer>
  );
}

/** 供 mdx 使用的默认外链，避免文案里重复硬编码 */
export const FOOTER_LINKS = {
  chrome: CHROME_URL,
  github: GITHUB_URL,
  discord: DISCORD_URL,
};
