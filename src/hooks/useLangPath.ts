import { useParams } from "react-router-dom";

const SUPPORTED_LANGS = ["en", "zh", "zh-TW", "ja", "es", "ru", "pt"];

export function useLangPrefix(): string {
  const { lang } = useParams<{ lang: string }>();
  return `/${lang ?? "en"}`;
}

export function isValidLang(lang: string): boolean {
  return SUPPORTED_LANGS.includes(lang);
}

export { SUPPORTED_LANGS };
