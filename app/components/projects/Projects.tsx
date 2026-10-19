"use client";

import { useState } from "react";
import { useTranslation } from "react-i18next";
import Card from "./Card";
import styles from "./Projects.module.css";

type ProjectCategory = "all" | "full-stack" | "front-end" | "ecommerce";

const Projects = () => {
  const { t } = useTranslation();
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>("all");

  const projects = [
    {
      title: t("projects.6.title"),
      description: t("projects.6.description"),
      image: "/projectsImg/7titaaa_shop.webp",
      technologies: ["React", "Node.js", "PostgreSQL", "Express", "Tailwind CSS"],
      githubLink: "https://github.com/ouaadZouhair/7titaaa_shop",
      liveLink: "https://7titaaa.vercel.app/",
      featured: true,
      categories: ["full-stack", "ecommerce"] as ProjectCategory[],
    },
    {
      title: t("projects.0.title"),
      description: t("projects.0.description"),
      image: "/projectsImg/Ecommerce.webp",
      technologies: ["React", "Node.js", "MongoDB", "Express", "Tailwind CSS", "React-router", "Redux", "Axios", "React-Form", "Chart.js"],
      githubLink: "https://github.com/ouaadZouhair/epic7ataShop",
      liveLink: null,
      featured: true,
      categories: ["full-stack", "ecommerce"] as ProjectCategory[],
    },
    {
      title: t("projects.3.title"),
      description: t("projects.3.description"),
      image: "/projectsImg/ecommerceProject.webp",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/ouaadZouhair/topico/tree/master",
      liveLink: "https://ecotopico.netlify.app/",
      featured: true,
      categories: ["front-end", "ecommerce"] as ProjectCategory[],
    },
    {
      title: t("projects.4.title"),
      description: t("projects.4.description"),
      image: "/projectsImg/forkify.webp",
      technologies: ["HTML", "CSS", "JavaScript"],
      githubLink: "https://github.com/yourusername/project3",
      liveLink: null,
      featured: true,
      categories: ["front-end"] as ProjectCategory[],
    },
  ];

  const filters: { id: ProjectCategory; label: string }[] = [
    { id: "all", label: t("workSection.filters.all") },
    { id: "full-stack", label: t("workSection.filters.fullStack") },
    { id: "front-end", label: t("workSection.filters.frontEnd") },
    { id: "ecommerce", label: t("workSection.filters.ecommerce") },
  ];

  const visibleProjects = projects.filter(
    (project) => project.featured && (activeFilter === "all" || project.categories.includes(activeFilter)),
  );

  const projectCount = (category: ProjectCategory) =>
    category === "all" ? projects.length : projects.filter((project) => project.categories.includes(category)).length;

  return (
    <section className={`page-container page-section text-gray-200 font-tech ${styles.projectsPage}`} aria-labelledby="work-heading">
      <header className={styles.header}>
        <div className={styles.headerCopy}>
          <h1 id="work-heading">
            {t("workSection.headingLead")} <span>{t("workSection.headingAccent")}</span>
          </h1>
          <p className={styles.description}>{t("workSection.description")}</p>
        </div>
      </header>

      <div className={styles.filterBar} aria-label={t("workSection.filtersLabel")}>
        <span className={styles.filterPrompt} aria-hidden="true">root@work:~$ filter --type</span>
        <div className={styles.filters}>
          {filters.map((filter) => (
            <button
              type="button"
              key={filter.id}
              className={activeFilter === filter.id ? styles.activeFilter : styles.filter}
              aria-pressed={activeFilter === filter.id}
              onClick={() => setActiveFilter(filter.id)}
            >
              <span>{filter.label}</span>
              <sup>{String(projectCount(filter.id)).padStart(2, "0")}</sup>
            </button>
          ))}
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6" aria-live="polite">
        {visibleProjects.map((project) => (
          <Card project={project} index={projects.indexOf(project)} key={project.title} />
        ))}
      </div>
    </section>
  );
};

export default Projects;
