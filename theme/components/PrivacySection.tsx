import { motion } from 'framer-motion';
import { ShieldCheck, Database, CloudSlash, Eye } from '@phosphor-icons/react';

const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 22,
};

export interface PrivacySectionContent {
  heading: string;
  headingHighlight: string;
  subtitle: string;
  items: Array<{ title: string; desc: string }>;
}

const ICONS = [Database, CloudSlash, Eye, ShieldCheck];

export default function PrivacySection({ content }: { content: PrivacySectionContent }) {
  return (
    <section
      className="py-28 md:py-36"
      style={{ background: 'var(--surface-secondary)' }}
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

        {/* Privacy cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-[1040px] mx-auto">
          {content.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={{ ...springTransition, delay: i * 0.08 }}
                className="text-center p-7"
                style={{
                  background: 'var(--surface-elevated)',
                  borderRadius: '22px',
                  border: '1px solid var(--surface-muted)',
                  boxShadow:
                    '0 4px 40px -8px rgba(123,142,168,0.04), 0 1px 8px -2px rgba(44,42,39,0.02)',
                }}
              >
                {/* Icon — warm dark pill */}
                <div
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-5"
                  style={{
                    borderRadius: '14px',
                    background: 'var(--surface-deep)',
                  }}
                >
                  <Icon size={20} weight="duotone" style={{ color: 'var(--text-inverse)' }} />
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.875rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.8rem',
                    lineHeight: 1.6,
                    color: 'var(--text-secondary)',
                  }}
                >
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
