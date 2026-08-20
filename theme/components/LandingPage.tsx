import { useEffect } from 'react';
import HeroSection, { type HeroContent } from './HeroSection';
import ProblemSection, { type ProblemContent } from './ProblemSection';
import DemoSection, { type DemoContent } from './DemoSection';
import AgentSection, { type AgentContent } from './AgentSection';
import HighlightSection, { type HighlightContent } from './HighlightSection';
import FeatureSection, { type FeatureContent } from './FeatureSection';
import PrivacySection, { type PrivacySectionContent } from './PrivacySection';
import PricingSection, { type PricingContent } from './PricingSection';
import OpenSourceBanner, { type OpenSourceContent } from './OpenSourceBanner';
import LandingFooter, { type FooterContent } from './LandingFooter';
import CreaseBand from './CreaseBand';

export interface LandingPageContent {
  hero: HeroContent;
  problem: ProblemContent;
  demo: DemoContent;
  agent: AgentContent;
  highlights: HighlightContent;
  features: FeatureContent;
  privacy: PrivacySectionContent;
  pricing: PricingContent;
  openSource: OpenSourceContent;
  footer: FooterContent;
}

/**
 * Landing Page · Paper Crane Dev v2.0
 *
 * 十段编辑式结构：
 *  01 Hero        — 不对称排版 + 侧边栏图版
 *  02 Problem     — 唯一"有人在说话"的一段
 *  03 Demo        — 真实录屏，全站唯一凭据
 *  04 Agent       — 终端式执行记录，主推
 *  05 Highlights  — 四个重点能力，交错图版
 *  06 Features    — 能力索引表（说明书参数页）
 *  07 Privacy     — 一句大字 + 四条事实
 *  08 Pricing     — Free / Support Pack / Power Pack
 *  09 Open Source — 窄条
 *  10 Colophon    — 书籍版权页式页脚
 */
export default function LandingPage({ content }: { content: LandingPageContent }) {
  // 锚点滚动（拦在 router 之前）
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (!hash) return;
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: 'smooth' }), 100);
      }
    };

    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (!href || !href.includes('#')) return;
      const hashPart = href.split('#')[1];
      if (!hashPart) return;
      const el = document.getElementById(hashPart);
      if (el) {
        e.preventDefault();
        el.scrollIntoView({ behavior: 'smooth' });
        history.pushState(null, '', `#${hashPart}`);
      }
    };

    scrollToHash();
    window.addEventListener('hashchange', scrollToHash);
    document.addEventListener('click', handleClick, true);
    return () => {
      window.removeEventListener('hashchange', scrollToHash);
      document.removeEventListener('click', handleClick, true);
    };
  }, []);

  return (
    <div
      style={{
        background: 'var(--paper-1)',
        color: 'var(--ink-1)',
        fontFamily: 'var(--font-text)',
      }}
    >
      <main style={{ position: 'relative', zIndex: 1 }}>
        <HeroSection content={content.hero} />
        <ProblemSection content={content.problem} />
        <DemoSection content={content.demo} />
        <AgentSection content={content.agent} />
        <HighlightSection content={content.highlights} />
        {/* 翻页 —— 夹在两个最密的段落之间当喘息 */}
        <CreaseBand height={200} />
        <FeatureSection content={content.features} />
        <PrivacySection content={content.privacy} />
        <PricingSection content={content.pricing} />
        <OpenSourceBanner content={content.openSource} />
      </main>
      <LandingFooter content={content.footer} />
    </div>
  );
}
