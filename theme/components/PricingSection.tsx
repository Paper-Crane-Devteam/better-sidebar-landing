import { motion } from 'framer-motion';
import { Check, Heart } from '@phosphor-icons/react';


const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 22,
};

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
      className="py-28 md:py-36"
      id="pricing"
      style={{ background: 'var(--surface-primary)' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
          className="mb-16 text-center"
        >
          <h2
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            {content.heading}{' '}
            <span style={{ color: 'var(--color-accent-500)' }}>
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-5 max-w-[54ch] mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: 'var(--text-secondary)',
            }}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Pricing cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-7 max-w-[860px] mx-auto">
          {/* Free Tier */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...springTransition, delay: 0 }}
            className="p-8 flex flex-col"
            style={{
              background: 'var(--surface-elevated)',
              borderRadius: '24px',
              border: '1px solid var(--surface-muted)',
              boxShadow:
                '0 4px 40px -8px rgba(123,142,168,0.04), 0 1px 8px -2px rgba(44,42,39,0.02)',
            }}
          >
            <h3
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1rem',
                fontWeight: 600,
                color: 'var(--text-primary)',
              }}
            >
              {content.free.title}
            </h3>
            <div className="mt-3 mb-4">
              <span
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '2.2rem',
                  fontWeight: 500,
                  color: 'var(--text-primary)',
                }}
              >
                {content.free.price}
              </span>
            </div>
            <p
              className="mb-7"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              {content.free.desc}
            </p>

            <ul className="flex flex-col gap-3 mb-8 flex-1">
              {content.free.features.map((f) => (
                <li
                  key={f}
                  className="flex items-start gap-2.5"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.825rem',
                    color: 'var(--text-secondary)',
                  }}
                >
                  <Check
                    size={15}
                    weight="bold"
                    className="mt-0.5 shrink-0"
                    style={{ color: 'var(--color-accent-500)' }}
                  />
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
                border: '1px solid var(--surface-muted)',
                color: 'var(--text-primary)',
              }}
            >
              {content.free.cta}
            </a>
          </motion.div>

          {/* Supporter Pack */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ ...springTransition, delay: 0.1 }}
            className="p-8 flex flex-col relative overflow-hidden"
            style={{
              background: 'var(--surface-elevated)',
              borderRadius: '24px',
              border: '1.5px solid var(--color-warm-200)',
              boxShadow:
                '0 8px 48px -12px rgba(176,122,99,0.08), 0 2px 16px -4px rgba(44,42,39,0.03)',
            }}
          >
            {/* Subtle warm gradient overlay */}
            <div
              className="absolute top-0 right-0 w-48 h-48 opacity-30 pointer-events-none"
              style={{
                background:
                  'radial-gradient(circle at top right, rgba(228,180,158,0.3) 0%, transparent 70%)',
              }}
            />

            <div className="relative z-10 flex flex-col flex-1">
              <div className="flex items-center justify-between">
                <h3
                  className="flex items-center gap-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '1rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  <Heart size={18} weight="fill" style={{ color: 'var(--color-warm-400)' }} />
                  {content.supporter.title}
                </h3>
              </div>

              <div className="mt-3 mb-1">
                <span
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontSize: '2.2rem',
                    fontWeight: 500,
                    color: 'var(--text-primary)',
                  }}
                >
                  {content.supporter.price}
                </span>
              </div>
              <p
                className="mb-4"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                {content.supporter.priceNote}
              </p>
              <p
                className="mb-7"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}
              >
                {content.supporter.desc}
              </p>

              <ul className="flex flex-col gap-3 mb-8 flex-1">
                {content.supporter.features.map((f) => (
                  <li
                    key={f}
                    className="flex items-start gap-2.5"
                    style={{
                      fontFamily: 'var(--font-body)',
                      fontSize: '0.825rem',
                      color: 'var(--text-secondary)',
                    }}
                  >
                    <Check
                      size={15}
                      weight="bold"
                      className="mt-0.5 shrink-0"
                      style={{ color: 'var(--color-warm-500)' }}
                    />
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
                  background: 'var(--color-warm-500)',
                  color: 'var(--text-inverse)',
                  boxShadow: '0 6px 24px -6px rgba(176,122,99,0.3)',
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
