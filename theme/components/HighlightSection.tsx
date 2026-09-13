import ProductShot from './ProductShot';
import { motion } from 'framer-motion';
import { Kicker, Section, SectionTitle, TickRule, rise, stagger } from './sections/shared';

export type FigureKey = 'search' | 'prompt' | 'export' | 'tag';

export interface HighlightContent {
  kicker: string;
  title: string;
  items: {
    figure: FigureKey;
    figureLabel: string;
    label: string;
    title: string;
    desc: string;
    /** 3 条要点，mono */
    points: string[];
  }[];
}

/**
 * 05 · 四个重点能力
 * 交错左右排版，每项配一张真实功能截图。
 */
export default function HighlightSection({ content }: { content: HighlightContent }) {
  return (
    <Section id="highlights" tone="paper-1">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.1 }}
      >
        <motion.div variants={rise}>
          <Kicker index="05">{content.kicker}</Kicker>
        </motion.div>
        <motion.div variants={rise}>
          <SectionTitle>{content.title}</SectionTitle>
        </motion.div>

        <div style={{ marginTop: 'var(--space-lg)' }}>
          {content.items.map((item, i) => {
            const flip = i % 2 === 1;
            return (
              <motion.div
                key={item.title}
                variants={rise}
                className="highlight-row"
                style={{
                  display: 'grid',
                  gridTemplateColumns: 'minmax(0, 1fr) minmax(0, 1fr)',
                  gap: 'var(--space-lg)',
                  alignItems: 'center',
                  paddingBottom: 'var(--space-lg)',
                  marginBottom: 'var(--space-lg)',
                }}
              >
                <div style={{ order: flip ? 2 : 1 }}>
                  <div
                    style={{
                      fontFamily: 'var(--font-mono)',
                      fontSize: '0.6rem',
                      letterSpacing: '0.2em',
                      textTransform: 'uppercase',
                      color: 'var(--ink-3)',
                    }}
                  >
                    {String(i + 1).padStart(2, '0')}&nbsp;&nbsp;/&nbsp;&nbsp;{item.label}
                  </div>

                  <h3
                    style={{
                      fontFamily: 'var(--font-display)',
                      fontWeight: 700,
                      fontSize: 'clamp(1.45rem, 2.4vw, 2rem)',
                      lineHeight: 1.2,
                      letterSpacing: '-0.015em',
                      color: 'var(--ink-1)',
                      margin: 'var(--space-sm) 0 0',
                    }}
                  >
                    {item.title}
                  </h3>

                  <p
                    style={{
                      fontFamily: 'var(--font-text)',
                      fontSize: '0.95rem',
                      lineHeight: 1.75,
                      color: 'var(--ink-2)',
                      maxWidth: '44ch',
                      margin: 'var(--space-sm) 0 0',
                    }}
                  >
                    {item.desc}
                  </p>

                  <TickRule style={{ width: '64px', margin: 'var(--space-md) 0 var(--space-sm)' }} />

                  <div>
                    {item.points.map((p) => (
                      <div
                        key={p}
                        style={{
                          display: 'flex',
                          gap: 'var(--space-xs)',
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.72rem',
                          lineHeight: 1.95,
                          color: 'var(--ink-2)',
                        }}
                      >
                        <span aria-hidden="true" style={{ color: 'var(--ink-3)' }}>
                          ·
                        </span>
                        <span>{p}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div style={{ order: flip ? 1 : 2 }}>
                  <ProductShot kind={item.figure} label={item.figureLabel} />
                </div>
              </motion.div>
            );
          })}
        </div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .highlight-row {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: var(--space-md) !important;
          }
          .highlight-row > div { order: initial !important; }
        }
      `}</style>
    </Section>
  );
}
