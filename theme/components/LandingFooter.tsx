import { usePage } from '@rspress/core/runtime';
import Logo from './Logo';
import { FAMILY, FAMILY_LABEL, type Lang } from './family';
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
  const { page } = usePage();
  const lang: Lang = page.lang && page.lang in FAMILY_LABEL ? (page.lang as Lang) : 'en';
  const family = FAMILY.filter((p) => p.id !== 'better-sidebar');

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
              src="/better-sidebar/plugin-icon.png"
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

        {/* 互链：同一工作室的其他产品。列表在 family.ts，多了会自动换行 */}
        {family.length > 0 && (
          <nav aria-label={FAMILY_LABEL[lang]} style={{ marginTop: 'var(--space-md)' }}>
            <TickRule style={{ width: '100%', marginBottom: 'var(--space-sm)' }} />
            <div style={{ ...mono(0.6), marginBottom: 'var(--space-sm)' }}>{FAMILY_LABEL[lang]}</div>
            <ul className="footer-family">
              {family.map((p) => (
                <li key={p.id}>
                  <a href={p.href} className="footer-family-link">
                    <img src={p.icon} alt="" width={22} height={22} loading="lazy" decoding="async" />
                    <span>
                      <span className="footer-family-name">{p.name}</span>
                      <span className="footer-family-desc">{p.desc[lang]}</span>
                    </span>
                  </a>
                </li>
              ))}
            </ul>
          </nav>
        )}
      </div>

      <style>{`
        @media (max-width: 780px) {
          .footer-grid { grid-template-columns: minmax(0, 1fr) !important; }
        }
        .footer-family {
          list-style: none; margin: 0; padding: 0;
          display: grid; gap: var(--space-xs) var(--space-md);
          grid-template-columns: repeat(auto-fill, minmax(260px, 1fr));
        }
        .footer-family-link {
          display: flex; align-items: flex-start; gap: 12px;
          padding: var(--space-xs) 0; text-decoration: none;
        }
        .footer-family-link img { width: 22px; height: 22px; border-radius: 5px; flex: none; margin-top: 1px; opacity: .85; }
        .footer-family-name {
          display: block; font-family: var(--font-mono); font-size: 0.64rem;
          letter-spacing: 0.14em; text-transform: uppercase; color: var(--ink-2);
        }
        .footer-family-desc {
          display: block; margin-top: 4px; font-family: var(--font-mono); font-size: 0.6rem;
          line-height: 1.7; letter-spacing: 0.04em; color: var(--ink-3);
        }
        .footer-family-link:hover .footer-family-name { color: var(--ink-1); }
        .footer-family-link:hover .footer-family-desc { color: var(--ink-2); }
        .footer-family-link:hover img { opacity: 1; }
        .footer-family-link:focus-visible { outline: 2px solid var(--ink-2); outline-offset: 4px; }
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
