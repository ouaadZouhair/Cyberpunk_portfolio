"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";

const titleKeys: Record<string, string> = {
  "/": "documentTitles.home",
  "/about": "documentTitles.about",
  "/projects": "documentTitles.work",
  "/contact": "documentTitles.contact",
};

export default function DynamicDocumentTitle() {
  const pathname = usePathname();
  const { t, i18n } = useTranslation();

  useEffect(() => {
    document.title = t(titleKeys[pathname] ?? "documentTitles.home");
  }, [i18n.resolvedLanguage, pathname, t]);

  return null;
}
