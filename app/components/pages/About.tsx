"use client";
import { useState } from "react";
import Image from "next/image";
import { useTranslation } from "react-i18next";
import SkillsSection from "./SkillsSection";
import styles from "./About.module.css";

const AboutPage = () => {
  const [isAvatarLoaded, setIsAvatarLoaded] = useState(false);
  const { t } = useTranslation();

  return (
    <div className={`page-container page-section text-gray-200 font-tech ${styles.aboutPage}`}>
      <section className={styles.terminal} aria-labelledby="about-story-heading">
        <header className={styles.terminalBar}>
          <div className={styles.windowControls} aria-hidden="true"><i /><i /><i /></div>
          <span className={styles.windowTitle}>root@zouhair: ~/portfolio/about</span>
          <span className={styles.secure}>[ SECURE_SESSION ]</span>
        </header>

        <div className={styles.terminalBody}>
          <div className={styles.output}>
            <div className={styles.bootLine}>
              <span>NEURAL_SHELL v4.2.0 // IDENTITY TERMINAL</span>
              <span>[CONNECTION ESTABLISHED]</span>
            </div>

            <div className={styles.command}>
              <span className={styles.promptUser}>zouhair@portfolio</span>
              <span>:</span>
              <span className={styles.promptPath}>~/about</span>
              <span className={styles.promptSymbol}>$</span>
              <span>whoami</span>
              <i className={styles.cursor} aria-hidden="true" />
            </div>

            <h1 id="about-story-heading" className={styles.identity}>Mohammed Zouhair Ouaad</h1>
            <p className={styles.role}>&gt; FULL-STACK WEB DEVELOPER</p>

            <div className={styles.log}>
              <article className={styles.logEntry}>
                <span className={styles.logIndex}>[01] /var/log/origin.log</span>
                <p>{t("about.intro")}</p>
              </article>
              <article className={styles.logEntry}>
                <span className={styles.logIndex}>[02] /var/log/education.log</span>
                <p>{t("about.education")}</p>
              </article>
              <article className={styles.logEntry}>
                <span className={styles.logIndex}>[03] /var/log/protocol.log</span>
                <p>{t("about.philosophy")}</p>
              </article>
            </div>
          </div>

          <aside className={styles.profilePane} aria-label="Developer identity data">
            <div className={styles.paneHeading}>
              <span>VISUAL_ID // 0xZOU</span>
              <span>LIVE</span>
            </div>

            <div className={styles.portrait}>
              {!isAvatarLoaded && (
                <div className="absolute inset-0 bg-white/5 overflow-hidden">
                  <div className="absolute inset-0 -translate-x-full animate-[shimmer_1.5s_infinite] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
                </div>
              )}
              <Image
                src="/zouhair_picture.webp"
                alt="Mohammed Zouhair Ouaad"
                fill
                sizes="(min-width: 1200px) 400px, (min-width: 820px) 36vw, (min-width: 560px) 300px, 88vw"
                onLoad={() => setIsAvatarLoaded(true)}
                className={`object-cover object-top transition-opacity duration-500 ${
                  isAvatarLoaded ? "opacity-100" : "opacity-0"
                }`}
              />
            </div>

            <dl className={styles.dataList}>
              <div className={styles.dataRow}><dt>STATUS</dt><dd>AVAILABLE</dd></div>
              <div className={styles.dataRow}><dt>CLASS</dt><dd>FULL-STACK</dd></div>
              <div className={styles.dataRow}><dt>BASE</dt><dd>RABAT // MA</dd></div>
              <div className={styles.dataRow}><dt>EXPERIENCE</dt><dd>2+ YEARS</dd></div>
              <div className={styles.dataRow}><dt>FOCUS</dt><dd>WEB SYSTEMS</dd></div>
            </dl>
          </aside>
        </div>

        <footer className={styles.terminalFooter}>
          <span>ABOUT_ME -- NORMAL</span>
          <span>UTF-8&nbsp;&nbsp;|&nbsp;&nbsp;Ln 03, Col 42&nbsp;&nbsp;|&nbsp;&nbsp;100%</span>
        </footer>
      </section>

      <SkillsSection />
    </div>
  );
};

export default AboutPage;
