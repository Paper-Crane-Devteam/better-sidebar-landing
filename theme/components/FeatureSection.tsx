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

const springTransition = {
  type: 'spring' as const,
  stiffness: 80,
  damping: 22,
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.07 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: springTransition },
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
      className="py-28 md:py-36"
      id="features"
      style={{ background: 'var(--surface-secondary)' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={springTransition}
          className="mb-20 text-center"
        >
          <h2
            className="leading-[1.1] tracking-tight"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(2rem, 4vw, 2.8rem)',
              color: 'var(--text-primary)',
              fontWeight: 500,
            }}
          >
            {content.heading}{' '}
            <span style={{ color: 'var(--color-accent-500)' }}>
              {content.headingHighlight}
            </span>
          </h2>
          <p
            className="mt-5 max-w-[54ch] mx-auto"
            style={{
              fontFamily: 'var(--font-body)',
              fontSize: '1rem',
              lineHeight: 1.7,
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
              {/* Category label — small, serif, elegant */}
              <motion.h3
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-60px' }}
                transition={springTransition}
                className="mb-7"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontSize: '0.85rem',
                  fontWeight: 500,
                  fontStyle: 'italic',
                  color: 'var(--color-warm-500)',
                  letterSpacing: '0.02em',
                }}
              >
                {category.label}
              </motion.h3>

              {/* Cards grid */}
              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: '-60px' }}
                className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5"
              >
                {category.items.map((item, itemIdx) => {
                  const IconComponent = CATEGORY_ICONS[catIdx]?.[itemIdx] ?? FolderSimple;
                  return (
                    <motion.div
                      key={item.title}
                      variants={fadeInUp}
                      className="group p-6 transition-all duration-300"
                      style={{
                        background: 'var(--surface-elevated)',
                        borderRadius: '20px',
                        border: '1px solid var(--surface-muted)',
                        boxShadow:
                          '0 4px 40px -8px rgba(123,142,168,0.04), 0 1px 8px -2px rgba(44,42,39,0.02)',
                      }}
                    >
                      {/* Icon container — organic shape */}
                      <div
                        className="w-10 h-10 flex items-center justify-center mb-4 transition-colors duration-300"
                        style={{
                          borderRadius: '12px',
                          background: 'var(--color-accent-50)',
                        }}
                      >
                        <IconComponent
                          size={19}
                          weight="duotone"
                          style={{ color: 'var(--color-accent-500)' }}
                        />
                      </div>

                      <h4
                        className="mb-1.5"
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.875rem',
                          fontWeight: 600,
                          color: 'var(--text-primary)',
                        }}
                      >
                        {item.title}
                      </h4>
                      <p
                        style={{
                          fontFamily: 'var(--font-body)',
                          fontSize: '0.8rem',
                          lineHeight: 1.6,
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
