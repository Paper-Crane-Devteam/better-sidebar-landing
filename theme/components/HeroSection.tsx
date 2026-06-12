import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

const snapTransition = { duration: 0.4, ease: [0.16, 1, 0.3, 1] };

const fadeIn = {
  hidden: { opacity: 0, y: 12 },
  visible: { opacity: 1, y: 0, transition: snapTransition },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const CHROME_URL =
  'https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj';

export interface HeroContent {
  title: string;
  highlight1: string;
  highlight2: string;
  description: string;
  cta: string;
  badge: string;
}

export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      className="min-h-[100dvh] flex items-center"
      style={{
        background: 'var(--surface-primary)',
        borderBottom: '1px solid var(--text-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6 py-20 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-12 lg:gap-20 items-center">
          {/* Copy — left side */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            {/* Badge — monospace label */}
            <motion.div variants={fadeIn}>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  fontWeight: 600,
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                  color: 'var(--color-signal)',
                  background: 'var(--color-signal-tint)',
                  border: '1px solid var(--color-signal-muted)',
                  padding: '4px 10px',
                  display: 'inline-block',
                }}
              >
                {content.badge}
              </span>
            </motion.div>

            {/* Headline — massive, tight tracking */}
            <motion.h1
              variants={fadeIn}
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: 'clamp(2.8rem, 7vw, 5rem)',
                fontWeight: 800,
                lineHeight: 0.95,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}
            >
              {content.title}
              <br />
              <span style={{ color: 'var(--color-signal)' }}>
                {content.highlight1}
              </span>
              {' & '}
              <span style={{ color: 'var(--color-signal)' }}>
                {content.highlight2}
              </span>
            </motion.h1>

            {/* Description — system font, tight */}
            <motion.p
              variants={fadeIn}
              className="max-w-[50ch]"
              style={{
                fontFamily: 'var(--font-system)',
                fontSize: '0.95rem',
                lineHeight: 1.5,
                color: 'var(--text-secondary)',
              }}
            >
              {content.description}
            </motion.p>

            {/* CTA — signal orange, hard edge, no border-radius */}
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-4 pt-2">
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm active:scale-[0.97] transition-transform"
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.75rem',
                  textTransform: 'uppercase',
                  letterSpacing: '0.05em',
                  background: 'var(--color-signal)',
                  color: '#ffffff',
                  border: 'none',
                  boxShadow: '3px 3px 0 0 var(--text-primary)',
                }}
              >
                {content.cta}
                <ArrowRight size={14} weight="bold" />
              </a>
              <span
                style={{
                  fontFamily: 'var(--font-mono)',
                  fontSize: '0.6rem',
                  color: 'var(--text-tertiary)',
                  textTransform: 'uppercase',
                  letterSpacing: '0.1em',
                }}
              >
                Free · Open Source · GPL-3.0
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Technical Diagram Illustration */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ ...snapTransition, delay: 0.3 }}
          >
            <TechDiagram />
          </motion.div>
        </div>
      </div>
    </section>
  );
}

