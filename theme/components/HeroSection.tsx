import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight } from '@phosphor-icons/react';
import { useEffect, useRef } from 'react';

const fluidTransition = { duration: 0.8, ease: [0.23, 1, 0.32, 1] as const };

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: fluidTransition },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
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

/** Ambient floating orbs */
function AmbientOrbs() {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden="true">
      <div
        className="absolute animate-float"
        style={{
          top: '5%', right: '10%',
          width: '500px', height: '500px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(139,92,246,0.18) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute animate-float-slow"
        style={{
          bottom: '10%', left: '5%',
          width: '400px', height: '400px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(236,72,153,0.12) 0%, transparent 65%)',
          filter: 'blur(60px)',
        }}
      />
      <div
        className="absolute animate-float"
        style={{
          top: '40%', left: '30%',
          width: '350px', height: '350px',
          borderRadius: '50%',
          background: 'radial-gradient(circle, rgba(6,182,212,0.1) 0%, transparent 65%)',
          filter: 'blur(80px)',
          animationDelay: '3s',
        }}
      />
    </div>
  );
}

/** Mouse-tracking glow spot */
function MouseGlow() {
  const ref = useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 50, damping: 30 });
  const springY = useSpring(mouseY, { stiffness: 50, damping: 30 });

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      mouseX.set(e.clientX - rect.left);
      mouseY.set(e.clientY - rect.top);
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, [mouseX, mouseY]);

  const background = useTransform(
    [springX, springY],
    ([x, y]) =>
      `radial-gradient(600px circle at ${x}px ${y}px, rgba(139,92,246,0.06), transparent 60%)`
  );

  return (
    <motion.div
      ref={ref}
      className="absolute inset-0 pointer-events-none z-[1]"
      style={{ background }}
      aria-hidden="true"
    />
  );
}

/** Grid lines background — parametric vibe */
function GridBackground() {
  return (
    <div
      className="absolute inset-0 pointer-events-none opacity-40"
      aria-hidden="true"
      style={{
        backgroundImage:
          'linear-gradient(rgba(139,92,246,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(139,92,246,0.04) 1px, transparent 1px)',
        backgroundSize: '80px 80px',
        maskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 70%)',
        WebkitMaskImage: 'radial-gradient(ellipse 70% 70% at 50% 50%, black 30%, transparent 70%)',
      }}
    />
  );
}

