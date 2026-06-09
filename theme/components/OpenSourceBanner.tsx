import { motion } from 'framer-motion';
import { GithubLogo, ArrowRight, DiscordLogo } from '@phosphor-icons/react';

const GITHUB_URL =
  'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-gemini-and-ai-studio';
const DISCORD_URL = 'https://discord.gg/FRzesxaGAx';

const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 22,
};

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
      className="py-28 md:py-36"
      style={{ background: 'var(--surface-deep)' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
          className="text-center"
        >
          <h2
            className="leading-[1.1] tracking-tight mb-5"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: 'var(--text-inverse)',
              fontWeight: 500,
            }}
          >
            {content.heading}{' '}
            <span style={{ color: 'var(--color-accent-300)' }}>
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="max-w-[50ch] mx-auto mb-10"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.7,
              color: '#9c958e',
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
                background: 'var(--surface-primary)',
                color: 'var(--text-primary)',
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
                border: '1px solid #4a4744',
                color: '#9c958e',
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
