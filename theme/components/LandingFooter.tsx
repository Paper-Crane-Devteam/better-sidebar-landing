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
    <footer style={{ background: 'var(--surface-primary)', borderTop: '1px solid var(--surface-muted)' }}>
      <div className="max-w-[1200px] mx-auto px-8 py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          {/* Brand */}
          <div className="flex flex-col gap-2">
            <span
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: '0.95rem',
                fontWeight: 500,
                color: 'var(--text-primary)',
              }}
            >
              {content.brand}
            </span>
            <span
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.75rem',
                color: 'var(--text-tertiary)',
              }}
            >
              {content.license}
            </span>
          </div>

          {/* External links */}
          <div className="flex flex-col gap-3">
            {EXTERNAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 transition-colors"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.85rem',
                  color: 'var(--text-secondary)',
                }}
              >
                <Icon size={15} weight="regular" />
                {label}
              </a>
            ))}
          </div>

          {/* Privacy link */}
          <div className="flex flex-col gap-3">
            <a
              href={content.privacyLink}
              className="flex items-center gap-2 transition-colors"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '0.85rem',
                color: 'var(--text-secondary)',
              }}
            >
              <ShieldCheck size={15} weight="regular" />
              {content.privacy}
            </a>
          </div>
        </div>

        {/* Bottom row */}
        <div
          className="mt-12 pt-7 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
          style={{ borderTop: '1px solid var(--surface-muted)' }}
        >
          <p
            className="max-w-[60ch]"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              lineHeight: 1.6,
              color: 'var(--text-tertiary)',
            }}
          >
            {content.disclaimer}
          </p>
          <p
            className="whitespace-nowrap"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '0.75rem',
              color: 'var(--text-tertiary)',
            }}
          >
            {content.copyright}
          </p>
        </div>
      </div>
    </footer>
  );
}
