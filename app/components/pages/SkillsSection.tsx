"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import { FaDocker, FaNodeJs, FaPalette, FaReact } from "react-icons/fa";
import { GrMysql } from "react-icons/gr";
import { IoLogoLaravel } from "react-icons/io5";
import {
  SiBootstrap,
  SiExpress,
  SiGit,
  SiJavascript,
  SiMongodb,
  SiPhp,
  SiTailwindcss,
  SiTypescript,
  SiWordpress,
} from "react-icons/si";
import styles from "./SkillsSection.module.css";

type SkillView = "all" | "front-end" | "back-end" | "tools";

const skillGroups = [
  {
    id: "01",
    view: "front-end" as SkillView,
    titleKey: "skillsSection.frontEnd",
    skills: [
      { name: "JavaScript", icon: <SiJavascript className="text-yellow-400" /> },
      { name: "TypeScript", icon: <SiTypescript className="text-blue-500" /> },
      { name: "React", icon: <FaReact className="text-cyan-400" /> },
      { name: "Tailwind", icon: <SiTailwindcss className="text-teal-400" /> },
      { name: "Bootstrap", icon: <SiBootstrap className="text-purple-700" /> },
    ],
  },
  {
    id: "02",
    view: "back-end" as SkillView,
    titleKey: "skillsSection.backEnd",
    skills: [
      { name: "PHP", icon: <SiPhp className="text-indigo-600" /> },
      { name: "Node.js", icon: <FaNodeJs className="text-green-500" /> },
      { name: "Express.js", icon: <SiExpress className="text-white" /> },
      { name: "Laravel", icon: <IoLogoLaravel className="text-red-500" /> },
      { name: "MySQL", icon: <GrMysql className="text-blue-800" /> },
      { name: "MongoDB", icon: <SiMongodb className="text-green-500" /> },
    ],
  },
  {
    id: "03",
    view: "tools" as SkillView,
    titleKey: "skillsSection.tools",
    skills: [
      { name: "Docker", icon: <FaDocker className="text-blue-500" /> },
      { name: "Git", icon: <SiGit className="text-red-400" /> },
      { name: "WordPress", icon: <SiWordpress className="text-gray-500" /> },
      { name: "Canva", icon: <FaPalette className="text-sky-400" /> },
    ],
  },
];

export default function SkillsSection() {
  const { t } = useTranslation();
  const [activeView, setActiveView] = useState<SkillView>("all");
  const tabs: { id: SkillView; label: string; accessibleLabel: string }[] = [
    { id: "all", label: "overview.sys", accessibleLabel: t("skills") },
    { id: "front-end", label: "frontend.ui", accessibleLabel: t("skillsSection.frontEnd") },
    { id: "back-end", label: "backend.api", accessibleLabel: t("skillsSection.backEnd") },
    { id: "tools", label: "tools.cfg", accessibleLabel: t("skillsSection.tools") },
  ];
  const visibleGroups = activeView === "all"
    ? skillGroups
    : skillGroups.filter((group) => group.view === activeView);

  return (
    <section className={styles.console} aria-labelledby="skills-heading">
      <div className={styles.consoleBar}>
        <div className={styles.windowControls} aria-hidden="true"><i /><i /><i /></div>
        <div className={styles.tabs} role="tablist" aria-label={t("skills")}>
          {tabs.map((tab) => (
            <button
              type="button"
              role="tab"
              id={`skills-tab-${tab.id}`}
              aria-controls="skills-panels"
              aria-selected={activeView === tab.id}
              aria-label={tab.accessibleLabel}
              className={activeView === tab.id ? styles.activeTab : styles.tab}
              onClick={() => setActiveView(tab.id)}
              key={tab.id}
            >
              <i aria-hidden="true" />{tab.label}
            </button>
          ))}
        </div>
        <span className={styles.online}><i aria-hidden="true" /> SYSTEM_ONLINE</span>
      </div>

      <div className={styles.consoleBody}>
        <header className={styles.header}>
          <h2 id="skills-heading">{t("skills")}<span aria-hidden="true">_</span></h2>
          <p>{t("skillsSection.description")}</p>
        </header>

        <div
          id="skills-panels"
          className={`${styles.groups} ${activeView !== "all" ? styles.singleGroup : ""}`}
          aria-live="polite"
        >
          {visibleGroups.map((group) => (
            <article
              className={styles.group}
              role="tabpanel"
              aria-labelledby={`skills-tab-${activeView === "all" ? "all" : group.view}`}
              key={group.id}
            >
              <header className={styles.groupHeader}>
                <span className={styles.groupIndex}>[{group.id}]</span>
                <h3>{t(group.titleKey)}</h3>
                <span className={styles.moduleCount}>{String(group.skills.length).padStart(2, "0")} MOD</span>
              </header>

              <ul className={styles.skillList}>
                {group.skills.map((skill) => (
                  <li className={styles.skill} key={skill.name}>
                    <span className={styles.icon} aria-hidden="true">{skill.icon}</span>
                    <span className={styles.skillName}>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
