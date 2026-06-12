import { motion } from 'framer-motion';
import { Check } from '@phosphor-icons/react';

const snapTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

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
      className="py-20 md:py-28"
      id="pricing"
      style={{
        background: 'var(--surface-primary)',
        borderBottom: '1px solid var(--text-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={snapTransition}
          className="mb-14"
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              fontWeight: 600,
              textTransform: 'uppercase',
              letterSpacing: '0.12em',
              color: 'var(--color-signal)',
              display: 'block',
              marginBottom: '12px',
            }}
          >
            03 — Pricing
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
            }}
          >
            {content.heading}
            <span style={{ color: 'var(--color-signal)' }}>
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-3 max-w-[50ch]"
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
            }}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Pricing grid — 1px border separation */}
        <div
          className="grid grid-cols-1 md:grid-cols-2 max-w-[800px]"
          style={{ border: '1px solid var(--text-primary)' }}
        >
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...snapTransition, delay: 0 }}
            className="p-8 flex flex-col"
            style={{
              background: 'var(--surface-primary)',
              borderRight: '1px solid var(--text-primary)',
            }}
          >
            {/* Label */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--text-tertiary)',
                marginBottom: '8px',
              }}
            >
              {content.free.title}
            </span>
            {/* Price */}
            <span
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: '3rem',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
                lineHeight: 1,
              }}
            >
              {content.free.price}
            </span>
            <p
              className="mt-3 mb-6"
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: '0.82rem',
                color: 'var(--text-secondary)',
              }}
            >
              {content.free.desc}
            </p>

            <ul className="flex flex-col gap-2 mb-8 flex-1">
              {content.free.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: 'var(--font-system)',
                    fontSize: '0.78rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Check size={13} weight="bold" className="mt-0.5 shrink-0" style={{ color: 'var(--text-primary)' }} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={content.free.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 font-semibold text-sm active:scale-[0.97] transition-transform"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                border: '1px solid var(--text-primary)',
                color: 'var(--text-primary)',
                background: 'transparent',
              }}
            >
              {content.free.cta}
            </a>
          </motion.div>

          {/* Supporter Pack */}
          <motion.div
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-60px' }}
            transition={{ ...snapTransition, delay: 0.08 }}
            className="p-8 flex flex-col"
            style={{
              background: 'var(--text-primary)',
              color: 'var(--text-inverse)',
            }}
          >
            {/* Label */}
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                fontWeight: 600,
                textTransform: 'uppercase',
                letterSpacing: '0.1em',
                color: 'var(--color-signal)',
                marginBottom: '8px',
              }}
            >
              {content.supporter.title}
            </span>
            {/* Price */}
            <span
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: '3rem',
                fontWeight: 800,
                letterSpacing: '-0.04em',
                color: 'var(--text-inverse)',
                lineHeight: 1,
              }}
            >
              {content.supporter.price}
            </span>
            <span
              className="mt-1"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {content.supporter.priceNote}
            </span>
            <p
              className="mt-3 mb-6"
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: '0.82rem',
                color: 'var(--text-tertiary)',
              }}
            >
              {content.supporter.desc}
            </p>

            <ul className="flex flex-col gap-2 mb-8 flex-1">
              {content.supporter.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2"
                  style={{
                    fontFamily: 'var(--font-system)',
                    fontSize: '0.78rem',
                    color: '#a0a0a0',
                  }}
                >
                  <Check size={13} weight="bold" className="mt-0.5 shrink-0" style={{ color: 'var(--color-signal)' }} />
                  {f}
                </li>
              ))}
            </ul>

            <a
              href={content.supporter.ctaLink}
              target="_blank"
              rel="noopener noreferrer"
              className="block text-center py-3 font-semibold text-sm active:scale-[0.97] transition-transform"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
                background: 'var(--color-signal)',
                color: '#ffffff',
                border: 'none',
                boxShadow: '3px 3px 0 0 rgba(255,255,255,0.2)',
              }}
            >
              {content.supporter.cta}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
