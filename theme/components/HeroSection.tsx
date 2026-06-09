import { motion } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';

const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 24,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.15 } },
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

/**
 * Illustration — warm, minimal, organic
 * Evokes the feeling of organized thought without being literal
 */
function SidebarIllustration() {
  return (
    <div className="relative w-full aspect-[4/3.5] flex items-center justify-center">
      {/* Soft ambient glow behind the card */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className="w-[85%] h-[75%] rounded-[60px] opacity-40"
          style={{
            background:
              'radial-gradient(ellipse at 50% 40%, rgba(123,142,168,0.12) 0%, transparent 70%)',
          }}
        />
      </div>

      <svg
        viewBox="0 0 480 380"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto relative z-10"
        aria-label="Illustration of an organized workspace sidebar"
        role="img"
      >
        {/* Main container — squircle, warm elevated surface */}
        <rect x="24" y="20" width="432" height="340" rx="28" fill="#fffdfb" />
        <rect
          x="24"
          y="20"
          width="432"
          height="340"
          rx="28"
          stroke="#eae6e0"
          strokeWidth="1.2"
        />

        {/* Title bar */}
        <rect x="24" y="20" width="432" height="44" rx="28" fill="#f5f2ed" />
        <rect x="24" y="44" width="432" height="20" fill="#f5f2ed" />
        <circle cx="52" cy="42" r="4.5" fill="#e4b49e" opacity="0.7" />
        <circle cx="68" cy="42" r="4.5" fill="#c9d4e2" opacity="0.7" />
        <circle cx="84" cy="42" r="4.5" fill="#eae6e0" opacity="0.7" />

        {/* Sidebar panel — warm charcoal */}
        <rect x="24" y="64" width="152" height="296" fill="#2c2a27" />
        <rect x="24" y="332" width="152" height="28" rx="28" fill="#2c2a27" />

        {/* Search bar in sidebar */}
        <rect x="38" y="78" width="124" height="26" rx="13" fill="#3d3b37" />
        <circle cx="52" cy="91" r="5" stroke="#9c958e" strokeWidth="1.2" fill="none" />
        <line x1="56" y1="95" x2="59" y2="98" stroke="#9c958e" strokeWidth="1.2" strokeLinecap="round" />
        <rect x="66" y="87" width="50" height="6" rx="3" fill="#6b6560" opacity="0.5" />

        {/* Active item — accent highlight */}
        <rect x="38" y="116" width="124" height="30" rx="12" fill="#627d9a" opacity="0.15" />
        <rect x="52" y="126" width="8" height="10" rx="2" fill="#7b8ea8" />
        <rect x="66" y="127" width="60" height="7" rx="3.5" fill="#7b8ea8" opacity="0.8" />
        <rect x="132" y="125" width="22" height="14" rx="7" fill="#627d9a" opacity="0.2" />
        <text x="143" y="135" textAnchor="middle" fill="#7b8ea8" fontSize="8" fontWeight="500" fontFamily="system-ui">8</text>

        {/* List items */}
        <circle cx="52" cy="162" r="2.5" fill="#6b6560" opacity="0.4" />
        <rect x="60" y="158" width="72" height="6" rx="3" fill="#6b6560" opacity="0.3" />
        <circle cx="52" cy="178" r="2.5" fill="#6b6560" opacity="0.4" />
        <rect x="60" y="174" width="56" height="6" rx="3" fill="#6b6560" opacity="0.3" />

        {/* Folder groups */}
        <rect x="38" y="198" width="124" height="28" rx="12" fill="#3d3b37" />
        <rect x="52" y="207" width="8" height="10" rx="2" fill="#e4b49e" opacity="0.6" />
        <rect x="66" y="208" width="50" height="7" rx="3.5" fill="#9c958e" opacity="0.6" />

        <rect x="38" y="234" width="124" height="28" rx="12" fill="#3d3b37" />
        <rect x="52" y="243" width="8" height="10" rx="2" fill="#a3b4cb" opacity="0.6" />
        <rect x="66" y="244" width="62" height="7" rx="3.5" fill="#9c958e" opacity="0.6" />

        {/* Tags */}
        <rect x="38" y="278" width="42" height="5" rx="2.5" fill="#6b6560" opacity="0.3" />
        <rect x="38" y="290" width="40" height="16" rx="8" fill="#627d9a" opacity="0.15" />
        <text x="58" y="301" textAnchor="middle" fill="#7b8ea8" fontSize="7.5" fontWeight="500" fontFamily="system-ui">work</text>
        <rect x="84" y="290" width="48" height="16" rx="8" fill="#e4b49e" opacity="0.15" />
        <text x="108" y="301" textAnchor="middle" fill="#b07a63" fontSize="7.5" fontWeight="500" fontFamily="system-ui">ideas</text>

        {/* Main content area — conversation bubbles */}
        <rect x="196" y="78" width="240" height="36" rx="14" fill="#f5f2ed" />
        <rect x="212" y="90" width="120" height="6" rx="3" fill="#eae6e0" />
        <rect x="212" y="100" width="80" height="6" rx="3" fill="#eae6e0" />

        <rect x="216" y="130" width="200" height="36" rx="14" fill="#627d9a" opacity="0.07" />
        <rect x="232" y="142" width="140" height="6" rx="3" fill="#7b8ea8" opacity="0.25" />
        <rect x="232" y="152" width="100" height="6" rx="3" fill="#7b8ea8" opacity="0.25" />

        <rect x="196" y="182" width="240" height="36" rx="14" fill="#f5f2ed" />
        <rect x="212" y="194" width="160" height="6" rx="3" fill="#eae6e0" />
        <rect x="212" y="204" width="110" height="6" rx="3" fill="#eae6e0" />

        <rect x="216" y="234" width="200" height="50" rx="14" fill="#627d9a" opacity="0.07" />
        <rect x="232" y="246" width="150" height="6" rx="3" fill="#7b8ea8" opacity="0.25" />
        <rect x="232" y="258" width="120" height="6" rx="3" fill="#7b8ea8" opacity="0.25" />
        <rect x="232" y="270" width="80" height="6" rx="3" fill="#7b8ea8" opacity="0.25" />

        <rect x="196" y="300" width="240" height="36" rx="14" fill="#f5f2ed" />
        <rect x="212" y="312" width="140" height="6" rx="3" fill="#eae6e0" />
        <rect x="212" y="322" width="96" height="6" rx="3" fill="#eae6e0" />
      </svg>
    </div>
  );
}

export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      className="min-h-[100dvh] flex items-center"
      style={{ background: 'var(--surface-primary)' }}
    >
      <div className="max-w-[1280px] mx-auto px-8 py-24 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Version badge — subtle, warm */}
            <motion.div variants={fadeInUp}>
              <span
                className="inline-flex items-center gap-2 px-4 py-1.5 text-xs font-medium tracking-wide"
                style={{
                  background: 'var(--color-warm-50)',
                  color: 'var(--color-warm-500)',
                  borderRadius: '100px',
                  border: '1px solid var(--color-warm-200)',
                }}
              >
                <span style={{ fontSize: '10px' }}>●</span>
                {content.badge}
              </span>
            </motion.div>

            {/* Headline — serif for display, sans for body */}
            <motion.h1
              variants={fadeInUp}
              className="leading-[1.08] tracking-tight"
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.4rem, 5vw, 3.5rem)',
                color: 'var(--text-primary)',
                fontWeight: 500,
              }}
            >
              {content.title}{' '}
              <span style={{ color: 'var(--color-accent-500)' }}>
                {content.highlight1}
              </span>
              {' & '}
              <span style={{ color: 'var(--color-accent-500)' }}>
                {content.highlight2}
              </span>
            </motion.h1>

            {/* Subtitle — generous line height, warm gray */}
            <motion.p
              variants={fadeInUp}
              className="max-w-[52ch]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: 'clamp(1rem, 1.8vw, 1.125rem)',
                lineHeight: 1.7,
                color: 'var(--text-secondary)',
              }}
            >
              {content.description}
            </motion.p>

            {/* CTA — pill button with diffuse glow */}
            <motion.div variants={fadeInUp} className="flex flex-wrap items-center gap-5 pt-3">
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 px-8 py-4 font-medium text-sm active:scale-[0.97] transition-all"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'var(--color-accent-500)',
                  color: 'var(--text-inverse)',
                  borderRadius: '100px',
                  boxShadow: '0 8px 32px -8px rgba(98, 125, 154, 0.25)',
                }}
              >
                {content.cta}
                <ArrowRight size={16} weight="bold" />
              </a>
              <span
                className="text-sm"
                style={{
                  fontFamily: 'var(--font-body)',
                  color: 'var(--text-tertiary)',
                }}
              >
                Free &amp; Open Source
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Illustration */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.35 }}
          >
            <SidebarIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
