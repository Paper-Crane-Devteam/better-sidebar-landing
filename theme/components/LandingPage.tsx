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
  return (
    <div
      style={{
        background: 'var(--surface-primary)',
        color: 'var(--text-primary)',
        fontFamily: 'var(--font-system)',
      }}
    >
      <main>
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
