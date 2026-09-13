import { motion } from 'framer-motion';
import ProductShot from './ProductShot';
import { Kicker, Lede, MetaRow, Section, SectionTitle, rise, stagger } from './sections/shared';

export interface AgentContent {
  kicker: string;
  title: string;
  description: string;
  meta: string[];
  figureLabel: string;
  /** 内置技能清单 */
  skillsLabel: string;
  skills: { name: string; desc: string }[];
  /** 安全护栏 */
  safetyLabel: string;
  safety: string[];
}

/**
 * 04 · AI Agent —— 主推段
 * 全站最有说服力的一屏：真实助手执行截图与功能说明。
 */
export default function AgentSection({ content }: { content: AgentContent }) {
  return (
    <Section id="agent" tone="paper-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.15 }}
      >
        <motion.div variants={rise}>
          <Kicker index="04">{content.kicker}</Kicker>
        </motion.div>

        <div
          className="agent-grid"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 0.9fr) minmax(0, 1.1fr)',
            gap: 'var(--space-lg)',
            alignItems: 'start',
          }}
        >
          <div>
            <motion.div variants={rise}>
              <SectionTitle size="lg">{content.title}</SectionTitle>
            </motion.div>
            <motion.div variants={rise}>
              <Lede>{content.description}</Lede>
            </motion.div>
            <motion.div variants={rise} style={{ marginTop: 'var(--space-md)' }}>
              <MetaRow items={content.meta} />
            </motion.div>

            {/* 安全护栏 */}
            <motion.div variants={rise} style={{ marginTop: 'var(--space-md)' }}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-3)',
                  marginBottom: '10px',
                }}
              >
                {content.safetyLabel}
              </div>
              {content.safety.map((s) => (
                <div
                  key={s}
                  style={{
                    display: 'flex',
                    gap: 'var(--space-xs)',
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.72rem',
                    lineHeight: 1.9,
                    color: 'var(--ink-2)',
                  }}
                >
                  <span style={{ color: 'var(--ink-3)' }} aria-hidden="true">
                    ·
                  </span>
                  <span>{s}</span>
                </div>
              ))}
            </motion.div>
          </div>

          {/* 终端图版 */}
          <motion.div variants={rise}>
            <ProductShot kind="agent" label={content.figureLabel} />
          </motion.div>
        </div>

        {/* 内置技能 */}
        <motion.div variants={rise} style={{ marginTop: 'var(--space-lg)' }}>
          <div
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.6rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
              marginBottom: 'var(--space-sm)',
            }}
          >
            {content.skillsLabel}
          </div>
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))',
              gap: '2px',
            }}
          >
            {content.skills.map((s, i) => (
              <div
                key={s.name}
                className="glow-on-hover"
                style={{
                  background: 'var(--paper-1)',
                  borderRadius: 'var(--radius)',
                  padding: 'var(--space-sm)',
                }}
              >
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.58rem',
                    letterSpacing: '0.18em',
                    color: 'var(--ink-3)',
                    marginBottom: '8px',
                  }}
                >
                  {String(i + 1).padStart(2, '0')}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.76rem',
                    fontWeight: 500,
                    letterSpacing: '0.06em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-1)',
                    marginBottom: '6px',
                  }}
                >
                  {s.name}
                </div>
                <div
                  style={{
                    fontFamily: 'var(--font-text)',
                    fontSize: '0.82rem',
                    lineHeight: 1.7,
                    color: 'var(--ink-2)',
                  }}
                >
                  {s.desc}
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .agent-grid { grid-template-columns: minmax(0, 1fr) !important; }
        }
      `}</style>
    </Section>
  );
}
