import { motion } from 'framer-motion';
import { ShieldCheck, Database, CloudSlash, Eye } from '@phosphor-icons/react';

const snapTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

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
      className="py-20 md:py-28"
      style={{
        background: 'var(--surface-secondary)',
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
            04 — Security
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

        {/* Privacy grid — horizontal strip layout */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
          style={{ border: '1px solid var(--text-primary)' }}
        >
          {content.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...snapTransition, delay: i * 0.05 }}
                className="p-6"
                style={{
                  background: 'var(--surface-primary)',
                  borderRight: i < 3 ? '1px solid var(--text-primary)' : 'none',
                }}
              >
                {/* Index number */}
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.55rem',
                    fontWeight: 600,
                    color: 'var(--text-tertiary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    display: 'block',
                    marginBottom: '12px',
                  }}
                >
                  0{i + 1}
                </span>

                <Icon
                  size={20}
                  weight="regular"
                  style={{ color: 'var(--text-primary)', marginBottom: '10px' }}
                />

                <h4
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.7rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                    textTransform: 'uppercase',
                    letterSpacing: '0.03em',
                    marginBottom: '6px',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-system)',
                    fontSize: '0.78rem',
                    lineHeight: 1.5,
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
