import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import Logo from './components/Logo';
import { useHead, usePage, usePages } from '@rspress/core/runtime';

export * from '@rspress/core/theme-original';

/**
 * Custom Layout · Paper Crane Dev v2.0
 *
 * Level 3 Layout Slots:
 * - beforeNavTitle: 折纸 mark + mono 品牌名
 * - bottom: colophon 版权页式页脚
 */
export function Layout() {
  const { page } = usePage();
  const { pages } = usePages();
  const origin = 'https://papercranedev.com/better-sidebar';
  const unlocalized = (route: string) => route.replace(/^\/(zh|zh-tw|ja|es)(?=\/|$)/, '') || '/';
  const siblings = pages.filter(p => unlocalized(p.routePath) === unlocalized(page.routePath));
  const english = siblings.find(p => p.lang === 'en');
  const canonical = origin + page.routePath;
  useHead({
    link: page.pageType === '404' ? [] : [
      { rel: 'canonical', href: canonical },
      ...siblings.map(p => ({
        rel: 'alternate',
        hreflang: p.lang === 'zh' ? 'zh-Hans' : p.lang === 'zh-tw' ? 'zh-Hant' : p.lang,
        href: origin + p.routePath,
      })),
      ...(english ? [{ rel: 'alternate', hreflang: 'x-default', href: origin + english.routePath }] : []),
    ],
    meta: page.pageType === '404'
      ? [{ name: 'robots', content: 'noindex' }]
      : [{ property: 'og:url', content: canonical }],
  });
  return <OriginalLayout beforeNavTitle={<NavBrand />} bottom={<Colophon />} />;
}

/** 品牌 — 单色 mark + mono 字，无渐变 */
function NavBrand() {
  return (
    <a
      href="/better-sidebar/"
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        gap: '10px',
        textDecoration: 'none',
      }}
    >
      <Logo size={32} />
      <span
        style={{
          fontFamily: 'var(--font-mono)',
          fontWeight: 500,
          fontSize: '0.78rem',
          letterSpacing: '0.14em',
          textTransform: 'uppercase',
          color: 'var(--ink-1)',
          whiteSpace: 'nowrap',
        }}
      >
        Better Sidebar
      </span>
    </a>
  );
}

/** 页脚 — 书籍版权页 (colophon) 风格 */
function Colophon() {
  return (
    <div
      style={{
        padding: '20px 24px',
        textAlign: 'center',
        fontFamily: 'var(--font-mono)',
        fontSize: '0.6rem',
        letterSpacing: '0.14em',
        textTransform: 'uppercase',
        color: 'var(--ink-3)',
        background: 'var(--paper-1)',
      }}
    >
      Paper Crane Dev &nbsp;·&nbsp; set in Playfair Display &amp; JetBrains Mono
    </div>
  );
}
