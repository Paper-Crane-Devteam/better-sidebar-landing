import { motion } from 'framer-motion';
import { DISCORD_URL, GITHUB_URL, Kicker, MonoLink, Section, SectionTitle, rise, stagger } from './sections/shared';

export interface OpenSourceContent {
  kicker: string;
  title: string;
  description: string;
  viewGithub: string;
  joinDiscord: string;
  license: string;
}

/**
 * 09 · 开源 / 社区 —— 窄条
 */
export default function OpenSourceBanner({ content }: { content: OpenSourceContent }) {
  return (
    <Section id="open-source" tone="paper-1" tight crease creasePosition="center 55%" creaseOpacity={0.5}>
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
        className="oss-grid"
        style={{
          display: 'grid',
          gridTemplateColumns: 'minmax(0, 1fr) auto',
          gap: 'var(--space-lg)',
          alignItems: 'center',
        }}
      >
        <div>
          <motion.div variants={rise}>
            <Kicker index="09">{content.kicker}</Kicker>
          </motion.div>
          <motion.div variants={rise}>
            <SectionTitle>{content.title}</SectionTitle>
          </motion.div>
          <motion.p
            variants={rise}
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: '0.95rem',
              lineHeight: 1.75,
              color: 'var(--ink-2)',
              maxWidth: '56ch',
              margin: 'var(--space-sm) 0 0',
            }}
          >
            {content.description}
          </motion.p>
        </div>

        <motion.div
          variants={rise}
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 'var(--space-sm)',
            alignItems: 'flex-start',
          }}
        >
          <MonoLink href={GITHUB_URL}>{content.viewGithub}</MonoLink>
          <MonoLink href={DISCORD_URL}>{content.joinDiscord}</MonoLink>
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.58rem',
              letterSpacing: '0.16em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            {content.license}
          </span>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 780px) {
          .oss-grid { grid-template-columns: minmax(0, 1fr) !important; gap: var(--space-md) !important; }
        }
      `}</style>
    </Section>
  );
}
