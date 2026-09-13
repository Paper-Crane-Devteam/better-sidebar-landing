import { motion } from 'framer-motion';
import { Kicker, MonoLink, Section, TickRule, rise, stagger } from './sections/shared';

export interface PrivacySectionContent {
  kicker: string;
  /** 一句巨大的衬线陈述句 */
  statement: string;
  /** 4 条 mono 事实 */
  items: { title: string; desc: string }[];
  /** 权限说明 */
  note: string;
  policyLabel: string;
  policyLink: string;
}

/**
 * 07 · 隐私
 * 一句大字 + 四条事实，大留白。不用图标卡片。
 */
export default function PrivacySection({ content }: { content: PrivacySectionContent }) {
  return (
    <Section id="privacy" tone="paper-1" crease creasePosition="center 78%" creaseOpacity={0.45}>
      {/* 折纸鹤水印 —— 单色 PNG，靠 opacity 压成纸上的淡印子 */}
      <img
        src="/better-sidebar/images/crane-mark.webp"
        alt=""
        aria-hidden="true"
        loading="lazy"
        decoding="async"
        className="crane-watermark"
        style={{
          position: 'absolute',
          right: '-40px',
          top: '50%',
          transform: 'translateY(-50%)',
          width: '380px',
          height: 'auto',
          opacity: 0.05,
          pointerEvents: 'none',
        }}
      />
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={rise}>
          <Kicker index="07">{content.kicker}</Kicker>
        </motion.div>

        <motion.p
          variants={rise}
          style={{
            fontFamily: 'var(--font-display)',
            fontWeight: 700,
            fontSize: 'clamp(1.9rem, 4.6vw, 3.4rem)',
            lineHeight: 1.16,
            letterSpacing: '-0.025em',
            color: 'var(--ink-1)',
            maxWidth: '24ch',
            margin: 0,
          }}
        >
          {content.statement}
        </motion.p>

        <motion.div variants={rise}>
          <TickRule tall style={{ width: '100%', margin: 'var(--space-lg) 0 var(--space-md)' }} />
        </motion.div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(210px, 1fr))',
            gap: 'var(--space-md)',
          }}
        >
          {content.items.map((item, i) => (
            <motion.div key={item.title} variants={rise}>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.58rem',
                  letterSpacing: '0.2em',
                  color: 'var(--ink-3)',
                  marginBottom: '10px',
                }}
              >
                {String(i + 1).padStart(2, '0')}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.74rem',
                  fontWeight: 500,
                  letterSpacing: '0.1em',
                  textTransform: 'uppercase',
                  color: 'var(--ink-1)',
                  marginBottom: '8px',
                }}
              >
                {item.title}
              </div>
              <div
                style={{
                  fontFamily: 'var(--font-text)',
                  fontSize: '0.86rem',
                  lineHeight: 1.72,
                  color: 'var(--ink-2)',
                }}
              >
                {item.desc}
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          variants={rise}
          style={{
            marginTop: 'var(--space-lg)',
            display: 'flex',
            flexWrap: 'wrap',
            alignItems: 'center',
            gap: 'var(--space-md)',
          }}
        >
          <p
            style={{
              fontFamily: 'var(--font-text)',
              fontSize: '0.88rem',
              lineHeight: 1.72,
              color: 'var(--ink-2)',
              maxWidth: '58ch',
              margin: 0,
            }}
          >
            {content.note}
          </p>
          <MonoLink href={content.policyLink} newTab={false}>
            {content.policyLabel}
          </MonoLink>
        </motion.div>
      </motion.div>

      <style>{`
        @media (max-width: 900px) {
          .crane-watermark { display: none; }
        }
      `}</style>
    </Section>
  );
}
