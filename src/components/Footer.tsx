import { Link } from "react-router-dom";
import {
  GithubLogo,
  ShieldCheck,
  GoogleChromeLogo,
  Compass,
} from "@phosphor-icons/react";
import { useTranslation } from "react-i18next";
import { useLangPrefix } from "../hooks/useLangPath";

const GITHUB_URL = "https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio";
const CHROME_URL =
  "https://chromewebstore.google.com/detail/better-sidebar-for-google/cjeoaidogoaekodkbhijgljhenknkenj";
const FIREFOX_URL =
  "https://addons.mozilla.org/en-US/firefox/addon/better-sidebar-for-ai-studio";

export default function Footer() {
  const { t } = useTranslation();
  const langPrefix = useLangPrefix();

  const EXTERNAL_LINKS = [
    { href: GITHUB_URL, label: t("footer.github"), icon: GithubLogo },
    { href: CHROME_URL, label: t("footer.chromeStore"), icon: GoogleChromeLogo },
    { href: FIREFOX_URL, label: t("footer.firefoxAddons"), icon: Compass },
  ];

  return (
    <footer className="border-t border-zinc-100 bg-zinc-50/60">
      <div className="max-w-[1400px] mx-auto px-6 py-12">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 items-start">
          <div className="flex flex-col gap-2">
            <span className="text-sm font-semibold text-zinc-900 tracking-tight">
              {t("footer.brand")}
            </span>
            <span className="text-xs text-zinc-400">
              {t("footer.license")}
            </span>
          </div>

          <div className="flex flex-col gap-2.5">
            {EXTERNAL_LINKS.map(({ href, label, icon: Icon }) => (
              <a
                key={href}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
              >
                <Icon size={16} weight="regular" />
                {label}
              </a>
            ))}
          </div>

          <div className="flex flex-col gap-2.5">
            <Link
              to={`${langPrefix}/privacy`}
              className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 transition-colors"
            >
              <ShieldCheck size={16} weight="regular" />
              {t("footer.privacy")}
            </Link>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-zinc-200/70 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <p className="text-xs text-zinc-400 leading-relaxed max-w-[65ch]">
            {t("footer.disclaimer")}
          </p>
          <p className="text-xs text-zinc-400 whitespace-nowrap">
            {t("footer.copyright", { year: new Date().getFullYear() })}
          </p>
        </div>
      </div>
    </footer>
  );
}
