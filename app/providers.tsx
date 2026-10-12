"use client";

import { useEffect } from "react";
import { I18nextProvider } from "react-i18next";
import i18n from "./i18n";

export default function Providers({ children }: { children: React.ReactNode }) {
  useEffect(() => {
    const saved = window.localStorage.getItem("portfolio-language");
    const language = saved === "fr" || saved === "en"
      ? saved
      : navigator.language.toLowerCase().startsWith("fr") ? "fr" : "en";
    if (i18n.language !== language) void i18n.changeLanguage(language);
    document.documentElement.lang = language;
  }, []);

  return <I18nextProvider i18n={i18n}>{children}</I18nextProvider>;
}
