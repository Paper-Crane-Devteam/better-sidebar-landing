import { motion } from 'framer-motion';
import { Kicker, Lede, Section, SectionTitle, rise, stagger } from './sections/shared';

export interface FeatureContent {
  kicker: string;
  title: string;
  subtitle: string;
  /** 分组标题（mono）→ 条目清单 */
  groups: {
    label: string;
    items: { name: string; desc: string; pack?: string }[];
  }[];
  totalLabel: string;
}

/**
 * 06 · 能力索引表 (Spec Sheet)
 * 放弃"3 分类 × 4 卡片"的公版网格，改成说明书的参数页：
 * mono 连续序号 + 斑马纹，几十项能力也装得下且不显臃肿。
 */
export default function FeatureSection({ content }: { content: FeatureContent }) {
  let counter = 0;
  const total = content.groups.reduce((n, g) => n + g.items.length, 0);

  return (
    <Section id="features" tone="paper-2">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.08 }}
      >
        <motion.div variants={rise}>
          <Kicker index="06">{content.kicker}</Kicker>
        </motion.div>
        <motion.div variants={rise}>
          <SectionTitle>{content.title}</SectionTitle>
        </motion.div>
        <motion.div variants={rise}>
          <Lede>{content.subtitle}</Lede>
        </motion.div>

        <motion.div variants={rise} style={{ marginTop: 'var(--space-lg)' }}>
          {content.groups.map((group) => (
            <div key={group.label} style={{ marginBottom: 'var(--space-md)' }}>
              {/* 分组标题条 */}
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  padding: '9px var(--space-sm)',
                  background: 'var(--paper-3)',
                  borderRadius: 'var(--radius)',
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  fontWeight: 500,
                  letterSpacing: '0.2em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-2)',
                }}
              >
                <span>{group.label}</span>
                <span style={{ color: 'var(--ink-3)' }}>{group.items.length}</span>
              </div>

              {/* 条目 — 斑马纹靠纸色，无边框 */}
              <div>
                {group.items.map((item) => {
                  counter += 1;
                  const zebra = counter % 2 === 1;
                  return (
                    <div
                      key={item.name}
                      className="feature-row glow-on-hover-sm"
                      style={{
                        display: 'grid',
                        gridTemplateColumns: '46px minmax(0, 260px) minmax(0, 1fr)',
                        gap: 'var(--space-sm)',
                        alignItems: 'baseline',
                        padding: '11px var(--space-sm)',
                        background: zebra ? 'var(--paper-1)' : 'transparent',
                        borderRadius: 'var(--radius)',
                        transition: 'box-shadow var(--duration-glow) var(--ease)',
                      }}
                    >
                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.62rem',
                          letterSpacing: '0.1em',
                          color: 'var(--ink-3)',
                        }}
                      >
                        {String(counter).padStart(2, '0')}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.78rem',
                          fontWeight: 500,
                          letterSpacing: '0.04em',
                          color: 'var(--ink-1)',
                        }}
                      >
                        {item.name}
                        {item.pack && (
                          <span
                            style={{
                              marginLeft: '8px',
                              fontSize: '0.56rem',
                              letterSpacing: '0.16em',
                              textTransform: 'uppercase',
                              color: 'var(--ink-3)',
                            }}
                          >
                            {item.pack}
                          </span>
                        )}
                      </span>

                      <span
                        style={{
                          fontFamily: 'var(--font-text)',
                          fontSize: '0.86rem',
                          lineHeight: 1.7,
                          color: 'var(--ink-2)',
                        }}
                      >
                        {item.desc}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </motion.div>

        <motion.div
          variants={rise}
          style={{
            fontFamily: 'var(--font-mono)',
            fontSize: '0.62rem',
            letterSpacing: '0.2em',
            textTransform: 'uppercase',
            color: 'var(--ink-3)',
          }}
        >
          {total} {content.totalLabel}
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 780px) {
          .feature-row {
            grid-template-columns: 34px minmax(0, 1fr) !important;
          }
          .feature-row > span:last-child {
            grid-column: 2 / -1;
          }
        }
      `}</style>
    </Section>
  );
}
