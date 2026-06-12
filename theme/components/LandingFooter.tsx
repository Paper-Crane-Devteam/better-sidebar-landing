import { GithubLogo, ShieldCheck, GoogleChromeLogo, DiscordLogo } from '@phosphor-icons/react';

const GITHUB_URL =
  'https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-gemini-and-ai-studio';
const CHROME_URL =
  'https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj';
const DISCORD_URL = 'https://discord.gg/FRzesxaGAx';

export interface FooterContent {
  brand: string;
  license: string;
  github: string;
  chromeStore: string;
  discord: string;
  privacy: string;
  disclaimer: string;
  copyright: string;
  privacyLink: string;
}

export default function LandingFooter({ content }: { content: FooterContent }) {
  const EXTERNAL_LINKS = [
    { href: GITHUB_URL, label: content.github, icon: GithubLogo },
    { href: CHROME_URL, label: content.chromeStore, icon: GoogleChromeLogo },
    { href: DISCORD_URL, label: content.discord, icon: DiscordLogo },
  ];

  return (
    <footer
      style={{
        background: 'var(--surface-primary)',
        borderTop: '1px solid var(--text-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-10">
        {/* Top row — grid layout */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-1">
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.7rem',
                fontWeight: 700,
                color: 'var(--text-primary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {content.brand}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.6rem',
                color: 'var(--text-tertiary)',
                textTransform: 'uppercase',
                letterSpacing: '0.08em',
              }}
            >
              {content.license}
            </span>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            {EXTERNAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.65rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.06em',
                  color: 'var(--text-secondary)',
                }}
              >
                <Icon size={13} weight="regular" />
                {label}
              </a>
            ))}
          </div>

          {/* Privacy */}
          <div className="flex flex-col gap-2">
            <a
              href={content.privacyLink}
              className="flex items-center gap-2 transition-colors"
              style={{
                fontFamily: 'var(--font-mono)',
                fontSize: '0.65rem',
                textTransform: 'uppercase',
                letterSpacing: '0.06em',
                color: 'var(--text-secondary)',
              }}
            >
              <ShieldCheck size={13} weight="regular" />
              {content.privacy}
            </a>
          </div>
        </div>

        {/* Bottom — datasheet-style */}
        <div
          className="mt-8 pt-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--surface-muted)' }}
        >
          <p
            className="max-w-[60ch]"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              lineHeight: 1.5,
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.04em',
            }}
          >
            {content.disclaimer}
          </p>
          <p
            className="whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-mono)',
              fontSize: '0.55rem',
              color: 'var(--text-tertiary)',
              textTransform: 'uppercase',
              letterSpacing: '0.08em',
            }}
          >
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
