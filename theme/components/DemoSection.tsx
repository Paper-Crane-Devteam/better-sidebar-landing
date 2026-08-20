import { useState } from 'react';
import { motion } from 'framer-motion';
import { Kicker, Lede, Section, SectionTitle, rise, stagger } from './sections/shared';

export interface DemoContent {
  kicker: string;
  title: string;
  description: string;
  /** YouTube 视频 ID。留空则显示占位版 */
  youtubeId?: string;
  duration: string;
  /** 占位状态文案 */
  placeholder: string;
  playLabel: string;
}

/**
 * 03 · Demo
 * 真实录屏是全站唯一的凭据（其余界面呈现均为 HTML 复刻图版）。
 * 点击后才加载 iframe：不预连第三方，与"隐私优先"的主张一致。
 */
export default function DemoSection({ content }: { content: DemoContent }) {
  const [playing, setPlaying] = useState(false);
  const hasVideo = Boolean(content.youtubeId);

  return (
    <Section id="demo" tone="paper-1">
      <motion.div
        variants={stagger}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
      >
        <motion.div variants={rise}>
          <Kicker index="03">{content.kicker}</Kicker>
        </motion.div>
        <motion.div variants={rise}>
          <SectionTitle>{content.title}</SectionTitle>
        </motion.div>
        <motion.div variants={rise}>
          <Lede>{content.description}</Lede>
        </motion.div>

        <motion.div variants={rise} style={{ marginTop: 'var(--space-md)' }}>
          {/* mono 说明条 */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: 'var(--space-sm)',
              padding: '10px var(--space-sm)',
              background: 'var(--paper-3)',
              borderRadius: 'var(--radius) var(--radius) 0 0',
              fontFamily: 'var(--font-mono)',
              fontSize: '0.62rem',
              fontWeight: 500,
              letterSpacing: '0.18em',
              textTransform: 'uppercase',
              color: 'var(--ink-2)',
            }}
          >
            <span>&gt;&nbsp;&nbsp;demo_reel</span>
            <span style={{ color: 'var(--ink-3)' }}>{content.duration}</span>
          </div>

          {/* 16:9 纸面 */}
          <div
            style={{
              position: 'relative',
              width: '100%',
              aspectRatio: '16 / 9',
              background: 'var(--paper-2)',
              borderRadius: '0 0 var(--radius) var(--radius)',
              overflow: 'hidden',
            }}
          >
            {playing && content.youtubeId ? (
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${content.youtubeId}?autoplay=1&rel=0`}
                title={content.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; picture-in-picture"
                allowFullScreen
                style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
              />
            ) : (
              <button
                type="button"
                disabled={!hasVideo}
                onClick={() => hasVideo && setPlaying(true)}
                className={hasVideo ? 'glow-on-hover' : undefined}
                style={{
                  position: 'absolute',
                  inset: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems: 'center',
                  justifyContent: 'center',
                  gap: 'var(--space-sm)',
                  width: '100%',
                  height: '100%',
                  background: 'transparent',
                  border: 0,
                  borderRadius: 'var(--radius)',
                  cursor: hasVideo ? 'pointer' : 'default',
                }}
              >
                {/* 直角播放标记 — 不用图标库 */}
                <span
                  aria-hidden="true"
                  style={{
                    width: '52px',
                    height: '52px',
                    background: hasVideo ? 'var(--ink-1)' : 'var(--paper-3)',
                    borderRadius: 'var(--radius)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <svg width="14" height="16" viewBox="0 0 14 16" aria-hidden="true">
                    <path
                      d="M0 0 L14 8 L0 16 Z"
                      fill={hasVideo ? 'var(--paper-0)' : 'var(--ink-3)'}
                    />
                  </svg>
                </span>
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.64rem',
                    fontWeight: 500,
                    letterSpacing: '0.18em',
                    textTransform: 'uppercase',
                    color: 'var(--ink-3)',
                  }}
                >
                  {hasVideo ? content.playLabel : content.placeholder}
                </span>
              </button>
            )}
          </div>
        </motion.div>
      </motion.div>
    </Section>
  );
}
