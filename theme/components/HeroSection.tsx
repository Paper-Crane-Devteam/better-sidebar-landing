import { motion } from 'framer-motion';
import SidebarFigure from './figures/SidebarFigure';
import { CHROME_URL, FIREFOX_URL, MetaRow, MonoButton, MonoLink, TickRule, rise, stagger } from './sections/shared';

export interface HeroContent {
  /** 标题第一行（衬线，墨色，不用渐变） */
  titleTop: string;
  /** 标题第二行 */
  titleBottom: string;
  description: string;
  cta: string;
  ctaSecondary: string;
  /** mono 元数据条，像技术说明书的封面版权行 */
  meta: string[];
  figureLabel: string;
  scrollHint: string;
}

/**
 * 01 · Hero
 * 不对称编辑式排版。零光栅截图 —— 右侧是 HTML 复刻的侧边栏图版。
 * 无光球、无渐变文字、无胶囊按钮。
 */
export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      style={{
        background: 'var(--paper-1)',
        padding: 'calc(var(--space-xl) - 24px) 24px var(--space-xl)',
      }}
    >
      <div style={{ maxWidth: 'var(--content-max)', margin: '0 auto' }}>
        <motion.div
          variants={stagger}
          initial="hidden"
          animate="visible"
          style={{
            display: 'grid',
            gridTemplateColumns: 'minmax(0, 1.05fr) minmax(0, 0.95fr)',
            gap: 'var(--space-lg)',
            alignItems: 'center',
          }}
          className="hero-grid"
        >
          {/* ── 左：文案 ───────────────────────────────────────── */}
          <div>
            <motion.div variants={rise}>
              <TickRule style={{ width: '96px', marginBottom: 'var(--space-md)' }} />
            </motion.div>

            <motion.h1
              variants={rise}
              style={{
                fontFamily: 'var(--font-display)',
                fontWeight: 700,
                fontSize: 'clamp(2.4rem, 5.4vw, 4.1rem)',
                lineHeight: 1.06,
                letterSpacing: '-0.025em',
                color: 'var(--ink-1)',
                margin: 0,
              }}
            >
              {content.titleTop}
              <br />
              <span style={{ fontStyle: 'italic' }}>{content.titleBottom}</span>
            </motion.h1>

            <motion.div variants={rise} style={{ marginTop: 'var(--space-md)' }}>
              <MetaRow items={content.meta} />
            </motion.div>

            <motion.p
              variants={rise}
              style={{
                fontFamily: 'var(--font-text)',
                fontSize: '1.02rem',
                lineHeight: 1.75,
                color: 'var(--ink-2)',
                maxWidth: '46ch',
                margin: 'var(--space-md) 0 0',
              }}
            >
              {content.description}
            </motion.p>

            <motion.div
              variants={rise}
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                alignItems: 'center',
                gap: 'var(--space-md)',
                marginTop: 'var(--space-md)',
              }}
            >
              <MonoButton href={CHROME_URL} variant="seal" large>
                {content.cta}
              </MonoButton>
              <MonoLink href={FIREFOX_URL}>{content.ctaSecondary}</MonoLink>
            </motion.div>
          </div>

          {/* ── 右：侧边栏图版（HTML 复刻，非截图） ─────────────── */}
          <motion.div
            variants={rise}
            className="stacked-sheet"
            style={{ maxWidth: '440px', width: '100%', justifySelf: 'end' }}
          >
            <SidebarFigure label={content.figureLabel} />
          </motion.div>
        </motion.div>

        {/* 滚动提示 */}
        <motion.div
          variants={rise}
          initial="hidden"
          animate="visible"
          style={{
            marginTop: 'var(--space-xl)',
            display: 'flex',
            alignItems: 'center',
            gap: 'var(--space-sm)',
          }}
        >
          <span
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              letterSpacing: '0.2em',
              textTransform: 'uppercase',
              color: 'var(--ink-3)',
            }}
          >
            {content.scrollHint}
          </span>
          <TickRule style={{ flex: 1 }} />
        </motion.div>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .hero-grid {
            grid-template-columns: minmax(0, 1fr) !important;
            gap: var(--space-md) !important;
          }
        }
      `}</style>
    </section>
  );
}
