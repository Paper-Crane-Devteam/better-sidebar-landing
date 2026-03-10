import { motion } from "framer-motion";
import {
  GoogleChromeLogo,
  Compass,
  Globe,
  ArrowRight,
} from "@phosphor-icons/react";
import type { Icon } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: springTransition },
};

interface BrowserLink {
  name: string;
  url: string;
  icon: Icon;
  available: boolean;
  labelKey: string;
}

const BROWSER_LINKS: BrowserLink[] = [
  {
    name: "Chrome",
    url: "https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj",
    icon: GoogleChromeLogo,
    available: true,
    labelKey: "install.chrome",
  },
  {
    name: "Firefox",
    url: "https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio",
    icon: Compass,
    available: true,
    labelKey: "install.firefox",
  },
  {
    name: "Edge",
    url: "#",
    icon: Globe,
    available: false,
    labelKey: "install.edge",
  },
];

export default function InstallSection() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="mb-12 md:mb-16"
        >
          <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-zinc-900 leading-none">
            {t("install.heading")}
          </h2>
          <p className="mt-4 text-base text-zinc-500 leading-relaxed max-w-[65ch]">
            {t("install.subtitle")}
          </p>
        </motion.div>

        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid grid-cols-1 md:grid-cols-3 gap-6"
        >
          {BROWSER_LINKS.map((browser) => {
            const IconComponent = browser.icon;

            return (
              <motion.div key={browser.name} variants={fadeInUp}>
                {browser.available ? (
                  <a
                    href={browser.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex flex-col items-center gap-4 p-8 md:p-10 rounded-[2.5rem] bg-white border border-zinc-200/50 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.05)] hover:border-accent-200 hover:shadow-[0_20px_40px_-15px_rgba(79,127,192,0.1)] active:scale-[0.98] transition-all"
                  >
                    <IconComponent
                      size={48}
                      weight="duotone"
                      className="text-zinc-700 group-hover:text-accent-500 transition-colors"
                    />
                    <span className="text-lg font-semibold text-zinc-900 tracking-tight">
                      {browser.name}
                    </span>
                    <span className="inline-flex items-center gap-1.5 text-sm text-accent-600 font-medium">
                      {t(browser.labelKey)}
                      <ArrowRight size={14} weight="bold" />
                    </span>
                  </a>
                ) : (
                  <div className="flex flex-col items-center gap-4 p-8 md:p-10 rounded-[2.5rem] bg-zinc-50 border border-zinc-100">
                    <IconComponent
                      size={48}
                      weight="duotone"
                      className="text-zinc-300"
                    />
                    <span className="text-lg font-semibold text-zinc-400 tracking-tight">
                      {browser.name}
                    </span>
                    <span className="text-sm text-zinc-400">{t(browser.labelKey)}</span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
