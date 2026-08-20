import { motion } from 'framer-motion';
import { Kicker, Section, TickRule, rise, stagger } from './sections/shared';

export interface ProblemContent {
  kicker: string;
  /** 一句长陈述，衬线大字。页面的"人味"来源 */
  statement: string;
  /** 三条症状，mono */
  symptoms: { index: string; text: string }[];
  /** 落点一句 */
  answer: string;
}

/**
 * 02 · 问题陈述
 * 公版落地页从不写这段。它是页面里唯一"有人在说话"的地方。
 */
export default function ProblemSection({ content }: { content: ProblemContent }) {
  return (
    <Section id="problem" tone="paper-2" crease creasePosition="center 15%">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.3 }}
      >
        <motion.div variants={rise}>
          <Kicker index="02">{content.kicker}</Kicker>
        </motion.div>

        <motion.p
          variants={rise}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 500,
            fontSize: 'clamp(1.5rem, 3.2vw, 2.5rem)',
            lineHeight: 1.3,
            letterSpacing: '-0.015em',
            color: 'var(--ink-1)',
            maxWidth: '30ch',
            margin: 0,
          }}
        >
          {content.statement}
        </motion.p>

        <motion.div variants={rise}>
          <TickRule style={{ width: '128px', margin: 'var(--space-md) 0' }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {content.symptoms.map((s) => (
            <motion.div key={s.index} variants={rise}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.62rem',
                  letterSpacing: '0.2em',
                  color: 'var(--ink-3)',
                  marginBottom: '10px',
                }}
              >
                {s.index}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.78rem',
                  lineHeight: 1.7,
                  color: 'var(--ink-2)',
                }}
              >
                {s.text}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.p
          variants={rise}
          style={{
            fontFamily: 'var(--font-text)',
            fontSize: '1rem',
            lineHeight: 1.75,
            color: 'var(--ink-1)',
            maxWidth: '54ch',
            marginTop: 'var(--space-lg)',
          }}
        >
          {content.answer}
        </motion.p>
      </motion.div>
    </Section>
  );
}
