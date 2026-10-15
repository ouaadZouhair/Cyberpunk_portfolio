"use client";

import Image from "next/image";
import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiZap } from "react-icons/fi";
import { oxanium } from "../../hero-font";
import AnimatedBtn from "../shared/AnimatedBtn";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();
  const title = t("hero.title");

  return (
    <section className={`page-container page-section ${styles.hero}`}>
      <div className={styles.copy}>
        <div className={styles.intro}>
          <h1 className={`${oxanium.className} ${styles.title}`} data-text={title}>{title}</h1>
          <p className={styles.tagline}>
            <span className="text-primary">{t("hero.subtitle.design")}.</span>
            <span className="text-secondary">{t("hero.subtitle.code")}.</span>
            <span className="text-highlight">{t("hero.subtitle.deploy")}.</span>
          </p>
          <p className={styles.description}>{t("hero.description")}</p>
        </div>
        <div className={styles.actions}>
          <AnimatedBtn
            text={t("hero.connect")}
            href="/contact"
            className={`${styles.button} ${styles.primaryButton}`}
            textColor="text-black"
            startIcon={<FiZap aria-hidden="true" />}
          />
          <AnimatedBtn
            text={t("hero.view_projects")}
            href="/projects"
            className={`${styles.button} ${styles.secondaryButton}`}
            textColor="text-white"
            endIcon={<FiArrowUpRight aria-hidden="true" />}
          />
        </div>
      </div>

      <Image
        src="/Avatar.webp"
        sizes="(min-width: 1280px) 464px, (min-width: 1024px) 42vw, (min-width: 640px) 404px, (min-width: 386px) 354px, calc(100vw - 32px)"
        alt="Zouhair, full-stack developer"
        width={1122}
        height={1402}
        priority
        className={styles.avatar}
      />
    </section>
  );
}
