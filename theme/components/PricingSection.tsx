import { motion } from 'framer-motion';
import { Check, Heart } from '@phosphor-icons/react';

const fluidTransition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };

export interface PricingContent {
  heading: string;
  headingHighlight: string;
  subtitle: string;
  free: {
    title: string;
    price: string;
    desc: string;
    features: string[];
    cta: string;
    ctaLink: string;
  };
  supporter: {
    title: string;
    price: string;
    priceNote: string;
    desc: string;
    features: string[];
    cta: string;
    ctaLink: string;
  };
}

export default function PricingSection({ content }: { content: PricingContent }) {
  return (
    <section
      className="py-24 md:py-32 relative"
      id="pricing"
      style={{ background: 'var(--surface-secondary)' }}
    >
      {/* Background orb */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(236,72,153,0.05) 0%, transparent 60%)',
          filter: 'blur(80px)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={fluidTransition}
          className="mb-14 text-center"
        >
          <h2
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4.5vw, 3rem)',
              fontWeight: 700,
              lineHeight: 1.1,
              letterSpacing: '-0.03em',
              color: 'var(--text-primary)',
            }}
          >
            {content.heading}{' '}
            <span
              style={{
                background: 'var(--gradient-iridescent)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-4 max-w-[50ch] mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
            }}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 max-w-[840px] mx-auto">
          {/* Free Tier — glass card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...fluidTransition, delay: 0 }}
            className="p-7 flex flex-col"
            style={{
              background: 'var(--surface-glass)',
              backdropFilter: 'blur(24px)',
              borderRadius: '24px',
              border: '1px solid var(--glass-border)',
            }}
          >
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {content.free.title}
            </span>
            <span
              className="mt-2"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '2.5rem',
                fontWeight: 700,
                letterSpacing: '-0.03em',
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}
            >
              {content.free.price}
            </span>
            <p
              className="mt-2 mb-6"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              {content.free.desc}
            </p>

            <ul className="flex flex-col gap-2.5 mb-7 flex-1">
              {content.free.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Check size={14} weight="bold" className="mt-0.5 shrink-0" style={{ color: '#67e8f9' }} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={content.free.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3.5 font-medium text-sm active:scale-[0.97] transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                borderRadius: '100px',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-primary)',
                background: 'transparent',
              }}
            >
              {content.free.cta}
            </a>
          </motion.div>

          {/* Supporter Pack — rotating gradient border card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...fluidTransition, delay: 0.1 }}
            className="relative border-gradient-spin"
            style={{ borderRadius: '25px' }}
          >
            {/* Glow behind */}
            <div
              className="absolute inset-0 animate-pulse-glow"
              style={{
                borderRadius: '25px',
                background: 'var(--gradient-aurora)',
                opacity: 0.15,
                filter: 'blur(20px)',
              }}
            />
            <div
              className="relative p-7 flex flex-col h-full"
              style={{
                background: 'var(--surface-elevated)',
                borderRadius: '24px',
                border: '1px solid rgba(139,92,246,0.2)',
                margin: '1px',
              }}
            >
              <div className="flex items-center gap-2">
                <Heart size={16} weight="fill" style={{ color: '#f472b6' }} />
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {content.supporter.title}
                </span>
              </div>
              <span
                className="mt-2"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.5rem',
                  fontWeight: 700,
                  letterSpacing: '-0.03em',
                  color: 'var(--text-primary)',
                  lineHeight: 1,
                }}
              >
                {content.supporter.price}
              </span>
              <span
                className="mt-1"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.7rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                {content.supporter.priceNote}
              </span>
              <p
                className="mt-2 mb-6"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.82rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {content.supporter.desc}
              </p>

              <ul className="flex flex-col gap-2.5 mb-7 flex-1">
                {content.supporter.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.78rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Check size={14} weight="bold" className="mt-0.5 shrink-0" style={{ color: '#a78bfa' }} />
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href={content.supporter.ctaLink}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-center py-3.5 font-medium text-sm active:scale-[0.97] transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  borderRadius: '100px',
                  background: 'var(--gradient-aurora)',
                  color: '#ffffff',
                  boxShadow: '0 0 32px -8px rgba(139,92,246,0.3)',
                }}
              >
                {content.supporter.cta}
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