/** Product screenshot placeholder with glass frame */
function ScreenshotPlaceholder() {
  return (
    <div className="relative w-full aspect-[4/3] max-w-[480px] mx-auto">
      {/* Outer glow pulse */}
      <div
        className="absolute inset-0 animate-pulse-glow"
        style={{
          borderRadius: '28px',
          background: 'var(--gradient-subtle)',
          filter: 'blur(30px)',
        }}
      />

      {/* Gradient border wrapper — rotating */}
      <div
        className="relative w-full h-full border-gradient-spin"
        style={{ borderRadius: '28px' }}
      >
        {/* Inner glass panel */}
        <div
          className="w-full h-full overflow-hidden flex items-center justify-center"
          style={{
            borderRadius: '26px',
            background: 'var(--surface-secondary)',
            border: '1px solid var(--glass-border)',
          }}
        >
          {/* Placeholder — replace with actual product screenshot */}
          {/* Image path: /better-sidebar/images/hero-screenshot.png */}
          <img
            src="/better-sidebar/images/hero-screenshot.png"
            alt="Better Sidebar interface showing organized conversations with folders, tags, and search"
            className="w-full h-full object-cover"
            style={{ borderRadius: '26px' }}
            onError={(e) => {
              // Fallback to SVG placeholder if image not available
              (e.target as HTMLImageElement).style.display = 'none';
              (e.target as HTMLImageElement).parentElement!.classList.add('show-fallback');
            }}
          />
          {/* Fallback SVG placeholder */}
          <div
            className="absolute inset-0 flex flex-col items-center justify-center gap-3"
            style={{ display: 'var(--fallback-display, none)' }}
          >
            <div
              style={{
                width: '48px', height: '48px',
                borderRadius: '14px',
                background: 'rgba(139,92,246,0.1)',
                display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none">
                <rect x="3" y="3" width="18" height="18" rx="4" stroke="#a78bfa" strokeWidth="1.5" />
                <line x1="9" y1="3" x2="9" y2="21" stroke="#a78bfa" strokeWidth="1" opacity="0.5" />
                <rect x="4.5" y="7" width="3" height="2" rx="1" fill="#a78bfa" opacity="0.6" />
                <rect x="4.5" y="11" width="3" height="2" rx="1" fill="#a78bfa" opacity="0.3" />
              </svg>
            </div>
            <span style={{
              fontFamily: 'var(--font-body)', fontSize: '0.7rem',
              color: 'var(--text-tertiary)',
            }}>
              Product Screenshot
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function HeroSection({ content }: { content: HeroContent }) {
  return (
    <section
      className="min-h-[100dvh] flex items-center relative noise-overlay"
      style={{ background: 'var(--surface-primary)' }}
    >
      <GridBackground />
      <AmbientOrbs />
      <MouseGlow />

      <div className="max-w-[1280px] mx-auto px-6 py-24 md:py-0 w-full relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left — Copy */}
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-7"
          >
            {/* Badge */}
            <motion.div variants={fadeIn}>
              <span
                className="shimmer-on-hover"
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.75rem',
                  fontWeight: 500,
                  color: 'var(--text-secondary)',
                  background: 'var(--surface-glass)',
                  backdropFilter: 'blur(16px)',
                  border: '1px solid var(--glass-border)',
                  padding: '6px 16px',
                  borderRadius: '100px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '8px',
                }}
              >
                <span
                  className="animate-pulse-glow"
                  style={{
                    width: '6px', height: '6px',
                    borderRadius: '50%',
                    background: 'var(--gradient-aurora)',
                    boxShadow: '0 0 8px rgba(139,92,246,0.6)',
                  }}
                />
                {content.badge}
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              variants={fadeIn}
              style={{
                fontFamily: 'var(--font-display)',
                fontSize: 'clamp(2.6rem, 6vw, 4.2rem)',
                fontWeight: 700,
                lineHeight: 1.05,
                letterSpacing: '-0.04em',
                color: 'var(--text-primary)',
              }}
            >
              {content.title}{' '}
              <span
                style={{
                  background: 'var(--gradient-aurora)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {content.highlight1}
              </span>
              {' & '}
              <span
                style={{
                  background: 'var(--gradient-iridescent)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  backgroundClip: 'text',
                }}
              >
                {content.highlight2}
              </span>
            </motion.h1>

            {/* Description */}
            <motion.p
              variants={fadeIn}
              className="max-w-[50ch]"
              style={{
                fontFamily: 'var(--font-body)',
                fontSize: '1.05rem',
                lineHeight: 1.65,
                color: 'var(--text-secondary)',
              }}
            >
              {content.description}
            </motion.p>

            {/* CTA */}
            <motion.div variants={fadeIn} className="flex flex-wrap items-center gap-5 pt-2">
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2.5 px-8 py-4 font-semibold text-sm active:scale-[0.97] transition-all relative overflow-hidden"
                style={{
                  fontFamily: 'var(--font-body)',
                  background: 'var(--gradient-aurora)',
                  color: '#ffffff',
                  borderRadius: '100px',
                  boxShadow: '0 0 40px -8px rgba(139,92,246,0.4), 0 0 80px -16px rgba(6,182,212,0.2)',
                }}
              >
                {/* Shimmer on hover */}
                <span
                  className="absolute inset-0 opacity-0 group-hover:opacity-100"
                  style={{
                    background: 'linear-gradient(90deg, transparent, rgba(255,255,255,0.15), transparent)',
                    animation: 'shimmer 1.5s ease-in-out infinite',
                  }}
                />
                <span className="relative z-10 flex items-center gap-2.5">
                  {content.cta}
                  <ArrowRight size={16} weight="bold" />
                </span>
              </a>
              <span
                style={{
                  fontFamily: 'var(--font-body)',
                  fontSize: '0.8rem',
                  color: 'var(--text-tertiary)',
                }}
              >
                Free &amp; Open Source
              </span>
            </motion.div>
          </motion.div>

          {/* Right — Product Screenshot */}
          <motion.div
            initial={{ opacity: 0, scale: 0.92, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            transition={{ duration: 1, ease: [0.23, 1, 0.32, 1] as const, delay: 0.4 }}
          >
            <ScreenshotPlaceholder />
          </motion.div>
        </div>
      </div>

      {/* Bottom wave separator */}
      <div className="absolute bottom-0 left-0 right-0 pointer-events-none" aria-hidden="true">
        <svg
          viewBox="0 0 1440 60"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-auto block"
          preserveAspectRatio="none"
        >
          <path
            d="M0,30 C360,60 720,0 1080,30 C1260,45 1380,20 1440,30 L1440,60 L0,60 Z"
            fill="var(--surface-primary)"
            opacity="0.5"
          />
          <path
            d="M0,40 C360,10 720,60 1080,35 C1260,25 1380,50 1440,40 L1440,60 L0,60 Z"
            fill="var(--surface-secondary)"
          />
        </svg>
      </div>
    </section>
  );
}
