import { motion } from 'framer-motion';
import {
  FolderSimple,
  MagnifyingGlass,
  BookOpen,
  CloudArrowUp,
  Tag,
  Star,
  Export,
  Image,
  Keyboard,
  Notebook,
  DiamondsFour,
  Trash,
} from '@phosphor-icons/react';
import type { Icon } from '@phosphor-icons/react';

const fluidTransition = { duration: 0.7, ease: [0.23, 1, 0.32, 1] as const };

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.06 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 16, scale: 0.98 },
  visible: { opacity: 1, y: 0, scale: 1, transition: fluidTransition },
};

export interface FeatureContent {
  heading: string;
  headingHighlight: string;
  subtitle: string;
  categories: Array<{
    label: string;
    items: Array<{ title: string; desc: string }>;
  }>;
}

const CATEGORY_ICONS: Icon[][] = [
  [FolderSimple, Tag, Star, Trash],
  [MagnifyingGlass, BookOpen, DiamondsFour, Notebook],
  [CloudArrowUp, Export, Image, Keyboard],
];

const CATEGORY_GLOWS = [
  'rgba(139, 92, 246, 0.1)',
  'rgba(6, 182, 212, 0.1)',
  'rgba(236, 72, 153, 0.08)',
];
const CATEGORY_ACCENTS = ['#a78bfa', '#67e8f9', '#f472b6'];
const CATEGORY_BORDERS = [
  'rgba(139, 92, 246, 0.15)',
  'rgba(6, 182, 212, 0.15)',
  'rgba(236, 72, 153, 0.12)',
];

/** Section image placeholder — for AI-generated feature visuals */
function FeatureImagePlaceholder({ category, index }: { category: string; index: number }) {
  const colors = ['#8b5cf6', '#06b6d4', '#ec4899'];
  return (
    <div
      className="w-full aspect-[16/9] mb-6 overflow-hidden flex items-center justify-center"
      style={{
        borderRadius: '20px',
        background: `linear-gradient(135deg, ${colors[index]}08, ${colors[index]}03)`,
        border: `1px solid ${colors[index]}15`,
      }}
    >
      {/* Replace with: /better-sidebar/images/feature-{category-slug}.png */}
      <img
        src={`/better-sidebar/images/feature-${index + 1}.png`}
        alt={`${category} feature showcase`}
        className="w-full h-full object-cover"
        style={{ borderRadius: '20px' }}
        onError={(e) => {
          (e.target as HTMLImageElement).style.display = 'none';
        }}
      />
      <span
        className="absolute"
        style={{
          fontFamily: 'var(--font-body)',
          fontSize: '0.65rem',
          color: 'var(--text-tertiary)',
          opacity: 0.6,
        }}
      >
        {category} · Feature Visual
      </span>
    </div>
  );
}

export default function FeatureSection({ content }: { content: FeatureContent }) {
  return (
    <section
      className="py-24 md:py-32 relative"
      id="features"
      style={{ background: 'var(--surface-secondary)' }}
    >
      {/* Subtle noise texture */}
      <div className="noise-overlay absolute inset-0 pointer-events-none" aria-hidden="true" />

      <div className="max-w-[1200px] mx-auto px-6 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={fluidTransition}
          className="mb-16 text-center"
        >
          <h2
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
            className="mt-4 max-w-[50ch] mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'var(--text-secondary)',
            }}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Feature categories */}
        <div className="flex flex-col gap-20">
          {content.categories.map((category, catIdx) => (
            <div key={category.label}>
              {/* Category divider line — gradient fade */}
              <motion.div
                initial={{ opacity: 0, scaleX: 0 }}
                whileInView={{ opacity: 1, scaleX: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={fluidTransition}
                className="mb-6 flex items-center gap-4 origin-left"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-body)',
                    fontSize: '0.75rem',
                    fontWeight: 600,
                    color: CATEGORY_ACCENTS[catIdx],
                    letterSpacing: '0.02em',
                    whiteSpace: 'nowrap',
                  }}
                >
                  {category.label}
                </span>
                <div
                  style={{
                    flex: 1, height: '1px',
                    background: `linear-gradient(90deg, ${CATEGORY_ACCENTS[catIdx]}44 0%, transparent 80%)`,
                  }}
                />
              </motion.div>

              {/* Feature image placeholder */}
              <FeatureImagePlaceholder category={category.label} index={catIdx} />

              {/* Cards — glass with shimmer */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {category.items.map((item, itemIdx) => {
                  const IconComponent = CATEGORY_ICONS[catIdx]?.[itemIdx] ?? FolderSimple;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeIn}
                      className="group shimmer-on-hover p-5 transition-all duration-500 hover:translate-y-[-2px]"
                      style={{
                        background: 'var(--surface-glass)',
                        backdropFilter: 'blur(16px)',
                        borderRadius: '20px',
                        border: `1px solid ${CATEGORY_BORDERS[catIdx]}`,
                      }}
                    >
                      {/* Icon */}
                      <div
                        className="w-9 h-9 flex items-center justify-center mb-3 transition-all duration-500 group-hover:scale-110"
                        style={{
                          borderRadius: '12px',
                          background: CATEGORY_GLOWS[catIdx],
                          boxShadow: `0 0 0 0 ${CATEGORY_ACCENTS[catIdx]}00`,
                          transition: 'box-shadow 0.5s ease',
                        }}
                      >
                        <IconComponent
                          size={18}
                          weight="duotone"
                          style={{ color: CATEGORY_ACCENTS[catIdx] }}
                        />
                      </div>

                      <h4
                        className="mb-1"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.85rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.78rem',
                          lineHeight: 1.55,
                          color: 'var(--text-secondary)',
                        }}
                      >
                        {item.desc}
                      </p>
                    </motion.div>
                  );
                })}
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom wave transition */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 48"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,24 C480,48 960,0 1440,24 L1440,48 L0,48 Z"
            fill="var(--surface-primary)"
          />
        </svg>
      </div>
    </section>
  );
}
