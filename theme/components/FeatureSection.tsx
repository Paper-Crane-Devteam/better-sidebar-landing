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

const snapTransition = { duration: 0.35, ease: [0.16, 1, 0.3, 1] };

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.04 } },
};

const fadeIn = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: snapTransition },
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

export default function FeatureSection({ content }: { content: FeatureContent }) {
  return (
    <section
      className="py-20 md:py-28"
      id="features"
      style={{
        background: 'var(--surface-secondary)',
        borderBottom: '1px solid var(--text-primary)',
      }}
    >
      <div className="max-w-[1200px] mx-auto px-6">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-60px' }}
          transition={snapTransition}
          className="mb-16"
        >
          {/* Section number — industrial label */}
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
            02 — Features
          </span>
          <h2
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: 'clamp(1.8rem, 4vw, 2.8rem)',
              fontWeight: 800,
              lineHeight: 1,
              letterSpacing: '-0.04em',
              color: 'var(--text-primary)',
            }}
          >
            {content.heading}
            <span style={{ color: 'var(--color-signal)' }}>
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-3 max-w-[50ch]"
            style={{
              fontFamily: 'var(--font-system)',
              fontSize: '0.9rem',
              lineHeight: 1.5,
              color: 'var(--text-secondary)',
            }}
          >
            {content.subtitle}
          </p>
        </motion.div>

        {/* Feature categories */}
        <div className="flex flex-col gap-16">
          {content.categories.map((category, catIdx) => (
            <div key={category.label}>
              {/* Category label — uppercase mono */}
              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true, margin: '-40px' }}
                transition={snapTransition}
                className="mb-5 flex items-center gap-3"
              >
                <span
                  style={{
                    fontFamily: 'var(--font-mono)',
                    fontSize: '0.6rem',
                    fontWeight: 600,
                    textTransform: 'uppercase',
                    letterSpacing: '0.1em',
                    color: 'var(--text-tertiary)',
                  }}
                >
                  {category.label}
                </span>
                <div
                  style={{
                    flex: 1,
                    height: '1px',
                    background: 'var(--surface-muted)',
                  }}
                />
              </motion.div>

              {/* Card grid — tight, grid-like */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-40px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px]"
                style={{ background: 'var(--text-primary)' }}
              >
                {category.items.map((item, itemIdx) => {
                  const IconComponent = CATEGORY_ICONS[catIdx]?.[itemIdx] ?? FolderSimple;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeIn}
                      className="group p-5"
                      style={{
                        background: 'var(--surface-primary)',
                      }}
                    >
                      {/* Icon — minimal, no container */}
                      <IconComponent
                        size={20}
                        weight="regular"
                        style={{ color: 'var(--text-primary)', marginBottom: '12px' }}
                      />

                      {/* Title — mono, small */}
                      <h4
                        style={{
                          fontFamily: 'var(--font-mono)',
                          fontSize: '0.7rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                          marginBottom: '4px',
                          textTransform: 'uppercase',
                          letterSpacing: '0.03em',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'var(--font-system)',
                          fontSize: '0.78rem',
                          lineHeight: 1.5,
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
    </section>
  );
}
