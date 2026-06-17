import { motion } from 'framer-motion';
import { GithubLogo, ArrowRight, DiscordLogo } from '@phosphor-icons/react';

const GITHUB_URL =
  'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-gemini-and-ai-studio';
const DISCORD_URL = 'https://discord.gg/FRzesxaGAx';

const fluidTransition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] };

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
      className="py-24 md:py-32 relative overflow-hidden"
      style={{ background: 'var(--surface-deep)' }}
    >
      {/* Background aurora */}
      <div
        className="absolute inset-0 opacity-30 pointer-events-none"
        style={{
          background: 'radial-gradient(ellipse at 30% 50%, rgba(139,92,246,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(6,182,212,0.1) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={fluidTransition}
          className="text-center"
        >
          <h2
            className="mb-4"
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
                background: 'var(--gradient-aurora)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="max-w-[48ch] mx-auto mb-9"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
            }}
          >
            {content.description}
          </p>

          <div className="flex flex-wrap items-center justify-center gap-4">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-medium text-sm active:scale-[0.97] transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                borderRadius: '100px',
                background: 'var(--text-primary)',
                color: 'var(--text-inverse)',
              }}
            >
              <GithubLogo size={18} weight="fill" />
              {content.viewGithub}
              <ArrowRight size={14} weight="bold" />
            </a>
            <a
              href={DISCORD_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-7 py-3.5 font-medium text-sm active:scale-[0.97] transition-all"
              style={{
                fontFamily: 'var(--font-body)',
                borderRadius: '100px',
                border: '1px solid var(--glass-border)',
                color: 'var(--text-secondary)',
                background: 'var(--surface-glass)',
                backdropFilter: 'blur(12px)',
              }}
            >
              <DiscordLogo size={18} weight="fill" />
              {content.joinDiscord}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
