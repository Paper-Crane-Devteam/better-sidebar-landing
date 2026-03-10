import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { List, X, GithubLogo } from "@phosphor-icons/react";
import { AnimatePresence, motion } from "framer-motion";
import { useTranslation } from "react-i18next";
import Logo from "./Logo";
import LanguageSwitcher from "./LanguageSwitcher";
import { useLangPrefix } from "../hooks/useLangPath";

const GITHUB_URL = "https://github.com/Paper-Crane-Devteam/better-sidebar-for-google-ai-studio";

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const location = useLocation();
  const { t } = useTranslation();
  const langPrefix = useLangPrefix();

  const NAV_LINKS = [
    { to: langPrefix, label: t("nav.home") },
    { to: `${langPrefix}/privacy`, label: t("nav.privacy") },
  ];

  return (
    <nav className="sticky top-0 z-50 w-full backdrop-blur-md bg-white/80 border-b border-zinc-100">
      <div className="max-w-[1400px] mx-auto flex items-center justify-between px-6 h-16">
        <Link to={langPrefix} className="flex items-center gap-2.5" aria-label="Home">
          <Logo size={28} />
          <span className="text-zinc-900 font-semibold text-sm tracking-tight hidden sm:inline">
            Better Sidebar
          </span>
        </Link>

        <div className="hidden md:flex items-center gap-8">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className={`text-sm transition-colors ${
                location.pathname === link.to
                  ? "text-accent-600 font-medium"
                  : "text-zinc-500 hover:text-zinc-900"
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href={GITHUB_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-zinc-400 hover:text-zinc-900 transition-colors"
            aria-label="GitHub repository"
          >
            <GithubLogo size={20} weight="regular" />
          </a>
          <LanguageSwitcher />
        </div>

        <div className="flex md:hidden items-center gap-2">
          <LanguageSwitcher />
          <button
            type="button"
            className="p-2 -mr-2 text-zinc-500 hover:text-zinc-900 active:scale-[0.98] transition-colors"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-label={mobileOpen ? "Close menu" : "Open menu"}
            aria-expanded={mobileOpen}
          >
            {mobileOpen ? <X size={22} /> : <List size={22} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="md:hidden overflow-hidden border-t border-zinc-100 bg-white/95 backdrop-blur-md"
          >
            <div className="flex flex-col px-6 py-4 gap-3">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.to}
                  to={link.to}
                  onClick={() => setMobileOpen(false)}
                  className={`text-sm py-1.5 transition-colors ${
                    location.pathname === link.to
                      ? "text-accent-600 font-medium"
                      : "text-zinc-500 hover:text-zinc-900"
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <a
                href={GITHUB_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 text-sm text-zinc-500 hover:text-zinc-900 py-1.5 transition-colors"
              >
                <GithubLogo size={18} weight="regular" />
                GitHub
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
