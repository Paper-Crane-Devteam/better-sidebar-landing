import { useEffect } from 'react';
import HeroSection from './HeroSection';
import FeatureSection from './FeatureSection';
import PricingSection from './PricingSection';
import PrivacySection from './PrivacySection';
import OpenSourceBanner from './OpenSourceBanner';
import LandingFooter from './LandingFooter';
import type { HeroContent } from './HeroSection';
import type { FeatureContent } from './FeatureSection';
import type { PricingContent } from './PricingSection';
import type { PrivacySectionContent } from './PrivacySection';
import type { OpenSourceContent } from './OpenSourceBanner';
import type { FooterContent } from './LandingFooter';

export interface LandingPageContent {
  hero: HeroContent;
  features: FeatureContent;
  pricing: PricingContent;
  privacy: PrivacySectionContent;
  openSource: OpenSourceContent;
  footer: FooterContent;
}

export default function LandingPage({ content }: { content: LandingPageContent }) {
  // Handle hash-based scroll navigation
  useEffect(() => {
    const scrollToHash = () => {
      const hash = window.location.hash;
      if (hash) {
        const el = document.querySelector(hash);
        if (el) {
          setTimeout(() => {
            el.scrollIntoView({ behavior: 'smooth' });
          }, 100);
        }
      }
    };

    // Handle clicks on hash links (intercept before router)
    const handleClick = (e: MouseEvent) => {
      const target = (e.target as HTMLElement).closest('a');
      if (!target) return;
      const href = target.getAttribute('href');
      if (href && href.includes('#')) {
        const hashPart = href.split('#')[1];
        if (hashPart) {
          const el = document.getElementById(hashPart);
          if (el) {
            e.preventDefault();
            el.scrollIntoView({ behavior: 'smooth' });
            history.pushState(null, '', `#${hashPart}`);
          }
        }
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
      className="noise-overlay"
      style={{
        background: 'var(--surface-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-body)',
      }}
    >
      <main className="relative z-10">
        <HeroSection content={content.hero} />
        <FeatureSection content={content.features} />
        <PricingSection content={content.pricing} />
        <PrivacySection content={content.privacy} />
        <OpenSourceBanner content={content.openSource} />
      </main>
      <LandingFooter content={content.footer} />
    </div>
  );
}
