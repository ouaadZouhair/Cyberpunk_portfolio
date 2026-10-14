"use client";

import { useTranslation } from "react-i18next";

export default function LanguageSwitcher() {
  const { i18n, t } = useTranslation();
  const currentLanguage = i18n.resolvedLanguage?.startsWith("fr") ? "fr" : "en";
  const nextLanguage = currentLanguage === "en" ? "fr" : "en";

  const toggleLanguage = () => {
    void i18n.changeLanguage(nextLanguage);
    window.localStorage.setItem("portfolio-language", nextLanguage);
    document.documentElement.lang = nextLanguage;
  };

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t("navigation.switchLanguage", { language: nextLanguage.toUpperCase() })}
      title={t("navigation.switchLanguage", { language: nextLanguage.toUpperCase() })}
      className="inline-flex h-11 shrink-0 items-center gap-1 border border-highlight/35 bg-highlight/5 px-2 sm:gap-1.5 sm:px-2.5 font-tech text-xs font-semibold tracking-[0.05em] text-highlight transition-colors hover:border-highlight hover:bg-highlight/10 hover:text-yellow-200 motion-reduce:transition-none focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary"
    >
      <span aria-hidden="true">[</span>
      <span className={currentLanguage === "fr" ? "text-highlight" : "text-highlight/65"}>FR</span>
      <span aria-hidden="true">/</span>
      <span className={currentLanguage === "en" ? "text-highlight" : "text-highlight/65"}>EN</span>
      <span aria-hidden="true">]</span>
    </button>
  );
}
