import { motion } from 'framer-motion';
import { GithubLogo, ArrowRight, DiscordLogo } from '@phosphor-icons/react';

const GITHUB_URL =
  'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-gemini-and-ai-studio';
const DISCORD_URL = 'https://discord.gg/FRzesxaGAx';

const snapTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

export interface OpenSourceContent {
  heading: string;
  headingHighlight: string;
  description: string;
  viewGithub: string;
  joinDiscord: string;
}

export default function OpenSourceBanner({ content }: { content: OpenSourceContent }) {
  return (
    <section
      className="py-20 md:py-28"
      style={{
        background: 'var(--text-primary)',
        borderBottom: '1px solid var(--text-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={snapTransition}
        >
          {/* Section label */}
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
            05 — Open Source
          </span>

          <h2
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'var(--text-inverse)',
            }}
          >
            {content.heading}
            <span style={{ color: 'var(--color-signal)' }}>
              {content.headingHighlight}
            </span>
          </h2>

          <p
            className="mt-3 max-w-[50ch] mb-8"
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              color: '#999999',
            }}
          >
            {content.description}
          </p>

          {/* CTAs — hard edge buttons */}
          <div className="flex flex-wrap items-center gap-3">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm active:scale-[0.97] transition-transform"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'var(--text-inverse)',
                color: 'var(--text-primary)',
                border: 'none',
                boxShadow: '3px 3px 0 0 var(--color-signal)',
              }}
            >
              <GithubLogo size={16} weight="bold" />
              {content.viewGithub}
              <ArrowRight size={12} weight="bold" />
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-5 py-3 font-semibold text-sm active:scale-[0.97] transition-transform"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                textTransform: 'uppercase',
                letterSpacing: '0.05em',
                background: 'transparent',
                color: '#999999',
                border: '1px solid #333333',
              }}
            >
              <DiscordLogo size={16} weight="bold" />
              {content.joinDiscord}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
