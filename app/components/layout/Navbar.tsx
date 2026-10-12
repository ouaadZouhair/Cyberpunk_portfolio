"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useTranslation } from "react-i18next";
import { FiMenu, FiX } from "react-icons/fi";
import LanguageSwitcher from "./LanguageSwitcher";
import { NAV_ITEMS } from "./navigation";
import styles from "./Navbar.module.css";

export default function Navbar() {
  const pathname = usePathname();
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);
  const menuButtonRef = useRef<HTMLButtonElement>(null);
  const firstMobileLinkRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => setMenuOpen(false), [pathname]);

  useEffect(() => {
    const desktop = window.matchMedia("(min-width: 701px)");
    const closeOnDesktop = () => {
      if (desktop.matches) setMenuOpen(false);
    };
    desktop.addEventListener("change", closeOnDesktop);
    return () => desktop.removeEventListener("change", closeOnDesktop);
  }, []);

  useEffect(() => {
    if (!menuOpen) return;

    const previousOverflow = document.body.style.overflow;
    const page = document.querySelector<HTMLElement>("main.page");
    const pageWasInert = page?.hasAttribute("inert") ?? false;
    document.body.style.overflow = "hidden";
    page?.setAttribute("inert", "");
    const focusFrame = window.requestAnimationFrame(() => firstMobileLinkRef.current?.focus());

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setMenuOpen(false);
        menuButtonRef.current?.focus();
      }
    };
    window.addEventListener("keydown", onKeyDown);

    return () => {
      window.cancelAnimationFrame(focusFrame);
      document.body.style.overflow = previousOverflow;
      if (!pageWasInert) page?.removeAttribute("inert");
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className={styles.header}>
      <div className={styles.hud}>
        <Link href="/" onClick={() => setMenuOpen(false)} className={styles.brand} aria-label={`Zouhair Ouaad — ${t("navigation.home")}`}>
          <span className={styles.brandMark} aria-hidden="true">Z<span>_</span></span>
          <span className={styles.brandText}>
            <span className={styles.brandName}>ZOUHAIR.DEV</span>
            <span className={styles.brandSubtitle}>{t("navigation.systemOnline").toUpperCase()}</span>
          </span>
        </Link>

        <nav aria-label={t("navigation.primary")} className={styles.navLinks}>
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              aria-current={pathname === item.href ? "page" : undefined}
              data-active={pathname === item.href}
              className={styles.navLink}
            >
              <span className={styles.linkNumber} aria-hidden="true">{item.number}</span>
              <span className={styles.linkLabel}>{t(item.labelKey).toUpperCase()}</span>
            </Link>
          ))}
        </nav>

        <div className={styles.topActions}>
          <LanguageSwitcher />
          <button
            ref={menuButtonRef}
            type="button"
            aria-label={t(menuOpen ? "navigation.closeMenu" : "navigation.openMenu")}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation-panel"
            onClick={() => setMenuOpen((open) => !open)}
            className={styles.menuToggle}
          >
            {menuOpen ? <FiX aria-hidden="true" /> : <FiMenu aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div id="mobile-navigation-panel" className={styles.mobileOverlay} data-open={menuOpen} aria-hidden={!menuOpen} inert={!menuOpen}>
        <div className="mx-auto flex h-full w-full max-w-2xl flex-col px-5 pb-8 pt-9 sm:px-8">
          <div className="mb-6 flex items-center justify-between border-b border-primary/20 pb-3 font-tech text-[10px] tracking-[0.22em] text-primary/70">
            <span>// {t("navigation.mobile").toUpperCase()}</span>
            <span>01—04</span>
          </div>
          <nav aria-label={t("navigation.mobile")} className="grid gap-1">
            {NAV_ITEMS.map((item, index) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  ref={index === 0 ? firstMobileLinkRef : undefined}
                  href={item.href}
                  onClick={() => setMenuOpen(false)}
                  aria-current={active ? "page" : undefined}
                  data-active={active}
                  className={styles.mobileLink}
                >
                  <span className={styles.mobileNumber} aria-hidden="true">{item.number}</span>
                  <span>{t(item.labelKey).toUpperCase()}</span>
                </Link>
              );
            })}
          </nav>
        </div>
      </div>
    </header>
  );
}
