import { useEffect } from "react";
import { Outlet, useParams, Navigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { isValidLang } from "../hooks/useLangPath";

export default function LangLayout() {
  const { lang } = useParams<{ lang: string }>();
  const { i18n } = useTranslation();

  useEffect(() => {
    if (lang && isValidLang(lang) && i18n.language !== lang) {
      i18n.changeLanguage(lang);
    }
  }, [lang, i18n]);

  useEffect(() => {
    document.documentElement.lang = lang ?? "en";
  }, [lang]);

  if (!lang || !isValidLang(lang)) {
    return <Navigate to={`/en`} replace />;
  }

  return <Outlet />;
}
