import { motion } from "framer-motion";
import { GoogleChromeLogo, Compass } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const CHROME_URL =
  "https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj";
const FIREFOX_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio";

function SidebarIllustration() {
  return (
    <svg
      viewBox="0 0 480 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className="w-full h-auto"
      aria-label="Illustration of the Better Sidebar interface showing organized folders, tags, and search"
      role="img"
    >
      <rect x="20" y="16" width="440" height="368" rx="24" fill="#fafafa" stroke="#e4e4e7" strokeWidth="1.5" />
      <rect x="20" y="16" width="440" height="44" rx="24" fill="#f4f4f5" />
      <rect x="20" y="40" width="440" height="20" fill="#f4f4f5" />
      <circle cx="48" cy="38" r="5" fill="#d4d4d8" />
      <circle cx="64" cy="38" r="5" fill="#d4d4d8" />
      <circle cx="80" cy="38" r="5" fill="#d4d4d8" />
      <rect x="110" y="30" width="240" height="16" rx="8" fill="#e4e4e7" />
      <rect x="20" y="60" width="160" height="324" fill="#18181b" />
      <rect x="20" y="360" width="160" height="24" rx="24" fill="#18181b" />
      <rect x="32" y="72" width="136" height="28" rx="8" fill="#27272a" />
      <circle cx="46" cy="86" r="6" stroke="#71717a" strokeWidth="1.5" fill="none" />
      <line x1="50" y1="90" x2="54" y2="94" stroke="#71717a" strokeWidth="1.5" strokeLinecap="round" />
      <rect x="60" y="82" width="60" height="8" rx="4" fill="#3f3f46" />
      <rect x="32" y="112" width="136" height="32" rx="10" fill="#4f7fc0" fillOpacity="0.15" />
      <rect x="44" y="122" width="10" height="12" rx="2" fill="#4f7fc0" />
      <path d="M44 124 L49 122 L54 124" stroke="#4f7fc0" strokeWidth="1.2" fill="none" />
      <rect x="60" y="123" width="72" height="8" rx="4" fill="#4f7fc0" />
      <rect x="140" y="124" width="20" height="14" rx="7" fill="#4f7fc0" fillOpacity="0.3" />
      <text x="150" y="134" textAnchor="middle" fill="#4f7fc0" fontSize="9" fontWeight="600" fontFamily="Outfit, system-ui, sans-serif">12</text>
      <circle cx="52" cy="158" r="3" fill="#3f3f46" />
      <rect x="60" y="154" width="80" height="7" rx="3.5" fill="#3f3f46" />
      <circle cx="52" cy="172" r="3" fill="#3f3f46" />
      <rect x="60" y="168" width="64" height="7" rx="3.5" fill="#3f3f46" />
      <rect x="32" y="190" width="136" height="32" rx="10" fill="#27272a" />
      <rect x="44" y="200" width="10" height="12" rx="2" fill="#71717a" />
      <path d="M44 202 L49 200 L54 202" stroke="#71717a" strokeWidth="1.2" fill="none" />
      <rect x="60" y="201" width="56" height="8" rx="4" fill="#71717a" />
      <rect x="32" y="232" width="136" height="32" rx="10" fill="#27272a" />
      <rect x="44" y="242" width="10" height="12" rx="2" fill="#71717a" />
      <path d="M44 244 L49 242 L54 244" stroke="#71717a" strokeWidth="1.2" fill="none" />
      <rect x="60" y="243" width="68" height="8" rx="4" fill="#71717a" />
      <rect x="32" y="278" width="40" height="6" rx="3" fill="#52525b" />
      <rect x="32" y="292" width="44" height="18" rx="9" fill="#4f7fc0" fillOpacity="0.2" />
      <text x="54" y="304" textAnchor="middle" fill="#4f7fc0" fontSize="8" fontWeight="500" fontFamily="Outfit, system-ui, sans-serif">work</text>
      <rect x="82" y="292" width="52" height="18" rx="9" fill="#3f3f46" />
      <text x="108" y="304" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontWeight="500" fontFamily="Outfit, system-ui, sans-serif">coding</text>
      <rect x="32" y="316" width="56" height="18" rx="9" fill="#3f3f46" />
      <text x="60" y="328" textAnchor="middle" fill="#a1a1aa" fontSize="8" fontWeight="500" fontFamily="Outfit, system-ui, sans-serif">research</text>
      <rect x="200" y="76" width="240" height="40" rx="12" fill="#f4f4f5" />
      <rect x="216" y="88" width="140" height="8" rx="4" fill="#d4d4d8" />
      <rect x="216" y="100" width="100" height="8" rx="4" fill="#d4d4d8" />
      <rect x="220" y="132" width="220" height="40" rx="12" fill="#4f7fc0" fillOpacity="0.08" />
      <rect x="236" y="144" width="160" height="8" rx="4" fill="#4f7fc0" fillOpacity="0.3" />
      <rect x="236" y="156" width="120" height="8" rx="4" fill="#4f7fc0" fillOpacity="0.3" />
      <rect x="200" y="188" width="240" height="40" rx="12" fill="#f4f4f5" />
      <rect x="216" y="200" width="180" height="8" rx="4" fill="#d4d4d8" />
      <rect x="216" y="212" width="130" height="8" rx="4" fill="#d4d4d8" />
      <rect x="220" y="244" width="220" height="56" rx="12" fill="#4f7fc0" fillOpacity="0.08" />
      <rect x="236" y="256" width="170" height="8" rx="4" fill="#4f7fc0" fillOpacity="0.3" />
      <rect x="236" y="268" width="140" height="8" rx="4" fill="#4f7fc0" fillOpacity="0.3" />
      <rect x="236" y="280" width="100" height="8" rx="4" fill="#4f7fc0" fillOpacity="0.3" />
      <rect x="200" y="316" width="240" height="40" rx="12" fill="#f4f4f5" />
      <rect x="216" y="328" width="160" height="8" rx="4" fill="#d4d4d8" />
      <rect x="216" y="340" width="110" height="8" rx="4" fill="#d4d4d8" />
      <circle cx="432" cy="38" r="8" fill="#4f7fc0" fillOpacity="0.15" />
      <path d="M428 40 C428 36 430 34 433 34 C435 33 437 34 438 36 C439 36 440 37 440 39 C440 41 438 42 436 42 L430 42 C428 42 427 41 428 40Z" fill="#4f7fc0" fillOpacity="0.6" />
    </svg>
  );
}

