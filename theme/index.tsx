import './index.css';
import { Layout as OriginalLayout } from '@rspress/core/theme-original';
import Logo from './components/Logo';
import { useFrontmatter, useHead, usePage, usePages, useSite } from '@rspress/core/runtime';

export * from '@rspress/core/theme-original';

const ORIGIN = 'https://papercranedev.com/better-sidebar';
const OG_IMAGE = `${ORIGIN}/images/og-cover.jpg`;

/** hreflang 用短码，og:locale 要 language_TERRITORY 全码。 */
const OG_LOCALE: Record<string, string> = {
  en: 'en_US',
  zh: 'zh_CN',
  'zh-tw': 'zh_TW',
  ja: 'ja_JP',
  es: 'es_ES',
};

/**
 * Custom Layout · Paper Crane Dev v2.0
 *
 * Level 3 Layout Slots:
 * - beforeNavTitle: 折纸 mark + mono 品牌名
 * - bottom: colophon 版权页式页脚
 *
 * SEO：canonical、hreflang、Open Graph、Twitter card 和首页的
 * SoftwareApplication 结构化数据都在这里注入。构建后由
 * scripts/prepare-deploy.mjs 断言校验。
 */
export function Layout() {
  const { page } = usePage();
  const { pages } = usePages();
  const { site } = useSite();
  const { frontmatter } = useFrontmatter();
  const unlocalized = (route: string) => route.replace(/^\/(zh|zh-tw|ja|es)(?=\/|$)/, '') || '/';
  const siblings = pages.filter(p => unlocalized(p.routePath) === unlocalized(page.routePath));
  const english = siblings.find(p => p.lang === 'en');
  const canonical = ORIGIN + page.routePath;
  const isError = page.pageType === '404';
  const isHome = page.pageType === 'custom' && unlocalized(page.routePath) === '/';
  const description = (page.description || site.description || '') as string;
  const fmTitle = frontmatter.title as string | undefined;

  useHead({
    link: isError ? [] : [
      { rel: 'canonical', href: canonical },
      ...siblings.map(p => ({
        rel: 'alternate',
        hreflang: p.lang === 'zh' ? 'zh-Hans' : p.lang === 'zh-tw' ? 'zh-Hant' : p.lang,
        href: ORIGIN + p.routePath,
      })),
      ...(english ? [{ rel: 'alternate', hreflang: 'x-default', href: ORIGIN + english.routePath }] : []),
    ],
    meta: isError
      ? [{ name: 'robots', content: 'noindex' }]
      : [
        { property: 'og:url', content: canonical },
        { property: 'og:site_name', content: 'Better Sidebar' },
        { property: 'og:locale', content: OG_LOCALE[page.lang || 'en'] ?? 'en_US' },
        { property: 'og:image', content: OG_IMAGE },
        { property: 'og:image:type', content: 'image/jpeg' },
        { property: 'og:image:width', content: '1200' },
        { property: 'og:image:height', content: '630' },
        { property: 'og:image:alt', content: 'Better Sidebar for Gemini and Google AI Studio' },
        { name: 'twitter:card', content: 'summary_large_image' },
        { name: 'twitter:image', content: OG_IMAGE },
        { name: 'twitter:image:alt', content: 'Better Sidebar for Gemini and Google AI Studio' },
      ],
    script: isHome
      ? [{
        type: 'application/ld+json',
        innerHTML: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'SoftwareApplication',
          name: 'Better Sidebar',
          alternateName: 'Better Sidebar for Gemini & AI Studio',
          applicationCategory: 'BrowserApplication',
          operatingSystem: 'Chrome, Edge, Firefox, Brave, Arc',
          url: canonical,
          image: OG_IMAGE,
          inLanguage: page.lang || 'en',
          description,
          // 免费加内购。不写 aggregateRating —— 没有真实评分数据，
          // 编造的评分会被 Google 当作违规的结构化数据。
          offers: { '@type': 'Offer', price: '0', priceCurrency: 'USD' },
          publisher: { '@type': 'Organization', name: 'Paper Crane Dev', url: 'https://papercranedev.com/' },
        }),
      }]
      : [],
  });

  // Rspress 的 Layout 对 pageType: 'custom' 直接忽略 frontmatter.title，
  // 只输出站点标题（见 @rspress/core Layout: `: mainTitle`），og:title 也跟着
  // 退化成 "Better Sidebar"。这里用 critical 优先级覆盖两者，让首页拿回自己的
  // 标题。放在第二个 useHead 里，因为默认优先级会被 Rspress 后一步的写入盖掉。
  const ownTitle = !isError && page.pageType === 'custom' ? fmTitle : undefined;
  useHead(
    {
      title: ownTitle,
      meta: ownTitle ? [{ property: 'og:title', content: ownTitle }] : [],
    },
    { tagPriority: 'critical' },
  );

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
      <a href="/" style={{ color: 'inherit', textDecoration: 'none' }}>Paper Crane Dev</a> &nbsp;·&nbsp; set in Playfair Display &amp; JetBrains Mono
    </div>
  );
}
