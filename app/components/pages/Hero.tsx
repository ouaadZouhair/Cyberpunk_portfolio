"use client";

import { useTranslation } from "react-i18next";
import { FiArrowUpRight, FiZap } from "react-icons/fi";
import { oxanium } from "../../hero-font";
import AnimatedBtn from "../shared/AnimatedBtn";
import styles from "./Hero.module.css";

export default function Hero() {
  const { t } = useTranslation();

  return (
    <section className={`page-container page-section ${styles.hero}`}>
      <div className={styles.copy}>
        <div className={styles.intro}>
          <h1 className={`${oxanium.className} ${styles.title}`}>{t("hero.title")}</h1>
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

      <img
        src="/zouhairRobot-640.webp"
        srcSet="/zouhairRobot-384.webp 384w, /zouhairRobot-640.webp 640w, /zouhairRobot-849.webp 849w"
        sizes="(min-width: 1280px) 520px, (min-width: 1024px) 42vw, (min-width: 640px) 440px, (min-width: 432px) 400px, 94vw"
        alt="Glitched Avatar"
        width={849}
        height={959}
        loading="eager"
        fetchPriority="high"
        decoding="async"
        className={styles.avatar}
      />
    </section>
  );
}
