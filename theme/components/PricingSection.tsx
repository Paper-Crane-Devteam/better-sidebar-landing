import { motion } from 'framer-motion';
import { Kicker, Lede, MonoButton, Section, SectionTitle, rise, stagger } from './sections/shared';

export interface PricingTier {
  /** mono 小标 — FREE / SUPPORT PACK / POWER PACK */
  label: string;
  price: string;
  priceNote: string;
  tagline: string;
  features: string[];
  cta: string;
  ctaLink: string;
  /** 主推列 */
  featured?: boolean;
  /** 用朱红印章按钮。只有"安装插件"这个动作可以用 */
  seal?: boolean;
  /** 继承关系说明，如 "含 Support Pack 全部内容" */
  inherits?: string;
}

export interface PricingContent {
  kicker: string;
  title: string;
  subtitle: string;
  tiers: PricingTier[];
  /** 退款说明 */
  note: string;
}

/**
 * 08 · 定价 —— 三栏
 * Free / Support Pack / Power Pack。价格数字用超大 mono。
 * 主推列靠纸色深一级区分，不靠渐变或描边。
 */
export default function PricingSection({ content }: { content: PricingContent }) {
  return (
    <Section id="pricing" tone="paper-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.12 }}
      >
        <motion.div variants={rise}>
          <Kicker index="08">{content.kicker}</Kicker>
        </motion.div>
        <motion.div variants={rise}>
          <SectionTitle>{content.title}</SectionTitle>
        </motion.div>
        <motion.div variants={rise}>
          <Lede>{content.subtitle}</Lede>
        </motion.div>

        <div
          className="pricing-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(3, minmax(0, 1fr))',
            gap: '2px',
            marginTop: 'var(--space-lg)',
          }}
        >
          {content.tiers.map((tier) => (
            <motion.div
              key={tier.label}
              variants={rise}
              className="glow-on-hover"
              style={{
                display: 'flex',
                flexDirection: 'column',
                background: tier.featured ? 'var(--paper-3)' : 'var(--paper-1)',
                borderRadius: 'var(--radius)',
                padding: 'var(--space-md)',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  gap: 'var(--space-xs)',
                }}
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.66rem',
                    fontWeight: 500,
                    letterSpacing: '0.2em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-1)',
                  }}
                >
                  {tier.label}
                </span>
                {tier.featured && (
                  <span
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.54rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-3)',
                    }}
                  >
                    popular
                  </span>
                )}
              </div>

              {/* 价格 — 超大 mono */}
              <div style={{ marginTop: 'var(--space-md)' }}>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: 'clamp(2.2rem, 4vw, 3rem)',
                    fontWeight: 500,
                    letterSpacing: '-0.03em',
                    lineHeight: 1,
                    color: 'var(--ink-1)',
                  }}
                >
                  {tier.price}
                </span>
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.14em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginTop: '10px',
                }}
              >
                {tier.priceNote}
              </div>

              <p
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '0.88rem',
                  lineHeight: 1.7,
                  color: 'var(--ink-2)',
                  margin: 'var(--space-md) 0 0',
                }}
              >
                {tier.tagline}
              </p>

              {tier.inherits && (
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    letterSpacing: '0.06em',
                    color: 'var(--ink-1)',
                    background: tier.featured ? 'var(--paper-1)' : 'var(--paper-2)',
                    borderRadius: 'var(--radius)',
                    padding: '7px 10px',
                    marginTop: 'var(--space-sm)',
                  }}
                >
                  &#8627;&nbsp; {tier.inherits}
                </div>
              )}

              <div style={{ marginTop: 'var(--space-md)', flex: 1 }}>
                {tier.features.map((f) => (
                  <div
                    key={f}
                    style={{
                      display: 'flex',
                      gap: 'var(--space-xs)',
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.7rem',
                      lineHeight: 1.85,
                      color: 'var(--ink-2)',
                      marginBottom: '5px',
                    }}
                  >
                    <span aria-hidden="true" style={{ color: 'var(--ink-3)' }}>
                      ·
                    </span>
                    <span>{f}</span>
                  </div>
                ))}
              </div>

              <div style={{ marginTop: 'var(--space-md)' }}>
                <MonoButton
                  href={tier.ctaLink}
                  variant={tier.seal ? 'seal' : tier.featured ? 'primary' : 'secondary'}
                >
                  {tier.cta}
                </MonoButton>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={rise}
          style={{
            marginTop: 'var(--space-md)',
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.16em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          {content.note}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: minmax(0, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}