export default function HeroSection() {
  const { t } = useTranslation();

  return (
    <section className="min-h-[100dvh] flex items-center">
      <div className="max-w-[1400px] mx-auto px-6 py-20 md:py-0 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <motion.div
            variants={staggerContainer}
            initial="hidden"
            animate="visible"
            className="flex flex-col gap-6"
          >
            <motion.h1
              variants={fadeInUp}
              className="text-4xl md:text-6xl tracking-tighter leading-none text-zinc-900 font-semibold"
            >
              {t("hero.title1")}{" "}
              <span className="text-accent-500">{t("hero.gemini")}</span> {t("hero.and")}{" "}
              <span className="text-accent-500">{t("hero.aiStudio")}</span>
            </motion.h1>

            <motion.p
              variants={fadeInUp}
              className="text-base text-zinc-500 leading-relaxed max-w-[65ch]"
            >
              {t("hero.description")}
            </motion.p>

            <motion.div
              variants={fadeInUp}
              className="flex flex-wrap gap-3 pt-2"
            >
              <a
                href={CHROME_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-accent-500 text-white font-medium text-sm hover:bg-accent-600 active:scale-[0.98] transition-all"
              >
                <GoogleChromeLogo size={20} weight="fill" />
                {t("hero.addChrome")}
              </a>
              <a
                href={FIREFOX_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-zinc-900 text-white font-medium text-sm hover:bg-zinc-800 active:scale-[0.98] transition-all"
              >
                <Compass size={20} weight="fill" />
                {t("hero.addFirefox")}
              </a>
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ ...springTransition, delay: 0.3 }}
          >
            <SidebarIllustration />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
