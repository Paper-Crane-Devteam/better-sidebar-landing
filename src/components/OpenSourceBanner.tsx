import { motion } from "framer-motion";
import { GithubLogo, ArrowRight } from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";

const GITHUB_URL = "https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio";

const springTransition = {
  type: "spring" as const,
  stiffness: 100,
  damping: 20,
};

export default function OpenSourceBanner() {
  const { t } = useTranslation();

  return (
    <section className="py-24 md:py-32 bg-zinc-950">
      <div className="max-w-[1400px] mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={springTransition}
          className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-center"
        >
          <div className="flex flex-col gap-4">
            <h2 className="text-3xl md:text-5xl tracking-tighter font-semibold text-white leading-none">
              {t("openSource.heading")}{" "}
              <span className="text-accent-400">{t("openSource.headingHighlight")}</span>
            </h2>
            <p className="text-base text-zinc-400 leading-relaxed max-w-[65ch]">
              {t("openSource.description")}
            </p>
          </div>

          <div className="flex lg:justify-end">
            <a
              href={GITHUB_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-white text-zinc-900 font-medium text-sm hover:bg-zinc-100 active:scale-[0.98] transition-all"
            >
              <GithubLogo size={22} weight="fill" />
              {t("openSource.viewGithub")}
              <ArrowRight size={16} weight="bold" />
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
