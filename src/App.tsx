import { Routes, Route, Navigate } from "react-router-dom";
import Home from "./pages/Home";
import Privacy from "./pages/Privacy";
import LangLayout from "./components/LangLayout";
import i18n from "./i18n";
import { isValidLang } from "./hooks/useLangPath";

function getDefaultLang(): string {
  const detected = i18n.language;
  return isValidLang(detected) ? detected : "en";
}

export default function App() {
  return (
    <Routes>
      <Route path="/:lang" element={<LangLayout />}>
        <Route index element={<Home />} />
        <Route path="privacy" element={<Privacy />} />
      </Route>
      <Route path="/" element={<Navigate to={`/${getDefaultLang()}`} replace />} />
      <Route path="*" element={<Navigate to={`/${getDefaultLang()}`} replace />} />
    </Routes>
  );
}