/** Technical diagram — circuit board / exploded view aesthetic */
function TechDiagram() {
  return (
    <svg
      viewBox="0 0 380 440"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Technical diagram of Better Sidebar interface"
      role="img"
    >
      {/* Outer frame — hard edge */}
      <rect x="1" y="1" width="378" height="438" stroke="black" strokeWidth="1" fill="none" />

      {/* Title bar */}
      <rect x="1" y="1" width="378" height="32" fill="#f7f7f7" stroke="black" strokeWidth="1" />
      <circle cx="18" cy="17" r="4" fill="none" stroke="black" strokeWidth="1" />
      <circle cx="32" cy="17" r="4" fill="none" stroke="black" strokeWidth="1" />
      <circle cx="46" cy="17" r="4" fill="none" stroke="black" strokeWidth="1" />
      <text x="190" y="20" textAnchor="middle" fill="black" fontSize="8" fontFamily="monospace" fontWeight="600" letterSpacing="0.1em">BETTER_SIDEBAR</text>

      {/* Sidebar panel */}
      <rect x="1" y="33" width="120" height="406" fill="#f7f7f7" stroke="black" strokeWidth="1" />

      {/* Sidebar label */}
      <text x="10" y="50" fill="#999" fontSize="6" fontFamily="monospace" fontWeight="600" letterSpacing="0.12em">NAVIGATION</text>

      {/* Search box */}
      <rect x="10" y="58" width="102" height="20" fill="white" stroke="black" strokeWidth="0.75" />
      <text x="16" y="71" fill="#999" fontSize="7" fontFamily="monospace">search_</text>

      {/* Active item */}
      <rect x="10" y="88" width="102" height="22" fill="#ff4400" fillOpacity="0.08" stroke="#ff4400" strokeWidth="0.75" />
      <rect x="10" y="88" width="3" height="22" fill="#ff4400" />
      <text x="20" y="102" fill="#ff4400" fontSize="7.5" fontFamily="monospace" fontWeight="600">01_PROJECT</text>
      <text x="98" y="102" fill="#ff4400" fontSize="7" fontFamily="monospace" textAnchor="end">12</text>

      {/* List items */}
      <rect x="10" y="116" width="102" height="18" fill="none" />
      <text x="20" y="128" fill="#666" fontSize="7.5" fontFamily="monospace">02_research</text>

      <rect x="10" y="138" width="102" height="18" fill="none" />
      <text x="20" y="150" fill="#666" fontSize="7.5" fontFamily="monospace">03_archive</text>

      {/* Folder section */}
      <line x1="10" y1="168" x2="112" y2="168" stroke="#e5e5e5" strokeWidth="0.75" />
      <text x="10" y="182" fill="#999" fontSize="6" fontFamily="monospace" fontWeight="600" letterSpacing="0.12em">FOLDERS</text>

      <rect x="10" y="190" width="102" height="18" fill="none" />
      <rect x="14" y="194" width="8" height="8" fill="none" stroke="black" strokeWidth="0.75" />
      <text x="28" y="202" fill="black" fontSize="7.5" fontFamily="monospace">work/</text>

      <rect x="10" y="212" width="102" height="18" fill="none" />
      <rect x="14" y="216" width="8" height="8" fill="none" stroke="black" strokeWidth="0.75" />
      <text x="28" y="224" fill="black" fontSize="7.5" fontFamily="monospace">personal/</text>

      {/* Tags */}
      <line x1="10" y1="244" x2="112" y2="244" stroke="#e5e5e5" strokeWidth="0.75" />
      <text x="10" y="258" fill="#999" fontSize="6" fontFamily="monospace" fontWeight="600" letterSpacing="0.12em">TAGS</text>

      <rect x="10" y="266" width="38" height="14" fill="none" stroke="black" strokeWidth="0.75" />
      <text x="29" y="276" textAnchor="middle" fill="black" fontSize="6.5" fontFamily="monospace">code</text>

      <rect x="54" y="266" width="40" height="14" fill="none" stroke="#ff4400" strokeWidth="0.75" />
      <text x="74" y="276" textAnchor="middle" fill="#ff4400" fontSize="6.5" fontFamily="monospace">urgent</text>

      {/* Content area */}
      <rect x="121" y="33" width="258" height="406" fill="white" />

      {/* Content label */}
      <text x="132" y="50" fill="#999" fontSize="6" fontFamily="monospace" fontWeight="600" letterSpacing="0.12em">CONVERSATION</text>

      {/* Chat bubbles — geometric */}
      <rect x="132" y="60" width="180" height="28" fill="#f7f7f7" stroke="#e5e5e5" strokeWidth="0.75" />
      <rect x="140" y="70" width="100" height="5" rx="1" fill="#e5e5e5" />
      <rect x="140" y="78" width="70" height="5" rx="1" fill="#e5e5e5" />

      <rect x="162" y="98" width="200" height="36" fill="#ff4400" fillOpacity="0.04" stroke="#ff4400" strokeWidth="0.5" strokeDasharray="2 2" />
      <rect x="170" y="110" width="130" height="5" rx="1" fill="#ff4400" fillOpacity="0.2" />
      <rect x="170" y="119" width="90" height="5" rx="1" fill="#ff4400" fillOpacity="0.2" />

      <rect x="132" y="146" width="180" height="28" fill="#f7f7f7" stroke="#e5e5e5" strokeWidth="0.75" />
      <rect x="140" y="156" width="140" height="5" rx="1" fill="#e5e5e5" />
      <rect x="140" y="164" width="80" height="5" rx="1" fill="#e5e5e5" />

      <rect x="162" y="186" width="200" height="46" fill="#ff4400" fillOpacity="0.04" stroke="#ff4400" strokeWidth="0.5" strokeDasharray="2 2" />
      <rect x="170" y="198" width="150" height="5" rx="1" fill="#ff4400" fillOpacity="0.2" />
      <rect x="170" y="207" width="120" height="5" rx="1" fill="#ff4400" fillOpacity="0.2" />
      <rect x="170" y="216" width="80" height="5" rx="1" fill="#ff4400" fillOpacity="0.2" />

      {/* Spec callout labels */}
      <line x1="364" y1="108" x2="374" y2="108" stroke="#ff4400" strokeWidth="0.5" />
      <text x="374" y="103" fill="#ff4400" fontSize="5.5" fontFamily="monospace" textAnchor="start" transform="rotate(90 374 103)">AI_RESP</text>

      <line x1="130" y1="72" x2="126" y2="72" stroke="black" strokeWidth="0.5" />
      <text x="126" y="67" fill="black" fontSize="5.5" fontFamily="monospace" textAnchor="end" transform="rotate(-90 126 67)">USER_MSG</text>

      {/* Bottom input bar */}
      <rect x="132" y="400" width="236" height="28" fill="#f7f7f7" stroke="black" strokeWidth="0.75" />
      <text x="142" y="417" fill="#999" fontSize="7.5" fontFamily="monospace">type_message_</text>
      <rect x="344" y="404" width="20" height="20" fill="black" />
      <text x="354" y="417" textAnchor="middle" fill="white" fontSize="10" fontFamily="monospace">→</text>
    </svg>
  );
}
