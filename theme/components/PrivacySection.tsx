import { motion } from 'framer-motion';
import { ShieldCheck, Database, CloudSlash, Eye } from '@phosphor-icons/react';

const fluidTransition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };

export interface PrivacySectionContent {
  heading: string;
  headingHighlight: string;
  subtitle: string;
  items: Array<{ title: string; desc: string }>;
}

const ICONS = [Database, CloudSlash, Eye, ShieldCheck];
const GLOW_COLORS = [
  'rgba(6, 182, 212, 0.15)',
  'rgba(139, 92, 246, 0.15)',
  'rgba(236, 72, 153, 0.12)',
  'rgba(34, 197, 94, 0.12)',
];
const ACCENT_COLORS = ['#67e8f9', '#a78bfa', '#f472b6', '#4ade80'];

export default function PrivacySection({ content }: { content: PrivacySectionContent }) {
  return (
    <section
      className="py-24 md:py-32 relative"
      style={{ background: 'var(--surface-primary)' }}
    >
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
                background: 'linear-gradient(135deg, #4ade80, #06b6d4)',
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

        {/* Privacy grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 max-w-[1000px] mx-auto">
          {content.items.map((item, i) => {
            const Icon = ICONS[i] ?? ShieldCheck;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 16, scale: 0.97 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={{ ...fluidTransition, delay: i * 0.08 }}
                className="p-6 text-center"
                style={{
                  background: 'var(--surface-glass)',
                  backdropFilter: 'blur(16px)',
                  borderRadius: '22px',
                  border: '1px solid var(--glass-border)',
                }}
              >
                {/* Icon with glow */}
                <div
                  className="w-12 h-12 flex items-center justify-center mx-auto mb-4"
                  style={{
                    borderRadius: '16px',
                    background: GLOW_COLORS[i],
                    boxShadow: `0 0 24px -4px ${GLOW_COLORS[i]}`,
                  }}
                >
                  <Icon size={22} weight="duotone" style={{ color: ACCENT_COLORS[i] }} />
                </div>
                <h4
                  className="mb-2"
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.85rem',
                    fontWeight: 600,
                    color: 'var(--text-primary)',
                  }}
                >
                  {item.title}
                </h4>
                <p
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.78rem',
                    lineHeight: 1.55,
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
